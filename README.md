<div align="center">

<img src="icon-512.png" alt="Collection Sathi icon" width="96">

<h1>Collection Sathi</h1>

<p>
<sub>Simple, local-first collection tracking — Cash + UPI, history, invoices, and more.</sub>
</p>

<p>
<a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">
<strong>📱 Download Android APK</strong>
</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="https://vinaysoni-in.github.io/Collection-Sathi/">
<strong>🌐 Open Web App</strong>
</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<strong>🤖 F-Droid — Coming Soon</strong>
</p>

</div>

<hr>

<!-- ====================================================== -->
<!-- TWO COLUMN MAIN LAYOUT                                  -->
<!-- ====================================================== -->

<table width="100%">
<tr>

<!-- ======================= LEFT ========================== -->

<td width="50%" valign="top">

<h2>📱 Screenshot Gallery</h2>

<table width="100%">
<tr>
<td width="33%">
<img src="screenshots/screen1.png" alt="Screenshot 1" width="100%">
</td>
<td width="33%">
<img src="screenshots/screen2.png" alt="Screenshot 2" width="100%">
</td>
<td width="33%">
<img src="screenshots/screen3.png" alt="Screenshot 3" width="100%">
</td>
</tr>

<tr>
<td>
<img src="screenshots/screen4.png" alt="Screenshot 4" width="100%">
</td>
<td>
<img src="screenshots/screen5.png" alt="Screenshot 5" width="100%">
</td>
<td>
<img src="screenshots/screen6.png" alt="Screenshot 6" width="100%">
</td>
</tr>
</table>

<h2>🚀 Quick Start</h2>

<table width="100%">
<tr>
<th>Platform</th>
<th>Action</th>
</tr>
<tr>
<td>📱 <strong>Android</strong></td>
<td>
<a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">
Download latest APK
</a>
</td>
</tr>
<tr>
<td>🌐 <strong>Web</strong></td>
<td>
<a href="https://vinaysoni-in.github.io/Collection-Sathi/">
Open Collection Sathi
</a>
</td>
</tr>
<tr>
<td>🤖 <strong>F-Droid</strong></td>
<td>Coming Soon</td>
</tr>
</table>

<h3>Download from GitHub Releases</h3>

<p>
The Android application is distributed through GitHub Releases.
</p>

<p>
<strong>Latest release:</strong><br>
<a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">
Download Collection Sathi APK →
</a>
</p>

<h3>Open without installing</h3>

<p>
You can use the same application directly in a modern browser:
</p>

<p>
<a href="https://vinaysoni-in.github.io/Collection-Sathi/">
<strong>🌐 Launch Collection Sathi Web App</strong>
</a>
</p>

<h3>F-Droid</h3>

<p>
F-Droid distribution is reserved as a future distribution channel.
</p>

<blockquote>
<strong>Note:</strong> The F-Droid button intentionally has a placeholder
destination until an official F-Droid package/repository URL is available.
</blockquote>

<h2>✨ Features</h2>

<table width="100%">
<tr>
<th>Feature</th>
<th>Description</th>
</tr>

<tr><td>👥 Person Management</td><td>Create and reuse person records by name</td></tr>
<tr><td>💵 Cash Collection</td><td>Record cash payments with amount</td></tr>
<tr><td>📲 UPI Collection</td><td>Record UPI payments separately from cash</td></tr>
<tr><td>✅ UPI Verification</td><td>Mark UPI payments as verified manually or with proof</td></tr>
<tr><td>📷 Payment Proof</td><td>Upload an image or capture one using the device camera</td></tr>
<tr><td>🗃️ Proof Archive</td><td>UPI proof images are stored in browser IndexedDB</td></tr>
<tr><td>🧾 Invoice</td><td>Generate a clean round-wise collection invoice</td></tr>
<tr><td>🖨️ Print / PDF</td><td>Print the invoice or save it as PDF using the browser print dialog</td></tr>
<tr><td>📤 Share Invoice</td><td>Generate an invoice image and use the device share sheet when supported</td></tr>
<tr><td>📱 UPI QR</td><td>Save a collection UPI QR image locally on the device</td></tr>
<tr><td>🔄 Multiple Rounds</td><td>Create and switch between independent collection rounds</td></tr>
<tr><td>📊 Summary</td><td>View total, Cash, UPI, counts, average, and maximum collection</td></tr>
<tr><td>📚 History</td><td>Browse all collection rounds and their totals</td></tr>
<tr><td>✍️ Signature</td><td>Add a signature/name to generated invoices</td></tr>
<tr><td>💾 Local Storage</td><td>Main collection data is stored locally on the device</td></tr>
<tr><td>📴 Local-first</td><td>No account or server-side collection database is required</td></tr>
<tr><td>📱 Responsive UI</td><td>Designed primarily for phones and small screens</td></tr>
<tr><td>🎨 Themed UI</td><td>Mobile-first Indian/community collection aesthetic</td></tr>

</table>

<h2>🧭 Navigation</h2>

<table width="100%">
<tr>
<td align="center"><strong>👥 COLLECT</strong><br>Add/edit payments<br>Verify UPI</td>
<td align="center"><strong>📊 SUMMARY</strong><br>Totals<br>Cash/UPI</td>
</tr>
<tr>
<td align="center"><strong>🕒 HISTORY</strong><br>All rounds<br>Switch rounds</td>
<td align="center"><strong>🧾 INVOICE</strong><br>Receipt<br>Print/PDF/Share</td>
</tr>
</table>

<h2>👥 1. Collect Tab</h2>

<p>
The <strong>Collect</strong> tab is the main working screen.
</p>

<h3>Add a person</h3>

<p>A collection entry contains:</p>

<pre>
Person Name
Amount
Payment Mode
</pre>

<p>Payment modes:</p>

<pre>
💵 Cash
📲 UPI
</pre>

<h3>Single-person entry</h3>

<pre>
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
</pre>

<h3>Bulk entry</h3>

<p>Multiple names can be pasted one per line:</p>

<pre>
Rahul Sharma
Priya Verma
Aman Khan
Sameer
</pre>

<p>
Each pasted name is converted into a collection entry using the current default amount.
</p>

<h2>💵 2. Cash Collection</h2>

<pre>
┌────────────────────────────────────┐
│ ① Rahul Sharma                     │
│   ₹100   CASH             ✎  🗑     │
└────────────────────────────────────┘
</pre>

<p>Cash entries do not require UPI verification.</p>

<h2>📲 3. UPI Collection</h2>

<pre>
┌────────────────────────────────────┐
│ ② Priya Verma                      │
│   ₹500   ✓ Verified UPI    ✓  ✎ 🗑 │
└────────────────────────────────────┘
</pre>

<p>An unverified UPI entry is displayed as:</p>

<pre>⚠ Not Verified UPI</pre>

<p>A verified entry is displayed as:</p>

<pre>✓ Verified UPI</pre>

<h2>✅ 4. UPI Verification</h2>

<pre>
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
</pre>

<h3>Verification methods</h3>

<h4>1. Upload Image</h4>

<p>Select an existing payment screenshot/photo.</p>

<pre>Device → Image → IndexedDB → Proof Archive</pre>

<h4>2. Take Image</h4>

<p>Uses the device camera through:</p>

<pre>&lt;input type="file" accept="image/*" capture="environment"&gt;</pre>

<h4>3. Self Verified</h4>

<p>
Marks the transaction as manually verified without attaching an image.
</p>

<h2>🗃️ 5. Payment Proof Archive</h2>

<p>
Payment-proof images use <strong>IndexedDB</strong>, separate from the main collection state.
</p>

<pre>
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
</pre>

<pre>
verification: {
    status: "verified",
    method: "image",
    proofId: "...",
    verifiedAt: "..."
}
</pre>

<p>
The actual image Blob is stored in IndexedDB.
</p>

<blockquote>
<strong>Privacy note:</strong> this is device-local storage, not cloud backup.
Clearing browser/app data, uninstalling the app, or an equivalent storage
reset can remove locally stored data.
</blockquote>

</td>

<!-- ======================= RIGHT ========================= -->

<td width="50%" valign="top">

<h2>🖼️ Application Structure</h2>

<pre>
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
</pre>

<h2>🔐 6. Data Storage Architecture</h2>

<pre>
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
</pre>

<h3>Main application storage</h3>

<pre>
var STORAGE_KEY = "collection_sathi_v2";
</pre>

<pre>
localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
);
</pre>

<h3>Proof image storage</h3>

<pre>
var PROOF_DB_NAME = "collection_sathi_proofs_v1";
var PROOF_STORE = "proofs";
</pre>

<h2>🧱 7. Application Data Model</h2>

<pre>
{
    title: "Collection Sathi",

    signatureName: "",

    persons: [],

    events: [],

    currentEventId: null,

    nextId: 1
}
</pre>

<pre>
{
    id: 1,
    name: "Rahul Sharma"
}
</pre>

<pre>
{
    id: 2,
    title: "Day 2 Collection",
    date: "...",
    entries: []
}
</pre>

<pre>
{
    id: 3,
    personId: 1,
    amount: 100,
    mode: "cash"
}
</pre>

<h2>🔄 8. Collection Round System</h2>

<p>A <strong>round</strong> represents an independent collection session.</p>

<pre>
Collection
Day 2 Collection
Day 3 Collection
Festival Collection
Class Collection
Event Collection
</pre>

<pre>
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
</pre>

<p>
The application can switch the active round from <strong>History</strong>.
</p>

<h2>📊 9. Summary Tab</h2>

<pre>
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
</pre>

<ul>
<li>Total collection</li>
<li>Cash total</li>
<li>UPI total</li>
<li>Cash entry count</li>
<li>UPI entry count</li>
<li>Total entry count</li>
<li>Average collection</li>
<li>Maximum single collection</li>
<li>Cash/UPI percentage bar</li>
<li>All-time total</li>
<li>Total number of rounds</li>
</ul>

<h2>📚 10. History Tab</h2>

<pre>
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
</pre>

<p>Selecting a round makes it the active round.</p>

<h2>🧾 11. Invoice System</h2>

<p>The Invoice tab generates a round-specific printable document.</p>

<ul>
<li>Collection title</li>
<li>Round title</li>
<li>Date</li>
<li>Serial number</li>
<li>Person name</li>
<li>Payment mode</li>
<li>UPI verification status</li>
<li>Amount</li>
<li>Total</li>
<li>Cash total</li>
<li>UPI total</li>
<li>Signature</li>
<li>Project credit</li>
</ul>

<h2>🖨️ 12. Print / Save as PDF</h2>

<pre>window.print();</pre>

<pre>
Print
   │
   ├── Physical printer
   └── Save as PDF
</pre>

<p>
The application also includes print-specific CSS so the invoice can be
printed without the normal mobile navigation.
</p>

<h2>📤 13. Invoice Image Sharing</h2>

<pre>
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
</pre>

<pre>
navigator.share({
    files: [file],
    title: state.title,
    text: ...
});
</pre>

<p>
If file sharing is unavailable, the image is downloaded instead.
</p>

<h2>🔳 14. UPI QR Code</h2>

<ol>
<li>Reads the selected image.</li>
<li>Loads it into an image object.</li>
<li>Resizes it to a maximum dimension.</li>
<li>Draws it onto a canvas.</li>
<li>Converts it to JPEG data.</li>
<li>Stores it in the main application state.</li>
<li>Saves the state to localStorage.</li>
</ol>

<pre>
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
</pre>

<p>QR actions:</p>

<pre>
View
Change
Remove
</pre>

<h2>👤 15. Person Reuse</h2>

<pre>
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
</pre>

<p>
Name comparison is case-insensitive after trimming.
</p>

<h2>💰 16. Default Amount</h2>

<pre>Default = ₹100</pre>

<pre>
Rahul       ₹100
Priya       ₹100
Aman        ₹100
Sameer      ₹100
</pre>

<p>
The default amount is saved in the local application state.
</p>

<h2>✏️ 17. Editing Entries</h2>

<p>Editable fields:</p>

<pre>
Person name
Amount
Payment mode
</pre>

<p>
If an existing transaction changes its person, amount, or payment mode,
the previous verification is cleared.
</p>

<h2>🗑️ 18. Delete System</h2>

<p>Supported deletion:</p>

<pre>
Entry
Round
Saved QR
</pre>

<pre>
┌──────────────────────────────┐
│ Delete round?                │
├──────────────────────────────┤
│ Delete this round and all    │
│ its entries?                 │
│                              │
│ [ Cancel ]       [ Delete ]  │
└──────────────────────────────┘
</pre>

<h2>🛡️ 19. HTML Safety</h2>

<p>
User-entered names and titles are escaped before being inserted into
generated HTML.
</p>

<pre>escapeHtml()</pre>

<pre>
&
&lt;
&gt;
"
'
</pre>

<p>
This reduces the risk of user-entered HTML being interpreted as markup.
</p>

</td>

</tr>
</table>

<hr>

<!-- ====================================================== -->
<!-- SECOND TWO COLUMN SECTION                              -->
<!-- ====================================================== -->

<table width="100%">
<tr>

<td width="50%" valign="top">

<h2>⚙️ Function Reference</h2>

<h3>Core state functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>todayIso()</code></td><td>Returns the current ISO timestamp</td></tr>
<tr><td><code>freshEvent(title)</code></td><td>Creates a new collection round</td></tr>
<tr><td><code>defaultState()</code></td><td>Initializes a fresh application state</td></tr>
<tr><td><code>findOrCreatePerson(name)</code></td><td>Finds an existing person or creates one</td></tr>
<tr><td><code>getPersonName(id)</code></td><td>Resolves a person ID to a name</td></tr>
<tr><td><code>getEventById(id)</code></td><td>Finds a round by ID</td></tr>
<tr><td><code>getCurrentEvent()</code></td><td>Returns the active round</td></tr>
<tr><td><code>getLatestEvent()</code></td><td>Returns the newest round</td></tr>
<tr><td><code>load()</code></td><td>Loads and validates saved application state</td></tr>
<tr><td><code>getDefaultAmount()</code></td><td>Returns the configured default amount</td></tr>
<tr><td><code>save()</code></td><td>Persists application state to localStorage</td></tr>
</table>

<h3>Formatting and UI functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>fmt(n)</code></td><td>Formats numeric amounts using Indian numbering</td></tr>
<tr><td><code>fmtDate(iso)</code></td><td>Formats dates for display</td></tr>
<tr><td><code>showToast(msg)</code></td><td>Displays a temporary notification</td></tr>
<tr><td><code>escapeHtml(s)</code></td><td>Escapes user-provided HTML-sensitive characters</td></tr>
<tr><td><code>svgEdit()</code></td><td>Returns edit icon SVG</td></tr>
<tr><td><code>svgTrash()</code></td><td>Returns delete icon SVG</td></tr>
<tr><td><code>svgCheck()</code></td><td>Returns check icon SVG</td></tr>
<tr><td><code>svgX()</code></td><td>Returns close/cancel icon SVG</td></tr>
<tr><td><code>svgChevron()</code></td><td>Returns chevron icon SVG</td></tr>
</table>

<h3>Calculation functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>computeTotals(event)</code></td><td>Calculates Cash, UPI, total, counts, average, and maximum</td></tr>
<tr><td><code>computeAllTime()</code></td><td>Calculates total collection across all rounds</td></tr>
</table>

<h3>Rendering functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>renderPersonDatalist()</code></td><td>Updates the person autocomplete list</td></tr>
<tr><td><code>renderRoundInfo()</code></td><td>Updates active round information</td></tr>
<tr><td><code>renderEntries()</code></td><td>Renders current-round collection entries</td></tr>
<tr><td><code>renderSummary()</code></td><td>Renders collection statistics</td></tr>
<tr><td><code>renderHistory()</code></td><td>Renders round history</td></tr>
<tr><td><code>renderInvoice()</code></td><td>Generates the current invoice</td></tr>
<tr><td><code>renderAll()</code></td><td>Refreshes all major application views</td></tr>
<tr><td><code>refreshHeaderDate()</code></td><td>Updates the header date</td></tr>
<tr><td><code>activateTab(tabId)</code></td><td>Switches between Collect, Summary, History, and Invoice</td></tr>
</table>

<h3>Add / collection functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>updateDefaultUi()</code></td><td>Updates default amount labels</td></tr>
<tr><td><code>openAddModal()</code></td><td>Opens the add-person dialog</td></tr>
<tr><td><code>closeAddModal()</code></td><td>Closes the add-person dialog</td></tr>
</table>

<h3>Round and confirmation functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>openConfirm(type, id, msg)</code></td><td>Opens a destructive-action confirmation</td></tr>
<tr><td><code>closeConfirm()</code></td><td>Closes the confirmation dialog</td></tr>
</table>

<h3>UPI QR functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>renderQrCard()</code></td><td>Displays the saved QR or empty state</td></tr>
</table>

<p>QR handling also uses:</p>

<pre>
FileReader
Image
Canvas
toDataURL()
localStorage
</pre>

</td>

<td width="50%" valign="top">

<h3>UPI proof functions</h3>

<table width="100%">
<tr><th>Function</th><th>Purpose</th></tr>
<tr><td><code>getProofDb()</code></td><td>Opens/initializes the IndexedDB proof archive</td></tr>
<tr><td><code>makeProofId()</code></td><td>Generates a unique proof identifier</td></tr>
<tr><td><code>saveProofImage(entryId, blob, method)</code></td><td>Stores a payment-proof image</td></tr>
<tr><td><code>getProofImage(proofId)</code></td><td>Retrieves a stored proof image</td></tr>
<tr><td><code>verificationLabel(e)</code></td><td>Returns the verification label</td></tr>
<tr><td><code>findEntryById(id)</code></td><td>Finds an entry across all rounds</td></tr>
<tr><td><code>renderVerifyModal()</code></td><td>Updates the UPI verification dialog</td></tr>
<tr><td><code>openVerify(id)</code></td><td>Opens verification for a UPI entry</td></tr>
<tr><td><code>closeVerify()</code></td><td>Closes the verification dialog</td></tr>
<tr><td><code>handleProofFile(file)</code></td><td>Saves an uploaded/captured proof and verifies the transaction</td></tr>
</table>

<h2>🧠 Verification Data Flow</h2>

<pre>
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
</pre>

<h2>🗂️ Project Structure</h2>

<pre>
Collection-Sathi/
│
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
└── README.md
</pre>

<p>
<code>index.html</code> currently contains the application's HTML, CSS,
and JavaScript in a single self-contained file.
</p>

<h2>🌐 Web / PWA Architecture</h2>

<pre>
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
</pre>

<p>
The current Android package is a <strong>Trusted Web Activity (TWA) wrapper</strong>,
so the main application code is served from the web project rather than bundled
as a normal Android WebView asset package.
</p>

<p>
Current web application URL:
</p>

<p>
<strong>https://vinaysoni-in.github.io/Collection-Sathi/</strong>
</p>

<h2>📱 Android APK</h2>

<pre>
Trusted Web Activity
        │
        ▼
Collection-Sathi GitHub Pages
        │
        ▼
index.html
</pre>

<p>
This architecture means normal HTML/CSS/JavaScript updates can be deployed
to the same web location without necessarily rebuilding the Android wrapper.
</p>

<h3>Important</h3>

<p>
Keep the deployed application URL compatible with the existing TWA configuration.
</p>

<pre>
Application URL
Package identity
Digital Asset Links
Manifest configuration
Storage keys
</pre>

<h2>💾 Persistence Rules</h2>

<pre>
localStorage
    ↓
Main collection state

IndexedDB
    ↓
UPI payment proof images
</pre>

<p><strong>Main storage key</strong></p>

<pre>collection_sathi_v2</pre>

<p><strong>Proof database</strong></p>

<pre>collection_sathi_proofs_v1</pre>

<blockquote>
<strong>Important compatibility rule:</strong>
Do not rename the main storage key unless a migration system is also implemented.
</blockquote>

<h2>🔒 Privacy Model</h2>

<pre>
User Data
   │
   ├── Collection records → localStorage
   │
   ├── QR image           → localStorage
   │
   └── Proof images       → IndexedDB
</pre>

<p>
The source code currently does not implement a remote collection database
or user account system.
</p>

<h3>Storage limitations</h3>

<ul>
<li>clears site/app storage</li>
<li>clears browser data</li>
<li>uninstalls an application that owns the storage</li>
<li>uses a browser/storage reset</li>
<li>otherwise removes the site's local data</li>
</ul>

<p>
Users should keep an independent backup for important financial records.
</p>

<h2>🌍 External Dependencies</h2>

<h3>Google Fonts</h3>

<pre>
Yatra One
Caveat
Work Sans
</pre>

<h3>html2canvas</h3>

<pre>html2canvas 1.4.1</pre>

<p>
It is used for invoice image generation.
</p>

<h2>🧪 Recommended Testing Checklist</h2>

<pre>
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
</pre>

</td>
</tr>
</table>

<hr>

<table width="100%">
<tr>

<td width="50%" valign="top">

<h2>🚀 Deployment</h2>

<pre>
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
https://&lt;username&gt;.github.io/&lt;repository&gt;/
</pre>

<p>For the current project:</p>

<pre>/Collection-Sathi/</pre>

<p>
After changing <code>index.html</code>, verify the live GitHub Pages
version before distributing an APK update.
</p>

<h2>🛠️ Development Workflow</h2>

<pre>
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
</pre>

<h2>⚠️ Important Development Rules</h2>

<h3>Do not casually change the storage key</h3>

<pre>var STORAGE_KEY = "collection_sathi_v2";</pre>

<h3>Do not remove the proof database</h3>

<pre>collection_sathi_proofs_v1</pre>

<h3>Do not change the TWA URL without updating Android configuration</h3>

<pre>
https://vinaysoni-in.github.io/Collection-Sathi/
</pre>

<h3>Do not treat local storage as a backup</h3>

<p>
Important collection records should be backed up independently.
</p>

<h3>Test destructive changes with real-world-like sample data</h3>

<pre>
Cash entries
UPI entries
Verified UPI entries
Proof images
Multiple rounds
</pre>

<h2>🧩 Technology Stack</h2>

<pre>
HTML5
CSS3
Vanilla JavaScript
localStorage
IndexedDB
FileReader API
Canvas API
Web Share API
Browser Print API
Service Worker
Web App Manifest
html2canvas
GitHub Pages
Trusted Web Activity (Android)
</pre>

<p>No frontend framework is required.</p>

<pre>
No React
No Vue
No Angular
No Node.js runtime required for the client
</pre>

</td>

<td width="50%" valign="top">

<h2>📜 License</h2>

<p>
The current project source provided for this README does
<strong>not specify a license file or explicit open-source license text</strong>.
</p>

<p>
If this repository is intended to be publicly reusable, add a license such as
<strong>MIT</strong> to the repository and update this section accordingly.
</p>

<p>
Until a license is explicitly added, public visibility of a repository should
not be interpreted as granting broad reuse rights.
</p>

<h2>🤝 Contributing</h2>

<p>Contributions are welcome.</p>

<ol>
<li>Keep existing stored data compatible.</li>
<li>Avoid breaking old collection rounds.</li>
<li>Preserve UPI verification behavior.</li>
<li>Preserve proof-image references.</li>
<li>Test mobile layouts.</li>
<li>Test the Android TWA after major web changes.</li>
<li>Keep the application dependency-light.</li>
</ol>

<pre>
git clone &lt;repository-url&gt;
cd Collection-Sathi

# edit files

git add .
git commit -m "Improve collection feature"
git push
</pre>

<h2>🐛 Bug Reports</h2>

<pre>
Device:
Android / Browser:
App version:
Browser version:
What happened:
Expected behavior:
Steps to reproduce:
Console error, if available:
Screenshot, if useful:
</pre>

<p>For data/storage problems, also mention whether:</p>

<pre>
Browser data was cleared
App was reinstalled
APK was updated
index.html was updated
</pre>

<h2>🗺️ Roadmap Ideas</h2>

<pre>
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
</pre>

<p>
These are roadmap ideas, not necessarily implemented in the current version.
</p>

<h2>📁 Recommended Repository Layout</h2>

<pre>
Collection-Sathi/
│
├── Banner.png
├── Screenshot 1.png
├── Screenshot 2.png
├── Screenshot 3.png
├── Screenshot 4.png
├── Screenshot 5.png
├── Screenshot 6.png
│
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
└── README.md
</pre>

</td>

</tr>
</table>

<hr>

<h2 align="center">📦 Downloads, Links & Screenshots</h2>

<table width="100%">
<tr>

<td align="center" width="25%">
<h3>📱 Android APK</h3>

<a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">
<img src="https://img.shields.io/badge/GET%20IT%20ON-Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Get it on Android">
</a>

<p><sub>Download the latest stable APK</sub></p>
</td>

<td align="center" width="25%">
<h3>🌐 Web App</h3>

<a href="https://vinaysoni-in.github.io/Collection-Sathi/">
<img src="https://img.shields.io/badge/OPEN%20IN-Browser-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Open Web App">
</a>

<p><sub>Run Collection Sathi directly in your browser</sub></p>
</td>

<td align="center" width="25%">
<h3>🤖 F-Droid</h3>

<img src="https://img.shields.io/badge/GET%20IT%20ON-F--Droid-87C51F?style=for-the-badge&logo=f-droid&logoColor=white" alt="Get it on F-Droid">

<p><sub>Coming soon</sub></p>
</td>

<td align="center" width="25%">
<h3>💻 GitHub</h3>

<a href="https://github.com/VinaySoni-IN/Collection-Sathi">
<img src="https://img.shields.io/badge/VIEW%20ON-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="View on GitHub">
</a>

<p><sub>Source code, issues, releases & contributions</sub></p>
</td>

</tr>
</table>

<h2>🖼️ Screenshot Gallery</h2>

<table width="100%">
<tr>

<td align="center" width="33%">
<a href="Screenshot%201.png">
<img src="Screenshot%201.png" alt="Screenshot 1" width="100%">
</a>
<br>
<strong>Screenshot 1</strong>
</td>

<td align="center" width="33%">
<a href="Screenshot%202.png">
<img src="Screenshot%202.png" alt="Screenshot 2" width="100%">
</a>
<br>
<strong>Screenshot 2</strong>
</td>

<td align="center" width="33%">
<a href="Screenshot%203.png">
<img src="Screenshot%203.png" alt="Screenshot 3" width="100%">
</a>
<br>
<strong>Screenshot 3</strong>
</td>

</tr>

<tr>

<td align="center">
<a href="Screenshot%204.png">
<img src="Screenshot%204.png" alt="Screenshot 4" width="100%">
</a>
<br>
<strong>Screenshot 4</strong>
</td>

<td align="center">
<a href="Screenshot%205.png">
<img src="Screenshot%205.png" alt="Screenshot 5" width="100%">
</a>
<br>
<strong>Screenshot 5</strong>
</td>

<td align="center">
<a href="Screenshot%206.png">
<img src="Screenshot%206.png" alt="Screenshot 6" width="100%">
</a>
<br>
<strong>Screenshot 6</strong>
</td>

</tr>
</table>

<hr>

<h2 align="center">🔗 Direct Project Links</h2>

<table align="center">
<tr>
<th>Platform</th>
<th>Destination</th>
</tr>

<tr>
<td>📱 Android APK</td>
<td>
<a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">
Latest GitHub Release
</a>
</td>
</tr>

<tr>
<td>🌐 Web App</td>
<td>
<a href="https://vinaysoni-in.github.io/Collection-Sathi/">
Open Collection Sathi
</a>
</td>
</tr>

<tr>
<td>💻 Source Code</td>
<td>
<a href="https://github.com/VinaySoni-IN/Collection-Sathi">
GitHub Repository
</a>
</td>
</tr>

<tr>
<td>🤖 F-Droid</td>
<td><strong>Coming Soon</strong></td>
</tr>

</table>

<blockquote>
<strong>F-Droid:</strong> The button is intentionally left without a destination
until Collection Sathi has an official F-Droid listing. Replace
<code>href=""</code> with the official F-Droid URL when it becomes available.
</blockquote>

<hr>

<table width="100%">
<tr>

<td width="50%" valign="top">

<h2>👨‍💻 Author</h2>

<p><strong>Vinay Soni</strong></p>

<p>
GitHub:
<br>
<strong>https://github.com/VinaySoni-IN</strong>
</p>

<p>
Project:
<br>
<strong>Collection Sathi</strong>
</p>

</td>

<td width="50%" valign="top">

<h2>❤️ Project Philosophy</h2>

<pre>
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
</pre>

<p>
A collection record should be easy to enter, easy to verify,
easy to review, and easy to turn into a usable record.
</p>

</td>

</tr>
</table>

<hr>

<div align="center">

<h2>🪔 Collection Sathi</h2>

<p>
<strong>A simple digital companion for collection records.</strong>
</p>

<p>
<a href="https://github.com/VinaySoni-IN/Collection-Sathi/releases/latest">
Download APK
</a>
&nbsp; • &nbsp;
<a href="https://vinaysoni-in.github.io/Collection-Sathi/">
Open Web App
</a>
&nbsp; • &nbsp;
<strong>F-Droid</strong>
</p>

<br>

Made with ❤️ by <strong>Vinay Soni</strong>

</div>
