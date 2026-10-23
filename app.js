(function (global) {
'use strict';

const WORKOUTS = {
  "upper": {
    "type": "up",
    "name": "Upper",
    "tag": "Chest + Back + Delts + Core",
    "freq": "Upper",
    "short": "Upper",
    "ex": [
      [
        "1",
        "Bench Press",
        "3×6–10 · 2–3m"
      ],
      [
        "2",
        "Chest-Supported Row",
        "3×8–12 · 2m"
      ],
      [
        "3",
        "Incline Dumbbell Press",
        "2×8–12 · 2m"
      ],
      [
        "4",
        "Lat Pulldown",
        "3×8–12 · 2m"
      ],
      [
        "5",
        "Lateral Raise",
        "3×12–20 · 60–90s"
      ],
      [
        "6",
        "Kneeling Ab-Wheel Rollout",
        "2×6–10 · 90s"
      ]
    ],
    "note": "16 working sets. Lat pulldown: pull elbows down toward the hips and let the arms rise to a full stretch at the top. Lateral raise: lead with the elbow and stop just above shoulder height. Complete each exercise before moving on. Rollouts: brace ribs over pelvis and move only as far as possible without the lower back arching. Start with a short kneeling range or a stability-ball rollout. Stop before losing trunk position; add range before load. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "lower": {
    "type": "lo",
    "name": "Lower A",
    "tag": "Quads + Hamstrings + Calves + Abs",
    "freq": "Lower A",
    "short": "Lower A",
    "ex": [
      [
        "1",
        "Hack Squat",
        "3×6–10 · 2–3m"
      ],
      [
        "2",
        "Romanian Deadlift",
        "3×8–10 · 2–3m"
      ],
      [
        "3",
        "Seated Leg Curl",
        "2×10–15 · 90s"
      ],
      [
        "4",
        "Leg Extension",
        "2×10–15 · 90s"
      ],
      [
        "5",
        "Standing Calf Raise",
        "3×10–15 · 90s"
      ],
      [
        "6",
        "Cable Crunch",
        "3×10–15 · 90s"
      ],
      [
        "7",
        "Lateral Raise",
        "2×12–20 · 60s"
      ]
    ],
    "note": "18 working sets. Lateral raise (cable or seated dumbbell): light load, lead with the elbow, stop before any shoulder pinch; go lighter if shoulders feel tired before the swim. Back squat is an alternative if a hack squat is unavailable; keep the choice consistent. Warm up separately for the hinge. Curl ribs toward pelvis during crunches. Add the smallest load once all sets reach 15 clean reps with 1–2 reps left. Swim A is a separate pool block, ideally at least 3 hours apart. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "push": {
    "type": "up",
    "name": "Push",
    "tag": "Chest + Delts + Triceps + Shoulder Control",
    "freq": "Push",
    "short": "Push",
    "ex": [
      [
        "1",
        "Incline Dumbbell Press",
        "3×8–12 · 2m"
      ],
      [
        "2",
        "Cable Chest Fly",
        "2×10–15 · 90s"
      ],
      [
        "3",
        "Seated Shoulder Press",
        "2×8–12 · 2m"
      ],
      [
        "4",
        "Lateral Raise",
        "3×12–20 · 60–90s"
      ],
      [
        "5",
        "Overhead Triceps Extension",
        "2×10–15 · 90s"
      ],
      [
        "6",
        "Cable External Rotation",
        "2×12–20/side · 60s"
      ]
    ],
    "note": "14 working sets. External rotation: use light resistance, keep elbow near the side and rotate without moving the torso. This is shoulder-control practice, not a heavy lift or an injury-prevention guarantee. Use a comfortable shoulder range. Keep compounds about two clean reps from failure. Swimming is additional shoulder work, not a replacement for chest or back sets. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "pull": {
    "type": "lo",
    "name": "Pull",
    "tag": "Back + Rear Delts + Biceps + Core",
    "freq": "Pull",
    "short": "Pull",
    "ex": [
      [
        "1",
        "Lat Pulldown",
        "3×8–12 · 2m"
      ],
      [
        "2",
        "Chest-Supported Row",
        "3×8–12 · 2m"
      ],
      [
        "3",
        "Straight-Arm Cable Pulldown",
        "2×12–15 · 90s"
      ],
      [
        "4",
        "Reverse Pec Deck",
        "2×12–20 · 90s"
      ],
      [
        "5",
        "Dumbbell Curl",
        "2×10–15 · 90s"
      ],
      [
        "6",
        "Pallof Press",
        "2×10–12/side · 60–90s"
      ],
      [
        "7",
        "Cable Crunch",
        "3×10–15 · 90s"
      ]
    ],
    "note": "17 working sets. Straight-arm pulldown: arms long with a soft elbow, sweep the bar to the thighs by driving with the lats, not the triceps. Pallof press: stand side-on to a cable at chest height, press straight out and pause 2 seconds without twisting. Train both sides. Cable crunch: curl ribs toward pelvis without pulling with the arms; build load gradually. Chest support limits lower-back fatigue before Saturday legs. Avoid forced reps. If shoulder or lat fatigue affects Saturday swimming, keep the pool session easy and shorten it. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "legs": {
    "type": "lo",
    "name": "Lower B",
    "tag": "Quads + Hamstrings + Calves + Core",
    "freq": "Lower B",
    "short": "Lower B",
    "ex": [
      [
        "1",
        "Leg Press",
        "3×8–12 · 2–3m"
      ],
      [
        "2",
        "Romanian Deadlift",
        "2×8–12 · 2–3m"
      ],
      [
        "3",
        "Supported Split Squat",
        "2×8–12/leg · 2m"
      ],
      [
        "4",
        "Seated Leg Curl",
        "3×10–15 · 90s"
      ],
      [
        "5",
        "Seated Calf Raise",
        "3×12–20 · 90s"
      ],
      [
        "6",
        "Suitcase Carry",
        "3×20–30s/side · 90s"
      ],
      [
        "7",
        "Lateral Raise",
        "2×12–20 · 60s"
      ]
    ],
    "note": "18 working sets; split squats mean two sets per leg, counted as two sets for each leg. Lateral raise (cable or seated dumbbell): light load, lead with the elbow, stop before any shoulder pinch; go lighter if shoulders feel tired before the swim. Use hand support for balance. Suitcase carry: hold one dumbbell at the side and walk slowly without leaning or shrugging; repeat on the other side. Breathe normally. Add load after every set reaches 30 seconds with level shoulders. If grip limits the trunk work, use a side plank for the same time instead. Swim B is a separate pool block, ideally at least 3 hours apart. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "rest": {
    "type": "rest",
    "name": "Full Rest",
    "tag": "Recover",
    "freq": "Rest",
    "short": "Full rest",
    "ex": [],
    "note": "No scheduled lifting or swimming. Easy walking or gentle mobility is optional. Keep meals, protein and sleep consistent."
  }
};
const ROTATION = [
  ['upper','lower','push','rest','pull','legs','rest']
];
const CARDIO = [
  null,
  {
    "short": "Swim A",
    "note": "<b>60-minute pool block: technique and easy endurance.</b>  Use a supervised 25-metre or 25-yard pool; each 25 below is one length in that pool. Choose a shorter teaching area with an instructor if a length is not yet comfortable. Rest 30–60 seconds after each length, longer until breathing is comfortable. The clock is a time budget, not a deadline. Stop a block when its repetitions or time budget are reached; spare time is for recovery or instructor feedback, not extra lengths.<br><br><b>0–5 min:</b> Check in, choose one technique cue with an instructor, and settle breathing at the wall.<br><b>5–15 min:</b> 4 × 25 easy freestyle.<br><b>15–30 min:</b> 4 × 25 easy technique swimming. Focus on relaxed exhalation into the water and a comfortable breath to the side; breathe whenever needed.<br><b>30–50 min:</b> 6 × 25 easy freestyle, effort 3–4/10. Keep every length controlled.<br><b>50–55 min:</b> 2 × 25 very easy.<br><b>55–60 min:</b> Recover and record total distance, longest comfortable repeat and one technique cue.<br><br><b>Starting dose:</b> The full outline is 400 metres/yards, including rests within the hour. For the first two visits, use half the repeats in every block if needed (200 total). A one-hour lesson can replace either session. End early if control fades; filling an hour is not the goal.<br><br><b>Progress only after two comfortable sessions:</b> Add 2 × 25 to the main set (50 total), or replace a pair of 25s with one 50 at the same total distance. Change one thing at a time; do not also reduce rest or increase speed. The hour remains the cap.<br><br><b>Pool safety:</b> No breath-holding, hyperventilation, underwater-distance challenges, paddles or butterfly sets in this beginner block. Stop for shoulder pain, dizziness or loss of breathing control. Use an instructor for skill development."
  },
  null,
  null,
  null,
  {
    "short": "Swim B",
    "note": "<b>60-minute pool block: repeatable pace and technique.</b>  Use a supervised 25-metre or 25-yard pool; each 25 below is one length in that pool. Choose a shorter teaching area with an instructor if a length is not yet comfortable. Rest 30–60 seconds after each length, longer until breathing is comfortable. The clock is a time budget, not a deadline. Stop a block when its repetitions or time budget are reached; spare time is for recovery or instructor feedback, not extra lengths.<br><br><b>0–5 min:</b> Check shoulder comfort and review the technique cue.<br><b>5–15 min:</b> 4 × 25 easy freestyle.<br><b>15–30 min:</b> 4 × 25 relaxed freestyle with consistent breathing and smooth strokes.<br><b>30–50 min:</b> 2 rounds of 3 × 25 freestyle. All easy in the first two weeks. Later, if the whole session stays controlled, make the middle length of each round moderate (5/10), with the others easy. Rest 30–60 seconds after each length and 2 minutes between rounds. No sprints.<br><b>50–55 min:</b> 2 × 25 very easy.<br><b>55–60 min:</b> Recover and record distance, effort and whether the final length stayed as smooth as the first.<br><br><b>Starting dose:</b> The full outline is 400 metres/yards, including rests within the hour. For the first two visits, use half the repeats in every block if needed (200 total). A one-hour lesson can replace either session. End early if control fades; filling an hour is not the goal.<br><br><b>Progress only after two comfortable sessions:</b> Add 2 × 25 to the main set (50 total), or replace a pair of 25s with one 50 at the same total distance. Change one thing at a time; do not also reduce rest or increase speed. The hour remains the cap.<br><br><b>Pool safety:</b> No breath-holding, hyperventilation, underwater-distance challenges, paddles or butterfly sets in this beginner block. Stop for shoulder pain, dizziness or loss of breathing control. Use an instructor for skill development."
  },
  null
];
const GUIDE = [
  {
    "id": "week",
    "title": "The weekly plan",
    "summary": "Five lifts, two swims, two rest days",
    "html": "<p class=\"lead\">Dry-land strength that supports swimming, while keeping muscle growth and progressive core work. The default schedule below repeats each week. Use Move session to swap days for the selected week; lift and swim checks stay with each session. Paired swims move with their lower-body session. Runs are replaced by two pool sessions.</p><ul><li><b>Monday.</b> Upper: chest, back, delts and anti-extension core.</li><li><b>Tuesday.</b> Lower A + Swim A. Separate sessions when practical.</li><li><b>Wednesday.</b> Push: chest, delts and triceps.</li><li><b>Thursday.</b> Full rest.</li><li><b>Friday.</b> Pull: back, rear delts, biceps, loaded abs and anti-rotation core.</li><li><b>Saturday.</b> Lower B + Swim B. Separate sessions when practical.</li><li><b>Sunday.</b> Full rest.</li></ul>"
  },
  {
    "id": "sets",
    "title": "Sets, effort & progress",
    "summary": "Transition, rep targets and saved checks",
    "html": "<p class=\"lead\">The displayed sets are the full target. For the first two weeks after starting this plan, use 2 sets wherever 3 are listed while adapting to swimming.</p><ul><li><b>Effort.</b> Finish most sets with about 2 clean reps left. On stable isolation exercises, the final set may finish with 1–2 reps left. No forced reps or compound failure required. No soreness or fatigue is not evidence that training failed.</li><li><b>Rest.</b> Use 2–3 minutes for demanding compounds and 60–90 seconds for isolation work, or longer if needed to repeat good reps. Warm-up sets are additional.</li><li><b>Add weight.</b> Record weight, reps for every set and estimated reps left in a notebook. Once every set reaches the top of the range with the intended effort and form, increase by the smallest available load. Keep exercises consistent for 6–8 weeks.</li><li><b>Saved checks.</b> Tap after all prescribed sets are done. Checks save by week on this device. The revised routine starts unchecked; previous-plan records remain stored. Swims have a separate completion check in the swim sheet. Moving a session keeps its checks. This app does not log weights or reps.</li></ul>"
  },
  {
    "id": "progress",
    "title": "Growth & recovery",
    "summary": "Weekly volume and adjustment rules",
    "html": "<p class=\"lead\">Full target: 10 direct weekly sets each for chest, quads and hamstrings; 14 for back (8 of them lat-focused pulldowns), 10 lateral-delt, 2 rear-delt, 2 shoulder-press, 2 direct biceps, 2 direct triceps and 6 calves. Core work comprises 6 cable-crunch sets, 2 rollout sets, 2 Pallof sets per side and 3 carry sets per side; these train different trunk functions and should not be treated as 13 equivalent hypertrophy sets. There are also 2 light external-rotation sets per side. Compound presses and pulls add indirect arm/shoulder work. Glutes work during squats, presses, split squats and hinges; swimming is not counted as lifting sets.</p><ul><li><b>Warm up.</b> Use 5–10 minutes of easy movement and progressively heavier warm-up sets for the first compound. Warm up again when switching to a different movement pattern.</li><li><b>Time budget.</b> Full sessions have 14–18 working sets across six or seven exercises. Aim for 45–60 minutes including warm-ups and abs; some days may take 60–65. On lower days, fit the lateral raises into calf-raise rests. If time runs out, drop a calf set first; keep the lateral raises, pulldowns and core work. Do not make it up on rest days.</li><li><b>Width block.</b> Lats and side delts are the priority: pulldowns on Upper and Pull, straight-arm pulldowns on Pull, and lateral raises on four days. Swim days get only light lateral raises, no added back work. Judge it at 4–6 weeks by more pulldown and raise reps at similar effort.</li><li><b>Transition.</b> First two weeks: cap all 3-set exercises at 2. Then move toward the displayed volume if technique, sleep and performance are stable. Keep swimming easy while lifting volume rises.</li><li><b>Review after 4–6 weeks.</b> Look for more reps or load at similar effort, stable swimming technique and a gradual body-weight trend. If one muscle stalls despite consistent training, food and recovery, add only 1–2 weekly sets for it and reassess. Do not add volume simply because there is no soreness.</li><li><b>Reduce when needed.</b> If performance drops over several sessions, soreness persists or shoulders are irritated, reduce sets by about half for a week and shorten swims. Persistent joint pain needs assessment.</li></ul><p class=\"lead\">This split and these exact doses are coaching choices, not a tested optimal protocol. Progressive loading and adequate volume are supported by the <a href=\"https://pubmed.ncbi.nlm.nih.gov/41843416/\" target=\"_blank\" rel=\"noopener\">2026 ACSM scientific review</a>.</p>"
  },
  {
    "id": "core",
    "title": "Strong core for swimming",
    "summary": "Loaded abs, bracing and trunk control",
    "html": "<p class=\"lead\">Core is a main dry-land training goal. Strengthen the trunk while arms and legs move, without trying to eliminate the normal rotation of freestyle. Lifting can support swimming; breathing and stroke technique still require pool practice.</p><ul><li><b>Upper: resist arching.</b> Kneeling ab-wheel rollout, 2 × 6–10. Brace, keep ribs over pelvis and stop before the lower back extends. Use a short range or stability ball first. Progress range, then reps; advanced loading is optional.</li><li><b>Lower A and Pull: loaded abs.</b> Cable crunch, 3 × 10–15 each day. Curl ribs toward pelvis with controlled motion. When every set reaches 15 with 1–2 clean reps left, add the smallest load.</li><li><b>Pull: resist twisting.</b> Pallof press, 2 × 10–12 per side. Pause 2 seconds with arms extended, hips and ribs facing forward. Add resistance only while the trunk stays still.</li><li><b>Lower B: resist leaning.</b> Suitcase carry, 3 × 20–30 seconds per side. Walk slowly, shoulders level, breathing normally. Add load after all sets reach 30 seconds without leaning. Use side planks if grip is the limiting factor.</li><li><b>Progress, do not just endure.</b> Log cable weight/reps, rollout range/reps, Pallof resistance and carry load/time. Finish before technique breaks down. First two weeks: 2 sets wherever 3 are listed. Keep core work after main lifts so bracing is fresh for heavy compounds.</li></ul><p class=\"lead\">A <a href=\"https://pubmed.ncbi.nlm.nih.gov/35683586/\" target=\"_blank\" rel=\"noopener\">small randomized trial in 18 young male swimmers</a> found improved 50-m freestyle performance after core training alongside swimming. A <a href=\"https://pubmed.ncbi.nlm.nih.gov/41219810/\" target=\"_blank\" rel=\"noopener\">2025 systematic review in youth swimmers</a> also examined this question. These populations differ from an adult beginner. The four exercises and exact doses here are coaching choices; there is no guarantee of a particular speed gain. Broader <a href=\"https://pubmed.ncbi.nlm.nih.gov/39129754/\" target=\"_blank\" rel=\"noopener\">swimmer resistance-training research</a> supports strength work, but dry-land training does not replace skill practice.</p>"
  },
  {
    "id": "cardio",
    "title": "Swimming progression",
    "summary": "Two one-hour practice windows",
    "html": "<p class=\"lead\">Swim A with Lower A and Swim B with Lower B each reserve 60 minutes, including instruction, rests and notes. Open the Swim row on that day for the complete session. A beginner lesson can replace either practice.</p><ul><li><b>Start at current ability.</b> Use comfortable 25s and generous rest in a supervised pool. Full starting outlines total 400 metres/yards; half repeats total 200. Use the lower amount if needed. Finish early when technique or breathing control declines.</li><li><b>Build skill first.</b> Book instruction for breathing and body position. Two comfortable sessions come before adding 50 total distance or combining two 25s into a 50. Keep the other variables unchanged. Distance increases are a practical starting rule, not a scientific guarantee.</li><li><b>Phelps-inspired structure.</b> Warm-up, technique work, a purposeful main set and cooldown borrow the structure of competitive practice. This is not Michael Phelps's actual workload, and two beginner sessions do not replicate elite training. Butterfly, paddles and hard race sets wait for appropriate technique and coaching.</li><li><b>Combine with lifting.</b> Pair swimming with lower-body days to avoid a same-day upper-body lift. Ideally separate sessions by at least 3 hours, with a meal and fluids between. This is fatigue management, not a proven muscle-growth requirement. If back-to-back, lift first only if still alert and controlled for swimming; otherwise shorten or reschedule the pool work.</li><li><b>Protect shoulders.</b> Swimming adds work for shoulders and back. No fatigue on the old plan does not guarantee recovery from the new one. Begin with easy swimming; Swim B moderate lengths are optional only after the first two weeks and stable technique.</li></ul><p class=\"lead\">The <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8891239/\" target=\"_blank\" rel=\"noopener\">43-study concurrent-training meta-analysis</a> found no average reduction in whole-muscle growth or maximal strength, but explosive strength could be affected. Most evidence was running/cycling, so this exact swimming/bodybuilding combination is an extrapolation. <a href=\"https://www.usms.org/fitness-and-training/guides/swimming-101/adult-swim-training\" target=\"_blank\" rel=\"noopener\">U.S. Masters Swimming</a> informs practice structure and terminology; it is coaching guidance, not a clinical trial.</p>"
  },
  {
    "id": "fuel",
    "title": "Nutrition & the 160 lb goal",
    "summary": "Surplus, protein, watching the trend",
    "html": "<div class=\"guide-content\">\n    <p class=\"lead\">Aim for gradual weight gain while lifts improve. Reaching 160 lb does not guarantee a particular appearance or seven pounds of muscle.</p>\n    <div class=\"panel\">\n      <h3>Fuel the Build</h3>\n      <ul>\n        <li><b>Start with a small surplus.</b> Add roughly 150–250 calories to the intake that keeps body weight stable with this activity level. Longer swim practices may raise that baseline, so adjust from weight trends rather than a watch's calorie estimate.</li>\n        <li><b>Protein: 120–145 g daily.</b> A practical target near 1.6–2.0 g/kg around the goal weight. Spread it across 3–4 meals, using foods such as eggs, dairy, fish, meat, tofu or beans.</li>\n        <li><b>Watch the trend.</b> Weigh under similar morning conditions several times a week and compare weekly averages. A conservative starting target is about 0.25–0.5 lb per week. If the average is flat for 2–3 weeks, add about 100 calories daily; reduce slightly if gaining faster or waist size rises quickly.</li>\n        <li><b>Eat for performance.</b> Include carbohydrates, fruit, vegetables and dietary fats. Keep protein consistent on rest days. No supplement is required for this plan.</li>\n        <li><b>Protect the two rest days.</b> Easy walking or gentle mobility is optional. No scheduled lifting or swimming on the two rest days shown in Week (Thursday and Sunday by default).</li>\n        <li><b>Think in months.</b> At the suggested pace, a seven-pound scale increase may take roughly 14–28 weeks. Water and glycogen can move the scale sooner; muscle gain varies.</li>\n      </ul>\n    </div>\n    <p class=\"lead\">Research supports adequate protein and cautions against aggressive surpluses. The calorie adjustments and slower gain target above are practical starting choices, not guaranteed outcomes. Sources: <a href=\"https://link.springer.com/article/10.1186/s12970-017-0177-8\" target=\"_blank\" rel=\"noopener\">ISSN protein position stand</a> and <a href=\"https://pubmed.ncbi.nlm.nih.gov/37914977/\" target=\"_blank\" rel=\"noopener\">Helms et al., energy-surplus trial (2023)</a>.</p>\n    </div>"
  },
  {
    "id": "care",
    "title": "Pool & lifting safety",
    "summary": "Technique, breathing and supervision",
    "html": "<p class=\"lead\">Swim in a lifeguarded pool and use an instructor while developing breathing and stroke skills.</p><ul><li><b>Breathe normally.</b> No breath-hold sets, hyperventilation or underwater-distance contests. Breathe as often as needed; no fixed every-third-or-fifth-stroke rule.</li><li><b>Stay in control.</b> Stop the set if breathing or technique becomes uncontrolled. Leave the pool if dizzy or unwell; do not push through to fill the hour.</li><li><b>Joint comfort.</b> Stop exercises that cause sharp or joint pain. Use a comfortable range and seek assessment for persistent symptoms.</li><li><b>Rest days.</b> Thursday and Sunday are the default rest days. Moving sessions swaps days within that week and retains two full rest days. Easy walking or mobility is optional.</li></ul>"
  }
];
const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const LONG = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const KEYS = ['mon','tue','wed','thu','fri','sat','sun'];
const PRESETS = [[3,180,60],[5,180,60],[12,180,60]];
/* Cast: one fighter per kind of day, Tide owns the pool. Presentation only. */
const FIGHTERS = {
  upper: { key: 'gale', name: 'Gale', kanji: '風', color: '#5ef2a0', label: 'Upper', title: 'Wood sage' },
  lower: { key: 'fang', name: 'Fang', kanji: '牙', color: '#ff3b6b', label: 'Lower A', title: 'Wolf huntress' },
  push: { key: 'ember', name: 'Ember', kanji: '炎', color: '#ff7a3d', label: 'Push', title: 'Raven flame' },
  pull: { key: 'volt', name: 'Volt', kanji: '雷', color: '#ffe14a', label: 'Pull', title: 'Storm dancer' },
  legs: { key: 'granite', name: 'Granite', kanji: '岩', color: '#b48cff', label: 'Lower B', title: 'Sand guardian' },
  pool: { key: 'tide', name: 'Tide', kanji: '水', color: '#22d3ee', label: 'Pool', title: 'Sea turtle sage' },
  rest: { key: 'still', name: 'Still', kanji: '静', color: '#bcd6ff', label: 'Rest', title: 'Twin lion guardian' },
  flash: { key: 'flash', name: 'Flash', kanji: '閃', color: '#5b8cff', label: 'Rest', title: 'Toad sage' }
};
/* Thursday's rest belongs to Flash, Sunday's to Still; keyed to the session's original day so it follows a moved session */
const fighterOf = d => d.id === 'rest' && d.origin === 3 ? FIGHTERS.flash : FIGHTERS[d.id] || FIGHTERS.rest;
/* scene art shown on each fighter's own day: art/scenes/<key>-<n>.webp */
/* face x (0..1) for scenes whose subject is off center, so every face lands in the same spot */
const SCENE_FX = {"ember-10": 0.39, "fang-1": 0.43, "fang-3": 0.64, "fang-6": 0.45, "fang-7": 0.38, "fang-8": 0.42, "gale-3": 0.41, "still-5": 0.37, "still-8": 0.59, "volt-4": 0.65, "volt-6": 0.42, "volt-7": 0.3};
const SCENES = { gale: [1,2,3,4,5], fang: [1,2,3,4,5,6,7,8,9,10], ember: [1,2,3,4,5,6,7,8,9,10], volt: [1,2,3,4,5,6,7,8,9,10], granite: [1,2,3,4,5], tide: [1,2,3,4,5], still: [1,2,3,4,5,6,7,8,9], flash: [1,2,3,4,5] };
/* Guide pages each borrow one fighter. Presentation only. */
const TOPIC_CAST = { week: 'upper', sets: 'push', progress: 'pull', core: 'legs', cardio: 'pool', fuel: 'lower', care: 'rest' };
const fid = f => Object.keys(FIGHTERS).find(k => FIGHTERS[k] === f);
const heroArt = (f, inner) => '<div class="fs-hero-art" aria-hidden="true"><span class="fs-kanji">' + f.kanji + '</span>' + inner + '</div><button class="fs-hero-name" data-act="castsheet" data-k="' + fid(f) + '" aria-label="View ' + f.name + '"><span>' + f.name + '</span></button>';
const POSE_VIEWS = ['today', 'week', 'guide', 'timer'];
const isSwim = d => !!d.cardio && /swim/i.test(d.cardio.short) && !/optional/i.test(d.cardio.short);

const svg = (d, extra) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + d + '</svg>';
const ICON = {
  today: svg('<path d="M4 8v8m4-11v14m8-14v14m4-11v8M8 12h8M2 12h2m16 0h2"/>'),
  week: svg('<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18"/>'),
  guide: svg('<path d="M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H4zM13 7a3 3 0 0 1 3-3h4v15h-3a4 4 0 0 0-4 2"/>'),
  timer: svg('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6m-3 0v3"/>'),
  check: svg('<path d="m5 12 4 4L19 6"/>', ' stroke-width="2.4"'),
  chev: svg('<path d="m9 6 6 6-6 6"/>', ' class="fs-chev"'),
  back: svg('<path d="m15 6-6 6 6 6"/>'),
  note: svg('<path d="M5 4h14v12l-4 4H5zM15 20v-4h4M8 9h8M8 13h5"/>', ' class="fs-ico"'),
  swim: svg('<path d="M2 16c2-3 4 3 6 0s4 3 6 0 4 3 8 0M2 20c2-3 4 3 6 0s4 3 6 0 4 3 8 0M5 11l5-4 5 4m-5-4 3-4"/><circle cx="18" cy="6" r="2"/>', ' class="fs-ico"'),
  run: svg('<path d="M3 12h4l2-6 4 12 2-6h6"/>', ' class="fs-ico"')
};

function weekStart(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  d.setDate(d.getDate() - (d.getDay() + 6) % 7); return d;
}
function dateKey(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function fmt(s) { const m = Math.floor(s / 60), ss = s % 60; return m + ':' + (ss < 10 ? '0' : '') + ss; }
function shortDate(d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
function splitRx(pr) { const p = pr.split(' · '); return [p[0], p[1] || 'as needed']; }
function splitCardio(note) {
  const m = /^<b>(.*?)<\/b>\s*(.*)$/.exec(note);
  return m ? [m[1].replace(/\.$/, ''), m[2]] : [note, ''];
}

function mount(root, opts) {
  opts = opts || {};
  const now = opts.now ? new Date(opts.now) : new Date();
  let todayIdx = (now.getDay() + 6) % 7;
  let monday = weekStart(now);
  const S = {
    view: opts.view || 'today', day: opts.day == null ? null : opts.day, topic: opts.topic || null,
    preview: !!opts.preview, checks: {}, orders: {}, storageError: !!opts.storageError, open: Object.assign({}, opts.open),
    sheet: opts.sheet || null, sheetFrom: null, cast: null,
    timer: Object.assign({ rounds: 3, work: 180, rest: 60, sound: true, round: 1, phase: 'ready', remaining: null, running: false }, opts.timer)
  };
  function art(f, d, view) {
    d = d || shownDay();
    const context = view || S.view;
    let pose = { today: 0, week: 1, guide: 2, timer: 3 }[context] || 0;
    const alternate = f.key === 'tide' && d.origin === 5;
    const extra = alternate && pose < 2;
    const file = f.key + (extra ? '-pair' : '') + '-poses.webp';
    const w = extra ? 1536 : 1122, h = extra ? 1024 : 1402;
    const cw = w / 2, ch = extra ? h : f.key === 'tide' ? (pose < 2 ? 670 : 728) : h / 2;
    const x = (pose % 2) * cw, y = extra ? 0 : f.key === 'tide' ? (pose < 2 ? 0 : 674) : Math.floor(pose / 2) * ch;
    const faces = {
      gale: [[50,44],[43,46],[52,23],[46,39]],
      fang: [[55,18],[47,23],[47,18],[50,21]],
      ember: [[47,33],[43,34],[49,24],[46,35]],
      volt: [[50,27],[49,28],[50,17],[50,21]],
      still: [[52,21],[52,36],[51,22],[50,24]],
      tide: [[57,40],[46,39],[55,36],[51,45]],
      granite: [[55,23],[55,22],[52,22],[53,23]],
      flash: [[47,21],[46,31],[48,21],[58,32]]
    };
    const face = extra ? [[57,34],[48,35]][pose] : faces[f.key][pose];
    const src = global.FS_ART ? global.FS_ART[file] : 'art/' + file;
    const phase = ['gale','fang','ember','volt','still','tide','granite','flash'].indexOf(f.key) * .7 + pose * .4;
    return '<svg class="fs-art fs-art-' + f.key + '" data-pose="' + f.key + '-' + (extra ? pose + 4 : pose) + '" style="--art-phase:-' + phase + 's;--zoom:270%;--fx:-' + face[0] + '%;--fy:-' + face[1] + '%" width="' + cw + '" height="' + ch + '" viewBox="0 0 ' + cw + ' ' + ch + '" preserveAspectRatio="xMidYMin slice" overflow="hidden" aria-hidden="true">' +
      '<ellipse class="fs-art-energy" cx="' + cw*.5 + '" cy="' + ch*.55 + '" rx="' + cw*.35 + '" ry="' + ch*.3 + '" fill="' + f.color + '" opacity=".06"/>' +
      '<g class="fs-figure"><svg width="' + cw + '" height="' + ch + '" viewBox="' + [x,y,cw,ch].join(' ') + '" overflow="hidden"><image href="' + src + '" width="' + w + '" height="' + h + '"/></svg></g></svg>';

  }
  const av = (f, cls, d, view) => '<span class="fs-av' + (cls ? ' ' + cls : '') + '" style="--el:' + f.color + '" aria-hidden="true">' + art(f, d, view) + '</span>';

  function read(key, fallback) {
    try { const v=localStorage.getItem('floatsting:'+key); return v===null?fallback:JSON.parse(v); }
    catch(e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem('floatsting:'+key,JSON.stringify(value)); S.storageError=false; }
    catch(e) { S.storageError=true; }
  }
  /* width block inserted Straight-Arm Pulldown at Pull row 2; shift saved Pull checks once so they stay on the same exercise */
  if (!read('width-v1', false)) {
    try {
      Object.keys(localStorage).filter(k => k.indexOf('floatsting:checks:swim-core-v5:') === 0).forEach(k => {
        const wk = JSON.parse(localStorage.getItem(k));
        if (wk && Array.isArray(wk.fri)) { wk.fri = wk.fri.map(i => Number.isInteger(i) && i >= 2 ? i + 1 : i); localStorage.setItem(k, JSON.stringify(wk)); }
      });
    } catch(e) {}
    write('width-v1', true);
  }
  S.artMotion =read('character-motion', true) !== false;
  const prefs=read('prefs',{}) || {};
  const valid=(v,min,max,fallback)=>Number.isInteger(v)&&v>=min&&v<=max?v:fallback;
  Object.assign(S.timer,{rounds:valid(prefs.rounds,1,20,3),work:valid(prefs.work,30,300,180),rest:valid(prefs.rest,15,180,60),sound:typeof prefs.sound==='boolean'?prefs.sound:true});
  function savePrefs() { const t=S.timer; write('prefs',{rounds:t.rounds,work:t.work,rest:t.rest,sound:t.sound}); }
  if (S.timer.remaining == null) S.timer.remaining = S.timer.work;
  let tick = null;

  function weekOf(preview) { const w = new Date(monday); if (preview) w.setDate(w.getDate() + 7 * Number(preview)); return w; }
  function weekOrder(preview) {
    const k = dateKey(weekOf(preview));
    if (!S.orders[k]) {
      const saved = read('order:swim-core-v5:' + k, null);
      S.orders[k] = Array.isArray(saved) && saved.length === 7 && new Set(saved).size === 7 && saved.every(i => Number.isInteger(i) && i >= 0 && i < 7) ? saved : [0,1,2,3,4,5,6];
    }
    return S.orders[k];
  }
  function swapSessions(preview, from, to) {
    if (![from,to].every(i => Number.isInteger(i) && i >= 0 && i < 7)) return;
    const order = weekOrder(preview).slice();
    [order[from],order[to]] = [order[to],order[from]];
    S.orders[dateKey(weekOf(preview))] = order;
    write('order:swim-core-v5:' + dateKey(weekOf(preview)), order);
  }
  function planFor(preview) {
    const week = weekOf(preview);
    const weeks = Math.round((Date.UTC(week.getFullYear(), week.getMonth(), week.getDate()) - Date.UTC(2026, 8, 21)) / 604800000);
    const rotation = ((weeks % ROTATION.length) + ROTATION.length) % ROTATION.length;
    return weekOrder(preview).map((origin, i) => {
      const id = ROTATION[rotation][origin];
      const date = new Date(week); date.setDate(date.getDate() + i);
      return Object.assign({}, WORKOUTS[id], { id: id, cardio: CARDIO[origin], key: KEYS[origin], origin: origin, idx: i, date: date, rotation: rotation, preview: preview });
    });
  }
  function weekChecks(preview) {
    const k=dateKey(weekOf(preview));
    if (!Object.prototype.hasOwnProperty.call(S.checks,k)) {
      let saved=read('checks:swim-core-v5:'+k,null);
      if (saved===null) {
        const previous=read('checks:swim-build-v4:'+k,{});
        const changed={upper:[5],lower:[],push:[5],pull:[4],legs:[5],rest:[]};
        saved={};
        planFor(preview).forEach(d=>{
          if (Array.isArray(previous?.[d.key])) saved[d.key]=previous[d.key].filter(i=>Number.isInteger(i)&&i>=0&&i<d.ex.length&&!changed[d.id].includes(i));
        });
        write('checks:swim-core-v5:'+k,saved);
      }
      S.checks[k]=saved&&typeof saved==='object'&&!Array.isArray(saved)?saved:{};
    }
    return S.checks[k];
  }
  function done(d) {
    const arr=weekChecks(d.preview)[d.key];
    return Array.isArray(arr)?[...new Set(arr.filter(i=>Number.isInteger(i)&&i>=0&&i<d.ex.length))]:[];
  }
  function setDone(d,arr) {
    const wk=weekChecks(d.preview); wk[d.key]=arr;
    write('checks:swim-core-v5:'+dateKey(weekOf(d.preview)),wk);
  }
  function swimDone(d) { return isSwim(d) && weekChecks(d.preview)[d.key + ':swim'] === true; }

  /* ---------- views ---------- */
  function dayHTML(d, back) {
    const n = d.ex.length, dn = done(d), isRest = !n, f = fighterOf(d);
    let h = '<div class="fs-col fs-md-detail" style="--el:' + f.color + '">';
    const stamp = ', ' + shortDate(d.date) + (d.preview ? ' · Next week' : '');
    if (back) h += '<div class="fs-backrow"><button class="fs-back" data-act="back">' + ICON.back + back + '</button></div>';
    h += '<header class="fs-head fs-hero"><div class="fs-hero-text">' +
      '<h1 class="fs-h1">' + d.name + '</h1><p class="fs-sub">' + (isRest ? 'No lifting, swimming or running today' : d.tag.replace(/ \+ /g, ', ')) + '</p>' +
      '<p class="fs-eyebrow fs-meta">' + LONG[d.idx] + stamp + '</p></div>' +
      heroArt(f, art(f, d)) + '</header>';
    if (S.storageError) h += '<p class="fs-notice" role="status">Progress could not be saved on this device. Keep this page open to retain these checks for now.</p>';
    if (isRest) {
      h += '<button class="fs-move" data-act="move" data-idx="' + d.idx + '">Move rest day</button>';
      const plan = planFor(d.preview);
      let nx = plan.slice(d.idx + 1).find(p => p.ex.length), when;
      if (nx) when = LONG[nx.idx]; else { nx = planFor(Number(d.preview) + 1).find(p => p.ex.length); when = 'Next ' + LONG[nx.idx]; }
      h += '<div class="fs-rest"><div class="fs-rest-art" aria-hidden="true"><span class="fs-kanji">' + f.kanji + '</span>' + art(f, d) + '</div><p>' + d.note + '</p></div>' +
        '<p class="fs-next">' + av(fighterOf(nx), '', nx) + '<span>Next session</span><b>' + when + ' · ' + nx.name + (nx.cardio ? ', ' + nx.cardio.short.toLowerCase() : '') + '</b></p>';
      return h + '</div>';
    }
    const full = dn.length === n;
    h += '<div class="fs-prog"><span class="fs-bar"><i style="width:' + (dn.length / n * 100) + '%"></i></span>' +
      '<span class="fs-count' + (full ? ' is-done' : '') + '">' + (full ? 'Complete' : dn.length + ' of ' + n) + '</span>' +
      (dn.length ? '<button class="fs-reset" data-act="reset" data-idx="' + d.idx + '">Reset</button>' : '') + '</div>';
    const up = d.ex.findIndex((e, i) => dn.indexOf(i) < 0);
    h += '<ul class="fs-ex' + (d.ex.length > 6 ? ' is-long' : '') + '" style="--kj:\'' + f.kanji + '\'">' + d.ex.map((e, i) => {
      const rx = splitRx(e[2]), on = dn.indexOf(i) >= 0;
      return '<li><button class="fs-row' + (opts.focusDemo === i ? ' is-focus' : '') + (i === up ? ' is-next' : '') + '" style="--i:' + i + '" data-act="check" data-idx="' + d.idx + '" data-i="' + i + '" aria-pressed="' + on + '">' +
        '<span class="fs-box"><span>' + e[0] + '</span>' + ICON.check + '</span><span class="fs-name">' + e[1] + '</span>' +
        '<span class="fs-rx"><b>' + rx[0] + '</b><small>rest ' + rx[1] + '</small></span></button></li>';
    }).join('') + '</ul>';
    h += '<div class="fs-links">';
    if (d.cardio) {
      const c = splitCardio(d.cardio.note), sw = /swim/i.test(d.cardio.short) && !/optional/i.test(d.cardio.short);
      h += '<button class="fs-link' + (sw ? ' is-pool" style="--el:' + FIGHTERS.pool.color : '') + '" data-act="sheet" data-sheet="cardio" data-idx="' + d.idx + '">' + (sw ? '<span class="fs-wart" aria-hidden="true">' + art(FIGHTERS.pool, d) + '</span>' + av(FIGHTERS.pool, '', d) : ICON.run) +
        '<span class="fs-sumtext"><b>' + d.cardio.short + '</b><small>' + c[0].replace(/^[^:]*:\s*/, '') + '</small></span>' + ICON.chev + '</button>';
    }
    h += '<div class="fs-noteactions"><button class="fs-link" data-act="sheet" data-sheet="note" data-idx="' + d.idx + '">' + ICON.note +
      '<span class="fs-sumtext"><b>Session notes</b></span></button><button class="fs-move" data-act="move" data-idx="' + d.idx + '">Move session</button></div></div>';
    /* swim days: Tide stands with the day's fighter. Same action as the swim row, so it stays out of the tab order. */
    if (isSwim(d)) h += '<button class="fs-partner" data-act="partner" data-idx="' + d.idx + '" tabindex="-1" aria-hidden="true">' + av(FIGHTERS.pool, '', d) + '<b>' + d.cardio.short + '</b></button>';
    return h + '</div>';
  }

  function weekListHTML() {
    const plan = planFor(S.preview), a = plan[0].date, b = plan[6].date;
    const sel = S.day == null ? (S.preview ? 0 : todayIdx) : S.day;
    const hd = plan[sel], hf = fighterOf(hd);
    return '<div class="fs-col fs-md-list"><header class="fs-weekhead"><div class="fs-head fs-band fs-weekhero" style="--el:' + hf.color + '"><div class="fs-hero-text"><h1 class="fs-h1">' + (S.preview ? 'Next week' : 'This week') + '</h1>' +
      '<p class="fs-sub">' + shortDate(a) + ' to ' + shortDate(b) + '</p><p class="fs-eyebrow fs-meta">' + (!S.preview && hd.idx === todayIdx ? 'Today' : DAYS[hd.idx]) + ' · ' + hd.name + '</p></div>' + heroArt(hf, art(hf, hd)) + '</div>' +
      '<div class="fs-seg" role="group" aria-label="Week"><button data-act="seg" data-preview="0" aria-pressed="' + !S.preview + '">This week</button><button data-act="seg" data-preview="1" aria-pressed="' + S.preview + '">Next week</button></div></header>' +
      '<p class="fs-tally"><span><b>' + plan.filter(d => d.ex.length).length + '</b> lifts</span><span class="is-pool"><b>' + plan.filter(isSwim).length + '</b> swims</span><span class="is-rest"><b>' + plan.filter(d => !d.ex.length).length + '</b> rest<i> days</i></span></p>' +
      '<ul class="fs-week">' + plan.map(d => {
        const n = d.ex.length, dn = done(d).length, isToday = !S.preview && d.idx === todayIdx;
        const side = !n ? '<span class="fs-wside is-resttag">Rest</span>' : dn === n ? '<span class="fs-wside is-done">' + ICON.check + 'Done</span>' : dn ? '<span class="fs-wside">' + dn + ' of ' + n + '</span>' : '';
        return '<li><button class="fs-wrow' + (isToday ? ' is-today' : '') + (n ? '' : ' is-rest') + '" style="--el:' + fighterOf(d).color + '" data-act="openday" data-idx="' + d.idx + '"' + (d.idx === sel ? ' aria-current="true"' : '') + '>' +
          '<span class="fs-wart" aria-hidden="true">' + art(fighterOf(d), d) + '</span><span class="fs-date"><small>' + DAYS[d.idx] + '</small><b>' + d.date.getDate() + '</b></span>' + av(fighterOf(d), '', d) +
          '<span class="fs-wmain"><b>' + d.name + '</b><small>' + (isToday ? 'Today' + (d.cardio ? ' · ' : '') : '') + (d.cardio ? d.cardio.short + (swimDone(d) ? ' ✓' : '') : (n || isToday ? '' : 'Recover')) + '</small></span>' + (isSwim(d) ? av(FIGHTERS.pool, 'is-mini', d) : '') + side + ICON.chev + '</button></li>';
      }).join('') + '</ul></div>';
  }

  function topicItems(html) {
    const box = document.createElement('div'); box.innerHTML = html;
    const items = []; let leads = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.children).forEach(el => {
        if (el.matches('ul')) Array.prototype.slice.call(el.children).forEach(li => {
          const n = li.querySelector('.n'); if (n) n.remove();
          const b = li.querySelector('b');
          if (!b || li.textContent.trim().indexOf(b.textContent.trim()) !== 0) { items.push({ title: null, html: li.innerHTML }); return; }
          const full = b.textContent.trim(), cut = full.indexOf(':');
          if (cut > 0 && cut < 24) { b.textContent = full.slice(cut + 1).trim(); items.push({ title: full.slice(0, cut), html: li.innerHTML.trim() }); }
          else { b.remove(); items.push({ title: full.replace(/[.:]$/, ''), html: li.innerHTML.trim() }); }
        });
        else if (el.matches('.drills')) { const b = el.querySelector('b'), title = b ? b.textContent.trim() : 'More'; if (b) b.remove(); items.push({ title: title, html: el.innerHTML.trim() }); }
        else if (el.matches('p')) items.push({ title: el.querySelector('a') ? 'Research and sources' : (leads++ ? 'Also' : 'Overview'), html: el.innerHTML.trim() });
        else if (!el.matches('h3')) walk(el);
      });
    })(box);
    return items.filter(i => i.title).length >= 3 && items.every(i => i.title) ? items : null;
  }

  function topicHTML(g) {
    const items = topicItems(g.html);
    if (!items) return '<div class="fs-topic">' + g.html + '</div>';
    const intro = items[0].title === 'Overview' ? items[0] : null;
    return (intro ? '<div class="fs-topic"><p>' + intro.html + '</p></div>' : '') + '<div class="fs-links">' + items.map((it, i) => it === intro ? '' :
      '<button class="fs-link" data-act="sheet" data-sheet="guide" data-topic="' + g.id + '" data-gi="' + i + '"><span class="fs-sumtext"><b>' + it.title + '</b></span>' + ICON.chev + '</button>').join('') + '</div>';
  }

  function guideHTML() {
    const cur = GUIDE.find(g => g.id === S.topic) || GUIDE[0];
    const tid = fid(fighterOf(planFor(false)[todayIdx])), ck = FIGHTERS[S.cast] ? S.cast : FIGHTERS[tid] ? tid : 'rest', cf = FIGHTERS[ck], tf = FIGHTERS[TOPIC_CAST[cur.id]] || cf;
    return '<div class="fs-md' + (S.topic ? ' has-detail' : '') + '"><div class="fs-col fs-md-list"><header class="fs-head fs-band fs-guidehero" style="--el:' + cf.color + '"><div class="fs-hero-text"><h1 class="fs-h1">Guide</h1><p class="fs-sub">How the plan works and why</p><p class="fs-eyebrow fs-meta">' + cf.label + ' · ' + cf.title + '</p></div>' + heroArt(cf, art(cf)) + '</header>' +
      '<ul class="fs-cast" aria-label="The cast">' + ['upper', 'lower', 'push', 'pull', 'legs', 'pool', 'rest', 'flash'].map(k => '<li style="--el:' + FIGHTERS[k].color + '"><button class="fs-castbtn" data-act="cast" data-k="' + k + '" aria-pressed="' + (k === ck) + '" aria-label="' + FIGHTERS[k].name + ', ' + FIGHTERS[k].label + '">' + av(FIGHTERS[k]) + '<b>' + FIGHTERS[k].name + '</b><small>' + FIGHTERS[k].label + '</small></button></li>').join('') + '</ul>' +
      '<ul class="fs-topics">' + GUIDE.map(g => '<li><button class="fs-trow" data-act="opentopic" data-topic="' + g.id + '"' + (g.id === cur.id ? ' aria-current="true"' : '') + '><span><b>' + g.title + '</b><small>' + g.summary + '</small></span>' + ICON.chev + '</button></li>').join('') + '</ul>' +
      '<button class="fs-art-toggle" data-act="artmotion" aria-pressed="' + S.artMotion + '">' + (S.artMotion ? 'Pause art' : 'Animate art') + '</button></div>' +
      '<div class="fs-col fs-md-detail fs-read"><button class="fs-back" data-act="back">' + ICON.back + 'Guide</button><header class="fs-head fs-band fs-topichero" style="--el:' + tf.color + '"><div class="fs-hero-text"><h1 class="fs-h2">' + cur.title + '</h1><p class="fs-sub">' + cur.summary + '</p></div>' + heroArt(tf, art(tf)) + '</header>' + topicHTML(cur) + '</div></div>';
  }

  function timerHTML() {
    const t = S.timer, R = 104, C = 2 * Math.PI * R, total = t.phase === 'rest' ? t.rest : t.work;
    const label = { ready: 'Ready', work: 'Work', rest: 'Rest', done: 'Complete' }[t.phase];
    const btn = t.running ? 'Pause' : (t.phase === 'work' || t.phase === 'rest') ? 'Resume' : 'Start';
    const active = t.phase === 'work' || t.phase === 'rest';
    const openAdj = !!S.open.adjust;
    const d = planFor(false)[todayIdx], f = fighterOf(d);
    let ticks = '';
    for (let i = 0; i < 60; i++) ticks += '<line class="tk' + (i % 5 ? '' : ' is-major') + '" x1="112" y1="' + (i % 5 ? 17 : 16) + '" x2="112" y2="' + (i % 5 ? 21 : 25) + '" transform="rotate(' + i * 6 + ' 112 112)"/>';
    let pips = '';
    if (t.rounds <= 12) {
      for (let i = 1; i <= t.rounds; i++) pips += '<i' + (t.phase === 'done' || i < t.round ? ' class="is-done"' : (i === t.round && active ? ' class="is-on"' : '')) + '></i>';
      pips = '<div class="fs-pips" aria-hidden="true">' + pips + '</div>';
    }
    return '<div class="fs-timer' + (openAdj ? ' is-adjust' : '') + '" data-phase="' + t.phase + '" style="--el:' + f.color + '"><span class="fs-timer-kanji" aria-hidden="true">' + f.kanji + '</span>' +
      '<div class="fs-band fs-timerhero"><div class="fs-hero-text"><p class="fs-timer-name">' + f.name + '</p><p class="fs-sub">' + d.name + '</p><p class="fs-eyebrow fs-meta">' + f.title + '</p></div>' + heroArt(f, art(f, d)) + '</div>' +
      '<div class="fs-ring"><svg viewBox="0 0 224 224">' + ticks + '<circle class="bg" cx="112" cy="112" r="' + R + '"/><circle class="fg" data-t="ring" cx="112" cy="112" r="' + R + '" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - Math.max(t.remaining, 0) / total)) + '"/></svg>' +
      '<div class="fs-clock"><p class="fs-phase" data-t="phase">' + label + '</p><b data-t="time">' + fmt(Math.max(t.remaining, 0)) + '</b><span data-t="round">Round ' + t.round + ' of ' + t.rounds + '</span></div></div>' + pips +
      '<div class="fs-ctl"><button class="fs-btn' + (t.running ? '' : ' is-primary') + '" data-act="toggletimer">' + btn + '</button><button class="fs-btn" data-act="resettimer">Reset</button></div>' +
      (active ? '' : '<div class="fs-presets">' + PRESETS.map(p => '<button data-act="preset" data-p="' + p.join(',') + '" aria-pressed="' + (p[0] === t.rounds && p[1] === t.work && p[2] === t.rest) + '">' + p[0] + ' × 3 min</button>').join('') + '</div>') +
      '<details class="fs-adjust" data-open="adjust"' + (openAdj ? ' open' : '') + '><summary>Adjust<small>' + t.rounds + ' × ' + fmt(t.work) + ' · rest ' + fmt(t.rest) + '</small></summary><div class="fs-adjust-body">' +
      [['rounds', 'Rounds', t.rounds], ['work', 'Work', fmt(t.work)], ['rest', 'Rest', fmt(t.rest)]].map(r =>
        '<div class="fs-set"><span>' + r[1] + '</span><span class="fs-step"><button data-act="step" data-k="' + r[0] + '" data-d="-1" aria-label="Less ' + r[1].toLowerCase() + '">−</button><b>' + r[2] + '</b><button data-act="step" data-k="' + r[0] + '" data-d="1" aria-label="More ' + r[1].toLowerCase() + '">+</button></span></div>').join('') +
      '<div class="fs-set"><span>Bell sound</span><button class="fs-switch" role="switch" aria-checked="' + t.sound + '" aria-label="Bell sound" data-act="sound"></button></div>' +
      '<p class="fs-hint">' + ('wakeLock' in navigator ? 'Screen stays awake while the timer runs.' : 'Keep this tab open while the timer runs.') + '</p></div></details></div>';
  }

  function sheetHTML() {
    if (!S.sheet) return '';
    let eyebrow, title, body, pool = false;
    if (S.sheet.kind === 'cast') {
      const f = FIGHTERS[S.sheet.k] || FIGHTERS.rest, n = f.key === 'tide' ? 6 : 4, p = Math.min(S.sheet.pose || 0, n - 1);
      const pd = i => i < 4 ? [{ origin: -1 }, POSE_VIEWS[i]] : [{ origin: 5 }, POSE_VIEWS[i - 4]];
      let poses = '';
      for (let i = 0; i < n; i++) poses += '<button data-act="castpose" data-p="' + i + '" aria-pressed="' + (i === p) + '" aria-label="Pose ' + (i + 1) + '">' + av(f, '', pd(i)[0], pd(i)[1]) + '</button>';
      return '<div class="fs-sheetwrap" data-act="closesheet"><div class="fs-sheet is-gallery" role="dialog" aria-modal="true" aria-label="' + f.name + '" style="--el:' + f.color + '">' +
        '<div class="fs-gallery" aria-hidden="true"><span class="fs-kanji">' + f.kanji + '</span>' + art(f, pd(p)[0], pd(p)[1]) + '</div>' +
        '<h2 class="fs-h2">' + f.name + '</h2><p class="fs-eyebrow fs-meta">' + f.label + ' · ' + f.title + '</p>' +
        '<div class="fs-poses" role="group" aria-label="Poses">' + poses + '</div>' +
        '<div class="fs-poses is-cast" role="group" aria-label="Fighters">' + Object.keys(FIGHTERS).map(k => '<button data-act="castsheet" data-k="' + k + '" aria-pressed="' + (FIGHTERS[k] === f) + '" aria-label="' + FIGHTERS[k].name + '" style="--el:' + FIGHTERS[k].color + '">' + av(FIGHTERS[k], '', { origin: -1 }, 'guide') + '</button>').join('') + '</div>' +
        '<button class="fs-sheet-close" data-act="closesheet" data-close>Done</button></div></div>';
    }
    if (S.sheet.kind === 'move') {
      const plan = planFor(S.sheet.preview), d = plan[S.sheet.idx];
      eyebrow = shortDate(plan[0].date) + ' to ' + shortDate(plan[6].date); title = 'Move ' + d.name;
      body = '<p class="fs-sheet-lead">Swap with another day. Saved lift and swim checks move with the session.</p>' +
        (!S.sheet.preview && d.idx !== todayIdx ? '<button class="fs-btn is-primary" data-act="swap" data-to="' + todayIdx + '">Train today · swap with ' + plan[todayIdx].name + '</button>' : '') +
        '<div class="fs-move-list">' + plan.filter(p => p.idx !== d.idx).map(p => '<button class="fs-link" data-act="swap" data-to="' + p.idx + '">' + av(fighterOf(p), '', p) + '<span class="fs-sumtext"><b>' + LONG[p.idx] + '</b><small>' + p.name + (p.cardio ? ' + ' + p.cardio.short : '') + '</small></span>' + ICON.chev + '</button>').join('') + '</div>' +
        '<p class="fs-hint">This week only. Paired swims move too; five lifts, two swims and two full rest days stay in the plan.</p>';
    } else if (S.sheet.kind === 'guide') {
      const g = GUIDE.find(x => x.id === S.sheet.topic), it = topicItems(g.html)[S.sheet.gi];
      eyebrow = g.title; title = it.title; body = '<div class="fs-topic"><p>' + it.html + '</p></div>';
    } else {
      const d = planFor(S.sheet.preview)[S.sheet.idx], isCardio = S.sheet.kind === 'cardio', c = isCardio ? splitCardio(d.cardio.note) : null;
      eyebrow = LONG[d.idx] + ' · ' + d.name; title = isCardio ? d.cardio.short : 'Session notes'; pool = isCardio && isSwim(d);
      body = isCardio ? '<p class="fs-sheet-lead">' + c[0] + '.</p><p>' + c[1] + '</p>' : '<p>' + d.note + '</p>';
      if (pool) body += '<button class="fs-btn is-primary" data-act="checkswim" aria-pressed="' + swimDone(d) + '">' + (swimDone(d) ? 'Swim complete ✓ · Undo' : 'Mark swim complete') + '</button>';
    }
    return '<div class="fs-sheetwrap" data-act="closesheet"><div class="fs-sheet" role="dialog" aria-modal="true" aria-label="' + title.replace(/"/g, '') + '">' +
      (pool ? '<div class="fs-sheet-art" style="--el:' + FIGHTERS.pool.color + '" aria-hidden="true"><span class="fs-kanji">' + FIGHTERS.pool.kanji + '</span>' + art(FIGHTERS.pool, planFor(S.sheet.preview)[S.sheet.idx]) + '</div>' : '') +
      '<h2 class="fs-h2">' + title + '</h2><p class="fs-eyebrow fs-meta">' + eyebrow + '</p>' + body + '<button class="fs-sheet-close" data-act="closesheet" data-close>Done</button></div></div>';
  }

  function navTimerLabel() {
    const tm = S.timer;
    if (tm.phase !== 'work' && tm.phase !== 'rest') return '<span>Timer</span>';
    return tm.running ? '<span data-t="time">' + fmt(tm.remaining) + '</span>' : '<span>Paused ' + fmt(tm.remaining) + '</span>';
  }

  function stageHTML(d) {
    const f = fighterOf(d);
    return '<aside class="fs-stage" style="--el:' + f.color + '" aria-hidden="true"><span class="fs-kanji">' + f.kanji + '</span>' + art(f, d) +
      (isSwim(d) ? '<span class="fs-stage-pool">' + av(FIGHTERS.pool, '', d) + '<b>' + d.cardio.short + '</b></span>' : '') +
      '<p><b>' + f.name + '</b><small>' + d.name + '</small></p></aside>';
  }
  function shownDay() {
    if (S.view !== 'week') return planFor(false)[todayIdx];
    return planFor(S.preview)[S.day == null ? (S.preview ? 0 : todayIdx) : S.day];
  }
  function mainHTML() {
    if (S.view === 'guide') return guideHTML();
    if (S.view === 'timer') return timerHTML();
    const d = shownDay();
    if (S.view === 'today') return '<div class="fs-md has-detail">' + weekListHTML() + dayHTML(d, '') + stageHTML(d) + '</div>';
    return '<div class="fs-md' + (S.day == null ? '' : ' has-detail') + '">' + weekListHTML() + dayHTML(d, 'Week') + stageHTML(d) + '</div>';
  }

  /* ---------- paint ---------- */
  root.innerHTML = '<div class="fs-shell"><main class="fs-main" data-main></main><div data-sheethost></div><nav class="fs-nav" aria-label="App navigation">' +
    [['today', 'Today'], ['week', 'Week'], ['guide', 'Guide'], ['timer', 'Timer']].map(v => '<button data-act="nav" data-view="' + v[0] + '">' + ICON[v[0]] + '<span data-navlabel>' + v[1] + '</span></button>').join('') + '</nav><div class="fs-backdrop" data-backdrop aria-hidden="true"></div></div>';
  const elMain = root.querySelector('[data-main]'), elTimerTab = root.querySelector('.fs-nav [data-view="timer"]'), elSheet = root.querySelector('[data-sheethost]'), elBack = root.querySelector('[data-backdrop]');
  let lastScreen = '', lastEnter = '';
  const reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (opts.intro !== false && !reduceMotion) {
    const f0 = fighterOf(planFor(false)[todayIdx]), intro = document.createElement('div');
    intro.className = 'fs-intro'; intro.setAttribute('aria-hidden', 'true'); intro.style.setProperty('--el', f0.color);
    intro.innerHTML = '<i></i><b>' + f0.kanji + '</b><strong>Float &amp; Sting</strong>';
    root.firstElementChild.appendChild(intro);
    intro.addEventListener('animationend', ev => { if (ev.target === intro) intro.remove(); });
    setTimeout(() => intro.remove(), 2400);
  }

  function keyOf(el) {
    if (!el || !el.dataset || !el.dataset.act) return null;
    return '[data-act="' + el.dataset.act + '"]' + ['idx', 'i', 'view', 'topic', 'preview', 'k', 'd', 'p', 'gi', 'sheet', 'to'].map(k => el.dataset[k] != null ? '[data-' + k + '="' + el.dataset[k] + '"]' : '').join('');
  }
  /* phones: the standing figure beside the workout column. The day's fighter in the tab's pose; Guide shows the featured or page fighter. Repainted only when it changes. */
  let lastBack = '';
  function paintBackdrop() {
    const d = shownDay(), own = fighterOf(d);
    let f = own; const view = S.view;
    if (S.view === 'guide') { const cur = GUIDE.find(g => g.id === S.topic); f = (cur && FIGHTERS[TOPIC_CAST[cur.id]]) || FIGHTERS[S.cast] || own; }
    const mine = view !== 'timer' && SCENES[f.key];
    /* swim days share the stage with Tide, alternating scenes */
    const scenes = mine && (isSwim(d) && f === own ? [].concat.apply([], mine.map((n, i) => [[f.key, n], ['tide', SCENES.tide[i % SCENES.tide.length]]])) : mine.map(n => [f.key, n]));
    const key = f.key + '|' + view + '|' + d.origin + (scenes ? '|scenes' : '');
    root.firstElementChild.style.setProperty('--el2', f.color);
    if (key === lastBack) return;
    lastBack = key;
    clearInterval(sceneTick); sceneTick = null;
    elBack.innerHTML = '<span class="fs-kanji">' + f.kanji + '</span>' + (scenes ? '<div class="fs-scenes" data-n="0"><img class="fs-scene is-on" alt="" decoding="async" style="--fx:' + sceneFx(scenes[0]) + '" src="' + sceneSrc(scenes[0]) + '"></div>' : art(f, d, view));
    elBack.classList.remove('is-in'); void elBack.offsetWidth; elBack.classList.add('is-in');
    sceneList = scenes || [];
    if (sceneList.length > 1) sceneTick = setInterval(nextScene, 5000);
  }
  /* every day the stage cycles that fighter's scene art every 5 seconds (Timer keeps the pose); it holds still while art is paused, hidden or reduced */
  let sceneTick = null, sceneList = [];
  const sceneFx = kn => SCENE_FX[kn[0] + '-' + kn[1]] || 0.5;
  const sceneSrc = kn => { const file = 'scenes/' + kn[0] + '-' + kn[1] + '.webp'; return global.FS_ART && global.FS_ART[file] || 'art/' + file; };
  function nextScene() {
    const box = elBack.querySelector('.fs-scenes');
    if (!box || !S.artMotion || document.hidden || reduceMotion || box.dataset.busy) return;
    const n = (+box.dataset.n + 1) % sceneList.length, img = new Image();
    img.className = 'fs-scene'; img.alt = ''; img.decoding = 'async'; img.style.setProperty('--fx', sceneFx(sceneList[n])); box.dataset.busy = '1';
    img.onload = () => {
      delete box.dataset.busy;
      if (!box.isConnected) return;
      const old = box.querySelector('.fs-scene.is-on');
      box.appendChild(img); box.dataset.n = n; void img.offsetWidth; img.classList.add('is-on');
      if (old) { old.classList.remove('is-on'); setTimeout(() => old.remove(), 1000); }
    };
    img.onerror = () => { delete box.dataset.busy; box.dataset.n = n; };
    img.src = sceneSrc(sceneList[n]);
  }
  function render() {
    root.classList.toggle('is-art-paused', !S.artMotion || document.hidden);
    const screen = S.view + '|' + S.day + '|' + S.topic + '|' + S.preview;
    elMain.classList.toggle('is-enter', screen + S.cast !== lastEnter); lastEnter = screen + S.cast;
    const fk = root.contains(document.activeElement) ? keyOf(document.activeElement) : null, st = elMain.scrollTop;
    elMain.innerHTML = mainHTML();
    elMain.classList.toggle('fs-night', S.view === 'timer');
    root.firstElementChild.dataset.view = S.view;
    root.firstElementChild.style.setProperty('--el', fighterOf(shownDay()).color);
    paintBackdrop();
    elTimerTab.querySelector('[data-navlabel], span').outerHTML = navTimerLabel().replace('<span', '<span data-navlabel');
    elSheet.innerHTML = sheetHTML();
    elMain.inert=!!S.sheet; root.querySelector('.fs-nav').inert=!!S.sheet;
    elTimerTab.classList.toggle('is-live', S.timer.phase === 'work' || S.timer.phase === 'rest');
    root.querySelectorAll('.fs-nav button').forEach(b => { if (b.dataset.view === S.view) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
    elMain.scrollTop = screen === lastScreen ? st : 0; lastScreen = screen;
    if (S.sheet && opts.autofocus !== false) { const cl = elSheet.querySelector('[data-close]'); if (cl) cl.focus({ preventScroll: true }); }
    else if (fk) { const f = root.querySelector(fk); if (f) f.focus({ preventScroll: true }); }
  }
  /* ---------- check-off effects: finite, pointer only, drawn over the row, never block input ---------- */
  const FORMS = {
    upper: { w: 3, main: ['M0 14 Q50 -4 100 9'], trail: ['M10 17 Q55 4 96 13', 'M4 8 Q40 0 80 4'] },
    lower: { w: 4, main: ['M32 -2 L20 22', 'M54 -2 L42 22', 'M76 -2 L64 22'], trail: ['M0 13 L100 8', 'M10 5 L90 3'] },
    push: { w: 3.5, main: ['M0 12 C15 2 22 18 36 9 S58 2 70 10 S90 14 100 6'], trail: ['M0 15 C15 5 22 21 36 12 S58 5 70 13 S90 17 100 9', 'M0 9 C15 -1 22 15 36 6 S58 -1 70 7 S90 11 100 3'] },
    pull: { w: 3, main: ['M0 12 L22 6 L30 14 L52 5 L60 13 L82 6 L100 10'], trail: ['M30 14 L41 20', 'M60 13 L73 19'] },
    legs: { w: 5, main: ['M0 11 L100 9'], trail: ['M38 10 L44 2 L51 5', 'M62 10 L68 18 L77 15'] }
  };
  const EASE = 'cubic-bezier(.6,0,.2,1)';
  const fxPath = (d, k, n, w, color) => '<path data-k="' + k + '" data-n="' + n + '" d="' + d + '" stroke="' + color + '" stroke-width="' + w + '" vector-effect="non-scaling-stroke" pathLength="1" stroke-dasharray="1 2" stroke-dashoffset="1"/>';
  const fxSvg = inner => '<svg viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" stroke-linejoin="miter">' + inner + '</svg>';
  function drawStroke(p, dur, delay, hold) {
    return p.animate([{ strokeDashoffset: 1, opacity: 1 }, { strokeDashoffset: 0, opacity: 1, offset: hold }, { strokeDashoffset: 0, opacity: 0 }], { duration: dur, delay: delay, easing: EASE, fill: 'both' });
  }
  function playCheck(row, id) {
    const form = FORMS[id];
    if (!form || reduceMotion || !row || !row.animate) return;
    const color = FIGHTERS[id].color, fx = document.createElement('span');
    fx.className = 'fs-fx'; fx.setAttribute('aria-hidden', 'true'); fx.style.setProperty('--el', color);
    fx.innerHTML = fxSvg(form.main.map((d, n) => fxPath(d, 'm', n, form.w, color)).join('') + form.trail.map((d, n) => fxPath(d, 't', n, 1.5, n ? color : '#efe9dc')).join('')) +
      '<i class="fs-fx-ring"></i>' + [0, 1, 2, 3, 4].map(n => '<i class="fs-fx-spark" data-n="' + n + '"></i>').join('');
    row.appendChild(fx);
    fx.querySelectorAll('path').forEach(p => {
      const main = p.dataset.k === 'm', n = +p.dataset.n;
      drawStroke(p, main ? 420 : 380, main ? n * 45 : 70 + n * 60, main ? .58 : .5);
    });
    fx.querySelector('.fs-fx-ring').animate([{ transform: 'scale(.6)', opacity: 1 }, { transform: 'scale(1.9)', opacity: 0 }], { duration: 300, easing: 'ease-out', fill: 'both' });
    fx.querySelectorAll('.fs-fx-spark').forEach(s => {
      const n = +s.dataset.n, ang = -1.1 + n * .55, r = 26 + (n % 2) * 12;
      s.animate([{ transform: 'translate(0,0) rotate(45deg) scale(1)', opacity: 1 }, { transform: 'translate(' + Math.round(Math.cos(ang) * r) + 'px,' + Math.round(Math.sin(ang) * r) + 'px) rotate(45deg) scale(.2)', opacity: 0 }], { duration: 320, delay: 40, easing: 'ease-out', fill: 'both' });
    });
    const box = row.querySelector('.fs-box');
    if (box) box.animate([{ transform: 'scale(.7)' }, { transform: 'scale(1.2)', offset: .55 }, { transform: 'scale(1)' }], { duration: 220, easing: 'cubic-bezier(.2,1.4,.4,1)' });
    const k = document.createElement('b');
    k.className = 'fs-fx-kanji'; k.textContent = FIGHTERS[id].kanji; fx.appendChild(k);
    k.animate([{ transform: 'translate(-50%,-50%) scale(2.8)', opacity: 0 }, { transform: 'translate(-50%,-50%) scale(1)', opacity: 1, offset: .3 }, { transform: 'translate(-50%,-50%) scale(1.2)', opacity: 0 }], { duration: 640, easing: 'cubic-bezier(.2,1.2,.3,1)', fill: 'both' });
    impact();
    setTimeout(() => fx.remove(), 760);
  }
  /* the hit lands on the whole screen: a short shake and the fighter flares. Finite, never blocks input. */
  function impact() {
    const shell = root.firstElementChild;
    shell.classList.remove('fs-hit'); void shell.offsetWidth; shell.classList.add('fs-hit');
    clearTimeout(impact.t); impact.t = setTimeout(() => shell.classList.remove('fs-hit'), 650);
    try { if (navigator.vibrate) navigator.vibrate(14); } catch (e) {}
  }
  /* victory card: the fighter takes the full screen when a session or swim is finished. Tap or wait to continue. */
  function playVictory(f, d, title, sub) {
    if (reduceMotion) return;
    const shell = root.firstElementChild, old = shell.querySelector('.fs-victory');
    if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'fs-victory'; el.setAttribute('role', 'status'); el.style.setProperty('--el', f.color);
    el.innerHTML = '<span class="fs-v-kanji" aria-hidden="true">' + f.kanji + '</span><div class="fs-v-art" aria-hidden="true">' + art(f, d, 'timer') + '</div>' +
      '<i class="fs-v-slash" aria-hidden="true"></i><i class="fs-v-slash is-b" aria-hidden="true"></i>' +
      '<div class="fs-v-text"><small>' + f.name + '</small><strong>' + title + '</strong><span>' + sub + '</span></div><p class="fs-v-hint" aria-hidden="true">Tap to continue</p>';
    shell.appendChild(el);
    const close = () => { if (!el.isConnected || el.classList.contains('is-out')) return; el.classList.add('is-out'); setTimeout(() => el.remove(), 280); };
    el.addEventListener('click', close);
    setTimeout(close, 3000);
    try { if (navigator.vibrate) navigator.vibrate([24, 50, 36]); } catch (e) {}
  }
  function playFinish(hero, id) {
    if (reduceMotion || !hero || !hero.animate) return;
    const f = FIGHTERS[id] || FIGHTERS.rest, old = hero.querySelector('.fs-finish'), el = document.createElement('div');
    if (old) old.remove();
    el.className = 'fs-finish'; el.setAttribute('aria-hidden', 'true'); el.style.setProperty('--el', f.color);
    el.innerHTML = fxSvg(fxPath('M-4 17 L104 3', 'm', 0, 5, f.color) + fxPath('M-4 3 L104 17', 'm', 1, 3, '#efe9dc')) + '<b class="fs-kanji">' + f.kanji + '</b><strong>Session complete</strong>';
    hero.appendChild(el);
    el.animate([{ opacity: 0 }, { opacity: 1, offset: .07 }, { opacity: 1, offset: .82 }, { opacity: 0 }], { duration: 1700, fill: 'both' });
    el.querySelectorAll('path').forEach((p, n) => drawStroke(p, 560, 60 + n * 110, .46));
    el.querySelector('b').animate([{ transform: 'scale(2.4)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { duration: 300, delay: 200, easing: 'cubic-bezier(.2,1.3,.3,1)', fill: 'both' });
    el.querySelector('strong').animate([{ transform: 'translateY(8px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 220, delay: 400, easing: 'ease-out', fill: 'both' });
    setTimeout(() => el.remove(), 1760);
  }
  function paintTimer() {
    const t = S.timer, total = t.phase === 'rest' ? t.rest : t.work, C = 2 * Math.PI * 104;
    root.querySelectorAll('[data-t="time"]').forEach(e => { e.textContent = fmt(Math.max(t.remaining, 0)); });
    const ring = root.querySelector('[data-t="ring"]'); if (ring) ring.setAttribute('stroke-dashoffset', C * (1 - Math.max(t.remaining, 0) / total));
  }

  /* ---------- timer ---------- */
  let ctx=null, wake=null, wakePending=false, lastTick=0;
  function ensureCtx() {
    try { if(!ctx)ctx=new (window.AudioContext||window.webkitAudioContext)(); if(ctx.state==='suspended')ctx.resume().catch(()=>{}); return ctx; } catch(e) { return null; }
  }
  function tone(freq,dur,delay,vol) {
    if(!S.timer.sound)return;
    try { const c=ensureCtx(); if(!c)return; const at=c.currentTime+delay,o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=freq;o.connect(g);g.connect(c.destination);g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(vol,at+.01);g.gain.exponentialRampToValueAtTime(.0001,at+dur);o.start(at);o.stop(at+dur+.02); } catch(e) {}
  }
  function bell(n) { for(let i=0;i<n;i++)tone(660,.5,i*.6,.4); }
  async function acquireWake() {
    if(wakePending||wake||!S.timer.running||document.visibilityState!=='visible')return;
    wakePending=true;
    try { if('wakeLock' in navigator){ const lock=await navigator.wakeLock.request('screen'); if(!S.timer.running)await lock.release(); else {wake=lock;lock.addEventListener('release',()=>{if(wake===lock)wake=null;});} } } catch(e) {} finally {wakePending=false;}
  }
  function releaseWake() { if(wake){wake.release().catch(()=>{});wake=null;} }
  function step() {
    const t=S.timer;if(!t.running)return;
    const elapsed=Math.max(0,Math.floor((Date.now()-lastTick)/1000));if(!elapsed)return;
    lastTick+=elapsed*1000;
    let left=elapsed,changed=false;
    while(left>0&&t.running){
      if(left<t.remaining){t.remaining-=left;left=0;}
      else {left-=t.remaining;changed=true;
        if(t.phase==='work'){
          if(t.round>=t.rounds){t.phase='done';t.running=false;t.remaining=0;clearInterval(tick);tick=null;releaseWake();}
          else {t.phase='rest';t.remaining=t.rest;}
        } else {t.round++;t.phase='work';t.remaining=t.work;}
      }
    }
    if(changed){bell(t.phase==='done'?3:t.phase==='rest'?1:2);render();}
    else {if(t.phase==='work'){if(t.remaining===10)tone(880,.14,0,.32);else if(t.remaining<=3)tone(520,.09,0,.28);}paintTimer();}
  }
  function run(){clearInterval(tick);lastTick=Date.now();tick=setInterval(step,1000);acquireWake();}
  function toggleTimer(){
    const t=S.timer;ensureCtx();
    if(t.running){step();t.running=false;clearInterval(tick);tick=null;releaseWake();}
    else {if(t.phase==='ready'||t.phase==='done'){t.round=1;t.phase='work';t.remaining=t.work;S.open.adjust=null;bell(2);}t.running=true;run();}
  }
  function idle() { return S.timer.phase === 'ready' || S.timer.phase === 'done'; }

  /* ---------- events ---------- */
  root.addEventListener('click', ev => {
    const el = ev.target.closest('[data-act]'); if (!el || !root.contains(el)) return;
    const a = el.dataset.act, t = S.timer;
    if (a === 'closesheet' && el.classList.contains('fs-sheetwrap') && ev.target !== el) return;
    if (a === 'artmotion') { S.artMotion = !S.artMotion; write('character-motion', S.artMotion); }
    else if (a === 'cast') { S.cast = el.dataset.k; }
    else if (a === 'castsheet') { if (!S.sheet || S.sheet.kind !== 'cast') S.sheetFrom = keyOf(el); S.sheet = { kind: 'cast', k: el.dataset.k, pose: 0 }; }
    else if (a === 'castpose' && S.sheet?.kind === 'cast') { S.sheet.pose = +el.dataset.p; }
    else if (a === 'move') { S.sheet = { kind: 'move', idx: +el.dataset.idx, preview: S.view === 'today' ? false : S.preview }; S.sheetFrom = keyOf(el); }
    else if (a === 'swap' && S.sheet?.kind === 'move') {
      const preview = S.sheet.preview, to = +el.dataset.to;
      swapSessions(preview, S.sheet.idx, to); S.sheet = null; S.preview = preview; S.day = to;
      S.view = !preview && to === todayIdx ? 'today' : 'week';
    }
    else if (a === 'checkswim' && S.sheet?.kind === 'cardio') {
      const d = planFor(S.sheet.preview)[S.sheet.idx], wk = weekChecks(d.preview);
      wk[d.key + ':swim'] = !swimDone(d); write('checks:swim-core-v5:' + dateKey(weekOf(d.preview)), wk);
    }
    else if (a === 'sheet') { S.sheet = { kind: el.dataset.sheet, idx: +el.dataset.idx, topic: el.dataset.topic, gi: +el.dataset.gi, preview: S.view === 'today' ? false : S.preview }; S.sheetFrom = keyOf(el); }
    else if (a === 'partner') { S.sheet = { kind: 'cardio', idx: +el.dataset.idx, preview: S.view === 'today' ? false : S.preview }; S.sheetFrom = '[data-act="sheet"][data-sheet="cardio"][data-idx="' + el.dataset.idx + '"]'; }
    else if (a === 'closesheet') { S.sheet = null; }
    else if (a === 'nav') { S.sheet = null; if (S.view === el.dataset.view) { S.day = null; S.topic = null; } S.view = el.dataset.view; if (S.view === 'today') { S.preview = false; S.day = null; } }
    else if (a === 'check') { const d = planFor(S.view === 'today' ? false : S.preview)[+el.dataset.idx], arr = done(d).slice(), i = +el.dataset.i, at = arr.indexOf(i); if (at >= 0) arr.splice(at, 1); else arr.push(i); setDone(d, arr); }
    else if (a === 'reset') { setDone(planFor(S.view === 'today' ? false : S.preview)[+el.dataset.idx], []); }
    else if (a === 'openday') { if (S.view === 'today') S.view = 'week'; S.day = +el.dataset.idx; }
    else if (a === 'back') { S.day = null; S.topic = null; }
    else if (a === 'opentopic') { S.topic = el.dataset.topic; }
    else if (a === 'seg') { S.view='week'; S.preview = el.dataset.preview === '1'; S.day = null; }
    else if (a === 'toggletimer') toggleTimer();
    else if (a === 'resettimer') { releaseWake(); clearInterval(tick); tick = null; Object.assign(t, { running: false, round: 1, phase: 'ready', remaining: t.work }); S.open.adjust = null; }
    else if (a === 'preset') { const p = el.dataset.p.split(',').map(Number); t.rounds = p[0]; t.work = p[1]; t.rest = p[2]; if (t.round > t.rounds) t.round = t.rounds; if (idle()) t.remaining = t.work; }
    else if (a === 'step') {
      const k = el.dataset.k, d = +el.dataset.d;
      if (k === 'rounds') { t.rounds = Math.min(20, Math.max(1, t.rounds + d)); if (t.round > t.rounds) t.round = t.rounds; }
      else if (k === 'work') { t.work = Math.min(300, Math.max(30, t.work + 15 * d)); if (idle()) t.remaining = t.work; }
      else t.rest = Math.min(180, Math.max(15, t.rest + 15 * d));
    }
    else if (a === 'sound') t.sound = !t.sound;
    if(['preset','step','sound'].includes(a))savePrefs();
    render();
    if (a === 'check' && ev.detail > 0) {
      /* detail is 0 for keyboard activation: state still changes, the moving effect is skipped */
      const row = root.querySelector(keyOf(el));
      if (row && row.getAttribute('aria-pressed') === 'true') {
        const d = planFor(S.view === 'today' ? false : S.preview)[+el.dataset.idx];
        playCheck(row, d.id);
        if (done(d).length === d.ex.length) playVictory(fighterOf(d), d, 'Session complete', d.name + ' · ' + d.ex.length + ' of ' + d.ex.length);
      }
    }
    if (a === 'checkswim' && ev.detail > 0 && S.sheet?.kind === 'cardio') {
      const d = planFor(S.sheet.preview)[S.sheet.idx];
      if (swimDone(d)) playVictory(FIGHTERS.pool, d, 'Swim complete', LONG[d.idx] + ' · ' + d.cardio.short);
    }
    if (a === 'closesheet' && S.sheetFrom) { const f = root.querySelector(S.sheetFrom); if (f) f.focus({ preventScroll: true }); }
  });
  root.addEventListener('keydown', ev => {
    if(ev.key==='Tab'&&S.sheet){const all=[...elSheet.querySelectorAll('button,a[href]')];const first=all[0],last=all[all.length-1];if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus();}else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus();}}
    if (ev.key === 'Escape' && S.sheet) { S.sheet = null; render(); const f = S.sheetFrom && root.querySelector(S.sheetFrom); if (f) f.focus({ preventScroll: true }); } });
  root.addEventListener('toggle', ev => {
    const k = ev.target.dataset && ev.target.dataset.open; if (!k) return;
    S.open[k] = ev.target.open;
    if (k === 'adjust') ev.target.closest('.fs-timer').classList.toggle('is-adjust', ev.target.open);
  }, true);

  function refreshDate(){
    const next=new Date(),w=weekStart(next),idx=(next.getDay()+6)%7;
    if(dateKey(w)!==dateKey(monday)||idx!==todayIdx){monday=w;todayIdx=idx;S.day=null;S.sheet=null;render();}
  }
  document.addEventListener('visibilitychange',()=>{root.classList.toggle('is-art-paused', !S.artMotion || document.hidden);if(document.visibilityState==='visible'){refreshDate();step();acquireWake();}});
  window.addEventListener('focus',refreshDate);
  setInterval(refreshDate,30000);
  render();
  if (S.timer.running) run();
  return { state: S, render: render, fx: { check: playCheck, finish: playFinish, victory: id => playVictory(FIGHTERS[id] || FIGHTERS.rest, shownDay(), 'Session complete', (FIGHTERS[id] || FIGHTERS.rest).label) } };
}

global.FloatSting = { mount: mount };
})(window);

window.floatStingApp=FloatSting.mount(document.getElementById('app'));
/* no pinch or double-tap zoom: iOS ignores user-scalable, so its gesture events are cancelled too */
['gesturestart','gesturechange','gestureend'].forEach(t=>document.addEventListener(t,e=>e.preventDefault(),{passive:false}));
document.addEventListener('touchmove',e=>{if(e.touches.length>1)e.preventDefault();},{passive:false});
/* iOS double-tap zoom fallback; controls are left alone so quick taps still register */
(()=>{let last=0;document.addEventListener('touchend',e=>{const now=Date.now();if(now-last<300&&!e.target.closest('button,a,[data-act],input,select,textarea'))e.preventDefault();last=now;},{passive:false});})();
/* portrait only where the browser allows a lock (installed Android); iOS gets the turn-upright screen in app.css */
try{if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('portrait').catch(()=>{});}catch(e){}
if('serviceWorker' in navigator){
  /* a new deploy takes over mid-session; reload once so the phone runs it now, not on the next launch */
  let hadController=!!navigator.serviceWorker.controller,reloaded=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!hadController){hadController=true;return;}if(!reloaded){reloaded=true;location.reload();}});
  window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
