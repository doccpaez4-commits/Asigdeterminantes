---
layout: default
title: Contenidos
---

<h1>Programación por sesiones</h1>
<p class="lede">9 sesiones · {{ site.data.curso.horario_general }} · {{ site.data.curso.salon }}</p>

<div class="callout">
  El recorrido de la asignatura pone en diálogo dos "cajas de herramientas": los <strong>Determinantes Sociales de la Salud</strong> (unidades 1-2) y su lectura crítica desde la <strong>Determinación Social de la Salud</strong> (unidades 3-4), aplicadas de principio a fin a un mismo territorio elegido por cada grupo en la sesión 1.
</div>

<div class="timeline-strip">
  <a href="#sesion-1"><span class="tl-icon">1</span><span class="tl-label">Apertura y<br>territorio</span></a>
  <a href="#sesion-2"><span class="tl-icon">2</span><span class="tl-label">Modelos<br>DSS</span></a>
  <a href="#sesion-3"><span class="tl-icon">3</span><span class="tl-label">Determinación<br>social</span></a>
  <a href="#sesion-4"><span class="tl-icon">4</span><span class="tl-label">Estructurales<br>e intermedios</span></a>
  <a href="#sesion-5" class="highlight"><span class="tl-icon">5</span><span class="tl-label">Entrega 1<br>🎯</span></a>
  <a href="#sesion-6"><span class="tl-icon">6</span><span class="tl-label">Planeación<br>territorial</span></a>
  <a href="#sesion-7" class="highlight"><span class="tl-icon">7</span><span class="tl-label">Entrega 2<br>🎯</span></a>
  <a href="#sesion-8"><span class="tl-icon">8</span><span class="tl-label">IA y<br>priorización</span></a>
  <a href="#sesion-9" class="highlight"><span class="tl-icon">9</span><span class="tl-label">Entrega 3<br>🎯</span></a>
</div>

{% for s in site.data.curso.sesiones %}
<div class="unit-card" id="sesion-{{ s.numero }}">
  <h3>Sesión {{ s.numero }} · {{ s.fecha }}</h3>

  {% case s.numero %}

  {% when 1 %}
  <p><strong>Presentación de la asignatura, acuerdo pedagógico y ruta de evaluación.</strong> Tema 1.1 — Antecedentes de los Determinantes Sociales de la Salud.</p>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Conformación de grupos</h3>
    <p style="margin-bottom:0;">Selección del territorio de trabajo (barrio, comuna, vereda o resguardo) sobre el que se construirán las tres entregas del semestre. Ver <a href="{{ '/proyecto.html' | relative_url }}">Proyecto territorial</a>.</p>
  </div>

  {% when 2 %}
  <p><strong>Tema 1.2 (parte 1) — Modelos clásicos de Determinantes Sociales de la Salud:</strong> Lalonde, Dahlgren-Whitehead, CSDH-OMS.</p>

  {% when 3 %}
  <p><strong>Tema 1.2 (parte 2) — Determinación Social de la Salud:</strong> Medicina Social Latinoamericana / Salud Colectiva. Panel-debate DSS vs. DS.</p>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Apertura de la Entrega 1</h3>
    <p style="margin-bottom:0;">Definición de fuentes y variables a levantar en el territorio elegido.</p>
  </div>

  {% when 4 %}
  <p><strong>Tema 2.1 — Determinantes estructurales e intermedios.</strong></p>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Trabajo dirigido</h3>
    <p style="margin-bottom:0;">Avance de recolección y sistematización de información para la Entrega 1.</p>
  </div>

  {% when 5 %}
  <p><strong>Tema 2.2 — Determinantes socioambientales en salud.</strong></p>
  <div class="update-block">
    <h3>🎯 Entrega 1 — Diagnóstico territorial desde los DSS (30%)</h3>
    <p style="margin-bottom:0;">Mapa de determinantes estructurales e intermedios del territorio elegido, apoyado en el modelo de Dahlgren-Whitehead o el marco de la CSDH-OMS. Ver <a href="{{ '/proyecto.html' | relative_url }}">Proyecto territorial</a> y <a href="{{ '/rubricas.html' | relative_url }}">Rúbrica SOLO — Entrega 1</a>.</p>
  </div>

  {% when 6 %}
  <p><strong>Tema 3.1 — Determinantes sociales y planeación territorial en salud</strong>, leídos también desde categorías de la determinación social (modos de vida, patrones de reproducción social).</p>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Apertura de la Entrega 2</h3>
    <p style="margin-bottom:0;">Relectura crítica del diagnóstico construido en la Entrega 1.</p>
  </div>

  {% when 7 %}
  <p><strong>Tema 3.2 — Determinantes sociales de la salud y enfoque poblacional.</strong></p>
  <div class="update-block">
    <h3>🎯 Entrega 2 — Relectura crítica desde la Determinación Social (30%)</h3>
    <p style="margin-bottom:0;">Documento comparativo (Entrega 1 vs. Entrega 2) articulado con instrumentos de planeación poblacional-territorial (ASIS, PDSP, POT). Ver <a href="{{ '/proyecto.html' | relative_url }}">Proyecto territorial</a> y <a href="{{ '/rubricas.html' | relative_url }}">Rúbrica SOLO — Entrega 2</a>.</p>
  </div>

  {% when 8 %}
  <p><strong>Tema 4.1 — Determinantes sociales, determinación social e Inteligencia Artificial.</strong> Tema 4.2 — Determinantes sociales y priorización en intervenciones individuales y colectivas en salud pública.</p>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Trabajo dirigido</h3>
    <p style="margin-bottom:0;">Construcción de la propuesta integradora para la Entrega 3.</p>
  </div>

  {% when 9 %}
  <p><strong>Cierre y retroalimentación general del curso.</strong></p>
  <div class="update-block">
    <h3>🎯 Entrega 3 — Propuesta integradora de acción territorial (40%)</h3>
    <p style="margin-bottom:0;">Propuesta escrita + sustentación oral + reflexión metodológica sobre las dos "cajas de herramientas" empleadas. Ver <a href="{{ '/rubricas.html' | relative_url }}">Rúbrica SOLO — Entrega 3</a>.</p>
  </div>

  {% endcase %}
</div>
{% endfor %}
