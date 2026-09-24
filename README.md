# 🪙 Collection Sathi

**Collection Sathi** (a.k.a. **Chanda Sathi**) is a free, open-source, installable web app for tracking group money collections — Cash/UPI split, multi-round history, and one-tap printable invoices. Built for chanda collections, festival funds, class contributions, and any community group that collects money together.

No sign-up, no server, no database — everything runs in your browser and is saved on your own device.

---

## ✨ Features

- **Collect tab** — add people one by one, or paste a whole list at once. Choose Cash or UPI per entry, default amount ₹20 (editable anytime).
- **Summary tab** — live totals: Cash vs UPI split, average per person, highest contribution, and an all-time total across every round.
- **History tab** — every collection round is saved with its date. Start a new round anytime; old rounds stay editable forever.
- **Invoice tab** — a clean, printable invoice with your own name typed in as a cursive signature. Save it as a PDF via your browser's print dialog, or share it straight to WhatsApp as an image.
- **Installable PWA** — add it to your home screen and it opens full-screen, just like a native app. Works offline once loaded.
- **Your data stays yours** — everything is stored locally in your browser (`localStorage`). Nothing is ever sent to a server.

## 🚀 Live Demo / Deploy Your Own

This is a static site — five files, no build step. To host your own copy for free:

1. Fork or download this repository.
2. Go to your repo's **Settings → Pages**.
3. Under "Build and deployment", set **Branch: main**, folder **/ (root)**, then **Save**.
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/`.

### Turn it into an installable app
Open your deployed link in Chrome (Android) → menu (⋮) → **Install app**. It'll appear on your home screen with no browser bar, exactly like a native app.

### Want a real `.apk`?
Paste your deployed URL into [PWABuilder.com](https://www.pwabuilder.com) → select **Android** → download the generated package. No coding or signing knowledge needed.

## 🗂️ Project structure

```
├── index.html       # the entire app — markup, styles, and logic
├── manifest.json     # PWA metadata (name, icons, theme colors)
├── sw.js             # minimal service worker (enables install + offline)
├── icon-192.png       # app icon, 192×192
├── icon-512.png       # app icon, 512×512
├── LICENSE
└── README.md
```

Everything lives in `index.html` on purpose — copy the file, open it, and every line of logic is right there. No build tools, no dependencies to install.

## 🛠️ Tech

Plain HTML, CSS, and vanilla JavaScript. The only external library is [html2canvas](https://html2canvas.hertzen.com/) (loaded from a CDN), used solely to turn the invoice into a shareable image for WhatsApp.

## 🤝 Contributing

Issues and pull requests are welcome — this is meant to be a small, useful tool that anyone running a chanda/collection can pick up and use immediately.

## 📄 License

MIT — see [LICENSE](LICENSE). Free to use, modify, and share.

## 🙏 Credits

Made by **[Vinay Soni](https://github.com/VinaySoni-IN)** · Built with **[Claude](https://claude.ai)**
