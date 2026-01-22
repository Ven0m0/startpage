<h1 align="center">Startpage</h1>

<p align="center">A minimalist, installable startpage designed for quick access to your favorite websites</p>

![Startpage Screenshot](/resources/startpage-2024-07-24.webp)

This is a personalized startpage, designed to be your browser homepage. It includes quick links to your favorite websites, a search bar, offline support, and a minimalist layout. The startpage is installable as a Progressive Web App (PWA) for a native app-like experience.

## Features

- **Progressive Web App (PWA)**: Install as a standalone app on any device
- **Offline Support**: Works without internet connection via service worker caching
- **Customizable Search**: Choose between Brave, Google, and DuckDuckGo
- **Multiple Color Schemes**: Dracula Dark, Gruvbox, Nord, and Catppuccin
- **Keyboard Shortcuts**: Quick navigation without touching the mouse
- **Lightweight**: Optimized performance with minimal resource usage

## Installation

### Quick Start (Browser)

1. Clone this repository or download the files
2. Open `index.html` in your browser
3. Set it as your browser's homepage

### Install as PWA (Recommended)

The startpage can be installed as a Progressive Web App for a native app-like experience:

#### Desktop (Chrome/Edge/Brave)
1. Serve the startpage using a local server (required for PWA):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server -p 8000

   # Using PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000` in your browser
3. Look for the install icon in the address bar (⊕ or computer icon)
4. Click "Install" to add it as a standalone app

#### Mobile (Android/iOS)
1. Host the startpage on a web server or use GitHub Pages
2. Open the URL in Chrome (Android) or Safari (iOS)
3. **Android**: Tap the menu (⋮) → "Install app" or "Add to Home screen"
4. **iOS**: Tap the share button → "Add to Home Screen"

### Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Select the main branch as source
4. Your startpage will be available at `https://yourusername.github.io/startpage`

## Repository Structure

- **resources**: This directory contains screenshots of the page
- **scripts**: This directory contains the optimized JavaScript for the startpage
- **static**: This directory contains the CSS, images, and icons
- **manifest.json**: PWA manifest file for installation metadata
- **sw.js**: Service worker for offline functionality and caching

## Keyboard Shortcuts

The following keyboard shortcuts are available on the search page:

- **Escape**: Hide the settings panel.
- **Alt + Space**: Focus on the search input field.
- **Enter**: Execute the search.
- **Ctrl + C**: Clear the search input field.

## Contribute

If you want to make any change, follow these steps:

1. Open an issue to discuss the changes.
2. Fork this repository.
3. Create a new branch for your contribution: `git checkout -b your-branch-name`.
4. Make your changes.
5. Commit your changes, for example: `git commit -m 'fix: incorrect svg path'`.
6. Push your changes to your forked repository: `git push origin your-branch-name`.
7. Open a Pull Request in this repository and reference the original issue.

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for more details.

## Credits

- Inspired from [Fxzii Startpage](https://github.com/Fxzzi/startpage).
