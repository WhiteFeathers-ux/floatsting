# Float & Sting

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Black uses this personal workout app. Black is an experienced lifter with full-gym access and no reported injuries, currently 153 lb at 5 feet 8 inches, with a goal of 160 lb. Black runs one mile in 7–8 minutes and is a beginner swimmer.

## Product Purpose

Make a researched, lifting-first routine easy to follow: five lifting days and two full rest days, upper/lower/push/pull/legs, and two one-hour beginner pool practice windows including instruction and rests. Runs are replaced.

## Capabilities and Constraints

Static HTML/CSS/JavaScript PWA on GitHub Pages, deployed from main. Seven-day schedule, a fixed weekly lifting/swimming plan, device-local weekly exercise completion, interval timer, offline caching. No account, weight/rep logging or cloud sync. Preserve tested schedule, exercise prescriptions, source citations and existing completion data. Cardio is prescribed but not logged. Lifting including warm-ups and abs targets 45–60 minutes, occasionally 60–65; swimming is separate. Abs occur on Lower A, Pull and Lower B.

## Brand Commitments

Name remains Float & Sting. Black approved Claude's Pulse icon (pool teal), ruby accent, neutral surfaces and four views: Today, Week, Guide and Timer. Claude owns the visual design; Codex integrates state, timer, offline support and deployment. Preserve the approved compact layouts and shared detail sheet.

## Evidence on Hand

Current app source and icons; researched ACSM resistance-training guidance, ISSN protein guidance, concurrent-training reviews, and an energy-surplus trial are linked in app.js. Existing Playwright verification covers the weekly plan, completion persistence, calendar rollover, timer boundaries, mobile overflow and offline reload.

## Product Principles

- Muscle growth and swim skill both matter; swimming starts with short repeats and generous rest.
- Show the current workout before extended guidance.
- Maintain two complete rest days.
- Distinguish recommendations, completed actions and unavailable tracking.
- Never invent workout history or progress.
