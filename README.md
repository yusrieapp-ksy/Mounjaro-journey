# Visbody & Mounjaro Tracker (iOS PWA)

A single-page tracker that installs on an iPhone home screen, runs full-screen, and works offline.
Everything you enter stays on your device (IndexedDB and localStorage). Nothing is sent to a server.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app |
| `manifest.webmanifest` | Name, colours and icons for installing |
| `sw.js` | Offline support (service worker) |
| `icons/` | Home-screen and favicon images |

## Host it on GitHub Pages

1. On GitHub, create a new repository (for example `vm-tracker`). **Public** works on every plan. Private repos need a paid plan for Pages.
2. Upload everything in this folder to the root of the repository, keeping the `icons` folder. Dragging the files into the web uploader is fine.
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

Tap the sliders icon (top right), then **Export Backup**. On iPhone this opens the share sheet, so choose **Save to Files**. Do this regularly: if you delete the app or clear Safari data, the on-device data goes with it. The backup includes scans, AM weights, injections, daily logs, food logs, custom medications and your profile.

## Updating the app

Edit the files on GitHub and commit. The app checks for a new version each time it opens with a connection and picks it up on the next launch. If you change `sw.js` or the lists inside it, also bump `VERSION` at the top of `sw.js`.

Your data is not affected by updates.

## Offline behaviour

The first launch must be **online** so the app can download Tailwind CSS, Chart.js and Font Awesome (all loaded from CDNs and saved for offline use). After that it opens with no signal.

If you ever want it fully self-contained, download those three libraries into the repo, point the `<script>`/`<link>` tags in `index.html` at the local copies, and remove the CDN entries from `CDN_ASSETS` in `sw.js`. Tailwind in particular should be replaced with a compiled stylesheet for a production setup.

## Notes

- **Visbody PDF upload:** the Upload PDF button reads the text inside the official 5-page Visbody report (composition, posture, circumferences, spine, glute shape) and saves it as a scan for the report's test date. An existing scan on that date is updated, and anything the PDF doesn't contain (shoulder width, 3D link) is kept as it was. Everything happens on the device. The first use needs a connection to download the PDF reader (pdf.js, loaded from cdnjs and cached for offline use). If a required number can't be found, what was read is filled into the **Add a Visbody Scan** form for you to finish. The overall spine score is a graphic in the PDF, so it is calculated as the average of the cervical, thoracic and lumbar scores. Posture values (forward head, rounded shoulders, pelvic shift) are in **cm**, as printed on the report.
- The Virtual Advisor briefings, diagnostics and weekly scorecard are built from your own logged entries. With no data they show a prompt instead of numbers. They are informational only and are not medical advice.
- The default medication checklist and starting circuit are defined in `index.html` as `DEFAULT_MEDS` and `DEFAULT_EXERCISES`. Add your own medications with **+ Custom Med**. On the Daily tab the circuit is editable: **Edit** renames or removes a routine, **+ Add routine** creates one, and **Restore defaults** brings back the original four. Once you change the circuit on a device, that device keeps its own list.
- **Visbody targets and remarks:** tap any tile on the Visbody tab to set a target, which direction is better, and a short remark. Visceral level (9), muscle (protect lean mass) and your onboarding target weight are the only defaults.
- **Haircut & beard guide** (settings drawer): drawn sketches to compare combinations, plus **My reference photos** for real photos from your camera roll (up to 20, shrunk and kept on the device, included in backups).
- **Icon:** the artwork is `icons/icon.svg`. If you change the home-screen icon, delete the app from the iPhone and add it again; iOS keeps the old icon until you do.
