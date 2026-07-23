# Corvus Stack

Professional portfolio of **Héctor García** — Electronics and Computer Engineer, software developer.

**Live site:** [corvusstack.dev](https://corvusstack.dev)

## About

Static website showcasing my work as a developer: projects, professional profile, and ways to get in touch. Built from scratch with HTML, CSS, and JavaScript, with no frameworks or external dependencies.

## Features

- **Bilingual (EN/ES)** — language switcher with automatic browser detection and saved preference
- Minimalist dark theme, with subtle scroll animations
- Fully responsive
- Direct resume (CV) download in PDF
- Functional contact form (via [FormSubmit](https://formsubmit.co))
- Hosted on GitHub Pages with a custom domain

## Tech stack

- HTML5
- CSS3 (CSS variables, no frameworks)
- JavaScript (vanilla)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Structure

```
├── index.html          # Site content and structure
├── styles.css           # Styling and visual theme
├── script.js             # Scroll animations + language switcher
├── assets/                # Images, logos, and resume
└── CNAME                   # Custom domain configuration
```

## Local development

Being a static site, no installation or build step is required. Just open `index.html` in your browser, or spin up a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

The site is automatically published via **GitHub Pages** from the `main` branch, pointing to the custom domain `corvusstack.dev` configured in the `CNAME` file.

## Contact

- GitHub: [@HectorGarcia05](https://github.com/HectorGarcia05)
- LinkedIn: [Héctor García](https://www.linkedin.com/in/HectorGarcia05/)
- Email: corvusstack@gmail.com
- Email: hrugarcia@gmail.com

---

© 2026 Corvus Stack — by Héctor García
