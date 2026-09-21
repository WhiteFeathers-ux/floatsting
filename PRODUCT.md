# Float & Sting

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Black uses this personal workout app. Black is an experienced lifter with full-gym access and no reported injuries, currently 153 lb at 5 feet 8 inches, with a goal of 160 lb. Black runs one mile in 7–8 minutes and is a beginner swimmer.

## Product Purpose

Make a researched, lifting-first routine easy to follow: five workout days and two full rest days, push/pull lifting with legs included, two to three swims and two to three runs per week.

## Capabilities and Constraints

Static HTML/CSS/JavaScript PWA on GitHub Pages, deployed from main. Seven-day schedule, rotating push/pull weeks, device-local weekly exercise completion, interval timer, offline caching. No account, weight/rep logging or cloud sync. Preserve tested schedule, exercise prescriptions, source citations and existing completion data. Cardio is prescribed but not logged. Lifting including warm-ups and abs targets 45–60 minutes; cardio is separate. Abs occur on pull days only.

## Brand Commitments

Name remains Float & Sting. Black approved Claude's Pulse icon (pool teal), ruby accent, neutral surfaces and four views: Today, Week, Guide and Timer. Claude owns the visual design; Codex integrates state, timer, offline support and deployment. Preserve the approved compact layouts and shared detail sheet.

## Evidence on Hand

Current app source and icons; researched ACSM resistance-training guidance, ISSN protein guidance, concurrent-training reviews, and an energy-surplus trial are linked in app.js. Existing Playwright verification covers the weekly plan, completion persistence, calendar rollover, timer boundaries, mobile overflow and offline reload.

## Product Principles

- Lifting has priority; swimming starts conservatively.
- Show the current workout before extended guidance.
- Maintain two complete rest days.
- Distinguish recommendations, completed actions and unavailable tracking.
- Never invent workout history or progress.
