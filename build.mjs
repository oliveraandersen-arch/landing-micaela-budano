// Genera las páginas estáticas a partir de js/projects.js.
// Uso: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import vm from "node:vm";

const BASE = "https://micabudano.pages.dev";
const V = "v=8";
const ctx = { window: {} };
vm.runInNewContext(readFileSync("js/projects.js", "utf8"), ctx);
const S = ctx.window.SITIO;

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const year = new Date().getFullYear();
const pub = S.proyectos.filter((p) => p.publicado);
const colab = (S.colaboraciones || []).filter((c) => c.publicado);
const meta = (parts) => parts.filter(Boolean).join(" · ");

const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&display=swap" rel="stylesheet">';

function head({ title, desc, url, image, prefix, bodyClass = "" }) {
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${esc(url)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Micaela Budano">
  <meta property="og:locale" content="es_AR">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${esc(url)}">
  <meta property="og:image" content="${esc(image)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  ${FONTS}
  <link rel="stylesheet" href="${prefix}css/styles.css?${V}">
</head>
<body class="${bodyClass}">
`;
}

function header(prefix) {
  return `<a class="skip" href="#contenido">Ir al contenido</a>
<header class="site-header" data-header>
  <a class="wordmark" href="${prefix}index.html" aria-label="Micaela Budano, inicio">Micaela Budano</a>
  <nav class="site-nav" aria-label="Principal">
    <a href="${prefix}index.html#trayectoria">Trayectoria</a>
    <a href="${prefix}index.html#proyectos">Proyectos</a>
    <a href="${prefix}index.html#contacto" class="nav-cta">Contacto</a>
  </nav>
</header>
`;
}

function footer() {
  return `<footer class="site-footer">
  <p class="footer-line">Micaela Budano · Mendiolaza, Córdoba</p>
  <p>© ${year}</p>
</footer>
<script src="${"__PREFIX__"}js/main.js?${V}"></script>
</body>
</html>
`;
}

function compare(par, pre = "") {
  const wide = par.destacado ? " compare--wide" : "";
  return `<div class="ba-item${par.destacado ? " ba-item--feature" : ""}">
  <p class="ba-tag">${esc(par.etiqueta)}</p>
  <figure class="compare${wide}" style="--pos:50%">
    <img class="cmp-after" src="${pre}${esc(par.despues)}" alt="${esc(par.alt)} (después)" loading="lazy">
    <img class="cmp-before" src="${pre}${esc(par.antes)}" alt="${esc(par.alt)} (antes)" loading="lazy">
    <span class="cmp-label cmp-l" aria-hidden="true">Antes</span>
    <span class="cmp-label cmp-r" aria-hidden="true">Después</span>
    <span class="cmp-handle" aria-hidden="true"></span>
    <input class="cmp-range" type="range" min="0" max="100" value="50" aria-label="Deslizar para comparar antes y después: ${esc(par.etiqueta)}">
  </figure>
</div>`;
}

// ---------- Inicio ----------
function indexPage() {
  const h = S.hero, perfil = S.perfil, c = S.contacto;
  const trayectoria = perfil.trayectoria.map((t) => `
      <li>
        <p class="tl-head"><span class="tl-cargo">${esc(t.cargo)}</span><span class="tl-periodo">${esc(t.periodo)}</span></p>
        <p class="tl-lugar">${t.link ? `<a href="${esc(t.link)}" target="_blank" rel="noopener">${esc(t.lugar)}</a>` : esc(t.lugar)}</p>
      </li>`).join("");
  const formacion = perfil.formacion.map((f) => `<li>${esc(f)}</li>`).join("");
  const queHago = S.queHago.map((q) => `<li>${esc(q)}</li>`).join("");
  const filas = pub.map((p) => `
      <li class="reveal" data-reveal>
        <a class="index-row" href="proyectos/${esc(p.id)}.html" data-thumb="${esc(p.thumb)}" data-caption="${esc(p.titulo + " · " + p.lugar)}">
          <span class="index-title">${esc(p.titulo)}</span>
          <span class="index-sub">${esc(p.subtitulo)}</span>
          <span class="index-meta">${esc(meta([p.tipo, p.lugar, p.anio]))}</span>
        </a>
      </li>`).join("");
  const conjunto = colab.length
    ? `<ul class="collab-list">${colab.map((k) => `<li class="collab reveal" data-reveal><div class="collab-body"><h3 class="h-card">${esc(k.titulo)}</h3><p class="sub-italic">${esc(k.subtitulo)}</p><p class="meta">${esc(meta([k.tipo, k.lugar, k.anio]))}</p><p class="collab-team">${esc(k.equipo)}</p>${k.aporte ? `<p class="collab-role">Aporte: ${esc(k.aporte)}</p>` : ""}<a class="text-link" href="proyectos/${esc(k.id)}.html">Ver proyecto</a></div></li>`).join("")}</ul>`
    : `<p class="lede reveal" data-reveal>Próximamente. Proyectos realizados junto a otros profesionales, con el equipo y el aporte de cada parte.</p>`;

  return head({
    title: "Micaela Budano · Arquitecta en Córdoba",
    desc: "Micaela Budano, arquitecta en Córdoba. Trayectoria, proyectos, remodelaciones, interiorismo y visualización 3D.",
    url: `${BASE}/`,
    image: `${BASE}/assets/og.jpg`,
    prefix: "",
  }) + header("") + `
<main id="contenido">

  <section class="hero" aria-labelledby="hero-titulo">
    <div class="hero-copy">
      <p class="hero-rol reveal" data-reveal>${esc(h.rol)}</p>
      <h1 id="hero-titulo" class="hero-title"><span class="line"><span>${esc(h.nombre)}</span></span></h1>
      <p class="hero-bajada reveal" data-reveal>${esc(h.bajada)}</p>
      <a class="btn btn-magnetic reveal" data-reveal href="#proyectos"><span>Ver proyectos</span></a>
    </div>
    <figure class="hero-media reveal" data-reveal>
      <img src="${esc(h.foto)}" alt="Micaela Budano, arquitecta" width="421" height="900">
    </figure>
  </section>

  <section id="trayectoria" class="block split" aria-labelledby="t-trayectoria">
    <div class="split-intro reveal" data-reveal>
      <h2 id="t-trayectoria" class="h-display">Trayectoria</h2>
      <p class="lede">${esc(perfil.bio)}</p>
      <p class="block-note">${esc(perfil.estudio)}</p>
    </div>
    <div class="perfil-detalle reveal" data-reveal>
      <h3 class="h-small">Experiencia</h3>
      <ol class="timeline">${trayectoria}
      </ol>
      <h3 class="h-small">Formación</h3>
      <ul class="plain-list">${formacion}</ul>
      <p class="tl-lugar">Software: ${esc(perfil.software)}</p>
    </div>
  </section>

  <section id="que-hago" class="block" aria-labelledby="t-quehago">
    <header class="block-head reveal" data-reveal>
      <h2 id="t-quehago">Qué hago</h2>
    </header>
    <ul class="plain-list reveal" data-reveal>${queHago}</ul>
    <p class="block-note reveal" data-reveal>${esc(S.interes)}</p>
  </section>

  <section id="proyectos" class="block" aria-labelledby="t-proyectos">
    <header class="block-head reveal" data-reveal>
      <h2 id="t-proyectos">Proyectos</h2>
      <p class="block-note">Obras y proyectos, con su lugar y año.</p>
    </header>
    <ul class="project-index" id="indice-proyectos">${filas}
    </ul>
    <div class="cursor-preview" id="cursor-preview" aria-hidden="true"><img alt=""><span class="cp-cap"></span></div>
  </section>

  <section id="proyectos-conjunto" class="block" aria-labelledby="t-conjunto">
    <header class="block-head reveal" data-reveal>
      <h2 id="t-conjunto">Proyectos en conjunto</h2>
    </header>
    ${conjunto}
  </section>

  <section id="contacto" class="block contact" aria-labelledby="t-contacto">
    <div class="contact-inner reveal" data-reveal>
      <h2 id="t-contacto" class="h-display">Contacto</h2>
      <div class="contact-actions">
        <a class="btn btn-magnetic" href="${esc(c.whatsapp)}" rel="noopener" target="_blank"><span>${esc(c.whatsappTexto)}</span></a>
      </div>
      <ul class="contact-links">
        <li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
        <li><a href="${esc(c.instagram)}" rel="noopener" target="_blank">Instagram · is.arch.arq</a></li>
      </ul>
      <p class="contact-foot">${esc(c.ubicacion)}</p>
    </div>
  </section>

</main>
` + footer().replace("__PREFIX__", "");
}

// ---------- Página de proyecto ----------
function projectPage(p) {
  const url = `${BASE}/proyectos/${p.id}.html`;
  const gal = (p.galeria || []).map((g) => `
      <figure class="reveal" data-reveal><img src="../${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"></figure>`).join("");
  const ad = p.antesDespues;
  let adHtml = "";
  if (ad) {
    const pares = (ad.pares || []).map((x) => compare(x, "../")).join("");
    const generales = (ad.generales || []).map((x) => compare(x, "../")).join("");
    const orig = (ad.estadoOriginal || []).map((g) => `<figure class="reveal" data-reveal><img src="../${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"></figure>`).join("");
    adHtml = `
  <section class="before-after" aria-labelledby="t-ad">
    <h2 id="t-ad" class="h-small">Antes y después</h2>
    ${pares ? `<p class="ba-hint">Deslizá para comparar.</p><div class="ba-list">${pares}</div>` : ""}
    ${generales ? `<p class="ba-hint ba-sub">Vistas generales</p><p class="ba-note">Son espacios distintos: muestran el cambio de carácter de la casa, no el mismo rincón.</p><div class="ba-list">${generales}</div>` : ""}
    ${orig ? `<p class="ba-hint ba-sub">Estado original de la casa</p><div class="gallery gallery-original">${orig}</div>` : ""}
  </section>`;
  }
  const planos = (p.planos || []).length
    ? `<section class="plans"><h2 class="h-small">Planos</h2><div class="gallery gallery-plans">${p.planos.map((g) => `<figure><img class="plano" src="../${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"></figure>`).join("")}</div></section>`
    : "";
  const idx = pub.findIndex((x) => x.id === p.id);
  const sig = pub[(idx + 1) % pub.length];
  const next = pub.length > 1 ? `<a class="next-project" href="${esc(sig.id)}.html"><span class="next-label">Siguiente proyecto</span><span class="next-title">${esc(sig.titulo)}</span></a>` : "";

  return head({
    title: `${p.titulo} · Micaela Budano`,
    desc: `${p.titulo}, ${p.tipo.toLowerCase()} en ${p.lugar} (${p.anio}). Proyecto de Micaela Budano.`,
    url,
    image: `${BASE}/${p.thumb}`,
    prefix: "../",
    bodyClass: "project-page",
  }) + header("../") + `
<main id="contenido">
  <article id="proyecto">
    <header class="project-head">
      <p class="project-kicker">${esc(p.tipo)}</p>
      <h1 class="project-title">${esc(p.titulo)}</h1>
      <p class="project-sub">${esc(p.subtitulo)}</p>
    </header>
    <dl class="project-facts">
      <div><dt>Año</dt><dd>${esc(p.anio)}</dd></div>
      <div><dt>Lugar</dt><dd>${esc(p.lugar)}</dd></div>
    </dl>
    <figure class="project-hero">
      <img id="hero-proyecto" src="../${esc(p.thumb)}" alt="${esc(p.titulo + ", " + p.subtitulo)}">
    </figure>
    ${p.resumen ? `<p class="project-lede">${esc(p.resumen)}</p>` : ""}
    ${gal ? `<div class="gallery">${gal}</div>` : ""}
    ${adHtml}
    ${planos}
    ${next}
  </article>
</main>
` + footer().replace("__PREFIX__", "../");
}

// ---------- Escritura ----------
rmSync("proyectos", { recursive: true, force: true });
mkdirSync("proyectos", { recursive: true });
writeFileSync("index.html", indexPage());
for (const p of pub) writeFileSync(`proyectos/${p.id}.html`, projectPage(p));
// proyecto.html viejo: redirección para enlaces anteriores
writeFileSync("proyecto.html", `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=index.html#proyectos"><link rel="canonical" href="${BASE}/"><title>Proyectos · Micaela Budano</title></head><body><a href="index.html#proyectos">Ver proyectos</a></body></html>\n`);
console.log("OK: index.html +", pub.length, "proyectos");
