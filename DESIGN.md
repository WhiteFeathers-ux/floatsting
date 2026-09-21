---
name: Float & Sting
description: A clean, neutral session sheet for personal training.
colors:
  ink: "#202321"
  muted: "#626762"
  paper: "#f6f7f4"
  surface: "#fff"
  line: "#dedfd9"
  soft: "#eceee8"
  accent: "#252a25"
  on-accent: "#fff"
  success: "#365941"
  timer-control: "#e6ede2"
typography:
  display:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-.035em"
  headline:
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-.025em"
  title:
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-.025em"
  body:
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  exercise:
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontSize: "13px"
    fontWeight: 600
rounded:
  control: "8px"
  compact: "9px"
  day: "12px"
  surface: "14px"
spacing:
  tight: "8px"
  small: "12px"
  medium: "16px"
  large: "20px"
  section: "24px"
components:
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 13px"
  button-secondary-hover:
    backgroundColor: "{colors.soft}"
  button-timer-primary:
    backgroundColor: "{colors.timer-control}"
    textColor: "{colors.ink}"
    rounded: "{rounded.compact}"
    padding: "10px 22px"
  button-timer-secondary:
    textColor: "{colors.on-accent}"
    rounded: "{rounded.compact}"
    padding: "10px 22px"
  workout-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
  timer-preset:
    rounded: "{rounded.control}"
    padding: "8px 12px"
  sound-checkbox:
    size: "18px"
  navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
---

# Design System: Float & Sting

## Overview

**Creative North Star: "The Neutral Session Sheet"**

A quiet, practical training interface built from pale paper, white panels, graphite controls and restrained rules. Hanken Grotesk keeps the brand, prescriptions and controls in one readable voice. The F/S monogram is the identity asset; the boxing-glove mark and red-and-gold boxing-club appearance were explicitly rejected.

Density serves use during a workout. Compact headings, aligned prescriptions and visible completion states carry the hierarchy. Longer explanations unfold on demand. The timer is the strongest tonal block, giving an active tool its own visual boundary without decorative imagery.

**Key Characteristics:**
- Neutral surfaces and graphite emphasis.
- One type family, sentence-case labels and tabular numbers.
- Bordered session panels with generous touch targets.
- Flat depth and short, state-driven motion.

## Colors

The palette is nearly monochrome, with muted green used for functional status and the timer's pale controls.

### Primary
- **Graphite accent:** current day, completed checkboxes, progress fill and the monogram background.
- **Pale timer control:** primary timer action, selected preset and active ring.

### Neutral
- **Ink:** headings, essential text and the timer surface.
- **Muted:** supporting instructions, inactive navigation and secondary labels.
- **Paper / Surface:** page canvas and white session panels.
- **Line / Soft:** dividers and hover or selected backgrounds.
- **On accent:** white text on dark controls.

### Status
- **Success:** the small Today badge. Color accompanies a text label.

**The Functional Emphasis Rule.** Reserve dark fills for current state, completion and the timer; ordinary session panels remain white.

## Typography

**Display and Body Font:** Hanken Grotesk, with the platform sans-serif fallback stack recorded above. All roles inherit this family.

The hierarchy is compact rather than poster-like. The display is the page heading; headline is the default section heading; title is the session name; exercise is the checklist label. Regular body text and muted secondary lines leave bold weight for decisions and prescriptions.

The page heading becomes (28px) at the narrow breakpoint and (32px) at the wide breakpoint. Session names become (17px) and exercise labels (14px) on narrow screens. Supporting labels span (11–14px); the narrow seven-day strip uses smaller compact metadata. The timer readout uses (49px), medium weight and tabular numerals.

**The Aligned Numbers Rule.** Use tabular numerals for prescriptions, progress counts, timer values and stepper values, keeping changing quantities steady.

## Layout

One centered column has a maximum width of (920px). Outer gutters are (24px), reducing to (16px) at (480px) and below. The weekly strip always retains seven equal columns, with its gap reducing from (8px) to (4px) on narrow screens.

Panels stack with a (10px) gap. Session body padding is (20px), changes to (16px) on narrow screens and (28px) horizontally from (760px). Exercise rows separate label and prescription with flexible space; prescription text stays right-aligned. Rows have a minimum height of (78px), or (72px) in the wide layout.

The timer is centered with a maximum width of (520px) in the wide layout. Bottom navigation remains fixed across sizes, accounts for the device safe area and changes from horizontal icon-label pairs to stacked pairs on narrow screens. Footer bottom space prevents content from ending beneath navigation.

## Elevation & Depth

There are no box shadows. White against pale paper, hairline borders and dark state fills distinguish surfaces. Expanded session panels strengthen the border; they do not float. The fixed navigation is separated by a top rule, without blur or shadow.

**The Flat Surface Rule.** Establish hierarchy with surface tone, borders and spacing before adding depth effects.

## Shapes

Soft rectangles define the interface. Session panels and timer use the shared surface radius; ordinary controls use the smaller control radius. Day cells use the day radius, reducing to the compact radius on narrow screens. Rest-day cells retain a dashed border and transparent fill. Checkboxes are small rounded squares, and the timer ring supplies the circular geometry.

## Components

### Buttons

Ordinary actions are white, bordered and compact, with a minimum touch height of (44px). Hover softens the fill and strengthens the border; active state darkens the fill. Timer actions have a minimum height of (48px), with a pale filled primary and transparent outlined secondary. Their hover and active states darken within the timer surface. Disabled buttons use half opacity.

### Session Panels and Exercise Rows

A full-width heading button opens each bordered panel. The title, secondary muscle-group line, status and chevron stay together. Expanded content uses ruled exercise rows with a checkbox at the left and prescription at the right. Completion fills the checkbox, reveals its SVG check and strikes through the exercise name. The progress track is slim and labeled with an explicit count.

### Weekly Navigation

Seven day buttons show the day, session and cardio label. The current day reverses to graphite with light text and a small dot. Rest days are outlined with dashed rules. These treatments communicate real schedule state, not generic decorative cards.

### Timer and Presets

A dark panel holds the circular timer, phase, round count, actions, wrapping preset buttons and steppers. A selected preset uses the same pale fill as the primary timer action. The checkbox for sound remains native and has a pale green accent. This is the only input type in the current UI; no text-field style is established.

### Bottom Navigation

Four SVG icon links sit on a white fixed bar. Hover and the current location share a soft filled rectangle and ink text. Each link has a minimum height of (48px). Narrow screens stack icon and label without removing the label.

### Disclosure, Focus and Motion

Guide disclosures use native details/summary, a text label and plus/minus state indicator. Focus-visible uses a (3px) muted-green outline with a (4px) offset. Session expansion and chevrons transition over (0.18s); exercise backgrounds over (0.15s); timer ring updates over (0.3s) with linear timing. Reduced-motion preference removes transitions and smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** reuse the neutral palette and F/S monogram.
- **Do** preserve text labels alongside completion, current-day and navigation state.
- **Do** keep prescriptions right-aligned and changing quantities in tabular numerals.
- **Do** retain visible keyboard focus, reduced-motion behavior and touch-sized controls.

### Don't:
- **Don't** restore the boxing-glove mark or red-and-gold identity.
- **Don't** add decorative shadows, image treatments or oversized display typography to routine workout controls.
- **Don't** imply logged progress for activities the app does not track.
