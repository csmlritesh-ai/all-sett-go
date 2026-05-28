import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Point {
  x: number;
  y: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor="hover"], .cursor-pointer';

const LERP = {
  core: 0.42,
  ring: 0.20,
  aura: 0.09,
  trail: [0.18, 0.15, 0.12, 0.09] as const,
} as const;

const TRAIL_COUNT = 4;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function isEditable(el: Element | null): boolean {
  return el?.matches("input, textarea, select, [contenteditable='true']") ?? false;
}

function isInteractive(el: Element | null): boolean {
  return el?.closest(INTERACTIVE_SELECTOR) != null;
}

/**
 * Fires chromatic particles from a click position.
 * Appends to document.body to avoid stacking-context issues
 * with the transformed cursor container.
 * Returns a cleanup fn that cancels any in-flight animations.
 */
function spawnBurst(x: number, y: number, hue: number): () => void {
  const COUNT = 7;
  const frameIds: number[] = [];
  const nodes: HTMLElement[] = [];

  for (let i = 0; i < COUNT; i++) {
    const angle = (i / COUNT) * Math.PI * 2 + Math.random() * 0.4;
    const dist  = 24 + Math.random() * 20;
    const dx    = Math.cos(angle) * dist;
    const dy    = Math.sin(angle) * dist;
    const h     = (hue + i * (360 / COUNT)) % 360;

    const node = document.createElement("div");
    node.style.cssText = `
      position: fixed;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: hsl(${h}, 90%, 65%);
      box-shadow: 0 0 4px hsl(${h}, 90%, 65%);
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10000;
      will-change: transform, opacity;
    `;
    document.body.appendChild(node);
    nodes.push(node);

    let t = 0;
    let frameId = 0;

    const step = () => {
      t += 0.055;
      const remaining = Math.max(0, 1 - t);
      node.style.transform  = `translate(calc(-50% + ${dx * t * 3}px), calc(-50% + ${dy * t * 3}px))`;
      node.style.opacity    = String(remaining);
      node.style.width      = `${5 * remaining}px`;
      node.style.height     = `${5 * remaining}px`;
      if (t < 1) {
        frameId = requestAnimationFrame(step);
        frameIds.push(frameId);
      } else {
        node.remove();
      }
    };

    frameId = requestAnimationFrame(step);
    frameIds.push(frameId);
  }

  return () => {
    frameIds.forEach(cancelAnimationFrame);
    nodes.forEach((n) => n.remove());
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

const CustomCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef      = useRef<HTMLDivElement>(null);
  const ringRef      = useRef<HTMLDivElement>(null);
  const auraRef      = useRef<HTMLDivElement>(null);
  const trailRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only run on fine-pointer devices that haven't opted out of motion
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    // Mutable simulation state — never needs to trigger React renders
    const center: Point  = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target: Point  = { ...center };
    const corePos: Point = { ...center };
    const ringPos: Point = { ...center };
    const auraPos: Point = { ...center };
    const trailPos: Point[] = Array.from({ length: TRAIL_COUNT }, () => ({ ...center }));

    let hovering  = false;
    let textInput = false;
    let pressed   = false;
    let hue       = 200;
    let frameId   = 0;

    // Cleanup handles for burst animations
    const burstCleanups: Array<() => void> = [];

    // ── Animation loop ──────────────────────────────────────────────────────

    const tick = () => {
      hue = (hue + 0.5) % 360;
      const h2 = (hue + 140) % 360;

      corePos.x = lerp(corePos.x, target.x, LERP.core);
      corePos.y = lerp(corePos.y, target.y, LERP.core);
      ringPos.x = lerp(ringPos.x, target.x, LERP.ring);
      ringPos.y = lerp(ringPos.y, target.y, LERP.ring);
      auraPos.x = lerp(auraPos.x, target.x, LERP.aura);
      auraPos.y = lerp(auraPos.y, target.y, LERP.aura);

      trailPos.forEach((p, i) => {
        const src = i === 0 ? ringPos : trailPos[i - 1];
        p.x = lerp(p.x, src.x, LERP.trail[i]);
        p.y = lerp(p.y, src.y, LERP.trail[i]);
      });

      const pressScale = pressed ? 0.65 : 1;

      // Core dot — hides and shrinks on text inputs
      const core = coreRef.current;
      if (core) {
        const s = pressScale * (textInput ? 0 : 1);
        core.style.background  = `hsl(${h2}, 85%, 65%)`;
        core.style.boxShadow   = `0 0 8px 2px hsl(${h2}, 85%, 65%)`;
        core.style.opacity     = textInput ? "0" : "1";
        core.style.transform   = `translate3d(${corePos.x}px, ${corePos.y}px, 0) translate(-50%, -50%) scale(${s})`;
      }

      // Ring — always a circle (border-radius: 50% fixed in JSX, never touched here).
      // Shape changes are done purely via scaleX/scaleY so nothing fights the rAF writes.
      // text target → tall thin bar (scaleX ~0.1, scaleY ~1.1)
      // hover       → enlarged circle (uniform 1.5×)
      // default     → normal circle (1×)
      const ring = ringRef.current;
      if (ring) {
        const sx = hovering ? (textInput ? 0.1 : 1.5) : 1;
        const sy = hovering ? (textInput ? 1.1 : 1.5) : 1;
        ring.style.borderColor = `hsl(${hue}, 90%, 62%)`;
        ring.style.boxShadow   = `0 0 0 1.5px hsl(${hue}, 90%, 62%, 0.25)`;
        ring.style.transform   = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${sx * pressScale}, ${sy * pressScale})`;
      }

      // Aura — drifts behind, swells on hover
      const aura = auraRef.current;
      if (aura) {
        aura.style.background = `radial-gradient(circle, hsl(${hue}, 90%, 62%, 0.18) 0%, transparent 70%)`;
        aura.style.opacity    = hovering ? "0.85" : "0.45";
        aura.style.transform  = `translate3d(${auraPos.x}px, ${auraPos.y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.35 : 1})`;
      }

      // Chromatic trails
      trailPos.forEach((p, i) => {
        const el = trailRefs.current[i];
        if (!el) return;
        const th    = (hue + i * 35) % 360;
        const sz    = 12 - i * 2;
        el.style.width      = `${sz}px`;
        el.style.height     = `${sz}px`;
        el.style.background = `hsl(${th}, 85%, 65%)`;
        el.style.boxShadow  = `0 0 4px hsl(${th}, 85%, 65%)`;
        el.style.opacity    = String(0.28 - i * 0.05);
        el.style.transform  = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      });

      frameId = requestAnimationFrame(tick);
    };

    // ── Event handlers ──────────────────────────────────────────────────────

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onOver = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      hovering  = isInteractive(el);
      textInput = isEditable(el?.closest(INTERACTIVE_SELECTOR) ?? null);
    };

    const onOut = (e: PointerEvent) => {
      const next = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (!next?.closest(INTERACTIVE_SELECTOR)) {
        hovering  = false;
        textInput = false;
      }
    };

    const onDown = (e: PointerEvent) => {
      pressed = true;
      burstCleanups.push(spawnBurst(e.clientX, e.clientY, hue));
    };

    const onUp = () => {
      pressed = false;
    };

    frameId = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove,  { passive: true });
    document.addEventListener("pointerover",  onOver,  { passive: true });
    document.addEventListener("pointerout",   onOut,   { passive: true });
    window.addEventListener("pointerdown", onDown,  { passive: true });
    window.addEventListener("pointerup",   onUp,    { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      burstCleanups.forEach((fn) => fn());
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover",  onOver);
      document.removeEventListener("pointerout",   onOut);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup",   onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    >
      <div
        ref={auraRef}
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: "50%",
          top: 0,
          left: 0,
          // Only transition opacity — transform is owned by rAF
          transition: "opacity 0.25s ease",
        }}
      />

      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          style={{
            position: "absolute",
            borderRadius: "50%",
            top: 0,
            left: 0,
          }}
        />
      ))}

      <div
        ref={ringRef}
        style={{
          position: "absolute",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid",
          top: 0,
          left: 0,
          // No transition here — transform is fully owned by rAF
        }}
      />

      <div
        ref={coreRef}
        style={{
          position: "absolute",
          width: 7,
          height: 7,
          borderRadius: "50%",
          top: 0,
          left: 0,
          transition: "opacity 0.15s ease",
        }}
      />
    </div>
  );
};

export default CustomCursor;