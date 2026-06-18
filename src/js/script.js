let currentLang = USER_CONFIG.site.defaultLang || "en";
let typingTimer;
let revealObserver;
let sectionObserver;

const navItems = [
  ...USER_CONFIG.nav
];

const homeSideNavItems = [
  { id: "news", fallbackLabelKey: "latest", labelSourceId: "section-news-label" },
  { id: "selected-publications", fallbackLabelKey: "featured", labelSourceId: "section-selected-label" },
  { id: "projects", fallbackLabelKey: "projects", labelSourceId: "section-projects-label" },
  { id: "research", fallbackLabelKey: "researchInterests", labelSourceId: "section-research-label" }
];

const aboutSideNavItems = [
  { id: "education", fallbackLabelKey: "academia", labelSourceId: "section-edu-label" },
  { id: "skills", fallbackLabelKey: "methods", labelSourceId: "section-skills-label" }
];

let activeSideNavItems = [];

const $ = (id) => document.getElementById(id);

const textFor = (value, lang = currentLang) => {
  if (value && typeof value === "object" && !Array.isArray(value)) return value[lang] || value.en || value.zh || "";
  return value || "";
};

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function setHtml(id, value) {
  const el = $(id);
  if (el) el.innerHTML = value;
}

function renderSite() {
  const page = document.body.dataset.page || "home";

  applySiteMeta();
  renderNav();

  if (page === "home") renderHomePage();
  if (page === "about") renderAboutPage();
  if (page === "publications") renderPublicationsPage();
  if (page === "contact") renderContactPage();

  renderFooter();
  initReveal();
  initSectionHighlight();
}

function applySiteMeta() {
  const site = USER_CONFIG.site;
  document.title = site.title;
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.documentElement.setAttribute("data-lang", currentLang);
  setMeta("description", site.description);
  setMeta("og:title", site.title);
  setMeta("og:description", site.description);
  setMeta("og:url", site.ogUrl);
  setMeta("og:image", site.ogImage);
  setMeta("twitter:title", site.title);
  setMeta("twitter:description", site.description);
  setMeta("twitter:image", site.ogImage);
}

function setMeta(name, content) {
  const selector = name.startsWith("og:") ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  const el = document.querySelector(selector);
  if (el) el.content = content;
}

function renderNav() {
  setText("nav-logo-main", "Cheng");
  setText("nav-logo-suffix", "Kun");

  const currentFile = location.pathname.split("/").pop() || "index.html";
  const nav = $("nav-links");
  if (!nav) return;

  nav.innerHTML = navItems.map((item) => {
    const active = item.href === currentFile ? ' class="active"' : "";
    return `<li><a${active} href="${item.href}">${textFor(item.label)}</a></li>`;
  }).join("");
}

function renderHomePage() {
  renderHero();
  renderNews();
  renderSelectedPublications();
  renderProjects();
  renderResearchAreas();
  renderSideNav(homeSideNavItems);
  startTyping();
}

function renderAboutPage() {
  renderEducation();
  renderSkills();
  renderSideNav(aboutSideNavItems);
}

function renderPublicationsPage() {
  const labels = USER_CONFIG.labels[currentLang];
  setText("section-exp-label", labels.publications);
  setHtml("section-exp-title", labels.publicationTimeline);

  const timeline = $("publication-timeline");
  if (!timeline) return;
  timeline.innerHTML = USER_CONFIG.publications.map((item) =>
    `<div class="tl-item"><div class="tl-period">${item.year}</div><div class="tl-role">${item.title}</div><div class="tl-company">${item.venue}</div><div class="tl-desc">${textFor(item.description)}</div></div>`
  ).join("");
}

function renderHero() {
  const profile = USER_CONFIG.profile;
  const labels = USER_CONFIG.labels[currentLang];
  if (!$("hero-name")) return;

  setText("hero-tag", labels.heroGreeting);

  const displayName = textFor(profile.displayName);
  const parts = displayName.split("\n").map((part) => part.trim()).filter(Boolean);
  const heroName = currentLang === "zh"
    ? `<span class="hero-surname">${parts[0].slice(0, 1)}</span>${parts[0].slice(1)}`
    : (parts.length > 1 ? `${parts[0]}<br><span>${parts.slice(1).join("<br>")}</span>` : parts[0]);

  setHtml("hero-name", heroName);
  setText("hero-desc", textFor(profile.bio));
  setText("btn-cv", labels.cv || "Download CV");
  setHtml("btn-orcid", iconOrcid());
  setHtml("btn-researchgate", iconResearchGate());
  setHtml("btn-googlescholar", iconGoogleScholar());
  setText("scroll-hint", labels.scroll);

  $("btn-cv").href = USER_CONFIG.links.cv;
  $("btn-orcid").href = USER_CONFIG.socials.orcid.href;
  $("btn-researchgate").href = USER_CONFIG.socials.researchGate.href;
  $("btn-googlescholar").href = USER_CONFIG.socials.googleScholar.href;

  const avatar = $("avatar-slot");
  if (!avatar) return;
  avatar.innerHTML = profile.avatar
    ? `<img src="${profile.avatar}" alt="${profile.avatarAlt}" style="object-fit:contain;background:#fff;padding:26px;">`
    : `<div class="avatar-initials">${profile.initials}</div>`;
}

function renderNews() {
  const labels = USER_CONFIG.labels[currentLang];
  const section = USER_CONFIG.homeSections.news;
  setText("section-news-label", labels[section.labelKey]);
  setHtml("section-news-title", labels[section.titleKey]);

  const list = $("news-list");
  if (!list) return;
  list.innerHTML = USER_CONFIG.news.slice(0, 5).map((item) =>
    `<div class="news-item"><div class="news-date">${item.date}</div><div class="news-content"><span class="news-badge">${textFor(item.badge) || textFor(section.badge) || labels.publicationBadge}</span><div class="news-text">${textFor(item.text)}</div></div></div>`
  ).join("");
}

function renderSelectedPublications() {
  const labels = USER_CONFIG.labels[currentLang];
  const section = USER_CONFIG.homeSections.selectedPublications;
  setText("section-selected-label", labels[section.labelKey]);
  setHtml("section-selected-title", labels[section.titleKey]);
  setSectionMoreLink("selected-publications", section.moreHref, labels.viewAll);
  renderProjectCards("selected-publications-grid", USER_CONFIG.featuredPublications, labels.featuredPublicationTag, true);
}

function renderProjects() {
  const labels = USER_CONFIG.labels[currentLang];
  const section = USER_CONFIG.homeSections.projects;
  setText("section-projects-label", labels[section.labelKey]);
  setHtml("section-projects-title", labels[section.titleKey]);
  setSectionMoreLink("projects", section.moreHref, labels.viewAll);
  renderProjectCards("projects-grid", USER_CONFIG.ongoingProjects, labels[section.tagKey], false);
}

function renderProjectCards(containerId, items, cardTagLabel, includeMeta) {
  const container = $(containerId);
  if (!container) return;

  container.innerHTML = items.map((item) => `
    <div class="project-card">
      <div style="position:relative;">
        <div class="project-img-placeholder">
          <div class="project-badge">${item.badge}</div>
          <div class="project-img-placeholder-icon mono-icon">${item.icon}</div>
          <div class="project-img-label">${cardTagLabel}</div>
        </div>
      </div>
      <div class="project-body">
        <div class="project-title">${textFor(item.title)}</div>
        ${includeMeta && item.venue ? `<div class="project-sub">${item.venue}</div>` : ""}
        <div class="project-desc">${textFor(item.description)}</div>
        ${includeMeta ? renderProjectLinks(item.links) : ""}
      </div>
    </div>`).join("");
}

function renderProjectLinks(links = []) {
  if (!links.length) return "";
  return `<div class="project-links">${links.map((link) => `<a class="project-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("")}</div>`;
}

function renderResearchAreas() {
  const labels = USER_CONFIG.labels[currentLang];
  const section = USER_CONFIG.homeSections.research;
  setText("section-research-label", labels[section.labelKey]);
  setHtml("section-research-title", labels[section.titleKey]);
  renderTagGroups("research-grid", USER_CONFIG.researchAreas);
}

function renderEducation() {
  const labels = USER_CONFIG.labels[currentLang];
  setText("section-edu-label", labels.academia);
  setHtml("section-edu-title", labels.education);

  const grid = $("edu-grid");
  if (!grid) return;
  grid.innerHTML = USER_CONFIG.education.map((item) =>
    `<div class="edu-card"><div class="edu-period">${item.period}</div><div class="edu-school">${textFor(item.school)}</div><div class="edu-degree">${textFor(item.degree)}</div></div>`
  ).join("");
}

function renderSkills() {
  const labels = USER_CONFIG.labels[currentLang];
  setText("section-skills-label", labels.methods);
  setHtml("section-skills-title", labels.skillsMethods);
  renderTagGroups("skills-grid", USER_CONFIG.skills);
}

function renderTagGroups(containerId, groups) {
  const container = $(containerId);
  if (!container) return;

  container.innerHTML = groups.map((group) =>
    `<div class="skill-group"><div class="skill-cat">${textFor(group.category)}</div><div class="skill-tags">${group.tags.map((tag) => `<span class="skill-tag">${textFor(tag)}</span>`).join("")}</div></div>`
  ).join("");
}

function renderContactPage() {
  const labels = USER_CONFIG.labels[currentLang];
  if (!$("contact-links")) return;

  setText("section-contact-label", labels.connect);
  setHtml("section-contact-title", labels.getInTouchTitle);
  setText("contact-desc", labels.contactDesc);
  setText("form-name-label", labels.formName);
  setText("form-email-label", labels.formEmail);
  setText("form-msg-label", labels.formMsg);
  setText("form-send", labels.formSend);

  $("contact-links").innerHTML = `
    <a class="contact-link" href="mailto:${USER_CONFIG.links.email}">${USER_CONFIG.links.email}</a>
    ${renderSocialTextLink("orcid", "contact-link")}
    ${renderSocialTextLink("researchGate", "contact-link")}
    ${renderSocialTextLink("googleScholar", "contact-link")}`;
}

function setSectionMoreLink(sectionId, href, text) {
  const section = $(sectionId);
  if (!section) return;
  const link = section.querySelector(".section-more-link");
  if (!link) return;
  link.href = href || "#";
  link.textContent = text;
}

function renderSideNav(items) {
  const sideNav = $("side-nav");
  if (!sideNav) return;
  activeSideNavItems = items || [];
  sideNav.innerHTML = activeSideNavItems.map((item) =>
    `<a class="side-nav-link" href="#${item.id}" data-section="${item.id}">${formatSideNavLabel(sideNavLabel(item))}</a>`
  ).join("");
}

function sideNavLabel(item) {
  const source = item && item.labelSourceId ? $(item.labelSourceId) : null;
  const text = source ? source.textContent.trim() : "";
  const fallback = item && item.fallbackLabelKey ? USER_CONFIG.labels[currentLang][item.fallbackLabelKey] : "";
  return text || fallback || "";
}

function renderFooter() {
  const footer = $("footer");
  if (!footer) return;
  footer.innerHTML = `
    <span>${textFor(USER_CONFIG.profile.name, "en")}</span>
    ${renderSocialTextLink("orcid")}
    ${renderSocialTextLink("researchGate")}
    ${renderSocialTextLink("googleScholar")}
    <span>2026</span>`;
}

function iconOrcid() {
  return `<svg class="profile-brand-icon orcid-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
    <circle cx="128" cy="128" r="128" fill="#A6CE39"></circle>
    <path fill="#fff" d="M86.3 186.2H70.9V84.1h15.4v102.1zM78.6 69.7c-5.5 0-10-4.6-10-10.1s4.5-10 10-10 10.1 4.5 10.1 10-4.6 10.1-10.1 10.1zM108.9 84.1h41.6c37.8 0 54.4 27.1 54.4 51.1 0 26.2-20.5 51-54.2 51h-41.8V84.1zm15.4 88.2h24.5c33.3 0 40.2-25.3 40.2-37.1 0-19.2-12.2-37.2-41-37.2h-23.7v74.3z"></path>
  </svg>`;
}

function iconResearchGate() {
  return `<svg class="profile-brand-icon researchgate-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
    <rect width="256" height="256" rx="128" fill="#00CCBB"></rect>
    <path fill="#fff" d="M49 72h55.8c24.5 0 40.1 13.5 40.1 35.1 0 16.4-8.5 27.5-23.3 32.5l27.6 44.4h-29.7l-24.1-39.8H75.8V184H49V72zm53 49.5c10.4 0 16.3-5.3 16.3-14.4 0-9.2-5.9-14.4-16.3-14.4H75.8v28.8H102zM198.2 186.6c-25.6 0-44.3-18.3-44.3-43.6 0-25.5 18.9-44 45.6-44 14.4 0 27 4.7 35 13.2l-14.2 16.2c-5.5-4.8-12.2-7.3-19.9-7.3-12.5 0-20.9 8.7-20.9 21.8 0 13.4 8.3 21.9 21.1 21.9 5.7 0 10.3-1 14.2-3.1v-9.7h-18.1v-19.4H239v41.1c-9.9 8.4-24.5 12.9-40.8 12.9z"></path>
  </svg>`;
}

function iconGoogleScholar() {
  return `<span class="profile-brand-text" aria-hidden="true">GS</span>`;
}

function formatSideNavLabel(label) {
  if (currentLang !== "en") return label;
  return String(label || "").trim().replace(/\s+/g, "<br>");
}

function renderSocialTextLink(key, className = "") {
  const social = USER_CONFIG.socials[key];
  if (!social) return "";
  const classes = className ? ` class="${className}"` : "";
  return `<a${classes} href="${social.href}" target="_blank" rel="noopener noreferrer">${textFor(social.label)}</a>`;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("tw-lang", lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
  renderSite();
}

function startTyping() {
  clearTimeout(typingTimer);
  const el = $("typing-text");
  if (!el) return;

  const roles = USER_CONFIG.profile.typingRoles[currentLang] || [];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  el.textContent = "";

  function tick() {
    if (!roles.length) return;
    const word = roles[roleIndex];
    if (!deleting) {
      el.textContent = word.slice(0, charIndex + 1);
      charIndex += 1;
      if (charIndex === word.length) {
        deleting = true;
        typingTimer = setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = word.slice(0, charIndex - 1);
      charIndex -= 1;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    typingTimer = setTimeout(tick, deleting ? 60 : 90);
  }

  tick();
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";
  html.setAttribute("data-theme", nextTheme);
  setThemeButton(nextTheme);
  localStorage.setItem("tw-theme", nextTheme);
}

function setThemeButton(theme) {
  const button = $("theme-btn");
  if (!button) return;
  const isDark = theme === "dark";
  button.textContent = isDark ? "☾" : "☀";
  button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function initReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal, .news-item, .project-card, .tl-item, .edu-card, .skill-group").forEach((el, index) => {
    if (el.classList.contains("project-card")) el.style.transitionDelay = `${index * 0.05}s`;
    revealObserver.observe(el);
  });
}

function initSectionHighlight() {
  const links = document.querySelectorAll(".side-nav-link");
  if (!links.length) return;

  updateSideNavVisibility();
  window.removeEventListener("scroll", updateSideNavVisibility);
  window.addEventListener("scroll", updateSideNavVisibility, { passive: true });

  if (sectionObserver) sectionObserver.disconnect();
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle("active", link.dataset.section === entry.target.id));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  activeSideNavItems.forEach((item) => {
    const section = $(item.id);
    if (section) sectionObserver.observe(section);
  });
}

function updateSideNavVisibility() {
  const sideNav = $("side-nav");
  const firstSection = activeSideNavItems.length ? $(activeSideNavItems[0].id) : null;
  if (!sideNav || !firstSection) return;
  sideNav.classList.toggle("visible", firstSection.getBoundingClientRect().top <= 150);
}

function sendMsg() {
  const name = $("f-name").value;
  const sender = $("f-email").value;
  const msg = $("f-msg").value;
  if (!name || !sender || !msg) {
    alert("Please fill in all fields.");
    return;
  }

  const subject = encodeURIComponent(`Message from ${name} via portfolio`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${sender}\n\n${msg}`);
  window.open(`mailto:${USER_CONFIG.links.email}?subject=${subject}&body=${body}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("tw-theme") || USER_CONFIG.site.defaultTheme || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  setThemeButton(savedTheme);

  currentLang = localStorage.getItem("tw-lang") || USER_CONFIG.site.defaultLang || "en";
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  const themeButton = $("theme-btn");
  if (themeButton) themeButton.addEventListener("click", toggleTheme);

  renderSite();
});
