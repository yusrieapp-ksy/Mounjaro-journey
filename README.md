# Visbody & Mounjaro Tracker (iOS PWA)

A single-page tracker that installs on an iPhone home screen, runs full-screen, and works offline.
Everything you enter stays on your device (IndexedDB and localStorage). Nothing is sent to a server.

## What's new in v8.6

- **Floating + button removed** from the Food tab.
- **Goal projection** (Dashboard): status (Ahead, On track, Behind, Steady pace and so on), kg to go, your pace from the last 4 weeks of AM weights, the date you reach your target at that pace, this week's aim in kg, and a chart with your weigh-ins, your pace, the 0.5 to 1.0% a week band and the pace needed for your target date. It also compares the intake you logged (with your scan BMR and activity level) with what the scale shows, and projects waist and body fat targets from your scans. Estimates only: loss usually slows, and dose changes are not modelled.
- **Profile & goals** (Settings): a summary (week of your journey, weight now, lost so far, BMI, waist-to-height ratio, next visit) and an editor for name, height, start and target weight, program start date, target date, target waist, target body fat, next appointment with a note, a planned dose change, your AM weigh-in day, and notes for your doctor. Each field says where it is used.
- **Planned dose change** feeds the level curve's "if next dose is taken" line. **Weigh-in day** replaces the fixed Tuesday in labels and the weekly scorecard. **Next appointment** shows a countdown chip on the Dashboard. The doctor summary adds a "Goals and notes" section.
- The first-run screen now explains what each field is for and adds an optional target date.

## What's new in v8.5

- **Size predictor has its own sheet.** The shirt button opens a slide-up Size Predictor. Settings now holds only app settings, backups and the doctor summary.
- **Food: log by meal.** Pick Breakfast, Lunch, Dinner or Snack instead of typing a name. Saved meals add a portion multiplier (0.5x, 1x, 1.5x, 2x) and **Save entries as a combo** bundles several entries into one reusable saved meal. A bar shows protein by meal. Daily targets collapse to one line until you tap Edit all.
- **Macro bar fix.** The sticky kcal / P / F / S bar now docks flush under the header with a solid background.
- **Bottom sheets** for editing a food entry, Visbody targets, routines and medications: they slide up, lift above the keyboard and close when you tap outside.
- **Injection site map.** A belly diagram with tappable Left and Right zones shows when each side was last used and outlines the suggested side. The appetite rating now starts at 5.
- **Level curve** adds up every logged dose (120 h half-life) over the last 28 days plus a 7-day projection, marks Now and the next dose, and shows the effect of taking it. It is an estimate.
- **Charts:** a readout line above each chart updates as you slide a finger across it, and charts with fewer than 2 points show a short empty-state message.
- **Recomposition and pace** on the Dashboard: fat share of the weight lost between your last two scans (needs at least 1 kg change), 4-week loss pace against the 0.5 to 1.0% a week reference band, an estimated target date and 5 kg milestones.
- **Backup restore preview** before anything is imported, **CSV export** (weights, scans, injections, intake) in Settings, and **days since last scan** on the Visbody tab.
- **Removed:** PDF/print export from the doctor summary (Share text stays).

## What's new in v8.4

- **One Daily targets card** under Added sugar. Tap **Edit all** to change protein, sugar, fat, and the calorie minimum and maximum in one panel. Every limit is labelled **auto** (calculated from your scan BMR, activity and deficit), **set by you** or **default**, and each auto-capable field has **Reset to auto**. The panel shows when each target was last changed.
- **Undo** instead of confirm: deleting a food entry or day total shows "Undo" for a few seconds.
- **Pinned status bar** (kcal, P, F, S) stays at the top of the Food tab, and a **+** button jumps to the add form when it is off-screen.
- **Sounds:** distinct tones for add, water and undo, plus alert tones for protein target reached and going over a limit (own toggle in Settings). Needs the iPhone ring/silent switch on ring.
- **Motion:** bars animate, numbers count up, tabs fade in, and reaching the protein target pulses the number. All of it respects iPhone Reduce Motion.
- **Swipes:** swipe a food entry left to delete (with undo) or right to save it as a meal. Swipe the Food or Daily page sideways to change the day.
- **Doctor summary** (Settings): weight trend, latest Visbody numbers, injections, 7-day intake and steps vs targets, and the targets themselves. Share as text. (There is no PDF export.)
- **Streak:** a "n-day streak" badge on Today at a glance counts consecutive days with food or water logged.

## What's new in v8.3

- **Today at a glance** on the Dashboard: calories, protein, fat, sugar and water against your limits, plus your 7-day protein average. Tap it to open Food.
- **Saved meals and editable entries.** Tap the star on a food entry to save it as a meal (one-tap chip with its protein). Tap the pencil to edit an entry's name or numbers.
- **Backup reminder** on the Dashboard when you have data and have not exported for 14 days (or ever). Tap Later to hide it for 3 days.
- **Weight chart trend line**: the average of your last three AM weights. Weigh-ins are weekly, so a 7-day window would hold one point; three entries smooths real noise.
- **Editable water and steps goals.** Tap "Goal ... edit" on the Food water card and "Steps goal ... edit" on the Daily tab.
- **Weekly averages vs targets** on the Food summary tab: this week and last week against your current targets.

## What's new in v8.2

- **Size predictor knows where you wear your trousers.** Pick Navel, Below belly or Upper hip for pants and jeans, and the app calibrates and counts down against the matching Visbody measurement (mid waist, low waist or hip). Calibration now accepts large gaps between a scan measurement and the label size.
- **Separate Calories, Fat and Added sugar cards on the Food tab**, each with its own bar. Fat and sugar have a maximum and turn red with an "Over by" message (and a pop-up when an entry pushes you over). Calories have a minimum (your scan BMR) and a maximum, with both marked on the bar.
- **Editable limits.** Edit targets sets protein, sugar max, fat max, calorie minimum and calorie maximum. Leave the fat or calorie maximum blank to follow the suggestion: scan BMR x activity level - daily deficit (fat is 30% of that maximum). It updates with each new scan. Each day keeps the limits it was logged with.

## What's new in v8.1

- **Tabs reset when you leave them.** Coming back to a tab always starts at the top of its first view (Visbody goes back to page 1, Food back to Food Intake Entry, edit modes close). Tapping the tab you are already on scrolls it to the top.
- **Workouts are saved per day.** Editing, adding or removing a routine on the Daily tab changes **that day only**. Past days keep exactly the routines they were logged with. A small *this day only* tag shows when a day has its own list. In **Edit** mode, *Use as default for new days* makes the current list the starting list for future days (days already logged are frozen first, so history never changes), and *Reset this day to default* undoes a day's changes.
- **Protein on the Food tab.** Enter protein per item or in the day total. A progress bar shows grams logged against your daily target. Tap **Edit targets** to change the protein target (default 100 g) and an optional **calorie floor** (leave blank to use the BMR from your latest Visbody scan). Each day keeps the protein target it was logged with, so changing it later does not rewrite earlier days. Protein also appears in the Intake Trend, the weekly scorecard and the Nutrition diagnostic.
- **Jeans in the size predictor.** A new Jeans card (waist in inches, with its own fit allowance and its own calibration box) sits next to Pants / Chinos.
- **Light and dark mode.** Settings, **Appearance**: Dark, Light or Auto (follows the iPhone). The sun/moon button in the header switches quickly. Charts and every screen follow the mode. In light mode a thin dark strip sits behind the iPhone status bar so the clock and battery stay readable.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app |
| `manifest.webmanifest` | Name, colours and icons for installing |
| `sw.js` | Offline support (service worker). Version `v8.1.0` |
| `apple-touch-icon-v2.png`, `apple-touch-icon-167-v2.png`, `apple-touch-icon-152-v2.png` | The icon iOS uses for Add to Home Screen |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `favicon-32.png`, `icon.svg` | Manifest, browser tab and source artwork |

Everything sits in **one flat folder**. There is no `icons/` sub-folder, so upload every file to the root of the repository.

## Host it on GitHub Pages

1. On GitHub, create a new repository (for example `vm-tracker`). **Public** works on every plan. Private repos need a paid plan for Pages.
2. Upload every file in this folder to the root of the repository. Dragging the files into the web uploader is fine.
3. Open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick **main** and **/ (root)**, then **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/vm-tracker/`.

The app uses relative paths throughout, so it works from that sub-folder URL without changes.

## Install on iPhone

1. Open the GitHub Pages URL in **Safari** (the most reliable browser for installing on iOS).
2. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
3. Open the app from the new icon. **Enter your data in this installed copy.**

> **Important:** on iOS, Safari and the installed home-screen app keep **separate storage**. Anything you entered while browsing in Safari will not appear in the installed app. If you already have data somewhere, use **Settings → Export Backup** there and **Import Backup** in the installed app.

## First run (empty by default)

The app ships with **no data at all**: no sample scans, no sample weights, no name or goal weights. On first open it shows the onboarding screen (every field optional), then an empty dashboard.

- **Visbody scans:** Visbody tab, **Add a Visbody Scan**. Date plus the five core numbers are required; everything else is optional. Saving a scan on an existing date replaces it. The trash icon next to the date picker deletes the selected scan.
- **AM weights:** Mounjaro tab, **Fast Log**. The trash icon in the dashboard table deletes an entry.
- **Start over any time:** Settings, **Erase All Data** (asks twice). It clears every record, your profile, preferences and custom medications on that device.

> **Storage is per web address.** Data lives in the browser for the exact URL it was opened at. A brand-new GitHub Pages URL always starts empty. If you open the same URL you tested on before, or you used an older version of this app there, tap **Erase All Data** once first.

## Back up your data

Tap the sliders icon (top right), then **Export Backup**. On iPhone this opens the share sheet, so choose **Save to Files**. Do this regularly: if you delete the app or clear Safari data, the on-device data goes with it. The backup includes scans, AM weights, injections, daily logs (with each day's own workout list), food logs (with their entries and protein), custom medications, size settings, protein and calorie targets, light/dark choice and your profile.

## Updating the app

Edit the files on GitHub and commit. The app checks for a new version each time it opens with a connection and picks it up on the next launch. If you change `sw.js` or the lists inside it, also bump `VERSION` at the top of `sw.js`.

Your data is not affected by updates.

## Offline behaviour

The first launch must be **online** so the app can download Tailwind CSS, Chart.js and Font Awesome (all loaded from CDNs and saved for offline use). After that it opens with no signal.

If you ever want it fully self-contained, download those three libraries into the repo, point the `<script>`/`<link>` tags in `index.html` at the local copies, and remove the CDN entries from `CDN_ASSETS` in `sw.js`. Tailwind in particular should be replaced with a compiled stylesheet for a production setup.

## Notes

- **Visbody PDF upload:** the Upload PDF button reads the text inside the official 5-page Visbody report (composition, posture, circumferences, spine, glute shape) and saves it as a scan for the report's test date. An existing scan on that date is updated, and anything the PDF doesn't contain (shoulder width, 3D link) is kept as it was. Everything happens on the device. The first use needs a connection to download the PDF reader (pdf.js, loaded from cdnjs and cached for offline use). If a required number can't be found, what was read is filled into the **Add a Visbody Scan** form for you to finish. The overall spine score is a graphic in the PDF, so it is calculated as the average of the cervical, thoracic and lumbar scores. Posture values (forward head, rounded shoulders, pelvic shift) are in **cm**, as printed on the report.
- The Virtual Advisor briefings, diagnostics and weekly scorecard are built from your own logged entries. With no data they show a prompt instead of numbers. They are informational only and are not medical advice.
- The default medication checklist and starting circuit are defined in `index.html` as `DEFAULT_MEDS` and `DEFAULT_EXERCISES`. Add your own medications with **+ Custom Med**. On the Daily tab the circuit is editable **per day**: **Edit** renames or removes a routine, **+ Add routine** creates one, and **Reset this day to default** goes back to the default list, all for the selected date only. Use **Use as default for new days** to change the list future days start from.
- **Visbody targets and remarks:** tap any tile on the Visbody tab to set a target, which direction is better, and a short remark. Visceral level (9), muscle (protect lean mass) and your onboarding target weight are the only defaults.
- **Size predictor** (shirt icon, top right): Asian sizing for T-shirts, shirt collar, pants and jeans from your latest Visbody numbers, with the next size milestone, centimetres to go and an ETA from your recent trend. Pick a fit (Fitted / Regular / Relaxed), and **calibrate** it by typing the pants, jeans and T-shirt size you wear today.
- **Food log:** add each meal or snack as you go (calories, protein, fat, sugar) and the day total builds up, like water. Or switch to **Enter day total** to type the whole day at once. Chips under the form re-add your usual items in one tap.
- **Home-screen icon:** the artwork is `icon.svg`. iOS keeps an old icon until the app is removed, so delete the home-screen app and add it again after an icon change. The icon files carry `-v2` in their names so Safari fetches fresh copies. If you ever change the artwork again, bump the suffix to `-v3` in `index.html`, `sw.js` and the file names.
