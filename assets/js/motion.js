/* Motion dos cases: animação em HTML/CSS no lugar do vídeo, com textos vindos do i18n.
   Uso: const m = CaseMotion(elemento, dados); m.play(); m.pause(); m.destroy(); */
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

  // posições fixas (em %) para os comentários do ato 1, espalhados sem cobrir o centro
  const SPOTS = [[3, 4], [52, 2], [9, 21], [57, 22], [0, 39], [50, 42], [12, 59], [58, 61], [4, 80], [48, 83]];
  const TILT = [-3, 2, -1, 3, 2, -2, 1, -3, 2, -1];
  const STARS = [1, 2, 1, 2, 1, 1, 2, 1, 1, 2];

  function seeded(n) { let s = n * 9301 + 49297; return () => (s = (s * 9301 + 49297) % 233280) / 233280; }

  const SCENES = [
    { // 01 · o sinal
      dur: 6500,
      html: (m) => `
        <div class="cm-reviews">${m.reviews.map((r, i) => `
          <p class="cm-review" style="--x:${SPOTS[i][0]}%;--y:${SPOTS[i][1]}%;--r:${TILT[i]}deg;--d:${150 + i * 210}ms">
            <span class="cm-stars">${"★".repeat(STARS[i])}<i>${"★".repeat(5 - STARS[i])}</i></span>“${esc(r)}”
          </p>`).join("")}</div>
        <div class="cm-center cm-hero-num">
          <p class="cm-label" style="--d:2900ms">${esc(m.bigLabel)}</p>
          <p class="cm-num" data-count="${esc(m.bigNumber)}" data-at="3000">0</p>
          <p class="cm-statement" style="--d:4300ms">${esc(m.insight)}</p>
        </div>`
    },
    { // 02 · reenquadre
      dur: 6500,
      html: (m) => `
        <div class="cm-center cm-reframe">
          <p class="cm-label" style="--d:100ms">${esc(m.chapters[1])}</p>
          <p class="cm-question">${words(m.question, 95, 300)}</p>
          <div class="cm-shift">
            <span class="cm-from" style="--d:3500ms">${esc(m.from)}</span>
            <span class="cm-arrow" style="--d:4200ms">↓</span>
            <span class="cm-to" style="--d:4500ms">${esc(m.to)}</span>
          </div>
        </div>`
    },
    { // 03 · método
      dur: 6500,
      html: (m) => {
        const rnd = seeded(7);
        const dots = Array.from({ length: 36 }, (_, i) => {
          const row = Math.floor(i / 12), col = i % 12;
          return `<i class="cm-dot" style="--x0:${(8 + rnd() * 84).toFixed(1)}%;--y0:${(4 + rnd() * 92).toFixed(1)}%;--x1:${(20 + col * 6.6).toFixed(1)}%;--y1:${(row * 33.3 + 21).toFixed(1)}%;--d:${(rnd() * 500).toFixed(0)}ms"></i>`;
        }).join("");
        return `
          <div class="cm-method">
            <p class="cm-label" style="--d:100ms">${esc(m.mapLabel)}</p>
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
    { // 04 · roadmap
      dur: 7000,
      html: (m) => `
        <div class="cm-center cm-road">
          <p class="cm-label" style="--d:100ms">${esc(m.roadmapLabel)}</p>
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

  function countUp(el, onFrame) {
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

  window.CaseMotion = function (root, m) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("cm");
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
