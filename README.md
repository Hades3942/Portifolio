# Abdulkadir Mbwana — Developer Portfolio

> A responsive personal portfolio for sharing my work, technical interests, and the ideas I am building toward.

[![Live site](https://img.shields.io/badge/Live%20site-Visit%20portfolio-5266f5?style=for-the-badge)](https://hades3942.github.io/Portifolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Hades3942-101828?style=for-the-badge&logo=github)](https://github.com/Hades3942)

## Overview

This is my personal developer portfolio, built as a lightweight static website with semantic HTML, custom CSS, and vanilla JavaScript. The site introduces my background as a Computer Science student at the State University of Zanzibar, highlights selected projects, and provides a direct way to start a conversation about opportunities and collaborations.

The design combines a dark, editorial visual direction with responsive layouts, accessible interactions, and small motion details that help the experience feel clear and intentional across devices.

## What is included

| Area | Description |
|---|---|
| Hero introduction | A concise introduction to my interests in web development, cybersecurity, and practical software. |
| About section | Background information, current direction, and a link to my GitHub profile. |
| Capabilities | Focus areas covering web development, cybersecurity, and problem solving. |
| Project showcase | Filterable project cards across web, mobile, systems, and security categories. |
| Case studies | Accessible dialogs with project summaries, highlights, and technology tags. |
| GitHub showcase | Loads recent public repositories from the GitHub API with repository metadata and links. |
| Contact form | Sends messages directly to `abdulkadirbakar39@gmail.com` through FormSubmit. |
| Theme controls | Persistent light and dark mode with system-theme detection. |
| Responsive navigation | Mobile menu, active section highlighting, skip link, and keyboard-friendly controls. |

## Featured work

The portfolio currently highlights projects including:

- **MarineLink Portal:** A marketplace platform supporting fishers, buyers, administrators, and regulators.
- **Cybersecurity Lab:** Hands-on exploration of Kali Linux, Wireshark, Nmap, and ProxyChains.
- **E-voting application:** A Java and SQLite mobile application focused on secure and anonymous online voting.
- **Blue Tech Solutions:** A responsive website for a technology solutions company.
- **Portfolio Website:** This project, built to communicate my work and continued learning journey.

More projects are loaded directly from my [GitHub profile](https://github.com/Hades3942).

## Technology stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure and accessible content. |
| CSS3 | Responsive layouts, theme tokens, components, transitions, and visual styling. |
| JavaScript | Theme persistence, navigation, filtering, case-study dialogs, API loading, and form submission. |
| GitHub API | Public repository showcase inside the portfolio. |
| FormSubmit | Direct contact-form delivery without requiring a custom backend. |
| GitHub Pages | Public static hosting for the portfolio. |

## Project structure

```text
Portifolio/
├── index.html              # Main portfolio page
├── style.css               # Global styles and responsive design system
├── app.js                  # Interactions and feature behavior
├── 20260418_070325.jpg     # Profile image
└── README.md               # Project documentation
```

## Run locally

Because the project is a static site, no package installation or build step is required.

```bash
git clone https://github.com/Hades3942/Portifolio.git
cd Portifolio
python3 -m http.server 5500
```

Open [http://localhost:5500](http://localhost:5500) in your browser.

You can also open `index.html` directly, although a local server is recommended so that browser API requests and relative assets behave consistently.

## Contact form setup

The contact form uses [FormSubmit](https://formsubmit.co/) to deliver messages to `abdulkadirbakar39@gmail.com`. The first submission may trigger an email-address confirmation request from FormSubmit. Confirm that email before expecting regular submissions to arrive in the inbox.

The form includes a reply-to address, a custom subject, a table-style email template, CAPTCHA protection, and a hidden honeypot field for basic spam filtering.

## Deployment

The site is designed for static hosting and is currently available through GitHub Pages:

**Live site:** [hades3942.github.io/Portifolio](https://hades3942.github.io/Portifolio/)

To publish future changes through GitHub Pages, commit the updated files to the configured branch and push them to GitHub. GitHub Pages will serve the static files from the repository according to the repository’s Pages settings.

## Author

**Abdulkadir Bakar Mbwana**

Computer Science student · Zanzibar

- GitHub: [@Hades3942](https://github.com/Hades3942)
- LinkedIn: [Abdulkadir Mbwana](https://www.linkedin.com/in/abdulkadir-mbwana/)
- Email: [abdulkadirbakar39@gmail.com](mailto:abdulkadirbakar39@gmail.com)

## License

This portfolio is a personal project. The source is available for learning and reference; please contact me before reusing personal content, profile imagery, or written material.

