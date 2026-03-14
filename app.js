const typeEl = document.getElementById("type");
const glowSlider = document.getElementById("glowSlider");
const blurSlider = document.getElementById("blurSlider");
const dotButtons = document.querySelectorAll(".dot-btn");
const video = document.getElementById("bgVideo");
const videoMuteToggle = document.getElementById("videoMuteToggle");
const followerCount = document.getElementById("followerCount");
const statsGrid = document.getElementById("statsGrid");
const linkList = document.getElementById("linkList");
const viewCount = document.getElementById("viewCount");
const startOverlay = document.getElementById("startOverlay");
const startButton = document.getElementById("startButton");
const startText = document.getElementById("startText");

const taglines = [
  "Hello, Guy's.",
  "Founder of In anime! App.",
  "Amv Editor,Student",
  "Just For Fun.",
];

const themes = [
  {
    accent: "#ffffff",
    accent2: "#ffb86b",
    glow: "rgba(110, 231, 255, 0.6)",
    glow2: "rgba(255, 184, 107, 0.45)",
  },
  {
    accent: "#a7ff6e",
    accent2: "#6ee7ff",
    glow: "rgba(167, 255, 110, 0.6)",
    glow2: "rgba(110, 231, 255, 0.4)",
  },
  {
    accent: "#ff77a6",
    accent2: "#ffd36e",
    glow: "rgba(255, 119, 166, 0.6)",
    glow2: "rgba(255, 211, 110, 0.4)",
  },
  {
    accent: "#c6a0ff",
    accent2: "#6ee7ff",
    glow: "rgba(198, 160, 255, 0.55)",
    glow2: "rgba(110, 231, 255, 0.4)",
  },
  {
    accent: "#8cffea",
    accent2: "#ff7b3f",
    glow: "rgba(95, 95, 95, 0.55)",
    glow2: "rgba(131, 131, 131, 0.4)",
  },
];

const fallbackData = {
  stats: [
    { label: "Followers", value: "12.4k" },
    { label: "Likes", value: "56.2k" },
    { label: "Views", value: "921,235" },
  ],
  links: [
    {
      title: "In Anime! app",
      subtitle: "Watch anime in sub or dub",
      icon: "play",
      url: "#",
    },
    { title: "Anikwik Manga", subtitle: "Daily manga drops", icon: "bars", url: "#" },
    { title: "Discord", subtitle: "Join the server", icon: "discord", url: "#" },
    { title: "Instagram", subtitle: "Reels and updates", icon: "instagram", url: "#" },
    { title: "GitHub", subtitle: "Code and projects", icon: "github", url: "#" },
    { title: "YouTube", subtitle: "Main channel", icon: "youtube", url: "#" },
    { title: "Telegram", subtitle: "News and alerts", icon: "telegram", url: "#" },
  ],
};

const iconMap = {
  play:
    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M8 5v14l11-7z'/></svg>",
  bars:
    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 20h4V10H4v10Zm6 0h4V4h-4v16Zm6 0h4V14h-4v6Z'/></svg>",
  discord:
    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M19.5 6.5a14 14 0 0 0-3.8-1.2l-.2.4a10 10 0 0 1 2.9 1.5c-2.5-1.3-5.9-1.3-8.4 0a10 10 0 0 1 2.9-1.5l-.2-.4a14 14 0 0 0-3.8 1.2C6.3 9.2 6 12 6 12s.4 3 2.4 4.5c0 0 1.4-1.7 2-2.7-.8-.2-1.2-.6-1.2-.6s.1.1.3.2c1.9 1.1 4.4 1.1 6.3 0 .2-.1.3-.2.3-.2s-.4.4-1.2.6c.6 1 2 2.7 2 2.7 2-1.5 2.4-4.5 2.4-4.5s-.3-2.8-1.9-5.5ZM9.9 13.4c-.6 0-1-.6-1-1.3s.4-1.3 1-1.3 1 .6 1 1.3-.4 1.3-1 1.3Zm4.2 0c-.6 0-1-.6-1-1.3s.4-1.3 1-1.3 1 .6 1 1.3-.4 1.3-1 1.3Z'/></svg>",
  instagram:
    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 7.1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z'/></svg>",
  github:
    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 3a9 9 0 0 0-2.8 17.6c.4.1.5-.2.5-.4v-1.4c-2 .4-2.5-.9-2.5-.9-.3-.8-.7-1-1-1-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-1.6-.2-3.3-.8-3.3-3.6 0-.8.3-1.5.8-2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8a7.3 7.3 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.2.8 2 0 2.8-1.7 3.4-3.3 3.6.3.2.6.7.6 1.4v2.1c0 .2.1.5.5.4A9 9 0 0 0 12 3Z'/></svg>",
  youtube:
    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M20.5 7.5a2.5 2.5 0 0 0-1.8-1.8C17.1 5.3 12 5.3 12 5.3s-5.1 0-6.7.4A2.5 2.5 0 0 0 3.5 7.5 26 26 0 0 0 3.3 12a26 26 0 0 0 .2 4.5 2.5 2.5 0 0 0 1.8 1.8c1.6.4 6.7.4 6.7.4s5.1 0 6.7-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .2-4.5 26 26 0 0 0-.2-4.5ZM10.5 15.2V8.8L15.8 12Z'/></svg>",
  telegram:
    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M20.7 4.3a1 1 0 0 0-1-.2L3.8 10.5a1 1 0 0 0 .1 1.9l3.9 1.2 1.5 4.7a1 1 0 0 0 1.6.5l2.2-1.8 3.9 2.9a1 1 0 0 0 1.6-.6l2.3-13.2a1 1 0 0 0-.2-.8Zm-4.6 5.1-7.2 6.2.9-3 6.3-3.2Z'/></svg>",
};

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const line = taglines[lineIndex];
  if (!deleting) {
    charIndex += 1;
  } else {
    charIndex -= 1;
  }

  typeEl.textContent = line.slice(0, charIndex);

  if (!deleting && charIndex === line.length) {
    deleting = true;
    setTimeout(typeLoop, 1400);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    lineIndex = (lineIndex + 1) % taglines.length;
  }

  const delay = deleting ? 35 : 70;
  setTimeout(typeLoop, delay);
}

function applyTheme(index) {
  const theme = themes[index];
  const root = document.documentElement;
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-2", theme.accent2);
  root.style.setProperty("--glow", theme.glow);
  root.style.setProperty("--glow-2", theme.glow2);
}

function renderStats(stats) {
  const views = stats.find((stat) => stat.label.toLowerCase() === "views");
  const followers = stats.find(
    (stat) => stat.label.toLowerCase() === "followers"
  );

  if (views && viewCount) {
    viewCount.textContent = views.value;
  }
  if (followers && followerCount) {
    followerCount.textContent = followers.value;
  }

  if (!statsGrid) return;
  statsGrid.innerHTML = "";
  stats.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<div class="stat-label">${stat.label}</div><div class="stat-value">${stat.value}</div>`;
    statsGrid.appendChild(card);
  });
}

function renderLinks(links) {
  if (!linkList) return;
  linkList.innerHTML = "";
  links.forEach((link) => {
    const card = document.createElement("a");
    card.className = "link-card";
    card.href = link.url || "#";
    card.target = "_blank";
    card.rel = "noopener";
    const icon = iconMap[link.icon] || iconMap.play;
    card.innerHTML = `
      <span class="link-icon">${icon}</span>
      <span class="link-text">
        <span class="link-title">${link.title}</span>
        <span class="link-subtitle">${link.subtitle}</span>
      </span>
    `;
    linkList.appendChild(card);
  });
}

async function loadData() {
  let data = fallbackData;
  try {
    const response = await fetch("data.json", { cache: "no-store" });
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    data = fallbackData;
  }
  renderStats(data.stats || fallbackData.stats);
  renderLinks(data.links || fallbackData.links);
}

dotButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    dotButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyTheme(Number(btn.dataset.theme));
  });
});

if (glowSlider) {
  glowSlider.addEventListener("input", (event) => {
    const value = Number(event.target.value) / 100;
    document.documentElement.style.setProperty("--glow-strength", value.toFixed(2));
  });
}

if (blurSlider) {
  blurSlider.addEventListener("input", (event) => {
    const value = Number(event.target.value);
    document.documentElement.style.setProperty("--card-blur", `${value}px`);
  });
}

if (video) {
  video.addEventListener("canplay", () => {
    document.body.classList.add("has-video");
  });
  video.addEventListener("error", () => {
    document.body.classList.remove("has-video");
  });
}

function updateVideoMuteUi() {
  if (!video || !videoMuteToggle) return;
  videoMuteToggle.classList.toggle("is-muted", video.muted);
  videoMuteToggle.setAttribute(
    "aria-label",
    video.muted ? "Unmute video" : "Mute video"
  );
}

function startTypewriter() {
  if (!startText || !startButton) return;
  const full =
    startButton.dataset.text?.trim() || "Click here to see the motion baby";
  let i = 0;
  startText.textContent = "";

  const typeNext = () => {
    startText.textContent = full.slice(0, i);
    if (i <= full.length) {
      i += 1;
      setTimeout(typeNext, 45);
    }
  };

  typeNext();
}

function hideStartOverlay() {
  if (startOverlay) {
    startOverlay.hidden = true;
  }
}

async function initVideoAudio() {
  if (!video || !videoMuteToggle) return;
  video.pause();
  video.currentTime = 0;
  video.volume = 1;
  video.muted = true;
  document.body.classList.remove("video-playing");
  updateVideoMuteUi();

  videoMuteToggle.addEventListener("click", async () => {
    video.muted = !video.muted;
    if (!video.muted) {
      try {
        await video.play();
      } catch (error) {
        video.muted = true;
      }
    }
    updateVideoMuteUi();
  });

  if (startButton) {
    startButton.addEventListener("click", async () => {
      if (!video) return;
      video.muted = false;
      try {
        await video.play();
        hideStartOverlay();
        document.body.classList.add("video-playing");
      } catch (error) {
        video.muted = true;
      }
      updateVideoMuteUi();
    });
  }
}

typeLoop();
applyTheme(0);
loadData();
startTypewriter();
initVideoAudio();
