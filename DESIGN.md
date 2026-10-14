---
name: Float & Sting
description: Four fast screens for a lifting and swimming week, staged like an anime title card. Night plum ground, bone type, one element color per fighter.
colors:
  ink: "#efe9dc"
  muted: "#a69fb8"
  paper: "#0c0a12"
  surface: "#15111f"
  sheet: "#1a1528"
  line: "#2b2440"
  soft: "#1f1a2e"
  box-border: "#4a4266"
  on-accent: "#0c0a12"
  night: "#08060d"
  gale: "#5ef2a0"
  fang: "#ff3b6b"
  ember: "#ff7a3d"
  volt: "#ffe14a"
  granite: "#b48cff"
  tide: "#22d3ee"
  still: "#bcd6ff"
typography:
  family: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
  display-family: "Dela Gothic One, Arial Black, Impact, sans-serif"
  display: { fontSize: "27px", fontWeight: 400, lineHeight: 1.1 }
  headline: { fontSize: "21px", fontWeight: 400, lineHeight: 1.2 }
  body: { fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }
  exercise: { fontSize: "15px", fontWeight: 600, lineHeight: 1.3 }
  label: { fontSize: "13px", fontWeight: 600 }
  clock: { fontSize: "60px", fontWeight: 500, fontVariantNumeric: "tabular-nums" }
rounded:
  check: "8px"
  control: "12px"
  list: "14px"
  hero: "16px"
  sheet: "20px"
spacing:
  gutter: "20px"
  column-gap: "14px"
  row-min: "58px"
  target-min: "44px"
---

# Design System: Float & Sting

## Overview

**Creative North Star: "A title card you can train from."**

The look is an anime title sequence: night plum, bone lettering, illustrated fighters and one vivid element color. The use is unchanged: the app opens on today's workout, Week, Guide and Timer sit behind four tabs, long text opens in a sheet, and on every phone from iPhone SE up no screen scrolls.

## The cast

One fighter per kind of day. The fighter sets the element color (`--el`) for whatever day is on screen.

| Day | Fighter | Kanji | Color |
|---|---|---|---|
| Upper | Gale (Black's likeness) | 風 | gale |
| Lower A | Fang | 牙 | fang |
| Push | Ember | 炎 | ember |
| Pull | Volt | 雷 | volt |
| Lower B | Granite | 岩 | granite |
| Rest | Still | 静 | still |
| Pool | Tide | 水 | tide |

Art lives at `art/<fighter>-poses.webp` (1122 by 1402, transparent), with four poses rendered through SVG viewBoxes: Today, Week, Guide and Timer. Still Sunday and Tide Swim B have separate 1536 by 1024 pairs for Today and Week. Select by original session identity so artwork follows a moved session. Per-pose face coordinates live in the app.js art helper. Keep each face centered when replacing an illustration.

**The Art Rule.** Art never sits under text or a control. It gets its own box: the right side of the day hero, a round avatar, the top of the rest card, the top band of the pool sheet, or the desktop stage.

## Colors

Night plum base, slightly raised plum surfaces, hairline plum rules, bone text. The element color means state and identity together: today, done, active, live, and whose day it is. Tide cyan always marks the pool, Still blue always marks rest, wherever they appear. The storage warning keeps its own amber.

## Typography

Dela Gothic One for the session name, sheet titles, large kanji and the brand. Kanji under 24px use the system Japanese face (`--kanji`), because the display face closes up at small sizes. Hanken Grotesk for everything that is read during training. Tabular numerals wherever digits change or align.

## Layout

One document, four views, one visible at a time, swapped in place so the timer and checks survive. A phone shows list or detail. From 900px the tabs move to a left rail and list and detail sit side by side. From 1240px a third column, the stage, shows the day's fighter full height and the hero band drops its art.

**The No Scroll Rule.** A new element must earn its height. If a screen would scroll at 375 by 667, move detail into the sheet or tighten. Measure it, do not estimate.

**Two and two.** The week must make two rest days and two swims obvious: the tally chips above the week list, the Rest tag and Still blue on rest rows, and Tide's avatar on both swim days. This holds after sessions are moved: five lifts, two swims, two rest days.

## Components

- **Day hero.** Session name, muscle groups, then the date on the left; the fighter, kanji and name tag on the right behind a fade. No leading stripe.
- **Exercise row.** Whole row is the button. The box shows the order number until checked, then an element fill and check; the name goes muted with a line through.
- **Progress line.** Thin bar, `2 of 6` or `Complete`, and Reset only once something is checked.
- **Pool row.** Tide's avatar, the swim name in cyan, a cyan edged pill. Opens the sheet, which carries a Tide band on top.
- **Link row.** Icon, label, optional one line summary, chevron. Opens the sheet.
- **Sheet.** Title with a slash under it, context line, text, full width bone Done. Dialog semantics, focus goes to Done and returns to the row.
- **Week row.** Tinted by its fighter. Date badge (element fill when today), fighter avatar, session, swim label, Tide mini avatar on swim days, then a stamped Done seal, a count, or the Rest tag.
- **Rest card.** Still's illustration above the note, then the next session with that fighter's avatar.
- **Cast strip.** Seven avatars with name and day on the Guide list.
- **Guide scrolls.** Topic rows numbered with kanji numerals in a small seal; the open topic's seal fills.
- **Timer.** A training ground: the day's fighter strip with a kanji seal, a ticked ring with the phase inside it, one pip per round, speed lines behind. The clock stays in the body face so the digits do not jitter.
- **Blade controls.** Timer buttons, presets, sheet Done, `.fs-cta` and `.fs-ghost` sit on a skewed backing; the tap area and focus ring stay rectangular.
- **Options and tags.** Move session sits beside Session notes. A sheet offers Train today and six weekday swap rows. Swim completion is a separate check in its session sheet. Per-week swaps retain the original session identity and all checks.
- **Tab bar.** Four icon and label tabs. While the timer is active the Timer label is the countdown.

## Motion and focus

Character art has slow breathing or water-drift motion with a soft elemental pulse, independent of all text and controls. Guide offers Pause art, stored separately from workout progress. Hidden documents pause; reduced-motion disables decorative loops. Three finite feedback moments also remain. Opening: one slash, the day's kanji, the name, gone in 1.5 seconds. Check: the fighter's own strike crosses the row (wind arc, triple claw, flame edge, lightning, fractured strike) with two streaks, sparks and a pop on the box; the text never moves. Finish: a double slash, the kanji and Session complete over the hero for under two seconds when the last lift is checked. Effects fire for pointer taps only. Textures such as speed lines are static. State fills run 120 to 180ms, the ring 1s linear. Reduced motion turns all of it off and skips the opening. Focus-visible is a 3px element color outline, offset 2px.

## Do

- Keep one job per screen and send detail to the sheet.
- Keep text labels beside every state color.
- Keep every target at 44px or more.
- Re-measure fit after any change to content length, row sizes or art boxes.

## Don't

- Don't let art overlap text or controls.
- Keep character motion subtle, pausable, and separate from workout controls.
- Don't use generic vector characters or placeholder art.
- Don't show invented statistics, streaks or history.
- Don't use dashes in interface copy.
- Don't bring back the single long page, accordion day panels, the glove, the FS monogram, or red and gold.

## Cast across Week, Guide and Timer (2026-10-13)

- `.fs-band` is the hero band used outside the day view: `.fs-weekhero`, `.fs-guidehero`, `.fs-topichero`, `.fs-timerhero`. It reuses `.fs-hero-text` and `.fs-hero-art` but is not `.fs-hero`, so the day hero stays unique.
- Band art is framed by the measured face center of each pose (`--fx`, `--fy` set inline by `art()`), not by the per-fighter hero crops. Band height comes from `--bh`.
- Week rows carry `.fs-wart`, the day's fighter behind the right side of the row. Avatars stay.
- Guide: the cast row is a selector (`data-act="cast"`, `S.cast`, not saved). Each guide page borrows a fighter through `TOPIC_CAST`.
- Phone widths (container under 900px): `.fs-hero` and `.fs-band` become a full-bleed stage with `flex:1`, so the fighter takes all spare height; art is sized in the stage's own container units and framed by the pose face center. Back links float over the stage. Desktop keeps the card bands and side stage.
- The fighter steps in once (`fs-art-in`) when the tab or featured fighter changes; `.is-enter` is only set on those renders, so check taps and timer ticks do not replay it.

## Phone layout of record: side by side (2026-10-13, Black's pick)

- Rule: text never sits on the art. On phone widths the fighter stands full height on the right (`.fs-backdrop`, painted by `paintBackdrop()`), and all content is a solid column on the left (58%, 61% on short phones).
- The hero and band keep their markup but show text only on phones; their art is hidden there and still used on desktop.
- Exercise rows are a two line grid: name, then sets and rest. Week row art, the rest tag and the swim banner art are hidden on phones.
- Swim days add `.fs-partner` (Tide medallion, bottom right, same action as the swim row, out of the tab order).
- The name tag button at the top right opens the cast gallery sheet.
- Rejected on the way here: small card bands ("barely see the characters"), art behind translucent lists ("harder to see"), faint backdrop behind solid lists ("bland").
