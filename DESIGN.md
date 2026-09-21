---
name: Float & Sting
description: Four calm screens for a lifting-first training week. Neutral surfaces, one ruby accent, nothing scrolls.
colors:
  ink: "#1e2422"
  muted: "#5d645f"
  paper: "#f4f5f1"
  surface: "#ffffff"
  line: "#dfe2dc"
  soft: "#e9ece6"
  box-border: "#b9bfb8"
  accent: "#9b1c3f"
  on-accent: "#ffffff"
  glow: "#ea5478"
  on-glow: "#111513"
  night: "#1e2422"
  night-ink: "#f4f5f1"
  night-muted: "#a9b1ab"
  night-line: "#38403c"
  icon-spike: "#45b3c0"
typography:
  family: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
  display: { fontSize: "30px", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.03em" }
  headline: { fontSize: "24px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-.025em" }
  body: { fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }
  exercise: { fontSize: "15px", fontWeight: 600, lineHeight: 1.3 }
  label: { fontSize: "13px", fontWeight: 600 }
  clock: { fontSize: "60px", fontWeight: 500, fontVariantNumeric: "tabular-nums" }
rounded:
  check: "8px"
  control: "12px"
  list: "14px"
  sheet: "20px"
spacing:
  gutter: "20px"
  column-gap: "14px"
  row-min: "58px"
  target-min: "44px"
---

# Design System: Float & Sting

## Overview

**Creative North Star: "One job per screen."**

The app opens on today's workout and nothing else. Week, Guide and Timer are their own views behind a four item tab bar. Long text never stretches a page: it opens in a sheet over the page. On every phone from iPhone SE up, no screen scrolls.

Identity is the Pulse icon (an easy wave that ends in a spike, pool teal on graphite) and one ruby accent on neutral paper. No letters in the icon, no boxing glove, no red and gold.

## Colors

Neutral base: paper page, white lists, graphite text, hairline rules. Ruby is the only accent in the light interface and it always means state: today, done, active, live. The timer is the one dark screen; there ruby brightens to `glow` so it passes contrast on graphite. Pool teal belongs to the icon alone and never follows the accent. The storage warning has its own amber notice colours and is not an accent.

**The State Colour Rule.** If it is ruby, it is telling you something is current or complete. Never use ruby for decoration, borders or headings.

## Typography

One family, Hanken Grotesk. Display for the session name, headline for sheet and topic titles, exercise weight for list rows, label for eyebrows and counts. Tabular numerals wherever digits change or align: prescriptions, counts, dates, timer, the countdown in the Timer tab.

## Layout

One document, four views, one visible at a time, swapped in place so the timer and checks survive. A phone shows list or detail; a wide screen (900px and up) shows both side by side with the tabs in a left rail and the Week tab folded into Today.

Lists are one bordered white surface with ruled rows, not a stack of cards. Everything else sits directly on paper with hairline rules. No shadows.

**The No Scroll Rule.** A new element must earn its height. If a screen would scroll at 375 by 667, move detail into the sheet or tighten, do not let the page grow. Verify with `measure.sh`, do not estimate.

Short phones (720px tall and under) get tighter rows before anything scrolls. 4 inch phones may scroll the workout list; nothing clips.

## Components

- **Exercise row.** Whole row is the button. The box shows the order number until checked, then a ruby fill and check; the name goes muted with a line through. Sets × reps bold on the right, rest beneath it.
- **Progress line.** Thin bar, `2 of 5` or `Complete`, and Reset only once something is checked.
- **Link row.** Icon, label, optional one line summary, chevron. Opens the sheet. Used for cardio, session notes and guide points.
- **Sheet.** Eyebrow, title, text, full width graphite Done. Dialog semantics, focus goes to Done and returns to the row.
- **Week row.** Date badge (ruby when today), session, cardio label, completion on the right.
- **Segmented switch.** This week / Next week.
- **Timer.** Ring, phase, time, round; one bright button (Start, Resume), one outlined (Pause, Reset); presets; Adjust fold with steppers and the bell switch. The clock shrinks while Adjust is open.
- **Tab bar.** Four icon and label tabs. While the timer is active the Timer label is the countdown.

## Motion and focus

Short and state driven: 120 to 180ms on fills, bars and chevrons, 1s linear on the ring. No looping or decorative animation. Reduced motion turns all of it off. Focus-visible is a 3px ruby outline, offset 2px.

## Do

- Keep one job per screen and send detail to the sheet.
- Keep text labels beside every state colour.
- Keep every target at 44px or more.
- Re-run the fit probe after any change to content length or row sizes.

## Don't

- Don't bring back the single long page, accordion day panels, a hero block or a footer.
- Don't put a floating bar over the workout.
- Don't recolour the icon to match the accent.
- Don't restore the glove, the FS monogram, or red and gold.
- Don't imply logged progress the app does not track.
