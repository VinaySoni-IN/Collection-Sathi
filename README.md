# Collection Sathi

> **Simple • Local • Open Source • Collection Management**

Collection Sathi is a lightweight, mobile-first web application for recording group money collections with **Cash + UPI support**, **multi-round history**, **UPI verification**, **payment-proof image archiving**, **summaries**, **printable invoices**, **image sharing**, and a locally saved **UPI QR code**.

It is designed for practical collection workflows such as **chanda, festival funds, class collections, community contributions, events, and small group records**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 👥 Person Management | Create and reuse person records by name |
| 💵 Cash Collection | Record cash payments with amount |
| 📲 UPI Collection | Record UPI payments separately from cash |
| ✅ UPI Verification | Mark UPI payments as verified manually or with proof |
| 📷 Payment Proof | Upload an image or capture one using the device camera |
| 🗃️ Proof Archive | UPI proof images are stored in browser IndexedDB |
| 🧾 Invoice | Generate a clean round-wise collection invoice |
| 🖨️ Print / PDF | Print the invoice or save it as PDF using the browser print dialog |
| 📤 Share Invoice | Generate an invoice image and use the device share sheet when supported |
| 📱 UPI QR | Save a collection UPI QR image locally on the device |
| 🔄 Multiple Rounds | Create and switch between independent collection rounds |
| 📊 Summary | View total, Cash, UPI, counts, average, and maximum collection |
| 📚 History | Browse all collection rounds and their totals |
| ✍️ Signature | Add a signature/name to generated invoices |
| 💾 Local Storage | Main collection data is stored locally on the device |
| 📴 Local-first | No account or server-side collection database is required |
| 📱 Responsive UI | Designed primarily for phones and small screens |
| 🎨 Themed UI | Mobile-first Indian/community collection aesthetic |

---

## 🖼️ Application Structure

```text
┌───────────────────────────────────────────────┐
│              🪔 COLLECTION SATHI              │
│       Round • Date • Current Total • QR       │
├───────────────────────────────────────────────┤
│                                               │
│                 ACTIVE ROUND                  │
│                                               │
│   ┌───────────────────────────────────────┐   │
│   │  #  Person        Amount   Mode       │   │
│   │  1  Rahul Sharma  ₹100     CASH       │   │
│   │  2  Priya Verma   ₹500     ✓ UPI      │   │
│   │  3  Aman Khan     ₹200     ⚠ UPI      │   │
│   └───────────────────────────────────────┘   │
│                                               │
│                         ＋ Add Person          │
├───────────────────────────────────────────────┤
│  👥 Collect │ 📊 Summary │ 🕒 History │ 🧾 Invoice │
└───────────────────────────────────────────────┘
```

---

# 🧭 Navigation

Collection Sathi is organized into four primary tabs.

```text
┌────────────┬────────────┬────────────┬────────────┐
│  COLLECT   │  SUMMARY   │  HISTORY   │  INVOICE   │
├────────────┼────────────┼────────────┼────────────┤
│ Add/edit   │ Totals     │ All rounds │ Receipt    │
│ payments   │ Cash/UPI   │ Round list │ Print/PDF  │
│ Verify UPI │ Statistics │ Switch     │ Share      │
└────────────┴────────────┴────────────┴────────────┘
```

---

## 👥 1. Collect Tab

The **Collect** tab is the main working screen.

### Add a person

A collection entry contains:

```text
Person Name
Amount
Payment Mode
```

Payment modes:

```text
💵 Cash
📲 UPI
```

### Single-person entry

```text
┌──────────────────────────────┐
│ Add person                   │
├──────────────────────────────┤
│ Person name                  │
│ [ Rahul Sharma            ]  │
│                              │
│ Amount (₹)                   │
│ [ 100 ] [ Set default ]      │
│ Default: ₹100                │
│                              │
│ [ 💵 Cash ] [ 📲 UPI ]       │
│                              │
│ [ Cancel ]        [ Add ]    │
└──────────────────────────────┘
```

### Bulk entry

Multiple names can be pasted one per line:

```text
Rahul Sharma
Priya Verma
Aman Khan
Sameer
```

Each pasted name is converted into a collection entry using the current default amount.

---

# 💵 2. Cash Collection

Cash entries are displayed with a dedicated Cash badge.

```text
┌────────────────────────────────────┐
│ ① Rahul Sharma                     │
│   ₹100   CASH             ✎  🗑     │
└────────────────────────────────────┘
```

Cash entries do not require UPI verification.

---

# 📲 3. UPI Collection

UPI entries are visually separated from Cash entries.

```text
┌────────────────────────────────────┐
│ ② Priya Verma                      │
│   ₹500   ✓ Verified UPI    ✓  ✎ 🗑 │
└────────────────────────────────────┘
```

An unverified UPI entry is displayed as:

```text
⚠ Not Verified UPI
```

A verified entry is displayed as:

```text
✓ Verified UPI
```

---

# ✅ 4. UPI Verification

Every UPI transaction can be opened through its verification button.

```text
┌─────────────────────────────────────┐
│          UPI Verification            │
├─────────────────────────────────────┤
│                                     │
│        ⚠ Not Verified UPI           │
│  Payment proof has not been         │
│  verified yet.                      │
│                                     │
│  [ 📁 Upload Image ]                │
│  [ 📷 Take Image   ]                │
│  [ ✓ Self Verified ]                │
│                                     │
│  [ Close ]                          │
└─────────────────────────────────────┘
```

### Verification methods

#### 1. Upload Image

Select an existing payment screenshot/photo.

```text
Device → Image → IndexedDB → Proof Archive
```

#### 2. Take Image

Uses the device camera through:

```html
<input type="file" accept="image/*" capture="environment">
```

#### 3. Self Verified

Marks the transaction as manually verified without attaching an image.

---

# 🗃️ 5. Payment Proof Archive

Payment-proof images use **IndexedDB**, separate from the main collection state.

```text
IndexedDB
└── collection_sathi_proofs_v1
    └── proofs
        ├── proof_xxxxx
        │   ├── id
        │   ├── entryId
        │   ├── blob
        │   ├── method
        │   └── createdAt
        ├── proof_xxxxx
        └── ...
```

The transaction stores a reference:

```js
verification: {
    status: "verified",
    method: "image",
    proofId: "...",
    verifiedAt: "..."
}
```

The actual image Blob is stored in IndexedDB.

### Important storage behavior

Proof images are **not automatically deleted by the application**.

They remain associated with their proof record until browser/app storage is cleared or the application itself explicitly removes them.

> **Privacy note:** this is device-local storage, not cloud backup. Clearing browser/app data, uninstalling the app, or an equivalent storage reset can remove locally stored data.

---

# 🔐 6. Data Storage Architecture

Collection Sathi uses two browser storage systems.

```text
                    COLLECTION SATHI
                           │
              ┌────────────┴────────────┐
              │                         │
        localStorage                IndexedDB
              │                         │
       Main application             UPI proof images
             data                     │
              │                       Blob
              │                         │
       collection_sathi_v2      collection_sathi_proofs_v1
```

### Main application storage

```js
var STORAGE_KEY = "collection_sathi_v2";
```

The complete application state is serialized into JSON:

```js
localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
);
```

### Proof image storage

```js
var PROOF_DB_NAME = "collection_sathi_proofs_v1";
var PROOF_STORE = "proofs";
```

---

# 🧱 7. Application Data Model

The main state follows this structure:

```js
{
    title: "Collection Sathi",

    signatureName: "",

    persons: [],

    events: [],

    currentEventId: null,

    nextId: 1
}
```

A collection person:

```js
{
    id: 1,
    name: "Rahul Sharma"
}
```

A collection round:

```js
{
    id: 2,
    title: "Day 2 Collection",
    date: "...",
    entries: []
}
```

A collection entry:

```js
{
    id: 3,
    personId: 1,
    amount: 100,
    mode: "cash"
}
```

A verified UPI entry may contain:

```js
verification: {
    status: "verified",
    method: "image",
    proofId: "proof_xxxxx",
    verifiedAt: "..."
}
```

or:

```js
verification: {
    status: "verified",
    method: "self",
    proofId: null,
    verifiedAt: "..."
}
```

---

# 🔄 8. Collection Round System

A **round** represents an independent collection session.

Examples:

```text
Collection
Day 2 Collection
Day 3 Collection
Festival Collection
Class Collection
Event Collection
```

Each round has its own entries.

```text
Events
│
├── Round 1
│   ├── Rahul ₹100
│   ├── Priya ₹500
│   └── Aman ₹200
│
├── Round 2
│   ├── Sameer ₹100
│   └── Arjun ₹300
│
└── Round 3
    └── ...
```

The application can switch the active round from **History**.

---

# 📊 9. Summary Tab

The Summary tab calculates statistics for the currently selected round.

```text
┌──────────────────────────────────┐
│        TOTAL COLLECTION          │
│            ₹800                  │
│        3 entries                 │
├──────────────────────────────────┤
│  💵 CASH              📲 UPI     │
│  ₹300                 ₹500       │
│  2 entries            1 entry    │
├──────────────────────────────────┤
│  CASH ████████░░░░ UPI           │
├──────────────────────────────────┤
│ Average          Maximum         │
│ ₹267             ₹500            │
└──────────────────────────────────┘
```

### Calculated values

- Total collection
- Cash total
- UPI total
- Cash entry count
- UPI entry count
- Total entry count
- Average collection
- Maximum single collection
- Cash/UPI percentage bar
- All-time total
- Total number of rounds

---

# 📚 10. History Tab

History displays all collection rounds.

```text
┌────────────────────────────────────┐
│ ALL-TIME COLLECTION       ₹2,500   │
├────────────────────────────────────┤
│ Day 3 Collection             ₹900  │
│ Wed, 24 Sep 2026                   │
│ 4 entries · Cash ₹400 · UPI ₹500  │
├────────────────────────────────────┤
│ Day 2 Collection             ₹700  │
│ Tue, 23 Sep 2026                   │
│ 3 entries · Cash ₹300 · UPI ₹400  │
├────────────────────────────────────┤
│ Collection                   ₹900  │
│ Mon, 22 Sep 2026                   │
│ 5 entries · Cash ₹500 · UPI ₹400  │
└────────────────────────────────────┘
```

Selecting a round makes it the active round.

---

# 🧾 11. Invoice System

The Invoice tab generates a round-specific printable document.

It includes:

```text
Collection title
Round title
Date
Serial number
Person name
Payment mode
UPI verification status
Amount
Total
Cash total
UPI total
Signature
Project credit
```

Example:

```text
             🧾
       Collection Sathi
     Day 2 Collection
     24 Sep 2026

────────────────────────────────────────

Sr.   Name          Mode   Verification   Amount

1     Rahul         Cash        —          ₹100
2     Priya         UPI       ✓ Verified   ₹500
3     Aman          UPI       ⚠ Not        ₹200

────────────────────────────────────────

Total (3 entries)                       ₹800

Cash: ₹100  •  UPI: ₹700

          Thank you for contributing! 🙏

             Vinay Soni
              Signature
```

---

# 🖨️ 12. Print / Save as PDF

The application uses the browser's native print system:

```js
window.print();
```

This allows the user to:

```text
Print
   │
   ├── Physical printer
   └── Save as PDF
```

The application also includes print-specific CSS so the invoice can be printed without the normal mobile navigation.

---

# 📤 13. Invoice Image Sharing

The application uses `html2canvas` to convert the invoice into an image.

```text
Invoice DOM
     │
     ▼
html2canvas
     │
     ▼
Canvas
     │
     ▼
PNG Blob
     │
     ├── Native Share Sheet
     │
     └── Download invoice.png
```

When supported, the app uses:

```js
navigator.share({
    files: [file],
    title: state.title,
    text: ...
});
```

If file sharing is unavailable, the image is downloaded instead.

---

# 🔳 14. UPI QR Code

A UPI QR image can be uploaded from the device.

The application:

1. Reads the selected image.
2. Loads it into an image object.
3. Resizes it to a maximum dimension.
4. Draws it onto a canvas.
5. Converts it to JPEG data.
6. Stores it in the main application state.
7. Saves the state to localStorage.

```text
UPI QR Image
     │
     ▼
FileReader
     │
     ▼
Image
     │
     ▼
Canvas Resize
     │
     ▼
JPEG Data URL
     │
     ▼
state.qrImage
     │
     ▼
localStorage
```

The QR can later be:

```text
View
Change
Remove
```

---

# 👤 15. Person Reuse

Collection Sathi maintains a person list separately from collection entries.

When a name is entered:

```text
"Rahul Sharma"
      │
      ▼
findOrCreatePerson()
      │
 ┌────┴────┐
 │         │
Exists    New
 │         │
Reuse     Create
ID        Person ID
```

Name comparison is case-insensitive after trimming.

This prevents unnecessary duplicate person records for the same entered name.

---

# 💰 16. Default Amount

A default amount can be configured from the Add Person modal.

Example:

```text
Default = ₹100
```

Bulk entries then automatically use:

```text
Rahul       ₹100
Priya       ₹100
Aman        ₹100
Sameer      ₹100
```

The default amount is saved in the local application state.

---

# ✏️ 17. Editing Entries

Existing entries can be edited.

Editable fields:

```text
Person name
Amount
Payment mode
```

### Verification safety

If an existing transaction changes its:

```text
Person
Amount
Payment mode
```

the previous verification is cleared.

This prevents a verification record from silently remaining attached to a materially changed transaction.

---

# 🗑️ 18. Delete System

The application provides confirmation dialogs before destructive operations.

Supported deletion:

```text
Entry
Round
Saved QR
```

Example:

```text
┌──────────────────────────────┐
│ Delete round?                │
├──────────────────────────────┤
│ Delete this round and all    │
│ its entries?                 │
│                              │
│ [ Cancel ]       [ Delete ]  │
└──────────────────────────────┘
```

---

# 🛡️ 19. HTML Safety

User-entered names and titles are escaped before being inserted into generated HTML.

The application uses:

```js
escapeHtml()
```

to escape:

```text
&
<
>
"
'
```

This reduces the risk of user-entered HTML being interpreted as markup.

---

# ⚙️ Function Reference

The application is implemented as a self-contained HTML/CSS/JavaScript application.

## Core state functions

| Function | Purpose |
|---|---|
| `todayIso()` | Returns the current ISO timestamp |
| `freshEvent(title)` | Creates a new collection round |
| `defaultState()` | Initializes a fresh application state |
| `findOrCreatePerson(name)` | Finds an existing person or creates one |
| `getPersonName(id)` | Resolves a person ID to a name |
| `getEventById(id)` | Finds a round by ID |
| `getCurrentEvent()` | Returns the active round |
| `getLatestEvent()` | Returns the newest round |
| `load()` | Loads and validates saved application state |
| `getDefaultAmount()` | Returns the configured default amount |
| `save()` | Persists application state to localStorage |

---

## Formatting and UI functions

| Function | Purpose |
|---|---|
| `fmt(n)` | Formats numeric amounts using Indian numbering |
| `fmtDate(iso)` | Formats dates for display |
| `showToast(msg)` | Displays a temporary notification |
| `escapeHtml(s)` | Escapes user-provided HTML-sensitive characters |
| `svgEdit()` | Returns edit icon SVG |
| `svgTrash()` | Returns delete icon SVG |
| `svgCheck()` | Returns check icon SVG |
| `svgX()` | Returns close/cancel icon SVG |
| `svgChevron()` | Returns chevron icon SVG |

---

## Calculation functions

| Function | Purpose |
|---|---|
| `computeTotals(event)` | Calculates Cash, UPI, total, counts, average, and maximum |
| `computeAllTime()` | Calculates total collection across all rounds |

---

## Rendering functions

| Function | Purpose |
|---|---|
| `renderPersonDatalist()` | Updates the person autocomplete list |
| `renderRoundInfo()` | Updates active round information |
| `renderEntries()` | Renders current-round collection entries |
| `renderSummary()` | Renders collection statistics |
| `renderHistory()` | Renders round history |
| `renderInvoice()` | Generates the current invoice |
| `renderAll()` | Refreshes all major application views |
| `refreshHeaderDate()` | Updates the header date |
| `activateTab(tabId)` | Switches between Collect, Summary, History, and Invoice |

---

## Add / collection functions

| Function | Purpose |
|---|---|
| `updateDefaultUi()` | Updates default amount labels |
| `openAddModal()` | Opens the add-person dialog |
| `closeAddModal()` | Closes the add-person dialog |

---

## Round and confirmation functions

| Function | Purpose |
|---|---|
| `openConfirm(type, id, msg)` | Opens a destructive-action confirmation |
| `closeConfirm()` | Closes the confirmation dialog |

---

## UPI QR functions

| Function | Purpose |
|---|---|
| `renderQrCard()` | Displays the saved QR or empty state |

QR handling also uses:

```text
FileReader
Image
Canvas
toDataURL()
localStorage
```

---

## UPI proof functions

| Function | Purpose |
|---|---|
| `getProofDb()` | Opens/initializes the IndexedDB proof archive |
| `makeProofId()` | Generates a unique proof identifier |
| `saveProofImage(entryId, blob, method)` | Stores a payment-proof image |
| `getProofImage(proofId)` | Retrieves a stored proof image |
| `verificationLabel(e)` | Returns the verification label |
| `findEntryById(id)` | Finds an entry across all rounds |
| `renderVerifyModal()` | Updates the UPI verification dialog |
| `openVerify(id)` | Opens verification for a UPI entry |
| `closeVerify()` | Closes the verification dialog |
| `handleProofFile(file)` | Saves an uploaded/captured proof and verifies the transaction |

---

# 🧠 Verification Data Flow

```text
                     UPI ENTRY
                         │
                         ▼
                Open Verification
                         │
             ┌───────────┼───────────┐
             │           │           │
             ▼           ▼           ▼
         Upload       Camera      Self Verify
          Image        Image
             │           │           │
             └──────┬────┘           │
                    ▼                ▼
               Image Blob       verification
                    │             method:self
                    ▼
                 IndexedDB
                    │
                    ▼
                 proofId
                    │
                    ▼
          Entry.verification
                    │
                    ▼
              ✓ Verified UPI
```

---

# 🗂️ Project Structure

The current application is intentionally lightweight.

```text
Collection-Sathi/
│
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
└── README.md
```

> `index.html` currently contains the application's HTML, CSS, and JavaScript in a single self-contained file.

---

# 🌐 Web / PWA Architecture

Collection Sathi is a web application and can also be packaged for Android.

```text
                    GitHub Pages
                         │
                         ▼
              Collection-Sathi Web App
                         │
             ┌───────────┴───────────┐
             │                       │
          Browser                Android TWA
             │                       │
             └───────────┬───────────┘
                         ▼
                  Same Web Application
```

The current Android package is a **Trusted Web Activity (TWA) wrapper**, so the main application code is served from the web project rather than bundled as a normal Android WebView asset package.

Current web application URL:

**https://vinaysoni-in.github.io/Collection-Sathi/**

---

# 📱 Android APK

The Android package uses:

```text
Trusted Web Activity
        │
        ▼
Collection-Sathi GitHub Pages
        │
        ▼
index.html
```

This architecture means normal HTML/CSS/JavaScript updates can be deployed to the same web location without necessarily rebuilding the Android wrapper.

### Important

Keep the deployed application URL compatible with the existing TWA configuration.

Avoid casually changing:

```text
Application URL
Package identity
Digital Asset Links
Manifest configuration
Storage keys
```

unless the Android wrapper is intentionally being updated.

---

# 💾 Persistence Rules

The application currently uses:

```text
localStorage
    ↓
Main collection state

IndexedDB
    ↓
UPI payment proof images
```

### Main storage key

```text
collection_sathi_v2
```

### Proof database

```text
collection_sathi_proofs_v1
```

### Important compatibility rule

Do **not** rename the main storage key unless a migration system is also implemented.

Changing:

```js
collection_sathi_v2
```

to another key would make existing locally stored data appear unavailable to the updated application.

---

# 🔒 Privacy Model

Collection Sathi is designed around local device storage.

```text
User Data
   │
   ├── Collection records → localStorage
   │
   ├── QR image           → localStorage
   │
   └── Proof images       → IndexedDB
```

The source code currently does not implement a remote collection database or user account system.

### Storage limitations

Local storage is not the same as cloud backup.

Data may be lost if the user:

- clears site/app storage,
- clears browser data,
- uninstalls an application that owns the storage,
- uses a browser/storage reset,
- or otherwise removes the site's local data.

Users should keep an independent backup for important financial records.

---

# 🌍 External Dependencies

The application currently references:

### Google Fonts

```text
Yatra One
Caveat
Work Sans
```

### html2canvas

```text
html2canvas 1.4.1
```

It is used for invoice image generation.

The normal collection/storage functionality is implemented in the application itself, while these external resources support typography and invoice image sharing.

---

# 🧪 Recommended Testing Checklist

Before publishing a major update, test:

```text
[ ] App opens
[ ] Existing collection data loads
[ ] Existing rounds load
[ ] Existing entries load
[ ] Cash entry works
[ ] UPI entry works
[ ] UPI verification works
[ ] Upload proof works
[ ] Camera proof works
[ ] Self verification works
[ ] Proof survives reload
[ ] QR survives reload
[ ] Editing amount clears old verification
[ ] Editing person clears old verification
[ ] Changing UPI → Cash clears verification
[ ] New round works
[ ] Round switching works
[ ] Round deletion works
[ ] Entry deletion works
[ ] Summary totals are correct
[ ] History totals are correct
[ ] Invoice generation works
[ ] Print / PDF works
[ ] Invoice image sharing works
[ ] Mobile layout works
[ ] Android TWA opens the updated site
[ ] Existing local data remains accessible
```

---

# 🚀 Deployment

Collection Sathi can be deployed as a static website.

A typical GitHub Pages deployment is:

```text
Repository
    │
    ├── index.html
    ├── manifest.json
    ├── sw.js
    └── assets
         │
         ▼
     GitHub Pages
         │
         ▼
https://<username>.github.io/<repository>/
```

For the current project, the deployed path is:

```text
/Collection-Sathi/
```

After changing `index.html`, verify the live GitHub Pages version before distributing an APK update.

---

# 🛠️ Development Workflow

```text
1. Edit index.html
       │
       ▼
2. Test locally
       │
       ▼
3. Test storage compatibility
       │
       ▼
4. Test UPI verification
       │
       ▼
5. Test proof persistence
       │
       ▼
6. Commit changes
       │
       ▼
7. Push to GitHub
       │
       ▼
8. Verify GitHub Pages
       │
       ▼
9. Test Android TWA
```

---

# ⚠️ Important Development Rules

### Do not casually change the storage key

```js
var STORAGE_KEY = "collection_sathi_v2";
```

### Do not remove the proof database

```js
collection_sathi_proofs_v1
```

### Do not change the TWA URL without updating the Android configuration

```text
https://vinaysoni-in.github.io/Collection-Sathi/
```

### Do not treat local storage as a backup

Important collection records should be backed up independently.

### Test destructive changes with real-world-like sample data

Use several:

```text
Cash entries
UPI entries
Verified UPI entries
Proof images
Multiple rounds
```

before releasing a structural storage change.

---

# 🧩 Technology Stack

```text
┌──────────────────────────────────────┐
│             Collection Sathi         │
├──────────────────────────────────────┤
│ HTML5                                │
│ CSS3                                 │
│ Vanilla JavaScript                   │
│ localStorage                         │
│ IndexedDB                            │
│ FileReader API                       │
│ Canvas API                           │
│ Web Share API                        │
│ Browser Print API                    │
│ Service Worker                       │
│ Web App Manifest                     │
│ html2canvas                          │
│ GitHub Pages                         │
│ Trusted Web Activity (Android)       │
└──────────────────────────────────────┘
```

No frontend framework is required.

```text
No React
No Vue
No Angular
No Node.js runtime required for the client
```

The current app is intentionally built as a compact client-side application.

---

# 📜 License

The current project source provided for this README does **not specify a license file or explicit open-source license text**.

If this repository is intended to be publicly reusable, add a license such as **MIT** to the repository and update this section accordingly.

Until a license is explicitly added, public visibility of a repository should not be interpreted as granting broad reuse rights.

---

# 🤝 Contributing

Contributions are welcome.

A useful contribution should:

1. Keep existing stored data compatible.
2. Avoid breaking old collection rounds.
3. Preserve UPI verification behavior.
4. Preserve proof-image references.
5. Test mobile layouts.
6. Test the Android TWA after major web changes.
7. Keep the application dependency-light.

Suggested workflow:

```bash
git clone <repository-url>
cd Collection-Sathi

# edit files

git add .
git commit -m "Improve collection feature"
git push
```

---

# 🐛 Bug Reports

When reporting a bug, include:

```text
Device:
Android / Browser:
App version:
Browser version:
What happened:
Expected behavior:
Steps to reproduce:
Console error, if available:
Screenshot, if useful:
```

For data/storage problems, also mention whether:

```text
Browser data was cleared
App was reinstalled
APK was updated
index.html was updated
```

---

# 🗺️ Roadmap Ideas

Potential future improvements:

```text
[ ] Export / Import backup
[ ] JSON backup
[ ] CSV export
[ ] PDF export improvements
[ ] Search entries
[ ] Filter Cash / UPI
[ ] Verification filter
[ ] Proof archive viewer
[ ] Proof deletion management
[ ] Collection analytics
[ ] Dark mode
[ ] Optional cloud backup
[ ] Optional encrypted backup
[ ] Better offline caching
[ ] Data migration system
[ ] Automated storage integrity checks
```

These are roadmap ideas, not necessarily implemented in the current version.

---

# 👨‍💻 Author

**Vinay Soni**

GitHub:

**https://github.com/VinaySoni-IN**

Project:

**Collection Sathi**

---

# ❤️ Project Philosophy

Collection Sathi is built around a simple idea:

```text
COLLECT
   ↓
RECORD
   ↓
VERIFY
   ↓
STORE
   ↓
SUMMARIZE
   ↓
PRINT / SHARE
```

A collection record should be easy to enter, easy to verify, easy to review, and easy to turn into a usable record.

---

<div align="center">

### 🪔 Collection Sathi

**A simple digital companion for collection records.**

Made with ❤️ by **Vinay Soni**

</div>
