/* Motion dos cases: animação em HTML/CSS no lugar do vídeo, com textos vindos do i18n.
   Uso: const m = CaseMotion(elemento, dados, idDoCase); m.play(); m.pause(); m.destroy(); */
(function () {
  "use strict";

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // *trecho* vira destaque em itálico
  const rich = (s) => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
  const words = (s, step, start = 0) => {
    let i = 0;
    return rich(s).split(/(<em>.*?<\/em>|\s+)/).filter((w) => w && !/^\s+$/.test(w))
      .map((w) => `<span class="cm-w" style="--d:${start + step * i++}ms">${w}</span>`).join(" ");
  };
  function seeded(n) { let s = n * 9301 + 49297; return () => (s = (s * 9301 + 49297) % 233280) / 233280; }

  /* ---------- peças comuns ---------- */
  const label = (text, d = 100) => `<p class="cm-label" style="--d:${d}ms">${esc(text)}</p>`;
  const statement = (text, d) => `<p class="cm-statement" style="--d:${d}ms">${esc(text)}</p>`;

  // a pergunta que reenquadra o problema + a virada "de → para"
  const reframe = (m, backdrop = "") => `
    ${backdrop}
    <div class="cm-center cm-reframe">
      ${label(m.questionLabel || m.chapters[1])}
      ${m.lead ? `<p class="cm-lead" style="--d:300ms">${esc(m.lead)}</p>` : ""}
      <p class="cm-question">${words(m.question, 95, m.lead ? 1100 : 300)}</p>
      <div class="cm-shift">
        <span class="cm-from" style="--d:3500ms">${esc(m.from)}</span>
        <span class="cm-arrow" style="--d:4200ms">↓</span>
        <span class="cm-to" style="--d:4500ms">${esc(m.to)}</span>
      </div>
    </div>`;

  /* ---------- Pague Menos ---------- */
  // posições fixas (em %) para os comentários, espalhados sem cobrir o centro
  const SPOTS = [[3, 4], [52, 2], [9, 21], [57, 22], [0, 39], [50, 42], [12, 59], [58, 61], [4, 80], [48, 83]];
  const TILT = [-3, 2, -1, 3, 2, -2, 1, -3, 2, -1];
  const STARS = [1, 2, 1, 2, 1, 1, 2, 1, 1, 2];

  const PAGUE_MENOS = [
    { // o sinal
      dur: 6500,
      html: (m) => `
        <div class="cm-reviews">${m.reviews.map((r, i) => `
          <p class="cm-review" style="--x:${SPOTS[i][0]}%;--y:${SPOTS[i][1]}%;--r:${TILT[i]}deg;--d:${150 + i * 210}ms">
            <span class="cm-stars">${"★".repeat(STARS[i])}<i>${"★".repeat(5 - STARS[i])}</i></span>“${esc(r)}”
          </p>`).join("")}</div>
        <div class="cm-center cm-hero-num">
          ${label(m.bigLabel, 2900)}
          <p class="cm-num" data-count="${esc(m.bigNumber)}" data-at="3000">0</p>
          ${statement(m.insight, 4300)}
        </div>`
    },
    { dur: 6500, html: (m) => reframe(m) },
    { // do caos à estrutura
      dur: 6500,
      html: (m) => {
        const rnd = seeded(7);
        const dots = Array.from({ length: 36 }, (_, i) => {
          const row = Math.floor(i / 12), col = i % 12;
          return `<i class="cm-dot" style="--x0:${(8 + rnd() * 84).toFixed(1)}%;--y0:${(4 + rnd() * 92).toFixed(1)}%;--x1:${(20 + col * 6.6).toFixed(1)}%;--y1:${(row * 33.3 + 21).toFixed(1)}%;--d:${(rnd() * 500).toFixed(0)}ms"></i>`;
        }).join("");
        return `
          <div class="cm-method">
            ${label(m.mapLabel)}
            <p class="cm-title" style="--d:250ms">${esc(m.mapTitle)}</p>
            <div class="cm-board">
              ${m.horizons.map(([when, what], i) => `
                <div class="cm-row" style="--d:${2500 + i * 250}ms">
                  <b>H${i + 1}</b><span><small>${esc(when)}</small>${esc(what)}</span>
                </div>`).join("")}
              <div class="cm-dots">${dots}</div>
            </div>
          </div>`;
      }
    },
    { // roadmap
      dur: 7000,
      html: (m) => `
        <div class="cm-center cm-road">
          ${label(m.roadmapLabel)}
          <div class="cm-line"><i></i>${m.horizons.map(([when], i) => `
            <span class="cm-node" style="--d:${500 + i * 350}ms;--p:${i * 50}%"><b></b><small>${esc(when)}</small><em>H${i + 1}</em></span>`).join("")}
          </div>
          <div class="cm-kpis">${m.kpis.map(([v, l], i) => `
            <div class="cm-kpi" style="--d:${1700 + i * 200}ms"><p class="cm-num" data-count="${esc(v)}" data-at="${1800 + i * 200}">0</p><small>${esc(l)}</small></div>`).join("")}
          </div>
          <p class="cm-closing">${words(m.closing, 70, 3300)}</p>
        </div>`
    }
  ];

  /* ---------- Novo Nordisk ---------- */
  // contorno simplificado do Brasil (longitude, latitude), projetado num quadro 100×100
  const BRAZIL = [[-51.6, 4.4], [-50, 1.8], [-49.9, 0], [-48.5, -1], [-44.3, -2.5], [-41.8, -2.9], [-38.5, -3.7], [-35.2, -5.4],
    [-34.8, -7.1], [-35, -9], [-37, -11], [-38.5, -13], [-39, -15], [-39.7, -19], [-40.3, -20.3], [-41, -22], [-43.2, -23],
    [-45.4, -23.8], [-48, -25.5], [-48.6, -28.5], [-50, -30.5], [-51.2, -32], [-53.4, -33.7], [-53.5, -32.5], [-55, -31],
    [-57.6, -30.2], [-55.8, -28], [-53.8, -27.2], [-54.6, -25.6], [-54.3, -24], [-55.5, -23.9], [-57.8, -22.1], [-58, -20],
    [-57.5, -18], [-58.4, -16.3], [-60.2, -15.1], [-60.5, -13.7], [-62.3, -13], [-65.3, -11], [-66.6, -9.9], [-68.6, -11],
    [-70.5, -11], [-72.4, -10], [-73.9, -7.4], [-73, -5], [-70, -4.2], [-69.4, -1.1], [-70, 0.6], [-69.2, 1], [-67.3, 2.2],
    [-64, 1.9], [-64.8, 4], [-63, 4], [-60, 5.2], [-59.9, 2.6], [-58, 1.5], [-56, 2], [-54, 2.3], [-52.4, 2.2]];
  const proj = ([lon, lat]) => [((lon + 74.2) * 2.5).toFixed(1), ((5.6 - lat) * 2.5).toFixed(1)];
  const BRAZIL_PATH = "M" + BRAZIL.map((p) => proj(p).join(" ")).join("L") + "Z";
  const SIGNALS = [[-60, -3.1], [-48.5, -1.5], [-49.3, -16.7], [-43.9, -19.9], [-51.2, -29.8], [-38.5, -12.9], [-56, -15.6], [-38.6, -3.9], [-63.9, -8.8]];
  const WAVES = [[-46.6, -23.5], [-34.9, -8.1], [-47.9, -15.8]]; // ondas 1, 2 e 3 (ilustrativo)
  const WAVE_SIDE = [1, -1, -1]; // rótulo à direita (1) ou à esquerda (-1) do pino

  const brazil = (cls, inner = "") => `
    <svg class="cm-map ${cls}" viewBox="0 0 100 100" aria-hidden="true">
      <path class="cm-map__shape" d="${BRAZIL_PATH}" pathLength="1"/>${inner}
    </svg>`;

  const NOVO_NORDISK = [
    { // o sinal
      dur: 6500,
      html: (m) => `
        <div class="cm-center cm-mapscene">
          ${brazil("is-draw", SIGNALS.map((p, i) => {
            const [x, y] = proj(p);
            return `<circle class="cm-blip" cx="${x}" cy="${y}" r="1.1" style="--d:${1500 + i * 160}ms"/>`;
          }).join(""))}
          ${statement(m.intro, 2900)}
        </div>`
    },
    { dur: 6500, html: (m) => reframe(m, brazil("is-ghost")) },
    { // o funil
      dur: 6500,
      html: (m) => {
        const rnd = seeded(11);
        const dots = Array.from({ length: 30 }, (_, i) => {
          const hit = i < 5;
          return `<i class="cm-dot cm-dot--funnel${hit ? " is-hit" : ""}" style="--x0:${(4 + rnd() * 26).toFixed(1)}%;--y0:${(22 + rnd() * 56).toFixed(1)}%;--x1:${hit ? 88 : (30 + rnd() * 30).toFixed(1)}%;--y1:${hit ? 38 + i * 6 : (35 + rnd() * 30).toFixed(1)}%;--d:${(rnd() * 600).toFixed(0)}ms"></i>`;
        }).join("");
        return `
          <div class="cm-method">
            ${label(m.methodLabel)}
            <p class="cm-title" style="--d:250ms">${esc(m.methodTitle)}</p>
            <div class="cm-funnel">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path class="cm-draw" d="M0 14 L100 34" pathLength="1"/><path class="cm-draw" d="M0 86 L100 66" pathLength="1"/>
              </svg>
              <div class="cm-dots">${dots}</div>
              <span class="cm-tag cm-tag--from" style="--d:600ms">${esc(m.funnelFrom)}</span>
              <span class="cm-tag cm-tag--to" style="--d:2900ms">${esc(m.funnelTo)}</span>
            </div>
            <ul class="cm-sources">${m.sources.map((s, i) => `
              <li style="--d:${3300 + i * 180}ms">${ICONS[i]}<span>${esc(s)}</span></li>`).join("")}
            </ul>
          </div>`;
      }
    },
    { // as ondas
      dur: 7500,
      html: (m) => `
        <div class="cm-center cm-mapscene">
          ${brazil("is-still", WAVES.map((p, i) => {
            const [x, y] = proj(p);
            return `<g class="cm-pin" style="--d:${400 + i * 450}ms;transform-origin:${x}px ${y}px">
              <circle class="cm-pin__ring" cx="${x}" cy="${y}" r="2.6"/><circle cx="${x}" cy="${y}" r="1.4"/>
              <text x="${(+x + 3.4 * WAVE_SIDE[i]).toFixed(1)}" y="${(+y + 1.2).toFixed(1)}" text-anchor="${WAVE_SIDE[i] > 0 ? "start" : "end"}">${esc(m.wave)} ${i + 1}</text></g>`;
          }).join(""))}
          ${statement(m.statement, 1900)}
          <p class="cm-closing">${words(m.closing, 80, 3000)}</p>
          <p class="cm-foot" style="--d:4500ms">${esc(m.footnote)}</p>
        </div>`
    }
  ];

  const ICONS = [
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v10H9l-5 4z"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V12M12 20V5M19 20v-9"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6-6.2-6-11a6 6 0 0 1 12 0c0 4.8-6 11-6 11z"/><circle cx="12" cy="10" r="2"/></svg>'
  ];

  /* ---------- JLL ---------- */
  const SHAPES = [
    '<circle cx="12" cy="12" r="7"/>', '<path d="M12 4l8 15H4z"/>', '<rect x="5" y="5" width="14" height="14"/>', '<path d="M12 3l9 9-9 9-9-9z"/>'
  ];
  const HEADINGS = [200, 35, 130, 300, 80, 250, 10, 160, 330, 110];
  const ring = (cls) => `
    <div class="cm-ring ${cls}" aria-hidden="true">${HEADINGS.map((h, i) => {
      const a = (i / HEADINGS.length) * Math.PI * 2 - Math.PI / 2;
      return `<span class="cm-crew" style="--x:${(50 + Math.cos(a) * 40).toFixed(1)}%;--y:${(50 + Math.sin(a) * 40).toFixed(1)}%;--h:${h}deg;--d:${200 + i * 120}ms">
        <svg viewBox="0 0 24 24">${SHAPES[i % 4]}</svg><i></i></span>`;
    }).join("")}</div>`;

  // matriz benefício × complexidade: 12 iniciativas; as 7 primeiras migram para o quadrante
  const rndPlot = seeded(5);
  const PLOT = Array.from({ length: 12 }, (_, i) => ({
    x0: 8 + rndPlot() * 84, y0: 8 + rndPlot() * 84,
    x1: i < 7 ? 7 + rndPlot() * 32 : 52 + rndPlot() * 40, y1: i < 7 ? 6 + rndPlot() * 24 : 52 + rndPlot() * 40
  }));
  const COMMON = [0, 3, 5]; // os 3 pontos em comum
  const plot = (m, final) => {
    const pts = PLOT.map((p, i) => `<i class="cm-dot cm-dot--plot${i < 7 ? " is-good" : ""}${final && COMMON.includes(i) ? " is-key" : ""}" style="--x0:${(final ? p.x1 : p.x0).toFixed(1)}%;--y0:${(final ? p.y1 : p.y0).toFixed(1)}%;--x1:${p.x1.toFixed(1)}%;--y1:${p.y1.toFixed(1)}%;--d:${(i * 60)}ms"></i>`).join("");
    const key = COMMON.map((i) => [PLOT[i].x1, PLOT[i].y1]).sort((a, b) => a[0] - b[0]);
    return `
      <div class="cm-plot${final ? " is-final" : ""}">
        <span class="cm-quad" style="--d:${final ? 0 : 2500}ms"><small>${esc(m.quadrant)}</small></span>
        <div class="cm-dots">${pts}</div>
        ${final ? `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path class="cm-draw cm-draw--link" d="M${key.map((k) => k.map((v) => v.toFixed(1)).join(" ")).join("L")}" pathLength="1"/></svg>` : ""}
        <span class="cm-axis cm-axis--y">${esc(m.axisY)} ↑</span>
        <span class="cm-axis cm-axis--x">${esc(m.axisX)} →</span>
      </div>`;
  };

  const JLL = [
    { // o ruído
      dur: 6000,
      html: (m) => `${ring("is-live")}<div class="cm-center cm-ringscene">${statement(m.intro, 2000)}</div>`
    },
    { dur: 6500, html: (m) => reframe(m, ring("is-ghost")) },
    { // a matriz
      dur: 6500,
      html: (m) => `
        <div class="cm-method">
          ${label(m.methodLabel)}
          <p class="cm-title" style="--d:250ms">${esc(m.methodTitle)}</p>
          ${plot(m, false)}
        </div>`
    },
    { // o alinhamento
      dur: 7000,
      html: (m) => `
        <div class="cm-method cm-align">
          ${plot(m, true)}
          ${statement(m.statement, 1500)}
          <p class="cm-closing">${words(m.closing, 80, 2600)}</p>
        </div>`
    }
  ];

  const SCRIPTS = { "pague-menos": PAGUE_MENOS, "novo-nordisk": NOVO_NORDISK, "jll": JLL };

  function countUp(el) {
    const target = el.dataset.count;
    const [, pre = "", num = "0", suf = ""] = target.match(/^(\D*)([\d.,]+)(\D*)$/) || [];
    const sep = (num.match(/[.,]/) || [""])[0];
    const to = parseInt(num.replace(/\D/g, ""), 10) || 0;
    const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    const dur = 1400;
    let t = 0;
    return (dt) => {
      t = Math.min(dur, t + dt);
      const k = 1 - Math.pow(1 - t / dur, 4);
      el.textContent = pre + fmt(Math.round(to * k)) + suf;
      return t >= dur;
    };
  }

  window.CaseMotion = function (root, m, id) {
    const SCENES = SCRIPTS[id];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("cm", "cm--" + id);
    root.setAttribute("role", "img");
    root.setAttribute("aria-label", m.chapters.join(" · "));
    root.innerHTML = `
      <div class="cm-bg" aria-hidden="true"><i></i><i></i></div>
      <div class="cm-top" aria-hidden="true">
        <div class="cm-bars">${SCENES.map(() => "<span><i></i></span>").join("")}</div>
        <p><span>${esc(m.kicker)}</span><span class="cm-count"></span></p>
      </div>
      <div class="cm-stage" aria-hidden="true"></div>
      <p class="cm-chapter" aria-hidden="true"></p>`;

    const stage = root.querySelector(".cm-stage");
    const bars = [...root.querySelectorAll(".cm-bars i")];
    let scene = -1, t = 0, raf = 0, last = 0, playing = false, counters = [];

    function show(i) {
      scene = i; t = 0;
      stage.className = "cm-stage";
      stage.innerHTML = SCENES[i].html(m);
      void stage.offsetWidth; // reinicia as animações CSS da cena
      stage.classList.add("is-in");
      root.querySelector(".cm-count").textContent = `0${i + 1} / 0${SCENES.length}`;
      root.querySelector(".cm-chapter").innerHTML = `<span>0${i + 1}</span>${esc(m.chapters[i])}`;
      bars.forEach((b, j) => { b.style.transform = `scaleX(${j < i ? 1 : 0})`; });
      counters = [...stage.querySelectorAll("[data-count]")].map((el) => ({ at: +el.dataset.at, step: countUp(el) }));
      if (reduce) counters.forEach((c) => c.step(1e9));
    }

    function frame(now) {
      const dt = Math.min(64, now - last); last = now;
      t += dt;
      const s = SCENES[scene];
      bars[scene].style.transform = `scaleX(${Math.min(1, t / s.dur)})`;
      counters = counters.filter((c) => t < c.at || !c.step(dt));
      if (t > s.dur - 450) stage.classList.add("is-out");
      if (t >= s.dur) show((scene + 1) % SCENES.length);
      raf = requestAnimationFrame(frame);
    }

    show(0);
    return {
      play() {
        if (playing) return;
        playing = true; root.classList.remove("is-paused");
        last = performance.now(); raf = requestAnimationFrame(frame);
      },
      pause() {
        playing = false; root.classList.add("is-paused");
        cancelAnimationFrame(raf);
      },
      goTo(i) { show(i); },
      destroy() { this.pause(); root.innerHTML = ""; }
    };
  };
})();
