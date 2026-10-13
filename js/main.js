(function () {
  "use strict";

  document.documentElement.classList.add("js");

  // Respaldo: si algo falla al armar la página, todo el contenido igual se muestra.
  setTimeout(function () {
    document.querySelectorAll("[data-reveal]").forEach(function (e) { e.classList.add("is-in"); });
  }, 2500);

  var S = window.SITIO;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // ---------- Helpers ----------
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") n.textContent = attrs[k];
        else if (k === "html") n.innerHTML = attrs[k];
        else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
      });
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function $(id) { return document.getElementById(id); }
  function meta(parts) { return parts.filter(Boolean).join(" · "); }
  function setText(id, t) { var n = $(id); if (n) n.textContent = t || ""; }

  var anio = $("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  // =====================================================
  //  INICIO
  // =====================================================
  if (!document.body.classList.contains("project-page")) {

    // Hero
    setText("hero-rol", S.hero.rol);
    setText("hero-bajada", S.hero.bajada);

    // Índice de proyectos + vista previa que sigue al cursor
    var indice = $("indice-proyectos");
    var publicados = S.proyectos.filter(function (p) { return p.publicado; });
    publicados.forEach(function (p) {
      var row = el("a", { class: "index-row", href: "proyecto.html?id=" + encodeURIComponent(p.id), "data-thumb": p.thumb, "data-caption": p.titulo + " · " + p.lugar }, [
        el("span", { class: "index-title", text: p.titulo }),
        el("span", { class: "index-sub", text: p.subtitulo }),
        el("span", { class: "index-meta", text: meta([p.tipo, p.lugar, p.anio]) })
      ]);
      indice.appendChild(el("li", { class: "reveal", "data-reveal": "" }, [row]));
    });

    var preview = $("cursor-preview");
    if (preview && finePointer && !reduce) {
      var previewImg = preview.querySelector("img");
      var tx = 0, ty = 0, cx = 0, cy = 0, raf = null, active = false;
      function tick() {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        preview.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";
        raf = (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5) ? requestAnimationFrame(tick) : null;
      }
      indice.addEventListener("pointermove", function (e) {
        tx = e.clientX + 24; ty = e.clientY - 120;
        if (!raf) raf = requestAnimationFrame(tick);
      });
      indice.addEventListener("pointerover", function (e) {
        var row = e.target.closest(".index-row");
        if (!row) return;
        previewImg.src = row.getAttribute("data-thumb");
        preview.querySelector(".cp-cap").textContent = row.getAttribute("data-caption");
        preview.classList.add("is-on");
        active = true;
      });
      indice.addEventListener("pointerout", function (e) {
        if (!e.target.closest(".index-row")) return;
        preview.classList.remove("is-on");
        active = false;
      });
    } else if (preview) {
      preview.remove();
    }

    // Colaboraciones
    var colab = S.colaboraciones.filter(function (c) { return c.publicado; });
    var listaColab = $("lista-colab");
    if (!colab.length) {
      var bc = $("colaboraciones"); if (bc) bc.hidden = true;
      var nc = document.querySelector('a[href="#colaboraciones"]'); if (nc) nc.hidden = true;
    } else {
      colab.forEach(function (c) {
        listaColab.appendChild(el("li", { class: "collab reveal", "data-reveal": "" }, [
          el("figure", { class: "collab-fig" }, [
            el("img", { src: c.thumb, alt: c.titulo + ", " + c.subtitulo, loading: "lazy" })
          ]),
          el("div", { class: "collab-body" }, [
            el("h3", { class: "h-card", text: c.titulo }),
            el("p", { class: "sub-italic", text: c.subtitulo }),
            el("p", { class: "meta", text: meta([c.tipo, c.lugar, c.anio]) }),
            el("p", { class: "collab-team", text: c.equipo }),
            c.aporte ? el("p", { class: "collab-role", text: "Aporte: " + c.aporte }) : null,
            el("a", { class: "text-link", href: "proyecto.html?id=" + encodeURIComponent(c.id), text: "Ver proyecto" })
          ])
        ]));
      });
    }

    // Trayectoria (CV de Micaela)
    var perfil = S.perfil;
    setText("perfil-bio", perfil.bio);
    setText("perfil-estudio", perfil.estudio);
    var tl = $("lista-trayectoria");
    if (tl) perfil.trayectoria.forEach(function (t) {
      tl.appendChild(el("li", null, [
        el("p", { class: "tl-head" }, [
          el("span", { class: "tl-cargo", text: t.cargo }),
          el("span", { class: "tl-periodo", text: t.periodo })
        ]),
        el("p", { class: "tl-lugar" }, [
          t.link ? el("a", { href: t.link, target: "_blank", rel: "noopener", text: t.lugar }) : document.createTextNode(t.lugar)
        ])
      ]));
    });
    var fl = $("lista-formacion");
    if (fl) perfil.formacion.forEach(function (f) { fl.appendChild(el("li", { text: f })); });
    setText("perfil-software", "Software: " + perfil.software);

    // Contacto
    var c = S.contacto;
    var th = $("t-contacto"); if (th) th.textContent = c.titulo;
    var wa = $("contacto-wa"); if (wa) wa.href = c.whatsapp;
    var mail = $("contacto-mail");
    if (mail) { mail.href = "mailto:" + c.email; mail.textContent = c.email; }

  }

  // Comparador antes / después: una foto encima de la otra, con un control deslizante
  function compareSlider(par) {
    var range = el("input", {
      type: "range", min: "0", max: "100", value: "50", class: "cmp-range",
      "aria-label": "Deslizar para comparar antes y después: " + par.etiqueta
    });
    var box = el("figure", { class: "compare" + (par.destacado ? " compare--wide" : ""), style: "--pos:50%" }, [
      el("img", { class: "cmp-after", src: par.despues, alt: par.alt + " (después)", loading: "lazy" }),
      el("img", { class: "cmp-before", src: par.antes, alt: par.alt + " (antes)", loading: "lazy" }),
      el("span", { class: "cmp-label cmp-l", "aria-hidden": "true", text: "Antes" }),
      el("span", { class: "cmp-label cmp-r", "aria-hidden": "true", text: "Después" }),
      el("span", { class: "cmp-handle", "aria-hidden": "true" }),
      range
    ]);
    range.addEventListener("input", function () {
      box.style.setProperty("--pos", range.value + "%");
    });
    return el("div", { class: "ba-item" + (par.destacado ? " ba-item--feature" : "") }, [
      el("p", { class: "ba-tag", text: par.etiqueta }),
      box
    ]);
  }

  // =====================================================
  //  PÁGINA DE PROYECTO
  // =====================================================
  if (document.body.classList.contains("project-page")) {
    var id = new URLSearchParams(window.location.search).get("id");
    var all = S.proyectos.concat(S.colaboraciones);
    var p = all.find(function (x) { return x.id === id && x.publicado; });
    var main = $("proyecto");
    var aviso = $("estado-proyecto");

    if (!p) {
      if (aviso) aviso.hidden = false;
    } else {
      document.title = p.titulo + " · Micaela Budano";
      var heroSrc = p.thumb;
      var gal = p.galeria || [];
      if (!gal.length) gal = [];

      var contenido = [];
      contenido.push(el("header", { class: "project-head" }, [
        el("p", { class: "project-kicker", text: p.tipo }),
        el("h1", { class: "project-title", text: p.titulo }),
        el("p", { class: "project-sub", text: p.subtitulo })
      ]));

      var dl = el("dl", { class: "project-facts" }, [
        el("div", null, [el("dt", { text: "Año" }), el("dd", { text: String(p.anio) })]),
        el("div", null, [el("dt", { text: "Lugar" }), el("dd", { text: p.lugar })]),
        p.equipo ? el("div", null, [el("dt", { text: "Equipo" }), el("dd", { text: p.equipo })]) : null,
        p.aporte ? el("div", null, [el("dt", { text: "Aporte" }), el("dd", { text: p.aporte })]) : null
      ]);
      contenido.push(dl);

      contenido.push(el("figure", { class: "project-hero" }, [
        el("img", { src: heroSrc, alt: p.titulo + ", " + p.subtitulo, id: "hero-proyecto" }),
        p.thumbCaption ? el("figcaption", { text: p.thumbCaption }) : null
      ]));

      if (p.resumen) contenido.push(el("p", { class: "project-lede", text: p.resumen }));
      var cuerpo = el("div", { class: "project-body" }, (p.cuerpo || []).map(function (t) { return el("p", { text: t }); }));
      contenido.push(cuerpo);

      if (gal.length) {
        if (p.galeriaCaption) contenido.push(el("p", { class: "gallery-caption", text: p.galeriaCaption }));
        contenido.push(el("div", { class: "gallery" }, gal.map(function (g) {
          return el("figure", { class: "reveal", "data-reveal": "" }, [
            el("img", { src: g.src, alt: g.alt, loading: "lazy" })
          ]);
        })));
      }

      if (p.antesDespues) {
        var bloqueAD = [el("h2", { class: "h-small", text: "Antes y después" })];
        if (p.antesDespues.pares && p.antesDespues.pares.length) {
          bloqueAD.push(el("p", { class: "ba-hint", text: "Deslizá para comparar." }));
          bloqueAD.push(el("div", { class: "ba-list" }, p.antesDespues.pares.map(compareSlider)));
        }
        if (p.antesDespues.generales && p.antesDespues.generales.length) {
          bloqueAD.push(el("p", { class: "ba-hint ba-sub", text: "Vistas generales" }));
          bloqueAD.push(el("p", { class: "ba-note", text: "Son espacios distintos: muestran el cambio de carácter de la casa, no el mismo rincón." }));
          bloqueAD.push(el("div", { class: "ba-list" }, p.antesDespues.generales.map(compareSlider)));
        }
        if (p.antesDespues.estadoOriginal && p.antesDespues.estadoOriginal.length) {
          bloqueAD.push(el("p", { class: "ba-hint ba-sub", text: "Estado original de la casa" }));
          bloqueAD.push(el("div", { class: "gallery gallery-original" }, p.antesDespues.estadoOriginal.map(function (g) {
            return el("figure", { class: "reveal", "data-reveal": "" }, [el("img", { src: g.src, alt: g.alt, loading: "lazy" })]);
          })));
        }
        contenido.push(el("section", { class: "before-after" }, bloqueAD));
      }

      if (p.planos && p.planos.length) {
        contenido.push(el("section", { class: "plans" }, [
          el("h2", { class: "h-small", text: "Planos" }),
          el("div", { class: "gallery gallery-plans" }, p.planos.map(function (g) {
            return el("figure", null, [el("img", { src: g.src, alt: g.alt, loading: "lazy", class: "plano" })]);
          }))
        ]));
      }

      // Siguiente proyecto propio
      var propios = S.proyectos.filter(function (x) { return x.publicado; });
      var idx = propios.findIndex(function (x) { return x.id === p.id; });
      if (idx > -1 && propios.length > 1) {
        var sig = propios[(idx + 1) % propios.length];
        contenido.push(el("a", { class: "next-project", href: "proyecto.html?id=" + encodeURIComponent(sig.id) }, [
          el("span", { class: "next-label", text: "Siguiente proyecto" }),
          el("span", { class: "next-title", text: sig.titulo })
        ]));
      }

      contenido.forEach(function (n) { if (n && main) main.appendChild(n); });
      if (aviso) aviso.remove();
    }
  }

  // =====================================================
  //  INTERACCIONES COMUNES
  // =====================================================

  // Cabecera: fondo al hacer scroll
  var header = document.querySelector("[data-header]");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    if (!reduce) {
      var hp = document.getElementById("hero-proyecto");
      if (hp && window.scrollY < 1200) {
        hp.style.transform = "translate3d(0," + (window.scrollY * 0.12).toFixed(1) + "px,0) scale(1.06)";
      }
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Entrada escalonada del hero (una sola secuencia en carga)
  requestAnimationFrame(function () {
    document.body.classList.add("is-loaded");
  });

  // Revelado al entrar en pantalla
  var targets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add("is-in"); });
  }

  // Botones con atracción suave al cursor (solo en escritorio)
  if (finePointer && !reduce) {
    document.querySelectorAll(".btn-magnetic").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.18;
        var y = (e.clientY - r.top - r.height / 2) * 0.25;
        b.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      });
      b.addEventListener("pointerleave", function () { b.style.transform = ""; });
    });
  }
})();
