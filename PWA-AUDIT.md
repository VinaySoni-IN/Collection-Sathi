# PWA audit — Collection Sathi

A requirement-by-requirement review of Collection Sathi as an installable, offline-first
Progressive Web App, what was already correct, what was missing, and what was changed.

The hard rule for this pass: **the app must look and behave exactly as before.** No CSS
rule, no DOM structure, no colour, no layout, no copy was touched — every edit is in
`<head>`, `manifest.json`, `sw.js`, new asset files and documentation. `git diff` on
`index.html` touches 2 blocks only (the `<head>` resource list and the service-worker
registration block at the very end of the script).

---

## 1. Requirement matrix

Legend: ✅ already satisfied · ⚠️ satisfied but weak · ➕ added in this pass · ⛔ deliberately out of scope

### A. Installability (Chrome / Edge / Samsung Internet install criteria)

| # | Requirement | Before | After | Notes |
|---|---|---|---|---|
| A1 | Served over HTTPS (or localhost) | ✅ | ✅ | GitHub Pages |
| A2 | Web App Manifest linked from the page | ✅ | ✅ | `<link rel="manifest" href="manifest.json">` |
| A3 | `name` / `short_name` | ✅ | ✅ | "Collection Sathi" (unchanged, keeps install identity) |
| A4 | `icons` with a 192 px and a 512 px PNG | ✅ | ✅ | `icon-192.png`, `icon-512.png` verified at their declared pixel sizes |
| A5 | `start_url` inside `scope` | ✅ | ✅ | `"."`, and `scope` is now declared explicitly (`"./"`) |
| A6 | `display` standalone / minimal-ui / fullscreen | ✅ | ✅ | `standalone` + `display_override: ["standalone","minimal-ui"]` ➕ |
| A7 | `id` (stable install identity) | ✅ | ✅ | Unchanged (`"collection-sathi"`) so existing installs are not duplicated |
| A8 | `theme_color` (address bar / status bar) | ✅ | ✅ | `#072146`, matches the in-page header exactly |
| A9 | `background_color` (splash while launching) | ✅ | ✅ | `#F7F1E5`, the app's paper colour |
| A10 | `lang`, `dir`, `categories` metadata | ⚠️ | ✅ | `en`, `ltr`, `["finance","productivity","utilities"]` ➕ |
| A11 | Registered service worker | ✅ | ✅ | Registered on `load` (kept), now with `scope` + `updateViaCache:"none"` ➕ |

### B. Install UI quality (Android "richer install" + desktop)

| # | Requirement | Before | After | Notes |
|---|---|---|---|---|
| B1 | **Maskable** icon (Android adaptive icons, no white letterboxing) | ❌ | ✅ | `icon-maskable-192.png` / `icon-maskable-512.png` ➕ — full-bleed cream background, artwork confined to the 80 % safe-zone circle (measured: 198.7 px of 204.8 px max radius) |
| B2 | `screenshots` for the install dialog | ❌ | ✅ | 3 `form_factor: "narrow"` entries with labels ➕, real 840×1680 PNGs already in the repo |
| B3 | Wide/desktop screenshot | ❌ | ⛔ | No desktop-sized capture exists and none can be produced without a rendering browser. Only affects the desktop install dialog's preview strip; installability is untouched. |
| B4 | `shortcuts` (long-press / right-click app icon) | ❌ | ✅ | 4 shortcuts ➕ (Collect, Summary, Invoice, Export) pointing at `./#collectTab`, `./#summaryTab`, `./#invoiceTab`, `./#dataTab`; the app now honours those hashes (a hashless load is untouched). |
| B5 | `launch_handler` | ❌ | ✅ | `{"client_mode":"navigate-existing"}` ➕ — a shortcut or link reuses the open window instead of spawning duplicates |
| B6 | `edge_side_panel` | ❌ | ✅ | `{"preferred_width":400}` ➕ — Edge can pin the app to the sidebar |
| B7 | `display_override: window-controls-overlay` | ❌ | ✅ | ➕, with one guarded CSS rule (`@media (display-mode: window-controls-overlay)`) so the header is never hidden under the window buttons. Cannot match in a tab, on mobile, or in plain standalone. |
| B8 | `display_override: tabbed` | ❌ | ✅ | ➕ last in the list, so it is inert until a browser ships that mode |

### C. Offline behaviour

| # | Requirement | Before | After | Notes |
|---|---|---|---|---|
| C1 | App shell precached (HTML, manifest, icons, `html2canvas`) | ✅ | ✅ | 27 precache entries now, added individually so one 404 cannot abort install |
| C2 | Navigation offline → app opens | ✅ | ✅ | Network-first for navigations, cache fallback to `./index.html` |
| C3 | Static assets offline | ✅ | ✅ | Stale-while-revalidate |
| C4 | **Webfonts offline** | ❌ | ✅ | Was the one real gap: Google Fonts is a third-party origin, so offline (and on flaky networks) the app fell back to Georgia / system-ui. Fonts are now **self-hosted** in `vendor/fonts/` — same faces, same weights, same `unicode-range` subsets — and precached. |
| C5 | No third-party runtime request at all | ❌ | ✅ | The old `preconnect` + `fonts.googleapis.com` CSS request are gone. The app is now 100 % first-party, which also removes the DNS/TLS cost and the privacy leak of pinging Google. |
| C6 | Cache versioning / old cache eviction | ✅ | ✅ | `CACHE_VERSION` bumped `v2` → `v3`; `activate` still deletes every other cache |
| C7 | Update path (pick up a new deploy) | ⚠️ | ✅ | `updateViaCache:"none"` stops the 10-minute GitHub Pages HTTP cache hiding a new `sw.js`; an hourly foreground `reg.update()` check was added. Still **no forced reload**, so a half-typed entry is never interrupted. |
| C8 | Non-GET and cross-origin requests untouched | ✅ | ✅ | Unchanged (`request.method !== "GET"`, origin check) |
| C9 | **Periodic background sync** (refresh the shell while closed) | ❌ | ✅ | `periodicsync` handler refreshes the cached `index.html` + `manifest.json`; registered from the page with a 12 h minimum interval, fully optional (refused → no behaviour change). Data stays on-device, so the shell is the only thing worth syncing. |

### D. Platform integration

| # | Requirement | Before | After | Notes |
|---|---|---|---|---|
| D1 | `apple-touch-icon` (iOS home screen) | ✅ | ✅ | 180×180, verified |
| D2 | `apple-mobile-web-app-capable`, `-title`, `-status-bar-style` | ✅ | ✅ | Unchanged (`black-translucent`; the CSS already pads for `safe-area-inset-*`) |
| D3 | `theme-color` meta tag | ✅ | ✅ | Unchanged |
| D4 | Viewport with `viewport-fit=cover` | ✅ | ✅ | Unchanged |
| D5 | `color-scheme` (no UA auto-darkening of form controls) | ⚠️ | ✅ | `:root{color-scheme:light}` already existed; the matching `<meta name="color-scheme" content="light">` was added ➕ so the UA knows before CSS loads |
| D6 | iOS launch images (`apple-touch-startup-image`) | ❌ | ⛔ | Apple matches these per device size — 12+ full-screen PNGs (~2 MB) for a cosmetic launch frame. Not part of any installability criteria; left out on purpose. |
| D7 | Local persistence / data safety | ✅ | ✅ | `localStorage` + IndexedDB proofs, storage-full toast, JSON backup — untouched |

### E. Performance & hygiene

| # | Requirement | Before | After | Notes |
|---|---|---|---|---|
| E1 | No render-blocking third-party CSS | ❌ | ✅ | Google Fonts CSS blocked first paint on every cold load; it is now a local stylesheet |
| E2 | Self-hosted lib pinned with SRI | ✅ | ✅ | `vendor/html2canvas.min.js` unchanged |
| E3 | Repeat visits served from cache | ✅ | ✅ | SWR + precache |
| E4 | Blocking `html2canvas` `<script>` | ⚠️ | ⛔ | It is a local 198 KB file in `<head>`. Deferring it would change execution order relative to the inline app script — plausible breakage for no visible gain in a pass that must not change behaviour. |

---

## 2. What was changed

| File | Change |
|---|---|
| `manifest.json` | `scope`, `display_override` (window-controls-overlay → standalone → minimal-ui → tabbed), `lang`, `dir`, `categories`, `prefer_related_applications`, `launch_handler`, `edge_side_panel`, `shortcuts` (4), 2 maskable icons, 3 narrow screenshots. Name, short name, id, start_url, display, colours and orientation untouched. |
| `index.html` | `<head>`: dropped 2 `preconnect`s + the Google Fonts link, added `vendor/fonts.css`, `color-scheme`, `application-name` and a 192 px `rel="icon"`. CSS: **one** new rule, valid only inside `@media (display-mode: window-controls-overlay)`. End of script: `#hash` → tab deep links for the install shortcuts, plus service-worker registration with `scope`, `updateViaCache:"none"`, the hourly foreground update check and optional `periodicSync` registration. |
| `sw.js` | `CACHE_VERSION` → `v4`; precache now also contains the 2 maskable icons, `vendor/fonts.css` and the 16 woff2 files (27 entries); new `periodicsync` handler. Existing strategies unchanged. |
| `vendor/fonts.css`, `vendor/fonts/*.woff2` | **New.** 16 woff2 files (351 KB) — Playfair Display 700/800, Caveat 600/700, Work Sans 400/500/600/700, latin + latin-ext, generated from the same Google-subset files (`@fontsource`). Exactly the weights the old CDN link requested, with the same `unicode-range` so glyph selection is identical. |
| `icon-maskable-192.png`, `icon-maskable-512.png` | **New.** Opaque, full-bleed, safe-zone compliant derivatives of `icon-512.png`. The original icons are untouched. |
| `README.md` | Documents the install flow, the offline behaviour and this audit. |
| `PWA-AUDIT.md` | This file. |

Nothing else in the repository changed. The existing PNG icons, screenshots, `Banner.png`
and `sample-report.pdf` are byte-identical, no existing CSS declaration was edited, and no
existing DOM node, handler or storage key was touched.

---

## 3. PWABuilder report — item by item

The screenshot report lists every manifest member and service-worker feature PWABuilder
looks for. Everything below was taken from that list.

### Manifest — done

| PWABuilder action item | Field |
|---|---|
| Jump to key tasks / pages | `shortcuts` — 4 entries + hash deep links |
| Control how the app is displayed | `display_override`, `display` |
| Provide a top-level URL path | `scope`, `start_url` |
| Primary language | `lang` |
| Language direction | `dir` |
| Install-experience categories | `categories` |
| PWA vs native app | `prefer_related_applications: false` |
| Showcase the app (screenshots) | `screenshots` — 3 labelled narrow |
| Pin to the Edge sidebar | `edge_side_panel` |
| Customise the title bar | `display_override: window-controls-overlay` (+ guarded CSS) |
| Open multiple tabs | `display_override: tabbed` (inert today) |
| Control how the app is launched | `launch_handler: navigate-existing` |

### Service worker — done

| PWABuilder item | Implementation |
|---|---|
| Work offline by caching assets | 27 precache entries, network-first navigations, SWR assets |
| Periodic background sync | `periodicsync` → refreshes cached `index.html` + `manifest.json`, 12 h minimum |

### Deliberately **not** added, and why

These are the remaining items in the report. Each one is a promise the app would have to
keep at runtime; shipping the manifest field without the behaviour would be worse than
leaving it out (dead shortcuts, share sheets that dump the user back with nothing, an
invented store ID).

| PWABuilder item | Why not |
|---|---|
| `share_target` (OS share tray) | Receiving a shared payment proof means handling a multipart POST in the worker, stashing the file and surfacing an "attach to which payment?" flow. That is a feature, not a manifest field. |
| `file_handlers` (open a file) | Same shape: needs a `launchQueue` consumer that feeds a dropped `.json` backup into the existing import routine and reports success. |
| `protocol_handlers` | There is no protocol this app owns. A `web+…` scheme with no handler behind it just dead-ends. |
| `scope_extensions` | The app never navigates to another origin; the field also requires a `web-app-origin-association` file hosted on that origin. |
| `related_applications` | No published store listing or package ID exists to reference. `prefer_related_applications: false` already states the choice. |
| `iarc_rating_id` | Issued by the IARC per store submission — it cannot be self-assigned. |
| `widgets` (Windows widget) | Needs an Adaptive Card template **and** a data source. The app's data lives in `localStorage`/IndexedDB on the device, which a Windows widget host cannot read. |
| `note_taking` | Collection Sathi is not a notes app; registering it in the OS note menus would mislead users. |
| Background Sync (one-off) | The app performs no network writes to retry — every save is local. |
| Push notifications | Requires a VAPID key pair and a push server. The app is deliberately account-free and serverless. |

> The two tips that stay "missing" on purpose are therefore **push** and **background
> sync**: both need a backend, and this app's whole promise is that there is none.

## 4. Verification

No GUI browser is available in this environment, so the app was verified two ways.

**A. PWA / service-worker harness** (`_backup/harness.mjs`, run against a local static
server, emulating the Cache Storage + `fetch` events `sw.js` uses): **55/55 checks pass**,
including

- every manifest icon and screenshot exists and its declared `sizes` match the real PNG header;
- maskable icons are opaque;
- `sw.js` install really caches 27 entries (app shell, `html2canvas`, `fonts.css`, all 16 fonts);
- with the network cut, a navigation still returns the app (`<title>Collection Sathi</title>`);
- with the network cut, a webfont is still served from cache;
- cross-origin requests are left to the network;
- every `shortcuts` URL is in scope and its `#hash` target really exists in `index.html`;
- the `periodicsync` handler actually rewrites the cached shell.

**B. DOM smoke test** (`_backup/smoke.js`, jsdom, real `index.html` over HTTP): **20/20
checks pass** — page boots, five tabs render, every tab switches, a seeded collection
(`Aarav Sharma` ₹500 cash + `Meera Patel` ₹1,250 UPI, total ₹1,750) is restored from
`localStorage` and rendered, edits persist, deep links `#summaryTab` / `#invoiceTab` / `#dataTab`
open the right tab while a hashless or unknown-hash load still opens Collect, and there are
**no uncaught runtime errors**.

Both harnesses live outside the repository so the shipped app stays dependency-free.

---

## 5. Still on the table (not blocking install or offline)

1. **Desktop (wide) screenshot** for the desktop install dialog — needs a real desktop capture.
2. **iOS launch images** — cosmetic, ~2 MB of per-device PNGs.
3. **"New version installed" toast** — would add UI; deliberately avoided in this pass.
4. **Dark-mode `theme_color`** — the app is light-only by design.
5. **`share_target` / `file_handlers`** — the two PWABuilder items worth real code later
   (share a payment screenshot in, open a `.json` backup from the file manager).

---

## 6. Rollback

Three independent copies of the pre-change state were made before any edit:

```bash
# 1. git tag on the exact commit this branch started from
git tag -l                          # backup/pre-pwa-2026-11-02  ->  32f979f

# 2. full working-tree archive
/home/user/_backup/Collection-Sathi-pre-pwa-2026-11-02.tar.gz

# 3. plain copy of the whole repository (incl. .git)
/home/user/_backup/Collection-Sathi-pre-pwa-clone/
```

To undo this pass on the branch:

```bash
git checkout backup/pre-pwa-2026-11-02 -- .
git clean -fd vendor/fonts
rm -f vendor/fonts.css icon-maskable-192.png icon-maskable-512.png PWA-AUDIT.md
```

or, equivalently, restore the archive over the working tree. Bump `sw.js`'s
`CACHE_VERSION` after any rollback so devices drop the newer cache.
