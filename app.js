(function (global) {
'use strict';

const WORKOUTS = {
  "upper": {
    "type": "up",
    "name": "Upper",
    "tag": "Chest + Back + Delts + Biceps",
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
        "2×8–12 · 2m"
      ],
      [
        "5",
        "Lateral Raise",
        "2×12–20 · 60–90s"
      ],
      [
        "6",
        "Dumbbell Curl",
        "2×10–15 · 90s"
      ]
    ],
    "note": "14 working sets. Alternate press and pull exercises, completing all sets of one exercise before moving on. Keep the same equipment choices for 6–8 weeks. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
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
      ]
    ],
    "note": "16 working sets. Back squat is an alternative if a hack squat is unavailable; keep the choice consistent. Warm up separately for the hinge. Curl ribs toward pelvis during crunches. Swim A is a separate pool block, ideally at least 3 hours apart. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "push": {
    "type": "up",
    "name": "Push",
    "tag": "Chest + Delts + Triceps",
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
        "Cable Triceps Pushdown",
        "2×10–15 · 90s"
      ]
    ],
    "note": "14 working sets. Use a comfortable shoulder range. Keep compounds about two clean reps from failure. Swimming is additional shoulder work, not a replacement for chest or back sets. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "pull": {
    "type": "lo",
    "name": "Pull",
    "tag": "Back + Rear Delts + Biceps + Abs",
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
        "Reverse Pec Deck",
        "2×12–20 · 90s"
      ],
      [
        "4",
        "Dumbbell Curl",
        "3×10–15 · 90s"
      ],
      [
        "5",
        "Hammer Curl",
        "2×10–15 · 90s"
      ],
      [
        "6",
        "Cable Crunch",
        "3×10–15 · 90s"
      ]
    ],
    "note": "16 working sets. Chest support limits lower-back fatigue before Saturday legs. Avoid forced reps. If shoulder or lat fatigue affects Saturday swimming, keep the pool session easy and shorten it. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
  },
  "legs": {
    "type": "lo",
    "name": "Lower B",
    "tag": "Quads + Hamstrings + Calves + Abs",
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
        "Reverse Crunch",
        "3×10–15 · 90s"
      ]
    ],
    "note": "16 working sets; split squats mean two sets per leg, counted as two sets for each leg. Use hand support for balance. Curl pelvis toward ribs without swinging on reverse crunches. Swim B is a separate pool block, ideally at least 3 hours apart. First two weeks of this plan: do 2 sets wherever 3 are listed. Then use the listed sets only if lifting performance and swimming technique remain stable. Aim for 45–60 minutes; allow up to 65 with warm-ups and equipment waits. Do not shorten compound rest just to finish."
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
    "html": "<p class=\"lead\">Bodybuilding plus beginner swimming. The same schedule repeats every week. Runs are replaced by two pool sessions.</p><ul><li><b>Monday.</b> Upper: chest, back, delts and biceps.</li><li><b>Tuesday.</b> Lower A + Swim A. Separate sessions when practical.</li><li><b>Wednesday.</b> Push: chest, delts and triceps.</li><li><b>Thursday.</b> Full rest.</li><li><b>Friday.</b> Pull: back, rear delts, biceps and abs.</li><li><b>Saturday.</b> Lower B + Swim B. Separate sessions when practical.</li><li><b>Sunday.</b> Full rest.</li></ul>"
  },
  {
    "id": "sets",
    "title": "Sets, effort & progress",
    "summary": "Transition, rep targets and saved checks",
    "html": "<p class=\"lead\">The displayed sets are the full target. For the first two weeks after starting this plan, use 2 sets wherever 3 are listed while adapting to swimming.</p><ul><li><b>Effort.</b> Finish most sets with about 2 clean reps left. On stable isolation exercises, the final set may finish with 1–2 reps left. No forced reps or compound failure required. No soreness or fatigue is not evidence that training failed.</li><li><b>Rest.</b> Use 2–3 minutes for demanding compounds and 60–90 seconds for isolation work, or longer if needed to repeat good reps. Warm-up sets are additional.</li><li><b>Add weight.</b> Record weight, reps for every set and estimated reps left in a notebook. Once every set reaches the top of the range with the intended effort and form, increase by the smallest available load. Keep exercises consistent for 6–8 weeks.</li><li><b>Saved checks.</b> Tap after all prescribed sets are done. Checks save by week on this device. The revised routine starts unchecked; previous-plan records remain stored. This app does not log weights, reps or swim completion.</li></ul>"
  },
  {
    "id": "progress",
    "title": "Growth & recovery",
    "summary": "Weekly volume and adjustment rules",
    "html": "<p class=\"lead\">Full target: 10 direct weekly sets each for chest, quads and hamstrings; 11 for back, 5 lateral-delt, 2 rear-delt, 2 shoulder-press, 7 biceps, 4 triceps, 6 calves and 9 abs. Compound presses and pulls add indirect arm/shoulder work. Glutes work during squats, presses, split squats and hinges; swimming is not counted as lifting sets.</p><ul><li><b>Warm up.</b> Use 5–10 minutes of easy movement and progressively heavier warm-up sets for the first compound. Warm up again when switching to a different movement pattern.</li><li><b>Time budget.</b> Full sessions have 14–16 working sets across six exercises. Aim for 45–60 minutes including warm-ups and abs; some days may take 60–65. If time runs out, omit the final isolation exercise that day. Do not make it up on rest days.</li><li><b>Transition.</b> First two weeks: cap all 3-set exercises at 2. Then move toward the displayed volume if technique, sleep and performance are stable. Keep swimming easy while lifting volume rises.</li><li><b>Review after 4–6 weeks.</b> Look for more reps or load at similar effort, stable swimming technique and a gradual body-weight trend. If one muscle stalls despite consistent training, food and recovery, add only 1–2 weekly sets for it and reassess. Do not add volume simply because there is no soreness.</li><li><b>Reduce when needed.</b> If performance drops over several sessions, soreness persists or shoulders are irritated, reduce sets by about half for a week and shorten swims. Persistent joint pain needs assessment.</li></ul><p class=\"lead\">This split and these exact doses are coaching choices, not a tested optimal protocol. Progressive loading and adequate volume are supported by the <a href=\"https://pubmed.ncbi.nlm.nih.gov/41843416/\" target=\"_blank\" rel=\"noopener\">2026 ACSM scientific review</a>.</p>"
  },
  {
    "id": "cardio",
    "title": "Swimming progression",
    "summary": "Two one-hour practice windows",
    "html": "<p class=\"lead\">Tuesday Swim A and Saturday Swim B each reserve 60 minutes, including instruction, rests and notes. Open the Swim row on that day for the complete session. A beginner lesson can replace either practice.</p><ul><li><b>Start at current ability.</b> Use comfortable 25s and generous rest in a supervised pool. Full starting outlines total 400 metres/yards; half repeats total 200. Use the lower amount if needed. Finish early when technique or breathing control declines.</li><li><b>Build skill first.</b> Book instruction for breathing and body position. Two comfortable sessions come before adding 50 total distance or combining two 25s into a 50. Keep the other variables unchanged. Distance increases are a practical starting rule, not a scientific guarantee.</li><li><b>Phelps-inspired structure.</b> Warm-up, technique work, a purposeful main set and cooldown borrow the structure of competitive practice. This is not Michael Phelps's actual workload, and two beginner sessions do not replicate elite training. Butterfly, paddles and hard race sets wait for appropriate technique and coaching.</li><li><b>Combine with lifting.</b> Pair swimming with lower-body days to avoid a same-day upper-body lift. Ideally separate sessions by at least 3 hours, with a meal and fluids between. This is fatigue management, not a proven muscle-growth requirement. If back-to-back, lift first only if still alert and controlled for swimming; otherwise shorten or reschedule the pool work.</li><li><b>Protect shoulders.</b> Swimming adds work for shoulders and back. No fatigue on the old plan does not guarantee recovery from the new one. Begin with easy swimming; Saturday moderate lengths are optional only after the first two weeks and stable technique.</li></ul><p class=\"lead\">The <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8891239/\" target=\"_blank\" rel=\"noopener\">43-study concurrent-training meta-analysis</a> found no average reduction in whole-muscle growth or maximal strength, but explosive strength could be affected. Most evidence was running/cycling, so this exact swimming/bodybuilding combination is an extrapolation. <a href=\"https://www.usms.org/fitness-and-training/guides/swimming-101/adult-swim-training\" target=\"_blank\" rel=\"noopener\">U.S. Masters Swimming</a> informs practice structure and terminology; it is coaching guidance, not a clinical trial.</p>"
  },
  {
    "id": "fuel",
    "title": "Nutrition & the 160 lb goal",
    "summary": "Surplus, protein, watching the trend",
    "html": "<div class=\"guide-content\">\n    <p class=\"lead\">Aim for gradual weight gain while lifts improve. Reaching 160 lb does not guarantee a particular appearance or seven pounds of muscle.</p>\n    <div class=\"panel\">\n      <h3>Fuel the Build</h3>\n      <ul>\n        <li><b>Start with a small surplus.</b> Add roughly 150–250 calories to the intake that keeps body weight stable with this activity level. Longer swim practices may raise that baseline, so adjust from weight trends rather than a watch's calorie estimate.</li>\n        <li><b>Protein: 120–145 g daily.</b> A practical target near 1.6–2.0 g/kg around the goal weight. Spread it across 3–4 meals, using foods such as eggs, dairy, fish, meat, tofu or beans.</li>\n        <li><b>Watch the trend.</b> Weigh under similar morning conditions several times a week and compare weekly averages. A conservative starting target is about 0.25–0.5 lb per week. If the average is flat for 2–3 weeks, add about 100 calories daily; reduce slightly if gaining faster or waist size rises quickly.</li>\n        <li><b>Eat for performance.</b> Include carbohydrates, fruit, vegetables and dietary fats. Keep protein consistent on rest days. No supplement is required for this plan.</li>\n        <li><b>Protect the two rest days.</b> Easy walking or gentle mobility is optional. No scheduled lifting or swimming on Thursday and Sunday.</li>\n        <li><b>Think in months.</b> At the suggested pace, a seven-pound scale increase may take roughly 14–28 weeks. Water and glycogen can move the scale sooner; muscle gain varies.</li>\n      </ul>\n    </div>\n    <p class=\"lead\">Research supports adequate protein and cautions against aggressive surpluses. The calorie adjustments and slower gain target above are practical starting choices, not guaranteed outcomes. Sources: <a href=\"https://link.springer.com/article/10.1186/s12970-017-0177-8\" target=\"_blank\" rel=\"noopener\">ISSN protein position stand</a> and <a href=\"https://pubmed.ncbi.nlm.nih.gov/37914977/\" target=\"_blank\" rel=\"noopener\">Helms et al., energy-surplus trial (2023)</a>.</p>\n    </div>"
  },
  {
    "id": "care",
    "title": "Pool & lifting safety",
    "summary": "Technique, breathing and supervision",
    "html": "<p class=\"lead\">Swim in a lifeguarded pool and use an instructor while developing breathing and stroke skills.</p><ul><li><b>Breathe normally.</b> No breath-hold sets, hyperventilation or underwater-distance contests. Breathe as often as needed; no fixed every-third-or-fifth-stroke rule.</li><li><b>Stay in control.</b> Stop the set if breathing or technique becomes uncontrolled. Leave the pool if dizzy or unwell; do not push through to fill the hour.</li><li><b>Joint comfort.</b> Stop exercises that cause sharp or joint pain. Use a comfortable range and seek assessment for persistent symptoms.</li><li><b>Rest days.</b> Thursday and Sunday remain free of scheduled training. Easy walking or mobility is optional.</li></ul>"
  }
];
const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const LONG = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const KEYS = ['mon','tue','wed','thu','fri','sat','sun'];
const PRESETS = [[3,180,60],[5,180,60],[12,180,60]];

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
    preview: !!opts.preview, checks: {}, storageError: !!opts.storageError, open: Object.assign({}, opts.open),
    sheet: opts.sheet || null, sheetFrom: null,
    timer: Object.assign({ rounds: 3, work: 180, rest: 60, sound: true, round: 1, phase: 'ready', remaining: null, running: false }, opts.timer)
  };
  function read(key, fallback) {
    try { const v=localStorage.getItem('floatsting:'+key); return v===null?fallback:JSON.parse(v); }
    catch(e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem('floatsting:'+key,JSON.stringify(value)); S.storageError=false; }
    catch(e) { S.storageError=true; }
  }
  const prefs=read('prefs',{}) || {};
  const valid=(v,min,max,fallback)=>Number.isInteger(v)&&v>=min&&v<=max?v:fallback;
  Object.assign(S.timer,{rounds:valid(prefs.rounds,1,20,3),work:valid(prefs.work,30,300,180),rest:valid(prefs.rest,15,180,60),sound:typeof prefs.sound==='boolean'?prefs.sound:true});
  function savePrefs() { const t=S.timer; write('prefs',{rounds:t.rounds,work:t.work,rest:t.rest,sound:t.sound}); }
  if (S.timer.remaining == null) S.timer.remaining = S.timer.work;
  let tick = null;

  function weekOf(preview) { const w = new Date(monday); if (preview) w.setDate(w.getDate() + 7 * Number(preview)); return w; }
  function planFor(preview) {
    const week = weekOf(preview);
    const weeks = Math.round((Date.UTC(week.getFullYear(), week.getMonth(), week.getDate()) - Date.UTC(2026, 8, 21)) / 604800000);
    const rotation = ((weeks % ROTATION.length) + ROTATION.length) % ROTATION.length;
    return ROTATION[rotation].map((id, i) => {
      const date = new Date(week); date.setDate(date.getDate() + i);
      return Object.assign({}, WORKOUTS[id], { id: id, cardio: CARDIO[i], key: KEYS[i], idx: i, date: date, rotation: rotation, preview: preview });
    });
  }
  function weekChecks(preview) {
    const k=dateKey(weekOf(preview));
    if (!Object.prototype.hasOwnProperty.call(S.checks,k)) {
      const saved=read('checks:swim-build-v4:'+k,{});
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
    write('checks:swim-build-v4:'+dateKey(weekOf(d.preview)),wk);
  }

  /* ---------- views ---------- */
  function dayHTML(d, back) {
    const n = d.ex.length, dn = done(d), isRest = !n;
    let h = '<div class="fs-col fs-md-detail">';
    const stamp = ', ' + shortDate(d.date) + (d.preview ? ' · Next week' : '');
    if (back) h += '<div class="fs-backrow"><button class="fs-back" data-act="back">' + ICON.back + back + '</button><span class="fs-eyebrow">' + DAYS[d.idx] + stamp + '</span></div>';
    h += '<header class="fs-head">' + (back ? '' : '<p class="fs-eyebrow">' + LONG[d.idx] + stamp + '</p>') +
      '<h1 class="fs-h1">' + d.name + '</h1><p class="fs-sub">' + (isRest ? 'No lifting, swimming or running today' : d.tag.replace(/ \+ /g, ', ')) + '</p></header>';
    if (S.storageError) h += '<p class="fs-notice" role="status">Progress could not be saved on this device. Keep this page open to retain these checks for now.</p>';
    if (isRest) {
      const plan = planFor(d.preview);
      let nx = plan.slice(d.idx + 1).find(p => p.ex.length), when;
      if (nx) when = LONG[nx.idx]; else { nx = planFor(Number(d.preview) + 1).find(p => p.ex.length); when = 'Next ' + LONG[nx.idx]; }
      h += '<div class="fs-rest"><p>' + d.note + '</p></div>' +
        '<p class="fs-next"><span>Next session</span><b>' + when + ' · ' + nx.name + (nx.cardio ? ', ' + nx.cardio.short.toLowerCase() : '') + '</b></p>';
      return h + '</div>';
    }
    const full = dn.length === n;
    h += '<div class="fs-prog"><span class="fs-bar"><i style="width:' + (dn.length / n * 100) + '%"></i></span>' +
      '<span class="fs-count' + (full ? ' is-done' : '') + '">' + (full ? 'Complete' : dn.length + ' of ' + n) + '</span>' +
      (dn.length ? '<button class="fs-reset" data-act="reset" data-idx="' + d.idx + '">Reset</button>' : '') + '</div>';
    h += '<ul class="fs-ex">' + d.ex.map((e, i) => {
      const rx = splitRx(e[2]), on = dn.indexOf(i) >= 0;
      return '<li><button class="fs-row' + (opts.focusDemo === i ? ' is-focus' : '') + '" data-act="check" data-idx="' + d.idx + '" data-i="' + i + '" aria-pressed="' + on + '">' +
        '<span class="fs-box"><span>' + e[0] + '</span>' + ICON.check + '</span><span class="fs-name">' + e[1] + '</span>' +
        '<span class="fs-rx"><b>' + rx[0] + '</b><small>rest ' + rx[1] + '</small></span></button></li>';
    }).join('') + '</ul>';
    h += '<div class="fs-links">';
    if (d.cardio) {
      const c = splitCardio(d.cardio.note), sw = /swim/i.test(d.cardio.short) && !/optional/i.test(d.cardio.short);
      h += '<button class="fs-link" data-act="sheet" data-sheet="cardio" data-idx="' + d.idx + '">' + (sw ? ICON.swim : ICON.run) +
        '<span class="fs-sumtext"><b>' + d.cardio.short + '</b><small>' + c[0].replace(/^[^:]*:\s*/, '') + '</small></span>' + ICON.chev + '</button>';
    }
    h += '<button class="fs-link" data-act="sheet" data-sheet="note" data-idx="' + d.idx + '">' + ICON.note +
      '<span class="fs-sumtext"><b>Session notes</b></span>' + ICON.chev + '</button></div>';
    return h + '</div>';
  }

  function weekListHTML() {
    const plan = planFor(S.preview), a = plan[0].date, b = plan[6].date;
    const sel = S.day == null ? (S.preview ? 0 : todayIdx) : S.day;
    return '<div class="fs-col fs-md-list"><header class="fs-weekhead"><div class="fs-head"><p class="fs-eyebrow">' + shortDate(a) + ' to ' + shortDate(b) + '</p>' +
      '<h1 class="fs-h1">' + (S.preview ? 'Next week' : 'This week') + '</h1></div>' +
      '<div class="fs-seg" role="group" aria-label="Week"><button data-act="seg" data-preview="0" aria-pressed="' + !S.preview + '">This week</button><button data-act="seg" data-preview="1" aria-pressed="' + S.preview + '">Next week</button></div></header>' +
      '<ul class="fs-week">' + plan.map(d => {
        const n = d.ex.length, dn = done(d).length, isToday = !S.preview && d.idx === todayIdx;
        const side = !n ? '' : dn === n ? '<span class="fs-wside is-done">' + ICON.check + 'Done</span>' : dn ? '<span class="fs-wside">' + dn + ' of ' + n + '</span>' : '';
        return '<li><button class="fs-wrow' + (isToday ? ' is-today' : '') + (n ? '' : ' is-rest') + '" data-act="openday" data-idx="' + d.idx + '"' + (d.idx === sel ? ' aria-current="true"' : '') + '>' +
          '<span class="fs-date"><small>' + DAYS[d.idx] + '</small><b>' + d.date.getDate() + '</b></span>' +
          '<span class="fs-wmain"><b>' + d.name + '</b><small>' + (isToday ? 'Today' + (d.cardio ? ' · ' : '') : '') + (d.cardio ? d.cardio.short : (n || isToday ? '' : 'Recover')) + '</small></span>' + side + ICON.chev + '</button></li>';
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
    return '<div class="fs-md' + (S.topic ? ' has-detail' : '') + '"><div class="fs-col fs-md-list"><header class="fs-head"><h1 class="fs-h1">Guide</h1><p class="fs-sub">How the plan works and why</p></header>' +
      '<ul class="fs-topics">' + GUIDE.map(g => '<li><button class="fs-trow" data-act="opentopic" data-topic="' + g.id + '"' + (g.id === cur.id ? ' aria-current="true"' : '') + '><span><b>' + g.title + '</b><small>' + g.summary + '</small></span>' + ICON.chev + '</button></li>').join('') + '</ul></div>' +
      '<div class="fs-col fs-md-detail fs-read"><button class="fs-back" data-act="back">' + ICON.back + 'Guide</button><h1 class="fs-h2">' + cur.title + '</h1>' + topicHTML(cur) + '</div></div>';
  }

  function timerHTML() {
    const t = S.timer, R = 104, C = 2 * Math.PI * R, total = t.phase === 'rest' ? t.rest : t.work;
    const label = { ready: 'Ready', work: 'Work', rest: 'Rest', done: 'Complete' }[t.phase];
    const btn = t.running ? 'Pause' : (t.phase === 'work' || t.phase === 'rest') ? 'Resume' : 'Start';
    const active = t.phase === 'work' || t.phase === 'rest';
    const openAdj = !!S.open.adjust;
    return '<div class="fs-timer' + (openAdj ? ' is-adjust' : '') + '" data-phase="' + t.phase + '"><p class="fs-phase" data-t="phase">' + label + '</p>' +
      '<div class="fs-ring"><svg viewBox="0 0 224 224"><circle class="bg" cx="112" cy="112" r="' + R + '"/><circle class="fg" data-t="ring" cx="112" cy="112" r="' + R + '" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - Math.max(t.remaining, 0) / total)) + '"/></svg>' +
      '<div class="fs-clock"><b data-t="time">' + fmt(Math.max(t.remaining, 0)) + '</b><span data-t="round">Round ' + t.round + ' of ' + t.rounds + '</span></div></div>' +
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
    let eyebrow, title, body;
    if (S.sheet.kind === 'guide') {
      const g = GUIDE.find(x => x.id === S.sheet.topic), it = topicItems(g.html)[S.sheet.gi];
      eyebrow = g.title; title = it.title; body = '<div class="fs-topic"><p>' + it.html + '</p></div>';
    } else {
      const d = planFor(S.sheet.preview)[S.sheet.idx], isCardio = S.sheet.kind === 'cardio', c = isCardio ? splitCardio(d.cardio.note) : null;
      eyebrow = LONG[d.idx] + ' · ' + d.name; title = isCardio ? d.cardio.short : 'Session notes';
      body = isCardio ? '<p class="fs-sheet-lead">' + c[0] + '.</p><p>' + c[1] + '</p>' : '<p>' + d.note + '</p>';
    }
    return '<div class="fs-sheetwrap" data-act="closesheet"><div class="fs-sheet" role="dialog" aria-modal="true" aria-label="' + title.replace(/"/g, '') + '">' +
      '<p class="fs-eyebrow">' + eyebrow + '</p><h2 class="fs-h2">' + title + '</h2>' + body + '<button class="fs-sheet-close" data-act="closesheet" data-close>Done</button></div></div>';
  }

  function navTimerLabel() {
    const tm = S.timer;
    if (tm.phase !== 'work' && tm.phase !== 'rest') return '<span>Timer</span>';
    return tm.running ? '<span data-t="time">' + fmt(tm.remaining) + '</span>' : '<span>Paused ' + fmt(tm.remaining) + '</span>';
  }

  function mainHTML() {
    if (S.view === 'guide') return guideHTML();
    if (S.view === 'timer') return timerHTML();
    if (S.view === 'today') return '<div class="fs-md has-detail">' + weekListHTML() + dayHTML(planFor(false)[todayIdx], '') + '</div>';
    const idx = S.day == null ? (S.preview ? 0 : todayIdx) : S.day;
    return '<div class="fs-md' + (S.day == null ? '' : ' has-detail') + '">' + weekListHTML() + dayHTML(planFor(S.preview)[idx], 'Week') + '</div>';
  }

  /* ---------- paint ---------- */
  root.innerHTML = '<div class="fs-shell"><main class="fs-main" data-main></main><div data-sheethost></div><nav class="fs-nav" aria-label="App navigation">' +
    [['today', 'Today'], ['week', 'Week'], ['guide', 'Guide'], ['timer', 'Timer']].map(v => '<button data-act="nav" data-view="' + v[0] + '">' + ICON[v[0]] + '<span data-navlabel>' + v[1] + '</span></button>').join('') + '</nav></div>';
  const elMain = root.querySelector('[data-main]'), elTimerTab = root.querySelector('.fs-nav [data-view="timer"]'), elSheet = root.querySelector('[data-sheethost]');
  let lastScreen = '';

  function keyOf(el) {
    if (!el || !el.dataset || !el.dataset.act) return null;
    return '[data-act="' + el.dataset.act + '"]' + ['idx', 'i', 'view', 'topic', 'preview', 'k', 'd', 'p', 'gi', 'sheet'].map(k => el.dataset[k] != null ? '[data-' + k + '="' + el.dataset[k] + '"]' : '').join('');
  }
  function render() {
    const screen = S.view + '|' + S.day + '|' + S.topic + '|' + S.preview;
    const fk = root.contains(document.activeElement) ? keyOf(document.activeElement) : null, st = elMain.scrollTop;
    elMain.innerHTML = mainHTML();
    elMain.classList.toggle('fs-night', S.view === 'timer');
    root.firstElementChild.dataset.view = S.view;
    elTimerTab.querySelector('[data-navlabel], span').outerHTML = navTimerLabel().replace('<span', '<span data-navlabel');
    elSheet.innerHTML = sheetHTML();
    elMain.inert=!!S.sheet; root.querySelector('.fs-nav').inert=!!S.sheet;
    elTimerTab.classList.toggle('is-live', S.timer.phase === 'work' || S.timer.phase === 'rest');
    root.querySelectorAll('.fs-nav button').forEach(b => { if (b.dataset.view === S.view) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
    elMain.scrollTop = screen === lastScreen ? st : 0; lastScreen = screen;
    if (S.sheet && opts.autofocus !== false) { const cl = elSheet.querySelector('[data-close]'); if (cl) cl.focus({ preventScroll: true }); }
    else if (fk) { const f = root.querySelector(fk); if (f) f.focus({ preventScroll: true }); }
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
    if (a === 'sheet') { S.sheet = { kind: el.dataset.sheet, idx: +el.dataset.idx, topic: el.dataset.topic, gi: +el.dataset.gi, preview: S.view === 'today' ? false : S.preview }; S.sheetFrom = keyOf(el); }
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
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){refreshDate();step();acquireWake();}});
  window.addEventListener('focus',refreshDate);
  setInterval(refreshDate,30000);
  render();
  if (S.timer.running) run();
  return { state: S, render: render };
}

global.FloatSting = { mount: mount };
})(window);

window.floatStingApp=FloatSting.mount(document.getElementById('app'));
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
