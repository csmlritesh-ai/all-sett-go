---
name: duckpin
description: Create, review, or improve Duckpin bowling content, scoring logic, event materials, venue pages, league/tournament copy, beginner guides, and Duckpin-themed web or app experiences. Use when the user mentions Duckpin bowling, mini bowling, small-ball bowling, bowling venue attractions, Duckpin rules, Duckpin scoring, Duckpin events, or wants accurate Duckpin-related website/app content.
---

# Duckpin

## Overview

Use this skill to produce accurate, practical Duckpin bowling work: public-facing copy, web sections, event packages, beginner explanations, scoring models, and QA for Duckpin-related features. Preserve the distinction between casual venue Duckpin experiences and sanctioned competitive Duckpin rules.

## Core Facts

- Duckpin is a small-ball bowling variant with 10 pins arranged in the same triangular setup as ten-pin bowling.
- Players usually receive up to three balls per frame instead of two.
- Duckpin balls are small, handheld, and normally do not have finger holes.
- Duckpin pins are shorter and squatter than standard ten-pin pins.
- The National Duckpin Bowling Congress (NDBC) is the U.S. governing body for sanctioned Duckpin rules, equipment, records, and tournaments.
- Casual entertainment venues may use modified lane lengths, string/setter systems, house rules, or simplified scoring. State this clearly when writing for venues.
- Do not call Duckpin "candlepin." Candlepin also uses three balls per frame but has different pins, ball behavior, deadwood conventions, and regional identity.

## Scoring

Use this model unless the user gives different house rules:

- A game has 10 frames.
- Each frame allows up to 3 balls to knock down 10 pins.
- Strike: all 10 pins on the first ball. Score 10 plus the next two balls.
- Spare: all 10 pins using the first two balls. Score 10 plus the next one ball.
- Ten-box/third-ball 10: all 10 pins using all three balls. Score 10 with no bonus.
- Open frame: fewer than 10 pins after three balls. Score actual pinfall.
- Tenth frame: after a strike, award two fill balls; after a spare, award one fill ball. A third-ball 10 in the tenth does not earn an extra fill ball unless house rules say otherwise.
- Perfect game logic may be theoretically 300 under strike-based scoring, but sanctioned Duckpin has historically been much harder than ten-pin; avoid casual claims that perfect games are common.

When implementing scoring, model each delivered ball as pinfall from 0 to remaining pins in the frame. Validate that no frame exceeds 10 pins except fill-ball accounting in the tenth frame.

## Content Guidelines

Write Duckpin content for the user's context:

- Family entertainment: emphasize approachable play, shorter learning curve, no heavy bowling balls, group energy, food and drink pairings, and easy drop-in fun.
- Sports venue or premium social club: emphasize competition, private lanes, screens, reservations, leagues, corporate events, and elevated hospitality.
- Beginner education: explain the three-ball frame, small ball, smaller pins, and why strikes are harder.
- League/tournament content: use more precise scoring language and refer sanctioned-rule questions to NDBC or the event's official rules.
- Kids or mixed-age groups: emphasize lightweight balls and simple participation, but avoid promising universal accessibility without checking local safety policies.

Avoid overclaiming. Do not say Duckpin is "easy" in an absolute sense; it is easy to start but challenging to master.

## Page And App Patterns

For a Duckpin website section, include these blocks when relevant:

- Hero: clear attraction name, venue signal, booking/reservation call to action.
- How it works: small ball, 10 pins, three balls per frame, no special shoes if the venue confirms it.
- Experience details: lane count, group size, age policy, duration, food/drink service, screen viewing, private event options.
- Events: birthdays, corporate outings, date nights, watch parties, leagues, tournaments.
- FAQ: scoring, reservations, walk-ins, shoes, age limits, lane timing, accessibility, cancellation policy.

For an app or scoring feature, include:

- Player setup and frame entry.
- Per-ball pinfall validation.
- Strike, spare, third-ball 10, and open-frame states.
- Tenth-frame fill-ball handling.
- Editable correction history.
- Clear display distinction between actual pinfall and bonus scoring.

## UX And Visual Direction

Duckpin interfaces should feel social, energetic, and easy to scan. Use lane, pin, ball, scoreboard, reservation, and group-event visual cues. For premium venues, keep the layout polished and hospitality-focused rather than cartoonish.

Use real venue images when available. If creating placeholder visuals, prefer believable lanes, pins, scoreboards, groups, food, and screens over abstract sports graphics.

## Copy Examples

Use these as patterns, not fixed wording:

- "Small-ball bowling with a bigger challenge: three rolls, 10 pins, and plenty of room for comebacks."
- "Duckpin is quick to learn, competitive fast, and built for groups."
- "Book a lane for birthdays, team nights, watch parties, and private events."
- "Knock down all 10 on your first ball for a strike, clear them in two for a spare, or use your third roll to save the frame."

## QA Checklist

Before finalizing Duckpin work:

- Confirm whether the user needs sanctioned Duckpin rules or venue-specific house rules.
- Check that scoring explains third-ball 10 correctly: 10 points, no bonus.
- Do not mix Duckpin and candlepin terminology.
- Do not assume shoe rental, lane length, age limits, group capacity, or reservation policy without source content.
- For code, test strikes, spares, third-ball 10s, open frames, and tenth-frame fills.
- For websites, make the Duckpin attraction visible in the first viewport when it is a primary offering.
