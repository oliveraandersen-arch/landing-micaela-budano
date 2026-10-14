(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Respaldo: si algo falla, todo el contenido se muestra igual.
  setTimeout(function () {
    document.querySelectorAll("[data-reveal]").forEach(function (e) { e.classList.add("is-in"); });
  }, 2500);

  // Antes / después: el control deslizante mueve la línea divisoria.
  document.querySelectorAll(".cmp-range").forEach(function (r) {
    r.addEventListener("input", function () {
      r.closest(".compare").style.setProperty("--pos", r.value + "%");
    });
  });

  // Vista previa al pasar el mouse por los proyectos.
  var indice = document.getElementById("indice-proyectos");
  var preview = document.getElementById("cursor-preview");
  if (indice && preview && finePointer && !reduce) {
    var previewImg = preview.querySelector("img");
    var caption = preview.querySelector(".cp-cap");
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    var tick = function () {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      preview.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";
      raf = (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5) ? requestAnimationFrame(tick) : null;
    };
    indice.addEventListener("pointermove", function (e) {
      tx = e.clientX + 24; ty = e.clientY - 120;
      if (!raf) raf = requestAnimationFrame(tick);
    });
    indice.addEventListener("pointerover", function (e) {
      var row = e.target.closest(".index-row");
      if (!row) return;
      previewImg.src = row.getAttribute("data-thumb");
      caption.textContent = row.getAttribute("data-caption");
      preview.classList.add("is-on");
    });
    indice.addEventListener("pointerout", function (e) {
      if (!e.target.closest(".index-row")) return;
      preview.classList.remove("is-on");
    });
  } else if (preview) {
    preview.remove();
  }

  // Cabecera con fondo al hacer scroll
  var header = document.querySelector("[data-header]");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  requestAnimationFrame(function () { document.body.classList.add("is-loaded"); });

  // Revelado al entrar en pantalla
  var targets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add("is-in"); });
  }

  // Botones con atracción suave al cursor (solo escritorio)
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
