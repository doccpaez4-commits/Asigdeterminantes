# Determinantes Sociales en Salud

Sitio web del curso **Determinantes Sociales en Salud** — Maestría en Salud Pública, Fundación Universitaria del Área Andina.

Diálogo crítico entre Determinantes Sociales (DSS) y Determinación Social de la Salud (DS), metodología basada en un proyecto territorial de tres actividades (diagnóstico, debate, relectura crítica), rúbricas SOLO y bibliografía actualizada.

🔗 **Sitio publicado:** https://doccpaez4-commits.github.io/Asigdeterminantes/

## Estructura

- `index.md` — presentación del curso
- `metodologia.md` — metodología didáctica
- `contenidos.md` — contenidos por sesión
- `proyecto.md` — proyecto territorial (diagnóstico, debate en clase y relectura crítica)
- `evaluacion.md` — criterios de evaluación
- `rubricas.md` — rúbricas SOLO
- `bibliografia.md` — bibliografía del curso
- `herramientas/dos-lentes.html` — espacio interactivo *Determinantes vs. Determinación* (último ítem del menú lateral). Es una página autónoma con su propio diseño: panorama, esquemas, tabla comparativa, casos verificados, guía metodológica y guía de búsqueda de datos en Colombia. Incluye botón de salida que devuelve a la página del curso desde la que se entró y memoria de la última sección visitada. Fuente original: [DeterminantesvsDeterminacion](https://github.com/doccpaez4-commits/DeterminantesvsDeterminacion).
- `herramientas/dos-lentes.html#debate` — sección **09 · Debate**: carrusel 3D con 12 preguntas provocadoras (cada tarjeta se voltea para mostrar cómo respondería cada lente) y acceso docente a la arena. También aparece en el menú lateral como «⚔️ Debate».
- `herramientas/debate.html` — **arena del debate** (protegida con clave docente): configuración de equipos, turnos y tiempos (postura inicial, réplicas, pregunta cruzada, cierre), réplicas a demanda, cronómetro 3D con semáforo y alertas visuales/sonoras, marcador de tensión, equidad del tiempo de palabra y pantalla de resultados.
- `herramientas/debate-data.js` — banco de preguntas y fuentes del debate (compartido por ambas páginas) y la huella SHA-256 de la clave. Para cambiar la clave: `printf '%s' nuevaclave | shasum -a 256` y pegar el resultado en `DEBATE_CLAVE_SHA256` (la clave se compara en minúsculas). Es una barrera pedagógica, no seguridad real: el sitio es estático.

## Publicación

Este sitio se construye automáticamente con Jekyll vía GitHub Pages a partir de la rama `main`.
