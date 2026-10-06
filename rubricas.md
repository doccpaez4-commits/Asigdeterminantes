---
layout: default
title: Rúbricas SOLO
wide: true
---

<h1>Rúbricas de evaluación — estilo SOLO</h1>
<p class="lede">Structure of Observed Learning Outcomes — una rúbrica por cada actividad evaluada: diagnóstico, debate en clase y relectura crítica</p>

<div class="card">
<p>El modelo <strong>SOLO</strong> describe cinco niveles de complejidad creciente en el aprendizaje:</p>
<div class="solo-scale">
  <div><span>1</span>Preestructural</div>
  <div><span>2</span>Uniestructural</div>
  <div><span>3</span>Multiestructural</div>
  <div><span>4</span>Relacional</div>
  <div><span>5</span>Abstracto ampliado</div>
</div>
</div>

<div class="grading-panel" data-site-key="determinantes">
  <div class="gp-row">
    <label class="gp-label" for="gp-name">👤 Estudiante / grupo</label>
    <input type="text" id="gp-name" class="gp-input" placeholder="Nombre del estudiante o grupo">
  </div>
  <div class="gp-scores">
    <div class="gp-score-item"><span class="gp-score-label">Entrega 1 (30%)</span><span class="gp-score-value" id="gp-score-0">—</span></div>
    <div class="gp-score-item"><span class="gp-score-label">Debate (30%)</span><span class="gp-score-value" id="gp-score-1">—</span></div>
    <div class="gp-score-item"><span class="gp-score-label">Entrega 3 (40%)</span><span class="gp-score-value" id="gp-score-2">—</span></div>
    <div class="gp-score-item gp-final"><span class="gp-score-label">Nota final</span><span class="gp-score-value" id="gp-final">—</span></div>
  </div>
  <div class="gp-actions">
    <button type="button" id="gp-save" class="gp-btn gp-btn-primary">💾 Guardar y calificar siguiente</button>
    <button type="button" id="gp-reset" class="gp-btn">↺ Limpiar selección</button>
  </div>
</div>
<div class="gp-toast" id="gp-toast"></div>

<div class="rubric-activity">
<h2>1. Entrega 1 · Diagnóstico territorial desde los DSS — Corte 1 (30%) · Sesión 5</h2>
<p>Evalúa la capacidad de describir el territorio elegido con el modelo de Determinantes Sociales de la Salud: capas, evidencia y comunicación del diagnóstico.</p>
<div class="weight-bar">
  <div class="w1" style="width:20%;">20%</div>
  <div class="w2" style="width:35%;">35%</div>
  <div class="w3" style="width:20%;">20%</div>
  <div class="w4" style="width:15%;">15%</div>
  <div class="w5" style="width:10%;">10%</div>
</div>
<div class="weight-legend">
  <span><span class="dot" style="background:var(--teal-500);"></span>Caracterización del territorio</span>
  <span><span class="dot" style="background:var(--teal-700);"></span>Determinantes estructurales e intermedios</span>
  <span><span class="dot" style="background:var(--amber);"></span>Uso de evidencia y fuentes</span>
  <span><span class="dot" style="background:var(--navy-900);"></span>Calidad del producto</span>
  <span><span class="dot" style="background:#5eb3a8;"></span>Trabajo colaborativo</span>
</div>
</div>

<div class="rubric-wrap">
<table class="rubric irubric" data-entrega="0" data-weight="30">
<thead><tr>
<th>Criterio</th>
<th>1 · Preestructural</th>
<th>2 · Uniestructural</th>
<th>3 · Multiestructural</th>
<th>4 · Relacional</th>
<th>5 · Abstracto ampliado</th>
<th class="irc-score-col">Nota</th>
</tr></thead>
<tbody>
<tr class="irc" data-weight="20">
<td class="irc-crit-cell">
<span class="irc-name">Caracterización del territorio</span><span class="irc-weight">20%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c0" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No delimita un territorio concreto o lo describe de forma genérica, sin datos verificables.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c0" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Delimita el territorio y menciona un solo rasgo (p. ej. ubicación), sin caracterizar su población o dinámica.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c0" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Describe varios rasgos del territorio (ubicación, población, actividad económica), listados de forma inconexa.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c0" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Integra los rasgos del territorio en una caracterización coherente que explica cómo se relacionan entre sí.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c0" data-level="5" data-score="5.0">
<span class="irc-opt-desc">La caracterización se articula con marcos conceptuales de determinantes sociales y permite anticipar hipótesis sobre inequidades del territorio.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="35">
<td class="irc-crit-cell">
<span class="irc-name">Determinantes estructurales e intermedios</span><span class="irc-weight">35%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c1" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No distingue determinantes estructurales de intermedios, o los confunde con síntomas de salud.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c1" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Identifica un determinante aislado, sin ubicarlo en ninguna capa del modelo.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c1" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Identifica varios determinantes estructurales e intermedios, sin relacionarlos entre sí ni con el modelo Dahlgren-Whitehead/CSDH.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c1" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Organiza los determinantes en capas o categorías del modelo y explica sus relaciones dentro del territorio.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c1" data-level="5" data-score="5.0">
<span class="irc-opt-desc">El mapa de determinantes anticipa qué elementos serán objeto de relectura crítica en la Entrega 3.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="20">
<td class="irc-crit-cell">
<span class="irc-name">Uso de evidencia y fuentes</span><span class="irc-weight">20%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c2" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No cita fuentes o usa datos no verificables.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c2" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Usa una sola fuente (solo observación o solo un dato secundario).</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c2" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Combina fuentes secundarias (DANE, ASIS) y observación de campo, sin contrastarlas.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c2" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Triangula fuentes secundarias y observación de campo, señalando coincidencias y vacíos de información.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c2" data-level="5" data-score="5.0">
<span class="irc-opt-desc">Incluye una reflexión crítica sobre los límites y sesgos de las fuentes oficiales disponibles para el territorio.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="15">
<td class="irc-crit-cell">
<span class="irc-name">Calidad del producto — mapa/gráfico e informe</span><span class="irc-weight">15%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c3" data-level="1" data-score="1.0">
<span class="irc-opt-desc">Producto incompleto, ilegible o sin relación con el contenido del diagnóstico.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c3" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Presenta un mapa o gráfico simple sin informe que lo acompañe, o viceversa.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c3" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Mapa/gráfico e informe presentes, pero con poca conexión entre ambos.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c3" data-level="4" data-score="4.0">
<span class="irc-opt-desc">El mapa/gráfico y el informe se complementan y comunican con claridad los hallazgos del diagnóstico.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c3" data-level="5" data-score="5.0">
<span class="irc-opt-desc">El producto tiene calidad suficiente para ser usado por actores reales del territorio (junta comunal, EAPB, autoridad local).</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="10">
<td class="irc-crit-cell">
<span class="irc-name">Trabajo colaborativo</span><span class="irc-weight">10%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c4" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No hay evidencia de trabajo en equipo; el producto refleja aportes desconectados de un solo integrante.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c4" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Participación desigual, con uno o dos integrantes concentrando el trabajo.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c4" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Participación de todos los integrantes, en tareas separadas sin integración.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c4" data-level="4" data-score="4.0">
<span class="irc-opt-desc">El grupo distribuye tareas complementarias y las integra en un producto coherente.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e0-c4" data-level="5" data-score="5.0">
<span class="irc-opt-desc">El grupo documenta explícitamente su proceso de trabajo colaborativo, como insumo para mejorar en las entregas siguientes.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
</tbody>
</table>
</div>
<div class="irc-result" id="irubric-result-0">Sin calificar aún</div>

<div class="rubric-activity">
<h2>2. Debate en clase · Determinantes sociales vs. determinación social — Corte 2 (30%) · Sesión 7</h2>
<p>Evalúa la participación del grupo en el debate que se prepara en el espacio <a href="{{ '/herramientas/dos-lentes.html#debate' | relative_url }}">Dos lentes → Debate</a>: cada equipo defiende una lente (DSS o DS) ante las preguntas provocadoras, con postura inicial, réplicas y cierre en los tiempos fijados por el docente.</p>
<div class="weight-bar">
  <div class="w1" style="width:30%;">30%</div>
  <div class="w2" style="width:25%;">25%</div>
  <div class="w3" style="width:20%;">20%</div>
  <div class="w4" style="width:15%;">15%</div>
  <div class="w5" style="width:10%;">10%</div>
</div>
<div class="weight-legend">
  <span><span class="dot" style="background:var(--teal-500);"></span>Argumentación</span>
  <span><span class="dot" style="background:var(--teal-700);"></span>Calidad de autores y fuentes</span>
  <span><span class="dot" style="background:var(--amber);"></span>Uso de ejemplos de la vida real</span>
  <span><span class="dot" style="background:var(--navy-900);"></span>Réplica y escucha activa</span>
  <span><span class="dot" style="background:#5eb3a8;"></span>Trabajo colaborativo</span>
</div>
</div>

<div class="rubric-wrap">
<table class="rubric irubric" data-entrega="1" data-weight="30">
<thead><tr>
<th>Criterio</th>
<th>1 · Preestructural</th>
<th>2 · Uniestructural</th>
<th>3 · Multiestructural</th>
<th>4 · Relacional</th>
<th>5 · Abstracto ampliado</th>
<th class="irc-score-col">Nota</th>
</tr></thead>
<tbody>
<tr class="irc" data-weight="30">
<td class="irc-crit-cell">
<span class="irc-name">Argumentación</span><span class="irc-weight">30%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c0" data-level="1" data-score="1.0">
<span class="irc-opt-desc">Expresa opiniones sin una tesis clara ni razones; no se distingue qué lente está defendiendo.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c0" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Enuncia una tesis y ofrece una sola razón, sin conectarla con la lente asignada ni con la pregunta provocadora.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c0" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Presenta varias razones a favor de su postura, listadas sin jerarquizar ni conectar entre sí.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c0" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Articula tesis, razones y evidencia en un hilo coherente y muestra por qué su lente explica mejor el problema planteado en la pregunta.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c0" data-level="5" data-score="5.0">
<span class="irc-opt-desc">Reconoce los límites de su propia postura, anticipa objeciones y cierra con una conclusión o síntesis que otro grupo podría usar para analizar su territorio.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="25">
<td class="irc-crit-cell">
<span class="irc-name">Calidad de autores y fuentes</span><span class="irc-weight">25%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c1" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No cita autores, o cita fuentes no verificables («dicen que…», páginas sin autoría).</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c1" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Cita un solo autor, sin precisar obra ni año, o lo atribuye a la lente equivocada.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c1" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Cita varios autores pertinentes (p. ej. Solar e Irwin, Marmot, Breilh, Navarro), pero como adorno, sin explicar qué sostiene cada uno.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c1" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Usa los autores con precisión (obra, año, idea central) para respaldar argumentos concretos, incluida la lectura del autor que representa la lente opuesta.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c1" data-level="5" data-score="5.0">
<span class="irc-opt-desc">Contrasta autores de ambas tradiciones con fuentes recientes verificables (artículos con DOI o PMID) y evalúa sus límites, no solo su autoridad.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="20">
<td class="irc-crit-cell">
<span class="irc-name">Uso de ejemplos de la vida real</span><span class="irc-weight">20%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c2" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No ofrece ejemplos, o son hipotéticos y genéricos.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c2" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Ofrece un ejemplo anecdótico sin relación con la tesis.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c2" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Ofrece varios ejemplos reales (casos, datos, noticias), pero sin explicar qué muestran frente a su postura.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c2" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Usa ejemplos reales —preferiblemente del territorio del proyecto— que ilustran cómo opera su argumento, con datos o fuentes verificables.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c2" data-level="5" data-score="5.0">
<span class="irc-opt-desc">Escoge ejemplos que ponen a prueba su propia postura y muestra cómo cambia la lectura del territorio según la lente, con implicaciones para la acción.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="15">
<td class="irc-crit-cell">
<span class="irc-name">Réplica y escucha activa</span><span class="irc-weight">15%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c3" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No responde a los argumentos del otro equipo o los distorsiona.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c3" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Responde a un solo argumento, a la defensiva, sin reconocer lo que dijo el otro equipo.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c3" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Responde a varios argumentos, pero repite su postura en lugar de refutar.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c3" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Reformula con fidelidad el argumento del otro equipo y lo refuta o matiza con razones y evidencia, dentro del tiempo asignado.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c3" data-level="5" data-score="5.0">
<span class="irc-opt-desc">Reconoce un punto válido de la otra lente, ajusta su posición y formula una síntesis o una pregunta nueva que hace avanzar el debate.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="10">
<td class="irc-crit-cell">
<span class="irc-name">Trabajo colaborativo</span><span class="irc-weight">10%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c4" data-level="1" data-score="1.0">
<span class="irc-opt-desc">Un solo integrante sostiene el debate; sin preparación compartida.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c4" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Participación desigual: solo algunos integrantes intervienen.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c4" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Todos intervienen, pero cada quien presenta su parte por separado.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c4" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Roles y turnos coordinados: los integrantes se complementan y respetan los tiempos del debate.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e1-c4" data-level="5" data-score="5.0">
<span class="irc-opt-desc">El equipo se apoya mutuamente durante las réplicas y reflexiona sobre su preparación y su desempeño.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
</tbody>
</table>
</div>
<div class="irc-result" id="irubric-result-1">Sin calificar aún</div>

<div class="rubric-activity">
<h2>3. Entrega 3 · Relectura crítica desde la DS — Corte 3 (40%) · Sesión 9</h2>
<p>Evalúa el tránsito del diagnóstico descriptivo (Entrega 1) y de lo discutido en el debate a una lectura dialéctica del mismo territorio, sin caer en cadenas causa-efecto.</p>
<div class="weight-bar">
  <div class="w1" style="width:30%;">30%</div>
  <div class="w2" style="width:30%;">30%</div>
  <div class="w3" style="width:20%;">20%</div>
  <div class="w4" style="width:10%;">10%</div>
  <div class="w5" style="width:10%;">10%</div>
</div>
<div class="weight-legend">
  <span><span class="dot" style="background:var(--teal-500);"></span>Comprensión del modelo de determinación social</span>
  <span><span class="dot" style="background:var(--teal-700);"></span>Relectura crítica del diagnóstico previo</span>
  <span><span class="dot" style="background:var(--amber);"></span>Articulación con planeación territorial</span>
  <span><span class="dot" style="background:var(--navy-900);"></span>Calidad argumentativa</span>
  <span><span class="dot" style="background:#5eb3a8;"></span>Trabajo colaborativo</span>
</div>
</div>

<div class="rubric-wrap">
<table class="rubric irubric" data-entrega="2" data-weight="40">
<thead><tr>
<th>Criterio</th>
<th>1 · Preestructural</th>
<th>2 · Uniestructural</th>
<th>3 · Multiestructural</th>
<th>4 · Relacional</th>
<th>5 · Abstracto ampliado</th>
<th class="irc-score-col">Nota</th>
</tr></thead>
<tbody>
<tr class="irc" data-weight="30">
<td class="irc-crit-cell">
<span class="irc-name">Comprensión del modelo de determinación social</span><span class="irc-weight">30%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c0" data-level="1" data-score="1.0">
<span class="irc-opt-desc">Confunde determinación social con determinantes sociales, o no logra explicar el modelo.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c0" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Define la determinación social de forma general, sin distinguir sus tres dimensiones.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c0" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Menciona las dimensiones general, particular y singular, pero las trata como una lista, no como un proceso relacional.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c0" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Explica las tres dimensiones como un proceso dialéctico interconectado, distinguiéndolo explícitamente de una cadena causa-efecto.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c0" data-level="5" data-score="5.0">
<span class="irc-opt-desc">Usa el modelo de determinación social para cuestionar los límites del modelo DSS aplicado en la Entrega 1, con dominio del debate Medicina Social Latinoamericana / Salud Colectiva.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="30">
<td class="irc-crit-cell">
<span class="irc-name">Relectura crítica del diagnóstico previo</span><span class="irc-weight">30%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c1" data-level="1" data-score="1.0">
<span class="irc-opt-desc">Repite el diagnóstico de la Entrega 1 sin relectura ni novedad.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c1" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Señala un aspecto del diagnóstico anterior que podría revisarse, sin desarrollarlo.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c1" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Reinterpreta varios determinantes identificados en la Entrega 1 desde categorías de determinación social, de forma parcial.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c1" data-level="4" data-score="4.0">
<span class="irc-opt-desc">La relectura muestra cómo los determinantes de la Entrega 1 son expresión de modos de vida, poder e historia — no causas aisladas.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c1" data-level="5" data-score="5.0">
<span class="irc-opt-desc">La relectura genera preguntas o hipótesis nuevas que orientan explícitamente la acción en el territorio.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="20">
<td class="irc-crit-cell">
<span class="irc-name">Articulación con instrumentos de planeación territorial</span><span class="irc-weight">20%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c2" data-level="1" data-score="1.0">
<span class="irc-opt-desc">No menciona ningún instrumento de planeación (ASIS, PDSP, POT).</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c2" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Menciona un instrumento sin analizarlo.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c2" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Revisa uno o más instrumentos y describe su contenido, sin compararlo con la relectura crítica.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c2" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Compara el lenguaje técnico de los instrumentos con la lectura de determinación social, señalando coincidencias y omisiones.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c2" data-level="5" data-score="5.0">
<span class="irc-opt-desc">Propone cómo los instrumentos de planeación podrían incorporar una lectura de determinación social, con argumentos viables para el contexto institucional real.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="10">
<td class="irc-crit-cell">
<span class="irc-name">Calidad argumentativa y documento comparativo</span><span class="irc-weight">10%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c3" data-level="1" data-score="1.0">
<span class="irc-opt-desc">El documento no compara el diagnóstico (Entrega 1) con la relectura, o carece de estructura argumentativa.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c3" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Presenta ambas lecturas yuxtapuestas sin comparación explícita.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c3" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Compara puntualmente algunos elementos entre ambas lecturas.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c3" data-level="4" data-score="4.0">
<span class="irc-opt-desc">El documento comparativo argumenta de forma coherente las diferencias entre ambas lecturas del mismo territorio.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c3" data-level="5" data-score="5.0">
<span class="irc-opt-desc">La argumentación es transferible: podría orientar a otro grupo a comparar sus propios diagnósticos DSS/DS.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
<tr class="irc" data-weight="10">
<td class="irc-crit-cell">
<span class="irc-name">Trabajo colaborativo</span><span class="irc-weight">10%</span>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c4" data-level="1" data-score="1.0">
<span class="irc-opt-desc">Sin evidencia de trabajo compartido.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c4" data-level="2" data-score="2.0">
<span class="irc-opt-desc">Participación desigual entre integrantes.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c4" data-level="3" data-score="3.0">
<span class="irc-opt-desc">Participación de todos en tareas separadas.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c4" data-level="4" data-score="4.0">
<span class="irc-opt-desc">Tareas complementarias integradas en un producto coherente.</span>
</label>
</td>
<td class="irc-opt">
<label>
<input type="radio" name="determinantes-e2-c4" data-level="5" data-score="5.0">
<span class="irc-opt-desc">El grupo ajusta su forma de organización con base en lo aprendido en la Entrega 1 y en el debate.</span>
</label>
</td>
<td class="irc-row-score">—</td>
</tr>
</tbody>
</table>
</div>
<div class="irc-result" id="irubric-result-2">Sin calificar aún</div>

<div class="gp-savedlist-wrap">
<h2>📋 Calificaciones guardadas en este navegador</h2>
<p class="muted" style="font-size:13px; margin-top:-6px;">Se guardan localmente en este navegador (no se suben a ningún servidor). Usa "Copiar todo" para pegarlas en Excel u otra planilla.</p>
<div class="gp-savedlist-actions">
  <button type="button" id="gp-copy" class="gp-btn">📋 Copiar todo (para Excel)</button>
  <button type="button" id="gp-clearall" class="gp-btn gp-btn-danger">🗑 Borrar todas</button>
</div>
<div class="gp-table-wrap">
<table class="gp-table">
<thead><tr><th>Estudiante</th><th>Entrega 1 (30%)</th><th>Debate (30%)</th><th>Entrega 3 (40%)</th><th>Nota final</th><th></th></tr></thead>
<tbody id="gp-table-body"></tbody>
</table>
</div>
</div>

<div class="criteria-block">
<h3>🎯 Criterios transversales</h3>
<dl>
  <dt>Coherencia y trazabilidad entre entregas:</dt> <dd>que el debate se apoye realmente en lo hallado en la Entrega 1, y que la Entrega 3 retome lo trabajado en el diagnóstico y en el debate — ponderado dentro de la calidad argumentativa de cada rúbrica.</dd>
  <dt>No causalismo:</dt> <dd>en ningún corte se evalúa la búsqueda de "causas" o "causas de las causas": la determinación social se lee como proceso dialéctico entre lo general, lo particular y lo singular.</dd>
</dl>
</div>

<script>
// Migración única: la rúbrica 2 antigua (relectura crítica) pasó a ser la 3, el debate es la nueva 2 y la propuesta integradora se suprimió.
(function () {
  var KEY = 'determinantes', V = 'rubrica_schema_' + KEY;
  try {
    if (localStorage.getItem(V) === '2') return;
    function mapSel(sel) {
      var o = {};
      Object.keys(sel || {}).forEach(function (k) {
        if (k.indexOf('-e0-') > -1) o[k] = sel[k];
        else if (k.indexOf('-e1-') > -1) o[k.replace('-e1-', '-e2-')] = sel[k];
      });
      return o;
    }
    var cur = JSON.parse(localStorage.getItem('rubrica_current_' + KEY) || 'null');
    if (cur) { cur.selections = mapSel(cur.selections); localStorage.setItem('rubrica_current_' + KEY, JSON.stringify(cur)); }
    var list = JSON.parse(localStorage.getItem('rubrica_saved_' + KEY) || '[]');
    list.forEach(function (r) {
      var s = r.scores || [], s0 = s[0] == null ? null : s[0], s1 = s[1] == null ? null : s[1];
      r.selections = mapSel(r.selections); r.scores = [s0, null, s1];
      var w = 0, t = 0;
      if (s0 !== null) { w += 30; t += 30 * s0; }
      if (s1 !== null) { w += 40; t += 40 * s1; }
      r.final = w ? t / w : null;
    });
    localStorage.setItem('rubrica_saved_' + KEY, JSON.stringify(list));
    localStorage.setItem(V, '2');
  } catch (e) {}
})();
</script>
