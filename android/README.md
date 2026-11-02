# Android build

The APK in this folder is the **Trusted Web Activity** wrapper around the live PWA
(<https://vinaysoni-in.github.io/Collection-Sathi/>). Same app, same on-device data —
installed from a package instead of a browser tab.

| | |
|---|---|
| File | `Collection-Sathi-1.0.0.apk` (4.1 MB) |
| Package | `io.github.vinaysoni_in.twa` |
| Version | `1.0.0.0` (versionCode **1**) |
| Android | minSdk **24** (7.0) · targetSdk **36** |
| Signature | v1 + v2 + v3, self-signed |
| Cert SHA-256 | `AB:FA:CA:7A:9E:26:74:7C:2C:0E:C8:3C:58:F5:C2:91:C8:F5:26:DB:21:97:7C:A6:B6:DB:94:40:C7:38:88:AA` |
| APK SHA-256 | `8b83fc02c8a6986c67a44ba97af3c57201c62ee10942ae15b8de4b4458709581` |
| Built with | PWABuilder "Google Play package" (Bubblewrap TWA) |

`SHA256SUMS.txt` holds the hashes for both files in this folder.

## Install

1. Open <https://vinaysoni-in.github.io/Collection-Sathi/android/Collection-Sathi-1.0.0.apk>
   on the phone (or download from this folder).
2. Allow **Install unknown apps** for your browser / file manager.
3. Open the APK → **Install** → launch **Collection Sathi**.

Verify first if you like: `sha256sum Collection-Sathi-1.0.0.apk`.

## Full-screen (remove the browser bar)

A TWA only drops the URL bar when the site proves it owns the app, by serving
`assetlinks.json` at the **origin root**:

```text
https://vinaysoni-in.github.io/.well-known/assetlinks.json
```

This app is hosted under `/Collection-Sathi/`, so that file **cannot** live in this
repository — it needs the `VinaySoni-IN/vinaysoni-in.github.io` user-site repo, with a
`.nojekyll` file at its root (GitHub Pages runs Jekyll, which silently drops directories
starting with a dot). `assetlinks.json` is committed here as the reference copy.

Without it the app still installs and works — it just keeps a Chrome bar on top.

## Where the signing key is **not**

The Play package also contains `signing.keystore` and `signing-key-info.txt` (keystore +
key passwords in plain text). Those are **the app's identity**: anyone holding them can
sign an "update" Android will accept, and losing them means the installed app can never be
updated. They are deliberately not in this repository — keep them in a password manager,
in two places.

If the app later moves to **Play App Signing**, Google holds the real signing key and a
lost upload key can be reset from Play Console.

## Release policy

- Every new build must bump `android:versionCode` (currently `1`) or Android refuses the update.
- The package id `io.github.vinaysoni_in.twa` is permanent — changing it creates a different app.
- Ship the `.apk` here (users install it); the `.aab` is only for Play Console uploads and
  cannot be installed by users, so it does not belong in this repo.
- Because this is a TWA, UI changes ship through the website; a new APK is only needed
  when the wrapper itself changes (icon, name, orientation, target SDK).
- The APK is committed to the repo on purpose: it gives a stable, CDN-backed download URL
  on GitHub Pages that works without a release asset.
