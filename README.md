<table>
<tr>
<td><img src="icon-512.png" width="72"></td>
<td>

# Collection Sathi
Simple, local-first collection tracking — Cash + UPI, verified payments, history & instant invoices.

</td>
</tr>
</table>

<p>
  <img src="https://img.shields.io/badge/license-MIT-6B1420?style=flat-square">
  <img src="https://img.shields.io/badge/platform-Web%20%7C%20Android-9A1B2B?style=flat-square">
  <img src="https://img.shields.io/badge/status-in%20development-333333?style=flat-square">
</p>

A free, open-source app to track group money collections — built for **chanda, festival funds, class collections, and community contributions**. No login, no server — everything stays on your device.

---
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
  <sub>Cash • UPI • Verification • Payment Proof • History • Reports</sub>
</p>

---

## ✨ Features

| | |
|---|---|
| 👥 **People** | Reusable person records, no re-typing names |
| 💵📲 **Cash + UPI** | Track both, with per-entry mode |
| ✅ **UPI Verification** | Mark verified, attach proof, or self-verify |
| 🔄 **Multiple Rounds** | Independent collection sessions with full history |
| 📊 **Summary** | Totals, average, max, Cash/UPI split |
| 🧾 **Invoice** | Printable, signed, shareable as an image |
| 🔳 **UPI QR** | Save your QR once, reuse every round |
| 💾 **Local-first** | Your data never leaves your device |

## 🧭 Sections

| Collect | Summary | History | Invoice |
|---|---|---|---|
| Add & verify payments | Totals & stats | All rounds, switch anytime | Print, PDF, share |
## 📱 Screenshots

<table>
<tr>
<td align="center"><img src="screenshots/screen1.png" width="220"><br><sub>Home Screen</sub></td>
<td align="center"><img src="screenshots/screen2.png" width="220"><br><sub>Add Person</sub></td>
<td align="center"><img src="screenshots/screen3.png" width="220"><br><sub>UPI Verification</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/screen4.png" width="220"><br><sub>Summary</sub></td>
<td align="center"><img src="screenshots/screen5.png" width="220"><br><sub>History</sub></td>
<td align="center"><img src="screenshots/screen6.png" width="220"><br><sub>Invoice</sub></td>
</tr>
</table>

## 🛠️ Tech Stack

Plain HTML, CSS & JavaScript — no framework required.

`localStorage` · `IndexedDB` · Canvas API · Web Share API · Service Worker · Web App Manifest · `html2canvas`
## 🗂️ File Structure

```text
Collection-Sathi/
│
├── index.html              # App UI, CSS & JavaScript (self-contained)
├── manifest.json           # PWA config — name, icons, theme
├── sw.js                   # Service worker (installable + offline)
├── icon-192.png            # App icon (small)
├── icon-512.png            # App icon (large)
├── LICENSE                 # MIT License
└── README.md               # This file
```
## 🔄 How It Works

```mermaid
flowchart TD
    A[Open App] --> B[Add / Select Person]
    B --> C[Cash Entry]
    B --> D[UPI Entry]
    D --> E[Verify Payment<br/>image / self]
    C --> F[Saved to Round<br/>localStorage]
    E --> F
    F --> G[Summary]
    F --> H[History]
    F --> I[Invoice<br/>Print / PDF / Share]
```
## 🧱 Data Model

```mermaid
erDiagram
    STATE ||--o{ PERSON : has
    STATE ||--o{ EVENT : has
    EVENT ||--o{ ENTRY : contains
    PERSON ||--o{ ENTRY : "referenced by"

    STATE {
        string title
        string signatureName
        int nextId
    }
    PERSON {
        int id
        string name
    }
    EVENT {
        int id
        string title
        string date
    }
    ENTRY {
        int id
        int personId
        int amount
        string mode
    }
```
## 🏗️ Architecture

```mermaid
flowchart LR
    A[GitHub Pages<br/>index.html] --> B[Browser]
    A --> C[Android TWA]
    B --> D[Same Web App]
    C --> D
```

## 🚧 Production Readiness

Currently in **active development** — functional and usable, not yet a finished v1.

**Ready:** core collection flow · invoices (print/share) · UPI verification + proof storage · local persistence · installable PWA
**Not yet ready:** backup/export · cross-device testing · signed release APK · versioned releases

> Use it for real collections at your own discretion — keep a manual backup of totals until export/backup ships.

## 🗺️ Roadmap

- [ ] Export / Import (JSON, CSV)
- [ ] Search & filter entries
- [ ] Proof archive viewer + cleanup
- [ ] Dark mode
- [ ] Signed, versioned APK releases
- [ ] F-Droid listing
- [ ] Optional encrypted backup

## 🤝 Contributing & Contribution Flow

Contributions are welcome — keep changes compatible with existing stored data, and test on mobile before submitting.

```mermaid
flowchart LR
    A[Fork Repo] --> B[Create Branch]
    B --> C[Make Changes]
    C --> D[Test on Mobile]
    D --> E[Open Pull Request]
    E --> F[Review & Merge]
```
---

<p align="center">
<sub>
Collection Sathi is provided "as is" without warranty of any kind — the developer is not liable for any loss of data, funds, or disputes arising from its use. All collection data is stored locally on your device; nothing is uploaded to any server, and you are solely responsible for backing up and verifying your own records. This project is licensed under the <a href="LICENSE">MIT License</a> — free to use, modify, and share, with attribution appreciated. Built with respect and gratitude for the open-source community that makes projects like this possible.
</sub>
</p>

<p align="center">
<sub>
Made with ❤️ by <a href="https://github.com/VinaySoni-IN">Vinay Soni</a> · Built with <a href="https://claude.ai">Claude</a>
</sub>
</p>
