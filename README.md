# Collection Sathi

> **Simple • Local • Open Source • Collection Management**

Collection Sathi is a lightweight, mobile-first web application for recording group money collections with **Cash + UPI support**, **multi-round history**, **UPI verification**, **payment-proof image archiving**, **summaries**, **printable invoices**, **image sharing**, and a locally saved **UPI QR code**.

It is designed for practical collection workflows such as **chanda, festival funds, class collections, community contributions, events, and small group records**.

---

# Collection Sathi

<p align="center">
  <img src="Banner.png" alt="Collection Sathi Banner" width="100%">
</p>

<p align="center">
  <strong>Simple, local collection management.</strong><br>
  Record collections, verify UPI payments, preserve payment proofs, and generate clean reports.
</p>

<p align="center">
  <a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">
    <img src="https://img.shields.io/badge/Download%20APK-Latest%20Release-6B1420?style=for-the-badge&logo=android&logoColor=white" alt="Download APK">
  </a>
  &nbsp;
  <a href="https://vinaysoni-in.github.io/Collection-Sathi/">
    <img src="https://img.shields.io/badge/Open%20Web%20App-Live-9A1B2B?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Open Web App">
  </a>
  &nbsp;
  <a href="">
    <img src="https://img.shields.io/badge/F--Droid-Coming%20Soon-333333?style=for-the-badge&logo=f-droid&logoColor=white" alt="F-Droid">
  </a>
</p>

<p align="center">
  <a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest"><strong>📱 Download APK</strong></a>
  &nbsp; • &nbsp;
  <a href="https://vinaysoni-in.github.io/Collection-Sathi/"><strong>🌐 Open Web App</strong></a>
  &nbsp; • &nbsp;
  <a href=""><strong>🤖 Get it on F-Droid</strong></a>
</p>

<p align="center">
  <sub>Cash • UPI • Verification • Payment Proof • History • Reports</sub>
</p>

---

## 🚀 Quick Start

| Platform | Action |
|---|---|
| 📱 **Android** | <a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest"><strong>Download the latest APK</strong></a> |
| 🌐 **Web** | <a href="https://vinaysoni-in.github.io/Collection-Sathi/"><strong>Open Collection Sathi</strong></a> |
| 🤖 **F-Droid** | <a href=""><strong>Coming Soon</strong></a> |

### Download from GitHub Releases

The Android application is distributed through GitHub Releases.

**Latest release:**  
<a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">Download Collection Sathi APK →</a>

### Open without installing

You can use the same application directly in a modern browser:

<a href="https://vinaysoni-in.github.io/Collection-Sathi/">
  <strong>🌐 Launch Collection Sathi Web App</strong>
</a>

### F-Droid

F-Droid distribution is reserved as a future distribution channel.

<a href=""><strong>🤖 F-Droid — Coming Soon</strong></a>

> **Note:** The F-Droid button intentionally has a placeholder destination until an official F-Droid package/repository URL is available.

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
