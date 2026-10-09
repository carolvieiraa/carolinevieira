(function () {
  "use strict";

  const LINKS = {
    email: "mailto:ana-vieira@live.com",
    emailAddress: "ana-vieira@live.com",
    linkedin: "https://www.linkedin.com/in/carolineevieiraaa/",
    cv: "cv.html",
    whatsapp: "https://wa.me/5519999928343"
  };
  const CASE_URLS = {
    "pague-menos": "https://admirable-manatee-677cab.netlify.app",
    "novo-nordisk": "https://snazzy-druid-5ad5f8.netlify.app",
    "jll": "https://heartfelt-sherbet-262976.netlify.app"
  };
  // Vídeos gravados em outros idiomas: salve como assets/video/<id>.<idioma>.mp4
  // (ex.: pague-menos.en.mp4) e liste o idioma aqui. Sem versão, usa o vídeo em português.
  const VIDEO_LANGS = {
    "pague-menos": [],
    "novo-nordisk": [],
    "jll": []
  };
  const LOGOS = [
    ["senac", "Senac"], ["novo-nordisk", "Novo Nordisk"], ["pague-menos", "Pague Menos"],
    ["jll", "JLL"], ["ale", "ALE"], ["gpa", "GPA"]
  ];
  const HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const get = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  let lang = "pt";
  let t = I18N.pt;
  let activePhase = 0;
  let motions = [];

  /* ---------- Idioma ---------- */
  function storageGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sem storage */ } }

  function initialLang() {
    const param = new URLSearchParams(location.search).get("lang");
    if (param && I18N[param]) return param;
    const saved = storageGet("lang");
    if (saved && I18N[saved]) return saved;
    const nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return I18N[nav] ? nav : "pt";
  }

  function setLang(next, opts = {}) {
    lang = next;
    t = I18N[lang];
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t.meta.title;
    $('meta[name="description"]').setAttribute("content", t.meta.description);

    $$("[data-i18n]").forEach((el) => { const v = get(t, el.dataset.i18n); if (v != null) el.textContent = v; });
    $$("[data-i18n-html]").forEach((el) => { const v = get(t, el.dataset.i18nHtml); if (v != null) el.innerHTML = v; });
    $$("[data-i18n-aria]").forEach((el) => { const v = get(t, el.dataset.i18nAria); if (v != null) el.setAttribute("aria-label", v); });

    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $$('[data-link="cv"]').forEach((a) => { a.href = LINKS.cv + "?lang=" + lang; });
    movePill();

    renderImpact();
    renderSkills();
    renderFlow();
    renderProjects();
    renderTestimonials();
    observeReveals();

    if (!opts.initial) {
      storageSet("lang", lang);
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    }
  }

  function movePill() {
    const btn = $(`.lang button[data-lang="${lang}"]`);
    const pill = $(".lang__pill");
    if (!btn || !pill) return;
    pill.style.width = btn.offsetWidth + "px";
    pill.style.transform = `translateX(${btn.offsetLeft}px)`;
  }

  /* ---------- Renderização ---------- */
  function renderLogos() {
    const items = LOGOS.map(([file, name]) =>
      `<li><img src="assets/img/logos/${file}.png" alt="${name}" loading="lazy"></li>`).join("");
    // duas cópias para o loop contínuo; a segunda fica oculta para leitores de tela
    $("#logos").innerHTML = `<ul>${items}</ul><ul aria-hidden="true">${items}</ul>`;
  }

  function renderImpact() {
    $("#impactGrid").innerHTML = t.impact.items.map((it, i) => `
      <article class="stat reveal" style="--d:${i * 80}ms">
        <p class="stat__value" data-to="${it.to}" data-pre="${esc(it.pre)}" data-suf="${esc(it.suf)}">${esc(it.pre)}${it.to}${esc(it.suf)}</p>
        <p class="stat__label">${esc(it.label)}</p>
        <p class="stat__client">${esc(it.client)}</p>
      </article>`).join("");
    $$("#impactGrid .stat__value").forEach((el) => counterObserver.observe(el));
  }

  function renderSkills() {
    $("#skillsGrid").innerHTML = t.skills.items.map((s, i) => `
      <article class="skill reveal" style="--d:${(i % 3) * 90}ms">
        <div class="skill__top"><span class="skill__num">0${i + 1}</span></div>
        <h3 class="skill__title">${esc(s.title)}</h3>
        <p class="skill__statement">${esc(s.statement)}</p>
        <ul class="skill__tags">${s.tags.map((tag) => `<li>${esc(tag)}</li>`).join("")}</ul>
      </article>`).join("");
  }

  function renderFlow() {
    $("#flowSteps").innerHTML = t.process.phases.map((p, i) => `
      <button type="button" class="flow__step" role="tab" id="phase-${i}"
        aria-selected="${i === activePhase}" aria-controls="flowPanel" data-i="${i}">
        <span class="flow__dot"><b>${i + 1}</b></span>
        <span class="flow__name">${esc(p.name)}</span>
      </button>`).join("");
    showPhase(activePhase);
  }

  function showPhase(i) {
    activePhase = i;
    const p = t.process.phases[i];
    $$(".flow__step").forEach((b, j) => {
      b.setAttribute("aria-selected", String(j === i));
      b.classList.toggle("is-done", j < i);
    });
    $("#flowFill").style.width = (i / (t.process.phases.length - 1)) * 100 + "%";
    const panel = $("#flowPanel");
    panel.setAttribute("aria-labelledby", "phase-" + i);
    panel.innerHTML = `
      <div class="flow__panel-inner">
        <p class="flow__desc"><span>0${i + 1}</span>${esc(p.desc)}</p>
        <ul class="flow__tools">${p.tools.map((x, k) => `<li style="--d:${k * 60}ms">${esc(x)}</li>`).join("")}</ul>
      </div>`;
  }

  function list(items) { return `<ul class="case__list">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`; }

  function renderProjects() {
    const L = t.projects.labels;
    videoObserver.disconnect();
    motions.forEach((m) => m.destroy());
    motions = [];
    const ownVideo = (id) => (VIDEO_LANGS[id] || []).includes(lang);
    $("#projectsList").innerHTML = t.projects.items.map((p, i) => `
      <article class="case reveal" id="case-${p.id}">
        <div class="case__media">
          <div class="phone">${p.motion ? `<div data-motion="${i}"></div>` : `
            <video src="assets/video/${ownVideo(p.id) ? `${p.id}.${lang}` : p.id}.mp4" muted loop playsinline preload="none" aria-hidden="true"></video>
            ${L.videoNote && !ownVideo(p.id) ? `<span class="phone__note">${esc(L.videoNote)}</span>` : ""}`}
          </div>
          <span class="case__index">0${i + 1}</span>
        </div>
        <div class="case__body">
          <p class="case__client"><span>${esc(p.client)}</span><span class="case__sector">${esc(p.year)}</span></p>
          <h3 class="case__title">${esc(p.title)}</h3>
          <ul class="case__tags">${p.tags.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="case__challenge">
            <p class="case__label">${esc(L.challenge)}</p>
            <p>${esc(p.challenge)}</p>
          </div>
          <div class="case__stats">${p.stats.map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join("")}</div>
          <div class="tabs" role="tablist">
            <button type="button" role="tab" aria-selected="true" data-tab="results">${esc(L.results)}</button>
            <button type="button" role="tab" aria-selected="false" data-tab="how">${esc(L.how)}</button>
            <button type="button" role="tab" aria-selected="false" data-tab="contributed">${esc(L.contributed)}</button>
          </div>
          <div class="tabs__panels">
            <div class="tabs__panel is-active" data-panel="results">${list(p.results)}</div>
            <div class="tabs__panel" data-panel="how">${list(p.how)}</div>
            <div class="tabs__panel" data-panel="contributed">${list(p.contributed)}</div>
          </div>
          <a class="btn btn--sand magnetic" href="${CASE_URLS[p.id]}" target="_blank" rel="noopener" title="${esc(L.note)}">
            <span>${esc(L.viewCase)}</span> <i class="arrow">↗</i>
          </a>
        </div>
      </article>`).join("");

    $$("#projectsList .case video").forEach((v) => videoObserver.observe(v));
    $$("#projectsList [data-motion]").forEach((el) => {
      el.motion = CaseMotion(el, t.projects.items[+el.dataset.motion].motion);
      motions.push(el.motion);
      videoObserver.observe(el);
    });
  }

  function renderTestimonials() {
    $("#tSlider").innerHTML = `<div class="tslider__track">${t.testimonials.items.map((q, i) => `
      <figure class="quote reveal" style="--d:${i * 90}ms">
        <span class="quote__mark" aria-hidden="true">“</span>
        <blockquote>${esc(q.quote)}</blockquote>
        <figcaption>
          <span class="quote__avatar" aria-hidden="true">${q.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</span>
          <span><b>${esc(q.name)}</b><small>${esc([q.role, q.company].filter(Boolean).join(" · "))}</small></span>
        </figcaption>
      </figure>`).join("")}</div>`;
  }

  /* ---------- Observers ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  function observeReveals() {
    $$(".reveal:not(.is-in)").forEach((el) => revealObserver.observe(el));
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      counterObserver.unobserve(e.target);
      countUp(e.target);
    });
  }, { threshold: 0.6 });

  function countUp(el) {
    const to = +el.dataset.to, pre = el.dataset.pre, suf = el.dataset.suf;
    if (reduceMotion) { el.textContent = pre + to + suf; return; }
    const dur = 1600, start = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - k, 4);
      el.textContent = pre + Math.round(to * eased) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // vídeos e motions só rodam quando estão na tela
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target.motion || e.target;
      if (e.isIntersecting && !(reduceMotion && !e.target.motion)) {
        if (!e.target.motion) v.preload = "auto";
        Promise.resolve(v.play()).catch(() => {});
      } else v.pause();
    });
  }, { threshold: 0.35 });

  /* ---------- Interações ---------- */
  function splitHeroName() {
    $$("[data-split]").forEach((el, w) => {
      const text = el.textContent;
      el.innerHTML = [...text].map((ch, i) =>
        `<span class="char" style="--i:${i + w * 7}" aria-hidden="true">${ch}</span>`).join("");
    });
    requestAnimationFrame(() => document.body.classList.add("is-loaded"));
  }

  function bindEvents() {
    // Idioma
    $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    window.addEventListener("resize", movePill);

    // Links fixos
    $$("[data-link]").forEach((a) => { a.href = LINKS[a.dataset.link]; });
    $(".copy__addr").textContent = LINKS.emailAddress;
    $("#copyEmail").addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(LINKS.emailAddress); } catch (e) { return; }
      const label = $("#copyLabel");
      label.textContent = t.contact.copied;
      $("#copyEmail").classList.add("is-copied");
      setTimeout(() => { label.textContent = t.contact.copy; $("#copyEmail").classList.remove("is-copied"); }, 2000);
    });

    // Menu mobile
    const burger = $("#burger");
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") !== "true";
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });
    $$("#navLinks a").forEach((a) => a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }));

    // Processo (delegação: o conteúdo é re-renderizado ao trocar o idioma)
    $("#flowSteps").addEventListener("click", (e) => {
      const b = e.target.closest(".flow__step");
      if (b) showPhase(+b.dataset.i);
    });
    $("#flowSteps").addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const n = t.process.phases.length;
      const next = (activePhase + (e.key === "ArrowRight" ? 1 : n - 1)) % n;
      showPhase(next);
      $("#phase-" + next).focus();
    });

    // Abas dos cases
    $("#projectsList").addEventListener("click", (e) => {
      const tab = e.target.closest(".tabs [data-tab]");
      if (!tab) return;
      const c = tab.closest(".case");
      $$("[data-tab]", c).forEach((b) => b.setAttribute("aria-selected", String(b === tab)));
      $$("[data-panel]", c).forEach((p) => p.classList.toggle("is-active", p.dataset.panel === tab.dataset.tab));
    });

    // Habilidades: spotlight segue o mouse
    $("#skillsGrid").addEventListener("pointermove", (e) => {
      const card = e.target.closest(".skill");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });

    // Depoimentos
    const slider = $("#tSlider");
    const slide = (dir) => {
      const card = $(".quote", slider);
      const w = card ? card.getBoundingClientRect().width + 24 : 400;
      slider.scrollBy({ left: dir * w, behavior: reduceMotion ? "auto" : "smooth" });
    };
    $("#tPrev").addEventListener("click", () => slide(-1));
    $("#tNext").addEventListener("click", () => slide(1));
    enableDragScroll(slider);

    // Scroll: barra de progresso, nav e seção ativa
    const nav = $("#nav");
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      $(".progress span").style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      nav.classList.toggle("is-scrolled", y > 40);
      nav.classList.toggle("is-hidden", y > lastY && y > 500 && !document.body.classList.contains("menu-open"));
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        $$("#navLinks a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["sobre", "habilidades", "processo", "projetos", "depoimentos", "contato"].forEach((id) => sectionObserver.observe(document.getElementById(id)));

    if (finePointer && !reduceMotion) {
      initCursor();
      initTilt();
      initMagnetic();
    }
  }

  function enableDragScroll(el) {
    let down = false, startX = 0, startLeft = 0, moved = false;
    el.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false; startX = e.clientX; startLeft = el.scrollLeft;
      el.classList.add("is-dragging");
    });
    window.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      el.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", () => { down = false; el.classList.remove("is-dragging"); });
    el.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
  }

  function initCursor() {
    const c = $(".cursor");
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    document.body.classList.add("has-cursor");
    window.addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
    document.addEventListener("pointerover", (e) => {
      c.classList.toggle("is-hover", !!e.target.closest("a, button, [role=tab]"));
      c.classList.toggle("is-drag", !!e.target.closest(".tslider"));
    });
    const loop = () => {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  function initTilt() {
    const el = $("#tilt");
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", (-py * 8).toFixed(2) + "deg");
      el.style.setProperty("--ry", (px * 10).toFixed(2) + "deg");
    });
    el.addEventListener("pointerleave", () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); });
  }

  function initMagnetic() {
    document.addEventListener("pointermove", (e) => {
      const m = e.target.closest(".magnetic");
      $$(".magnetic.is-pulled").forEach((el) => { if (el !== m) { el.style.transform = ""; el.classList.remove("is-pulled"); } });
      if (!m) return;
      const r = m.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      m.style.transform = `translate(${dx * 0.18}px, ${dy * 0.3}px)`;
      m.classList.add("is-pulled");
    });
  }

  /* ---------- Início ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  splitHeroName();
  renderLogos();
  bindEvents();
  setLang(initialLang(), { initial: true });
  if (document.fonts) document.fonts.ready.then(movePill);
  // o conteúdo renderizado muda a altura da página: reposiciona links diretos (#secao)
  if (location.hash.length > 1) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) window.addEventListener("load", () => target.scrollIntoView({ behavior: "instant" }));
  }
})();
