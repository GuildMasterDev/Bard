# Bard 🎭

A curated resource directory for speakers, performers, and storytellers — shipped both as a cross-platform **Electron 41** desktop app and as an installable **PWA** web demo.

**Live demo:** https://guildmasterdev.github.io/Bard

---

## ✨ Features

- **🎭 Five curated categories** — Public Speaking, Performance Arts, Storytelling, Tools & Apps, and Learning
- **🔍 Live search** — instantly filter resources by name, description, or category
- **⚡ Category filters** — smooth animated transitions between views
- **🎨 Glassmorphism UI** — frosted-glass cards, conic gradient accents, theatrical red + amber palette
- **🔗 Smart link handling** — desktop app opens links in the system browser; web demo opens in new tabs
- **📱 Responsive** — tuned for mobile, tablet, and desktop
- **🌐 Works offline** — PWA caches the entire demo on first load

## 🚀 Try it

### As a PWA (web)

Visit **https://guildmasterdev.github.io/Bard** in any modern browser. On mobile, use your browser's *Add to Home Screen* option to install.

### As a desktop app (Electron)

```bash
git clone https://github.com/GuildMasterDev/Bard.git
cd Bard
npm install
npm start
```

### Building native installers

```bash
npm run build          # current platform
npm run build:mac      # macOS (dmg, zip)
npm run build:win      # Windows (nsis, portable)
npm run build:linux    # Linux (AppImage, deb)
```

Output is written to `dist/`.

## 📱 PWA support

The web demo is a full Progressive Web App:

- **`web/manifest.json`** — name, theme color (`#dc2626` theatrical red), dark background (`#0a0a0f`), and 192/512 icons (both `any` and `maskable`).
- **`web/sw.js`** — versioned `bard-v1` cache, cache-first strategy, offline fallback.
- **Installable** on Chrome, Edge, Safari (iOS 16.4+), and Android.

Once installed, Bard runs standalone and works fully offline.

## 📚 Included resources

### Public Speaking
TED Talks · Toastmasters International · Orai · VirtualSpeech · Speech Shadowing

### Performance Arts
MasterClass · The Actors Studio · Stage 32 · Backstage

### Storytelling
The Moth · StoryCorps · Pixar in a Box · Twine

### Tools & Apps
Teleprompter Premium · Beautiful.ai · Descript · Canva · OBS Studio

### Learning
Coursera · Skillshare · Khan Academy · edX

## 🛠️ Technical stack

- **Electron 41** with `sandbox: true`, `contextIsolation: true`, and IPC-gated `shell.openExternal` (URLs validated to `http(s)` before opening)
- **electron-builder 26** for multi-platform packaging
- **Vanilla JS** — no runtime framework, no build step, no bundler
- **Single-file web demo** — all CSS, JS, and data inline in `web/index.html`
- **Service Worker** for offline caching

## 📁 Project structure

```
Bard/
├── main.js                     # Electron main process
├── preload.js                  # Preload bridge (ipcRenderer.invoke)
├── renderer.js                 # Desktop renderer filtering logic
├── index.html                  # Desktop UI
├── styles.css                  # Desktop styles
├── assets/                     # App icons
├── web/                        # Self-contained web demo & PWA
│   ├── index.html              # All markup, CSS, JS, and resource data
│   ├── manifest.json           # PWA manifest
│   ├── sw.js                   # Service worker
│   └── icons/                  # PWA icons (192, 512, maskable)
└── .github/workflows/
    ├── deploy-web.yml          # Auto-deploy web/ to GitHub Pages
    └── ci.yml                  # npm ci + node --check on all JS
```

## 🧪 CI

Every push to `main` and every PR runs `npm ci` and `node --check` across all tracked JS files. Every push to `main` that touches `web/` (or the deploy workflow itself) re-publishes the PWA to GitHub Pages.

## 🖥️ Platform support

- macOS 10.14+
- Windows 10/11
- Linux (Ubuntu, Fedora, Debian)
- Any modern browser (web demo)

## 🤝 Contributing

PRs welcome — add resources, polish the UI, or improve the tooling. Resource links must point to real, current URLs.

## 📄 License

MIT — see [LICENSE](LICENSE).

---

**Version:** 2.0.0
**Author:** GuildMaster Development
**Repository:** https://github.com/GuildMasterDev/Bard
