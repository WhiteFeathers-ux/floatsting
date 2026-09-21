(function (global) {
'use strict';

const WORKOUTS = {
  pushA: {type:'up', name:'Push A', tag:'Chest + Quads + Shoulders + Triceps', freq:'Push', short:'Push A', ex:[
    ['1','Bench Press','3×6–10 · 2–3m'],
    ['2','Back Squat or Hack Squat','3×6–10 · 2–3m'],
    ['3','Lateral Raise','2×12–20 · 60–90s'],
    ['4','Cable Triceps Pushdown','2×10–15 · 90s'],
    ['5','Standing Calf Raise','2×10–15 · 90s']
  ], note:'Chest press and knee-dominant leg work lead. Use a chest-press machine if benching is unfamiliar, and keep the squat variation consistent.'},
  pushB: {type:'up', name:'Push B', tag:'Quads + Chest + Shoulders + Triceps', freq:'Push', short:'Push B', ex:[
    ['1','Leg Press','3×8–12 · 2–3m'],
    ['2','Incline Dumbbell Press','3×8–12 · 2–3m'],
    ['3','Seated Dumbbell Shoulder Press','2×8–12 · 2m'],
    ['4','Lateral Raise','1×12–20 · 60–90s'],
    ['5','Overhead Triceps Extension','1×10–15 · 90s'],
    ['6','Seated Calf Raise','2×12–20 · 90s']
  ], note:'Legs lead this session. Keep all presses controlled and leave two good reps in reserve; more fatigue is not the goal.'},
  pullA: {type:'lo', name:'Pull A', tag:'Back + Hamstrings + Glutes + Biceps', freq:'Pull', short:'Pull A', ex:[
    ['1','Romanian Deadlift','2×6–10 · 2–3m'],
    ['2','Lat Pulldown','2×8–12 · 2m'],
    ['3','Chest-Supported Row','2×8–12 · 2m'],
    ['4','Seated Leg Curl','2×10–15 · 90s'],
    ['5','Dumbbell Curl','2×10–15 · 90s'],
    ['6','Cable Crunch','3×10–15 · 90s']
  ], note:'Hinge from the hips with a controlled range. Chest support keeps rows from adding unnecessary lower-back fatigue. Learn the hinge with light loads first. Cable crunch: curl the ribs toward the pelvis without pulling with the arms; keep two clean reps in reserve. Add a small amount of weight once all three sets reach 15 controlled reps.'},
  pullB: {type:'lo', name:'Pull B', tag:'Back + Hamstrings + Glutes + Biceps', freq:'Pull', short:'Pull B', ex:[
    ['1','Lat Pulldown or Assisted Pull-up','2×8–12 · 2m'],
    ['2','Seated Cable Row','2×8–12 · 2m'],
    ['3','Lying or Seated Leg Curl','3×10–15 · 90s'],
    ['4','Romanian Deadlift (light)','1×10–12 · 2m'],
    ['5','Hammer Curl','2×10–15 · 90s'],
    ['6','Hanging Knee Raise or Reverse Crunch','3×8–15 · 90s']
  ], note:'A lighter hinge day. Keep the same pulldown or assisted pull-up choice from week to week. Do a fresh light hinge warm-up before its working set. For abs, curl the pelvis toward the ribs without swinging. Choose reverse crunches if grip limits hanging raises. Keep the choice consistent; reach 15 controlled reps per set before increasing difficulty, with two reps in reserve.'},
  rest: {type:'rest', name:'Full Rest', tag:'Recover', freq:'Rest', short:'Full rest', ex:[],
    note:'No workout required. Easy walking or 5–10 minutes of gentle mobility is optional. Eat normally, keep protein consistent and prioritize sleep.'}
};
const ROTATION = [
  ['pushA','pullA','pushB','rest','pullB','pushA','rest'],
  ['pullA','pushB','pullB','rest','pushA','pullB','rest']
];
const CARDIO = [
  {short:'Swim', note:'<b>Later in the day: beginner swim 10–15 min total, including rests.</b> Supervised pool, short comfortable lengths, 30–60 seconds or longer at the wall. A lesson can replace this session. Keep shoulders fresh.'},
  {short:'Run', note:'<b>After lifting or later: easy run 15–25 min.</b> Full-sentence pace, not a timed mile. Start at 10–15 min if a mile is the usual distance. Add 3–5 min walking before and after.'},
  {short:'Optional cardio', note:'<b>Optional: third swim OR run.</b> Only if recovering well: swim 10–15 min including rests or run 10–15 min, easy. Skip this in the first two weeks of the combined routine.'},
  null,
  {short:'Swim', note:'<b>Later in the day: beginner swim 10–15 min total, including rests.</b> Repeat comfortable short lengths in a supervised pool. Rest freely. Skip it if too fatigued for controlled breathing and technique.'},
  {short:'Run', note:'<b>After lifting or later: run 15–25 min.</b> Easy conversational pace, no hills or sprints. Use run/walk if needed. Tomorrow is full rest.'},
  null
];


const GUIDE = [{"id": "week", "title": "How the week works", "summary": "Lift days, rest days, A and B weeks", "html": "<p class=\"lead\">Lift Monday, Tuesday, Wednesday, Friday and Saturday. <b>Rest Thursday and Sunday.</b> Swim Monday and Friday; run Tuesday and Saturday. Wednesday can include a third swim <b>or</b> run if recovery is good. Week A has three push days and two pull days; Week B reverses that. <b>Tap any day</b> to open its workout.</p>\n    <p class=\"lead\">Push: chest, shoulders, triceps and quads. Pull: back, biceps, hamstrings and glutes. The extra push/pull day alternates each week.</p>"}, {"id": "sets", "title": "Sets, reps &amp; saving progress", "summary": "Reading the numbers, what gets saved", "html": "<p class=\"lead\">Use a weight that leaves <b>about two good reps in reserve</b>. The prescription is sets × reps, then rest between sets. Warm-up sets are extra. Allow roughly 55–75 minutes for lifting, plus the listed cardio. <b>Tap an exercise</b> after all its sets; lifting checks save for this calendar week on this device. Weights, reps and cardio completion are not logged here.</p>"}, {"id": "progress", "title": "Progression & recovery", "summary": "Warm ups, adding weight, lighter weeks", "html": "<div class=\"guide-content\">\n    <p class=\"lead\">Built for an experienced lifter with full-gym access and muscle gain as the priority. Height alone does not determine the best split or working weights. Adjust the starting volume to recovery as swimming and running are added.</p>\n    <ul class=\"principles\">\n      <li><span class=\"n\">01</span><span><b>Warm up.</b> Start with 5–10 minutes of easy movement, then 2–4 progressively heavier warm-up sets before the first big lift. Use additional warm-ups when moving to a different muscle group.</span></li>\n      <li><span class=\"n\">02</span><span><b>Start within capacity.</b> The listed sets are the target, not extra work on top of the old routine. If five lifting days plus cardio is a jump in workload, use two sets wherever three are listed for the first two weeks, with three reps in reserve.</span></li>\n      <li><span class=\"n\">03</span><span><b>Earn the next weight.</b> When every set reaches the top of its rep range with two reps left and clean form, add the smallest available load next time. Return toward the lower end of the range. Track loads and reps in a notebook.</span></li>\n      <li><span class=\"n\">04</span><span><b>Keep the big lifts controlled.</b> Use a comfortable full range of motion. No max testing or forced reps. Keep the same exercise choices for 6–8 weeks so progress is comparable.</span></li>\n      <li><span class=\"n\">05</span><span><b>Recover, then progress.</b> If performance drops across several sessions or soreness persists into the next workout, take a lighter week: roughly half the sets and easier loads. Skip missed sessions rather than stacking them onto rest days.</span></li>\n    </ul>\n    <p class=\"lead\"><b>45–60 minutes for lifting and abs.</b> Includes warm-ups; swimming and running are separate. Push days have 12 working sets across 5–6 exercises; pull days have 13 across 6 exercises, including abs. Allow roughly 10–15 minutes for warm-ups and 30–45 for working sets, rests and equipment changes. Keep the listed rest periods. If equipment waits push the session toward 60 minutes, omit the calf exercise on push days or curls on pull days; keep the ab work. Do not make up omitted sets on rest days. The 6–9 direct ab sets per week replace existing ab training rather than adding to it.</p>\n    <div class=\"drills\"><b>Why this structure</b>Push includes knee-dominant leg work; pull includes hip hinges and leg curls. This shorter rotation averages 7.5 direct weekly sets each for chest and quads and 10 each for back and hamstrings, plus smaller amounts of arm and shoulder work. Secondary chest flies, leg extensions and reverse pec deck were removed to reduce equipment changes and fit the time budget. Lower volume can still build muscle; this is a practical time-versus-volume tradeoff, not a claim that 7.5 sets is optimal. The exact split is a coaching choice, not a proven best routine for everyone. <a href=\"https://pubmed.ncbi.nlm.nih.gov/41843416/\" target=\"_blank\" rel=\"noopener\">ACSM resistance-training position stand (2026)</a>.</div>\n    </div>"}, {"id": "cardio", "title": "Swimming & running", "summary": "Two swims, two runs, an optional third", "html": "<div class=\"guide-content\">\n    <p class=\"lead\"><b>Two swims and two runs are the base.</b> Start at the low end of the durations. Add a third swim or run on Wednesday only after two steady weeks with good recovery and stable lifting performance.</p>\n    <ul class=\"principles\">\n      <li><span class=\"n\">01</span><span><b>Monday + Friday: beginner swim, 10–15 minutes total.</b> This includes rest, not continuous swimming. In a supervised pool, practise relaxed breathing and short, comfortable lengths, resting 30–60 seconds or longer at the wall. A beginner lesson is a good first session. Finish before technique deteriorates. No breath-hold drills or hard intervals.</span></li>\n      <li><span class=\"n\">02</span><span><b>Tuesday + Saturday: easy run, 15–25 minutes.</b> A 7–8 minute mile shows current speed, but does not establish an easy training pace. Use a flat route and slow enough to speak in full sentences, about 3–4 out of 10 effort. If currently running only one mile per outing, start with 10–15 minutes and walk as needed. Walk 3–5 minutes before and after.</span></li>\n      <li><span class=\"n\">03</span><span><b>Wednesday: optional third session.</b> Choose a 10–15 minute beginner swim or 10–15 minute easy run, not both. This gives 2–3 sessions of each sport per week while keeping two complete rest days.</span></li>\n      <li><span class=\"n\">04</span><span><b>Lift first when sessions are together.</b> When practical, separate lifting and cardio by at least three hours. This is a useful fatigue-management choice, not a requirement for muscle growth. Avoid swimming when too fatigued to maintain comfortable technique.</span></li>\n      <li><span class=\"n\">05</span><span><b>Progress one thing at a time.</b> For swimming, first make short lengths comfortable with rest; then build toward 15–20 minutes total. For running, add a few minutes to one session before adding frequency or speed. If leg or shoulder fatigue affects the next lift, shorten cardio and drop the optional session first. No sprints or hard swim intervals in this starting block.</span></li>\n    </ul>\n    <div class=\"drills\"><b>Research behind the balance</b>A 43-study review found no average loss of muscle growth or maximal strength from combining aerobic and strength work, although explosive-strength gains were more affected in the same session. Most evidence covers running and cycling; this swim schedule is a practical adaptation, not a directly tested protocol. Sources: <a href=\"https://pubmed.ncbi.nlm.nih.gov/34757594/\" target=\"_blank\" rel=\"noopener\">Schumann et al. (2022)</a> and <a href=\"https://pubmed.ncbi.nlm.nih.gov/28917030/\" target=\"_blank\" rel=\"noopener\">exercise-order meta-analysis</a>.</div>\n    </div>"}, {"id": "fuel", "title": "Nutrition & the 160 lb goal", "summary": "Surplus, protein, watching the trend", "html": "<div class=\"guide-content\">\n    <p class=\"lead\">Aim for gradual weight gain while lifts improve. Reaching 160 lb does not guarantee a particular appearance or seven pounds of muscle.</p>\n    <div class=\"panel\">\n      <h3>Fuel the Build</h3>\n      <ul>\n        <li><b>Start with a small surplus.</b> Add roughly 150–250 calories to the intake that keeps body weight stable with this activity level. New swims and runs may raise that baseline, so adjust from weight trends rather than a watch's calorie estimate.</li>\n        <li><b>Protein: 120–145 g daily.</b> A practical target near 1.6–2.0 g/kg around the goal weight. Spread it across 3–4 meals, using foods such as eggs, dairy, fish, meat, tofu or beans.</li>\n        <li><b>Watch the trend.</b> Weigh under similar morning conditions several times a week and compare weekly averages. A conservative starting target is about 0.25–0.5 lb per week. If the average is flat for 2–3 weeks, add about 100 calories daily; reduce slightly if gaining faster or waist size rises quickly.</li>\n        <li><b>Eat for performance.</b> Include carbohydrates, fruit, vegetables and dietary fats. Keep protein consistent on rest days. No supplement is required for this plan.</li>\n        <li><b>Protect the two rest days.</b> Easy walking or gentle mobility is optional. No scheduled lifting, swimming or running on Thursday and Sunday.</li>\n        <li><b>Think in months.</b> At the suggested pace, a seven-pound scale increase may take roughly 14–28 weeks. Water and glycogen can move the scale sooner; muscle gain varies.</li>\n      </ul>\n    </div>\n    <p class=\"lead\">Research supports adequate protein and cautions against aggressive surpluses. The calorie adjustments and slower gain target above are practical starting choices, not guaranteed outcomes. Sources: <a href=\"https://link.springer.com/article/10.1186/s12970-017-0177-8\" target=\"_blank\" rel=\"noopener\">ISSN protein position stand</a> and <a href=\"https://pubmed.ncbi.nlm.nih.gov/37914977/\" target=\"_blank\" rel=\"noopener\">Helms et al., energy-surplus trial (2023)</a>.</p>\n    </div>"}, {"id": "care", "title": "Train with care", "summary": "Safety basics", "html": "<ul><li>Warm up before every session and stretch after.</li>\n      <li>Progress gradually. Avoid adding too much workload at once.</li>\n      <li>Technique first, speed second, power last.</li>\n      <li>Rest days are full rest. Easy walking and comfortable mobility are optional.</li>\n      <li>Stop an exercise that causes sharp or joint pain. Use a comfortable alternative and get guidance for persistent symptoms.</li>\n      <li>This is general fitness guidance, not personal-training or medical advice. Check with a professional before starting if you have any health concerns.</li></ul>"}];
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
    const rotation = ((weeks % 2) + 2) % 2;
    return ROTATION[rotation].map((id, i) => {
      const date = new Date(week); date.setDate(date.getDate() + i);
      return Object.assign({}, WORKOUTS[id], { id: id, cardio: CARDIO[i], key: KEYS[i], idx: i, date: date, rotation: rotation, preview: preview });
    });
  }
  function weekChecks(preview) {
    const k=dateKey(weekOf(preview));
    if (!Object.prototype.hasOwnProperty.call(S.checks,k)) {
      let saved=read('checks:pushpull-v3:'+k,null);
      if (saved===null) {
        const v2=read('checks:pushpull-v2:'+k,null);
        const previous=v2===null?read('checks:pushpull-v1:'+k,{}):v2;
        const retained={pushA:[0,1,4,5,6],pushB:[0,1,4,5,6,7],pullA:[0,1,2,3,5,6],pullB:[0,1,2,3,5,6],rest:[]};
        saved={};
        planFor(preview).forEach(d=>{
          if (Array.isArray(previous?.[d.key])) saved[d.key]=retained[d.id].flatMap((old,n)=>previous[d.key].includes(old)&&!(v2===null&&d.id.startsWith('pull')&&old===6)?[n]:[]);
        });
        write('checks:pushpull-v3:'+k,saved);
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
    write('checks:pushpull-v3:'+dateKey(weekOf(d.preview)),wk);
  }

  /* ---------- views ---------- */
  function dayHTML(d, back) {
    const n = d.ex.length, dn = done(d), isRest = !n;
    let h = '<div class="fs-col fs-md-detail">';
    const stamp = ', ' + shortDate(d.date) + ' · Week ' + (d.rotation ? 'B' : 'A') + (d.preview ? ' · Next week' : '');
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
    return '<div class="fs-col fs-md-list"><header class="fs-weekhead"><div class="fs-head"><p class="fs-eyebrow">Week ' + (plan[0].rotation ? 'B' : 'A') + ' · ' + shortDate(a) + ' to ' + shortDate(b) + '</p>' +
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
