const body = document.body;
const header = document.querySelector(".site-header");
const themeToggle = document.getElementById("darkToggle");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const year = document.getElementById("year");

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function updateThemeButton() {
  const isDark = body.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
  themeToggle.querySelector(".theme-label").textContent = isDark
    ? "Light mode"
    : "Dark mode";
}

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  body.classList.add("dark-mode");
}
updateThemeButton();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "portfolio-theme",
    body.classList.contains("dark-mode") ? "dark" : "light",
  );
  updateThemeButton();
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) =>
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${visible.target.id}`,
      ),
    );
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
);
sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  },
  { passive: true },
);

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("emptyState");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) =>
      item.classList.toggle("active", item === button),
    );
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });
    emptyState.hidden = visibleCount > 0;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const bodyText = encodeURIComponent(
    `Hi Abdulkadir,\n\n${message}\n\nReply to: ${email}`,
  );
  window.location.href = `mailto:?subject=${subject}&body=${bodyText}`;
  formNote.textContent =
    "Your email app should open with the message prepared.";
});

year.textContent = new Date().getFullYear();

const projectDialog = document.getElementById("projectDialog");
const dialogClose = document.getElementById("dialogClose");
const dialogType = document.getElementById("dialogType");
const dialogTitle = document.getElementById("dialogTitle");
const dialogSummary = document.getElementById("dialogSummary");
const dialogHighlights = document.getElementById("dialogHighlights");
const dialogTags = document.getElementById("dialogTags");
const dialogLink = document.getElementById("dialogLink");

const projectDetails = {
  portfolio: {
    type: "Web development / Case study",
    title: "Portfolio Website",
    summary:
      "A personal portfolio redesigned as a focused, responsive experience for communicating technical interests, selected work, and opportunities to collaborate.",
    highlights: [
      "Responsive layout built for mobile, tablet, and desktop",
      "Accessible navigation, focus states, and reduced-motion support",
      "Theme persistence, project filters, live repository showcase, and contact flow",
    ],
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://github.com/Hades3942/Portifolio",
  },
  marinelink: {
    type: "Systems / Case study",
    title: "MarineLink Portal",
    summary:
      "A Marketplace connects and supports Fishers, Buyers, Administrators, and Regulators securely and efficiently, built with Java and PostgreSQL.",
    highlights: [
      "Designed and implemented a multi-user system with role-based access control",
      "Built a relational database schema with PostgreSQL to support complex data relationships",
      "Developed a user-friendly interface for managing and viewing marine-related data",
    ],
    tags: ["PostgreSQL", "Java", "Docker", "Spring Boot" , "Javascripts" , "HTML" , "CSS"],
    link: "https://github.com/Hades3942/MarineLink-Portal",
  },
  security: {
    type: "Security lab / Case study",
    title: "Cybersecurity Lab",
    summary:
      "A hands-on learning track for understanding how networks behave, how services are discovered, and how defensive investigation can be approached responsibly.",
    highlights: [
      "Practiced network inspection with Wireshark",
      "Explored service discovery using Nmap in controlled environments",
      "Built familiarity with Kali Linux and proxy-aware testing concepts",
    ],
    tags: ["Kali Linux", "Nmap", "Wireshark", "Ethical hacking"],
    link: "https://github.com/Hades3942",
  },
  mobile: {
    type: "Mobile development / Case study",
    title: "E-voting app",
    summary:
      "A province E-voting app that allows users to securely cast their votes in local elections, with real-time results and voter verification.",
    highlights: [
      "Designed and implemented a secure voting system with real-time results",
      "Implemented user authentication and verification to ensure only eligible voters can cast their votes",
      "Developed a user-friendly interface for casting votes and viewing results",
    ],
    tags: ["Java", "SQLite", "Android Studio", "Firebase"],
    link: "https://github.com/Hades3942/Province-E-voting-app",
  },

  site: {
    type: "Web development / Case study",
    title: "Blue Tech Solutions",
    summary:
      "A website for a technology solutions company that provides IT services and support to businesses and organizations.",
    highlights: [
      "Designed and implemented a responsive website with a modern look and feel",
      "Developed a user-friendly interface for showcasing services and solutions",
      "Implemented contact forms and lead generation tools to capture potential clients",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/Hades3942/BlueTechSolutions",
  },
  marineManagement: {
    type: "Systems / Case study",
    title: "Marine Management Portal",
    summary:
      "A management system for a maritime that manages vessel, routes, ports, and crew information, with real-time tracking and reporting capabilities.",
    highlights: [
      "Designed and implemented a comprehensive management system for maritime operations",
      "Developed real-time tracking and reporting features for vessel and crew management",
      "Created a user-friendly interface for administrators to manage data and generate reports",
    ],
    tags: ["Java", "PostgreSQL", "Docker", "JavaScript", "HTML", "CSS", "Spring Boot", "RESTful APIs"],
    link: "https://github.com/Hades3942/Marine-Management-Portal",
  },
};

function openProjectDialog(projectKey) {
  const project = projectDetails[projectKey];
  if (!project || !projectDialog) return;
  dialogType.textContent = project.type;
  dialogTitle.textContent = project.title;
  dialogSummary.textContent = project.summary;
  dialogHighlights.replaceChildren(
    ...project.highlights.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }),
  );
  dialogTags.replaceChildren(
    ...project.tags.map((item) => {
      const tag = document.createElement("span");
      tag.textContent = item;
      return tag;
    }),
  );
  dialogLink.href = project.link;
  projectDialog.showModal();
}

document.querySelectorAll(".case-study-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () =>
    openProjectDialog(trigger.dataset.project),
  );
});

dialogClose?.addEventListener("click", () => projectDialog.close());
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

const githubGrid = document.getElementById("githubGrid");
const githubProfile =
  "https://api.github.com/users/Hades3942/repos?sort=updated&per_page=6";

function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ],
  );
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

async function loadGitHubRepositories() {
  if (!githubGrid) return;
  try {
    const response = await fetch(githubProfile, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error("GitHub repositories unavailable");
    const repositories = (await response.json())
      .filter((repo) => !repo.fork)
      .slice(0, 6);
    if (!repositories.length) throw new Error("No repositories found");
    githubGrid.innerHTML = repositories
      .map(
        (repo) => `
      <article class="github-card reveal visible">
        <div class="github-card-top"><span class="github-language">${escapeHtml(repo.language || "Project")}</span><span>Updated ${escapeHtml(formatDate(repo.updated_at))}</span></div>
        <h3>${escapeHtml(repo.name)}</h3>
        <p>${escapeHtml(repo.description || "A project by Abdulkadir Mbwana.")}</p>
        <div class="github-stats"><span>★ ${repo.stargazers_count}</span><span>⑂ ${repo.forks_count}</span></div>
        <a class="github-card-link" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">Open repository <span aria-hidden="true">↗</span></a>
      </article>`,
      )
      .join("");
  } catch (error) {
    githubGrid.innerHTML =
      '<p class="github-error">GitHub repositories could not be loaded right now. <a class="text-link" href="https://github.com/Hades3942" target="_blank" rel="noreferrer">View the profile directly ↗</a></p>';
  }
}

loadGitHubRepositories();
