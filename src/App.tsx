import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  Utensils, 
  Wine, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from './utils/cn';

// ASG Brand Colors - used throughout the app
const COLORS = {
  primaryRed: '#DC2626',
  primaryBlue: '#3B82F6',
  electricBlue: '#06B6D4',
  charcoal: '#1A1A1A',
  deepBlack: '#0A0A0A',
  gold: '#F59E0B'
};

// Prevent unused variable warning by exporting
export { COLORS };

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
     { name: "ABOUT US", href: "/about" },
     { name: "EVENTS", href: "/events" },
     { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'glassmorphism-dark py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center">
          {/* Left Nav Links */}
          <div className="hidden md:flex items-center gap-8 justify-start">
            {navLinks.map((link) => (
  <motion.div
    key={link.name}
    whileHover={{ scale: 1.05 }}
    className="text-xs font-semibold tracking-widest text-white/80 hover:text-white transition-colors relative group"
  >
    <Link to={link.href}>
      {link.name}
    </Link>

    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DC2626] transition-all duration-300 group-hover:w-full" />
  </motion.div>
))}
          </div>

          {/* Center Logo */}
          <motion.div 
  whileHover={{ scale: 1.05 }}
  className="flex justify-center"
>
  <img
    src="/images/asg-logo.png"
    alt="ASG Logo"
    className="w-25 h-25 object-contain"
  />
</motion.div>

          {/* Right Social Icons */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <motion.a
              href="https://www.facebook.com/allsettgoofficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-[#1877F2] hover:bg-white/10 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/allsettgo_official/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-[#E4405F] hover:bg-white/10 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@allsettgoofficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-[#FF0000] hover:bg-white/10 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </motion.a>
            <motion.a
              href="https://wa.me/919137849172"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-[#25D366] hover:bg-white/10 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism-dark mt-4"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
  key={link.name}
  to={link.href}
                  className="block text-sm font-semibold tracking-widest text-white/80 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1.05, 1.13]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <motion.div 
        style={{ y: y1, scale: backgroundScale }}
        className="absolute inset-0"
      >
        <img 
          src="/images/hero-banner.jpg" 
          alt="ASG Sports Bar Interior"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-[#0A0A0A]" />
        <div className="absolute inset-0 led-screen opacity-20" />
        <div className="noise absolute inset-0 opacity-[0.06]" />

        <motion.div
          animate={{ opacity: [0.22, 0.44, 0.22], scale: [1, 1.12, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-28 top-0 h-[680px] w-[680px] rounded-full bg-[#DC2626]/30 blur-[170px]"
        />
        <motion.div
          animate={{ opacity: [0.16, 0.34, 0.16], scale: [1, 1.18, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute -left-28 bottom-0 h-[700px] w-[700px] rounded-full bg-[#3B82F6]/25 blur-[180px]"
        />

        <motion.div
          animate={{ x: ["-140%", "160%"], opacity: [0, 0.45, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-3xl"
        />
      </motion.div>

      {/* Intro Reveal */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="absolute inset-0 z-[60] flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.45, 0] }}
              transition={{ duration: 1.4, delay: 0.35 }}
              className="absolute inset-0 bg-white"
            />
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "180%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.55 }}
              className="absolute top-0 left-0 h-full w-[42%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.45, 1], opacity: [0.18, 0.42, 0.18] }}
              transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-[340px] w-[340px] rounded-full bg-[#DC2626]/35 blur-[120px]"
            />
            <motion.img
              src="/images/asg-logo.png"
              alt="ASG Logo"
              initial={{ scale: 0.52, opacity: 0, filter: "blur(18px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[180px] drop-shadow-[0_0_60px_rgba(220,38,38,0.65)] md:w-[260px]"
            />
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="absolute bottom-20 px-6 text-center text-xs font-semibold tracking-[0.38em] text-white/65 md:text-sm"
            >
              FOR THE FANNS, BY THE FANNS
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 60 : 0 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? -18 : 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="mb-6 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 backdrop-blur-xl"
        >
          <span className="text-[10px] font-semibold tracking-[0.32em] text-white/75 md:text-xs">
            LIVE STADIUM EXPERIENCE
          </span>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
          <motion.h1
            initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
            animate={{
              opacity: showIntro ? 0 : 1,
              y: showIntro ? 46 : 0,
              filter: showIntro ? "blur(14px)" : "blur(0px)",
            }}
            transition={{ delay: 0.24, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-5xl font-black leading-none tracking-normal md:text-7xl lg:text-8xl"
          >
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
              INDIA'S PREMIUM
            </span>
            <span className="mt-3 block bg-gradient-to-r from-[#EF4444] via-white to-[#3B82F6] bg-clip-text text-transparent">
              SPORTS BAR
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: showIntro ? 0 : 1 }}
          transition={{ delay: 0.65, duration: 0.9, ease: "easeOut" }}
          className="mt-9 h-[2px] w-40 rounded-full bg-gradient-to-r from-[#DC2626] via-white to-[#3B82F6]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 16 : 0 }}
          transition={{ delay: 0.82, duration: 0.8 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Where stadium-level excitement meets luxury lounge comfort
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 24 : 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="https://wa.me/919664537932?text=Hi%20All%20Sett%20Go!%20I%E2%80%99d%20like%20to%20reserve%20my%20spot%20for%20the%20upcoming%20match.%20Please%20share%20the%20available%20packages%2C%20pricing%2C%20and%20timings."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(220,38,38,0.55)" }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#DC2626] to-[#991B1B] px-10 py-5 text-lg font-bold text-white shadow-xl"
          >
            <Calendar size={20} />
            <span className="relative z-10">RESERVE YOUR SPOT</span>
            <motion.span
              animate={{ x: ["-140%", "240%"] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-white/20 blur-xl"
            />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="glassmorphism flex items-center justify-center gap-3 rounded-full border border-white/20 px-10 py-5 text-lg font-bold text-white transition-all hover:border-white/40"
          >
            <Play size={20} fill="white" />
            WATCH VIDEO
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 18 : 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="absolute bottom-8 left-4 right-4 mx-auto grid max-w-4xl grid-cols-3 gap-3 border-t border-white/10 pt-5"
        >
          {[
            { value: '9+', label: 'HD SCREENS' },
            { value: '4K', label: 'ULTRA HD' },
            { value: '100+', label: 'SEATING CAPACITY' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-white md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-white/45 md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
 // Philosophy Section
const PhilosophySection = () => {
  const features = [
    {
      tag: "Ultra HD Viewing",
      title: "4K Massive Screen",
      image: "/images/massive-screen.jpg",
    },
    {
      tag: "Arena Comfort",
      title: "Stadium Seating",
      image: "/images/stadium-seating.jpg",
    },
    {
      tag: "Private Experience",
      title: "PDR Room",
      image: "/images/hero-bannerpdr.jpg",
    },
    {
      tag: "Competitive Energy",
      title: "Battle Corners",
      image: "/images/hero-bannergame.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#DC2626]/10 blur-[160px] rounded-full" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="max-w-4xl mx-auto text-center mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
              <span className="text-[#DC2626]">THE</span>
              <span className="text-white"> EXPERIENCE</span>
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 cursor-pointer"
            >

              {/* Red Glow */}
              <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#DC2626] blur-[120px] opacity-0 group-hover:opacity-30 transition-all duration-500 z-10" />

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />

              {/* Content */}
              <div className="absolute left-8 bottom-8 z-20 transition-all duration-500 group-hover:-translate-y-2">

                <div className="text-[#DC2626] text-sm font-extrabold tracking-[0.2em] uppercase mb-4">
                  {item.tag}
                </div>

                <h3 className="text-white text-4xl md:text-5xl font-black leading-none transition-colors duration-300 group-hover:text-[#DC2626]">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
// About/Experience Section
const ExperienceSection = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0A0A0A]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="/images/stadium-seating-copy.jpg" 
                alt="ASG Lounge Experience"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 left-6 glassmorphism px-4 py-2 rounded-full"
              >
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  LIVE MATCHES
                </span>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#DC2626]/30 rounded-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#DC2626] text-sm font-bold tracking-widest">WHERE THE GAME COMES ALIVE</span>
            <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              Welcome to the ultimate stadium experience.
            </h3>
            
            <div className="mt-6 space-y-5 text-white/70 text-lg md:text-xl leading-relaxed">
  <p>
    <b> All Sett Go - ASG,  FOR THE FANNS. BY THE FANNS.</b>
  </p>

  <p>
    <span className="text-white font-semibold">
      This isn't just a bar. It's your seat to every moment that matters.
    </span>
  </p>

  <p>
    Dig into delicious bites, dive into signature cocktails, and raise a glass to every big moment. Cricket tensions. Football showdowns. F1 speed & many more.
  </p>

  <p>
    Your favourite place to experience every game with the people who make every cheer special.
  </p>

  <p className="text-white font-medium text-xl md:text-2xl">
    More than a bar. Your complete game-day destination.
  </p>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Menu Section
const MenuSection = () => {
  const menuItems = [
    {
      image: "/images/hero-banner-food.jpg",
      title: "Chef’s Specials",
      category: "Food Menu",
      description: "Premium dishes crafted for champions"
    },
    {
      image: "/images/hero-banner-drink.jpg",
      title: "Signature Drinks",
      category: "Drinks Menu",
      description: "Drinks inspired by sporting legends"
    },
    {
      image: "/images/hero-banner.jpg",
      title: "Craft Beers",
      category: "Beverages",
      description: "Local and imported brews on tap"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0A0A0A]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
    A Menu That <span className="text-gradient">Scores Every Time</span>
  </h3>

  <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
 The menu's as good as the game. Gourmet bites. Bar classics drinks. 
Crafted for every fan, every match.
  </p>
  
  <div className="flex flex-wrap gap-5">
    <motion.a
  href="https://drive.google.com/file/d/1PxaJeACmCZayier6p25YeZLHeyQ9mXB7/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  className="inline-flex w-fit items-center gap-3 px-8 py-4 bg-[#DC2626] text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-[#DC2626]/40 transition-all cursor-pointer no-underline"
  style={{ textDecoration: "none" }}
>
  <Utensils size={20} className="pointer-events-none" />
  <span className="pointer-events-none">Food Menu</span>
  <ArrowRight size={18} className="pointer-events-none" />
</motion.a>

    <motion.a
  href="https://drive.google.com/file/d/10rZ5D0hS1Y7NEw5o57I9szoDCJDVgPlp/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  className="inline-flex w-fit items-center gap-3 px-8 py-4 glassmorphism text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all border border-white/10 cursor-pointer no-underline"
  style={{ textDecoration: "none" }}
>
  <Wine size={20} className="pointer-events-none" />
  <span className="pointer-events-none">Drinks Menu</span>
  <ArrowRight size={18} className="pointer-events-none" />
</motion.a>
  </div>
</motion.div>

          {/* Menu Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {menuItems.slice(0, 2).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-[#DC2626] font-bold tracking-wider">{item.category}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{item.title}</h4>
                  <p className="text-sm text-white/60 mt-1">{item.description}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#DC2626]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mt-10 text-lg md:text-xl text-white/60 text-center leading-relaxed max-w-4xl mx-auto"
>
  Every dish is crafted to match the thrill of the game - bold flavors, quick bites, and signature drinks that keep the energy alive from kickoff to the final whistle.
</motion.p>
      </div>
    </section>
  );
};

// Video Experience Section
const VideoSection = () => {
  return (
    <section className="relative py-20">
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        
        {/* Self Hosted Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/asg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Video Controls Progress */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-[#DC2626]"
              />
            </div>
            <span className="text-white/70 text-sm">LIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sports Section - Premium Grid Layout
const SportsSection = () => {
  const sports = [
    {
      name: "Cricket",
      image: "/images/hero-bannergamecricket.jpg",
      leagues: ["IPL", "World Cup", "T20", "Test"],
      nextMatch: "Today, 7:30 PM"
    },
    {
      name: "Football",
      image: "/images/hero-bannergamfootbsll.jpg",
      leagues: ["Premier League", "La Liga", "Champions League"],
      nextMatch: "Tomorrow, 8:00 PM"
    },
    {
      name: "Formula 1",
      image: "/images/hero-bannergamfootbslformula.jpg",
      leagues: ["Grand Prix", "Monaco", "Silverstone"],
      nextMatch: "Sunday, 5:30 PM"
    },
    {
      name: "Tennis",
      image: "/images/hero-bannergamfootbslltannis.jpg",
      leagues: ["Wimbledon", "US Open", "Australian Open"],
      nextMatch: "Sat, 6:00 PM"
    }
  ];

  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#DC2626]/10 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full glassmorphism mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="text-sm tracking-[0.2em] text-white/80">LIVE SPORTS • 9+ SCREENS</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black"
          >
            <span className="text-white">EVERY GAME.</span>
            <span className="text-gradient"> EVERY GOAL.</span>
            <br />
            <span className="text-white">EVERY MOMENT.</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-white/60 max-w-2xl mx-auto"
          >
            Experience every heartbeat of the game on our massive LED screen. 
            <br /> Crystal-clear 4K visuals with stadium-level surround sound.
          </motion.p>
        </motion.div>

        {/* Sports Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <motion.img 
                  src={sport.image} 
                  alt={sport.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Sport Icon Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                  className="absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: sport.color }}
                >
                  {sport.icon}
                </motion.div>

                {/* Live Badge */}
                <div className="absolute top-6 right-6 glassmorphism px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                  <span className="text-xs font-bold tracking-wider">LIVE</span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-3xl md:text-4xl font-black text-white">{sport.name}</h4>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: sport.color }}
                    >
                      <ArrowRight size={16} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Leagues Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sport.leagues.map((league, j) => (
                      <motion.span
                        key={league}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + j * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium rounded-full glassmorphism text-white/90"
                      >
                        {league}
                      </motion.span>
                    ))}
                  </div>

                  {/* Next Match */}
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Clock size={14} />
                    <span>Next match: {sport.nextMatch}</span>
                  </div>
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: sport.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => (window.location.href = "/events")}
  className="px-10 py-5 bg-gradient-to-r from-[#DC2626] to-[#991b1b] text-white font-bold rounded-full text-lg neon-glow-red flex items-center gap-3 mx-auto"
>
  <Play size={20} fill="white" />
  CHECK UPCOMING MATCHES
</motion.button>

<p className="mt-4 text-white/40 text-sm">
  Never miss a moment • All major leagues covered • Reserve your spot
</p>
        </motion.div>
      </div>
    </section>
  );
};

// Events Section
const EventsSection = () => {
  return (
    <section id="events" className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img 
                src="/images/hero-bannerlocalsamosaparty.jpg" 
                alt="Group Celebration at ASG"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="glassmorphism px-4 py-2 rounded-xl">
                </div>
                <div className="glassmorphism px-4 py-2 rounded-xl">
                  <div className="text-2xl font-black text-white">100+</div>
                  <div className="text-xs text-white/60">Capacity</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <span className="text-[#DC2626] text-sm md:text-base font-bold tracking-[0.3em]">
    PRIVATE EVENTS
  </span>

  <h3 className="mt-5 text-5xl md:text-7xl font-black text-white leading-tight max-w-5xl">
    CELEBRATE <span className="text-gradient">BIG MOMENTS</span> WITH US
  </h3>
  
  <div className="mt-8 space-y-5 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
    <p>
      Birthday nights. Team parties. Match-day celebrations.
    </p>

    <p>
      Reserve your space at All Sett Go and turn every gathering into a full stadium-style experience with giant screen, signature food, and electrifying crowd energy.
    </p>

    <p className="text-white font-semibold text-xl md:text-2xl">
      Watch together. Celebrate together.
    </p>
  </div>

  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className="mt-10 px-10 py-5 border-2 border-[#DC2626] text-[#DC2626] text-lg font-bold rounded-full hover:bg-[#DC2626] hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#DC2626]/30"
  >
    PLAN YOUR EVENT
  </motion.button>
</motion.div>
        </div>
      </div>
    </section>
  );
};

/// Media Coverage Section
const MediaSection = () => {
  const articles = [
    {
      source: "Restaurant India",
      logo: "RI",
      date: "Apr 15, 2026",
      title: "ASG Sports Bar Launches in Mumbai with Stadium-Style Dining Experience",
      image: "/images/hero-bannerrestaurantindia.jpg"
    },
    {
      source: "Local Samosa",
      logo: "LS",
      date: "Apr 16, 2026",
      title: "New Restaurant Launches, Outlets and Menus This Week!",
      image: "/images/hero-bannerlocalsamosa.jpg"
    }
  ];

  return (
    <section className="relative py-20 bg-[#1A1A1A]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white"Event
          >
            MEDIA COVERAGE
          </motion.h3>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm text-white/60 hover:text-white flex items-center gap-1 transition-colors"
          >
            View All
            <ArrowRight size={14} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glassmorphism-dark rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="flex">
                <div className="w-1/3">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover min-h-[150px]"
                  />
                </div>
                <div className="w-2/3 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 bg-[#DC2626] rounded flex items-center justify-center text-xs font-bold">
                      {article.logo}
                    </span>
                    <span className="text-xs text-white/50">{article.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-[#DC2626] transition-colors">
                    {article.title}
                  </h4>
                  <span className="text-xs text-white/40 mt-2 block">{article.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priyanka Menon",
      avatar: "PM",
      rating: 5,
      text: "Visited yesterday with my friends for the IPL match. The energy here is absolutely electric! Food was awesome, the butter chicken pizza is a must-try. The service was great and the screens are massive. Already planning my next visit!",
      date: "2 days ago"
    },
    {
      name: "Dinesh Reghunathan",
      avatar: "DR",
      rating: 5,
      text: "Life is not meant to be stagnant, and ASG proves that! You need to keep moving, trying new cuisines, meeting new people. The vibe here during match days is unmatched. Learning new things and seeing different views with fellow sports lovers - pure happiness!",
      date: "1 week ago"
    },
    {
      name: "Amin Shaikh",
      avatar: "AS",
      rating: 5,
      text: "If you love watching live sports, this place is an absolute must-visit. What a spectacular experience! This is what a true sports bar should feel like. The food is fantastic, the staff is friendly and welcoming, and the atmosphere is electrifying. Watched the World Cup final here and it felt like being in the stadium!",
      date: "2 weeks ago"
    },
    {
      name: "Sneha Kapoor",
      avatar: "SK",
      rating: 5,
      text: "Hosted my husband's birthday party here and it was phenomenal! The private section, personalized menu, and the dedicated service made it so special. All our guests loved the experience. The cocktail menu is incredible - try the Victory Lap!",
      date: "3 weeks ago"
    },
    {
      name: "Rahul Verma",
      avatar: "RV",
      rating: 5,
      text: "As a die-hard football fan, finding ASG was like finding paradise. The sound system, the multiple screens showing different leagues simultaneously, and the crowd's passion - everything is perfect. The bar setup is premium and the drinks are top-notch. My go-to place for every Premier League weekend!",
      date: "1 month ago"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DC2626]/5 rounded-full blur-[200px]" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6"
          >
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs tracking-widest text-white/70">4.9 RATING ON GOOGLE</span>
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-black text-white">
            Straight From Our <span className="text-gradient">Fanns</span>
          </h3>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Real match-day moments. Real reactions. Hear it from the crowd that lives every game at ASG.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * (100 / itemsPerView) + '%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full p-8 rounded-3xl glassmorphism-dark border border-white/5 hover:border-[#DC2626]/30 transition-all duration-500 group"
                  >
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#DC2626]/30 group-hover:text-[#DC2626]/50 transition-colors">
                        <path d="M10 11H6C6 8.5 7.5 7 9 7V5C5.5 5 3 7.5 3 11V19H10V11ZM21 11H17C17 8.5 18.5 7 20 7V5C16.5 5 14 7.5 14 11V19H21V11Z" fill="currentColor"/>
                      </svg>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-6">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#991b1b] flex items-center justify-center font-bold text-white shadow-lg shadow-[#DC2626]/20"
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + j * 0.1 }}
                              >
                                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                              </motion.div>
                            ))}
                          </div>
                          <span className="text-xs text-white/40">• {testimonial.date}</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#4285F4">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-14 h-14 rounded-full glassmorphism flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all border border-white/10"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <div className="flex gap-3">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  whileHover={{ scale: 1.2 }}
                  className={cn(
                    "h-3 rounded-full transition-all duration-300",
                    i === currentIndex 
                      ? "bg-[#DC2626] w-10 shadow-lg shadow-[#DC2626]/50" 
                      : "bg-white/20 w-3 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-14 h-14 rounded-full glassmorphism flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all border border-white/10"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-xs tracking-widest text-white/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#1A1A1A] pt-20 pb-8">

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* Logo */}
            <div className="mb-8">
              <img
                src="/images/asg-logo.png"
                alt="ASG Logo"
                className="h-30 w-auto object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-5 text-white/70">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#DC2626] mt-1 flex-shrink-0"
                />

                <span>
                  2nd Floor, Infinity Mall, Andheri West,
                  <br />
                  Mumbai, Maharashtra 400053
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#DC2626] flex-shrink-0"
                />

                <span>+91 9819229052</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[#DC2626] flex-shrink-0"
                />

                <span>
                  info@allsettgo.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="text-[#DC2626] mt-1 flex-shrink-0"
                />

                <div>
                  <p className="text-white font-semibold">
                    Timings
                  </p>

                  <p className="text-sm">
                    Mon–Sun: 12 PM – 1 AM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right - Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[350px] overflow-hidden rounded-3xl border border-white/10"
          >

            <iframe
              title="ASG Location"
              src="https://maps.google.com/maps?q=2nd%20Floor%20Infinity%20Mall%20Andheri%20West%20Mumbai%20400053&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 All Sett Go. All rights reserved.
              <span className="block md:inline md:ml-2">
                Where Fandom Feels at Home.
              </span>
            </p>

            <div className="flex gap-6 text-sm text-white/40">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Careers
              </a>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

// Homepage Layout
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navigation />

      <main>
        <HeroSection />
        <PhilosophySection />
        <ExperienceSection />
        <MenuSection />
        <VideoSection />
        <SportsSection />
        <EventsSection />
        <MediaSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
