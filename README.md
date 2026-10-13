# is.ARCH · sitio del estudio

Sitio estático (HTML, CSS y JS sin frameworks). Textos tomados de la web de is.ARCH y del CV de Micaela Budano.

## Estructura
- `index.html`: inicio, mirada, proyectos, proyectos en conjunto, servicios, interiorismo, paisajismo, proceso, equipo, contacto.
- `proyecto.html?id=…`: página de cada proyecto, armada desde los datos.
- `js/projects.js`: todo el contenido (proyectos, colaboraciones, servicios, equipo, pasos, contacto).
- `js/main.js`: arma las secciones e interacciones.
- `css/styles.css`: estilos. Colores y tipografía en `:root`.
- `assets/img/<proyecto>/`: fotos optimizadas (JPG, lado máximo 1800 px).

## Antes de publicar
- Un proyecto se muestra solo con `publicado: true`.
- Dato marcado `aConfirmar` (cargos de Turner y Urba): confirmar con Micaela.
- `aporte` (Consultorios RIE) y `rol` de proyectos: null hasta confirmar.
- `calendly` en contacto: null hasta tener el link.
- Fotos a confirmar: las que tienen nombre "ChatGPT Image" no están en el sitio.
- Planos: pendientes (falta exportar FT-Ter (Rev.09).dwg a PDF o PNG).
- Antes y después de Casa CJ: pendiente.
- Ninguna dirección particular: solo "Mendiolaza, Córdoba".

## Interacciones
- Hero con despliegue de texto al cargar.
- Frases de "Nuestra mirada" que se revelan al scrollear.
- Índice de proyectos con vista previa que sigue al cursor (solo escritorio).
- Servicios en acordeón, interiorismo y paisajismo con etapas seleccionables.
- Equipo con perfil desplegable y trayectoria.
- Botones con atracción suave al cursor (solo escritorio).
- Se respeta `prefers-reduced-motion`.
