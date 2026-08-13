---
layout: default
title: Rúbricas SOLO
---

<h1>Rúbricas de evaluación — estilo SOLO</h1>
<p class="lede">Structure of Observed Learning Outcomes — una rúbrica por entrega del proyecto territorial</p>

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
    <div class="gp-score-item"><span class="gp-score-label">Entrega 2 (30%)</span><span class="gp-score-value" id="gp-score-1">—</span></div>
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

<div class="irubric" data-entrega="0" data-weight="30">
  <div class="irc" data-weight="20">
    <div class="irc-head"><span class="irc-name">Caracterización del territorio</span><span class="irc-weight">20%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c0" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No delimita un territorio concreto o lo describe de forma genérica, sin datos verificables.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c0" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Delimita el territorio y menciona un solo rasgo (p. ej. ubicación), sin caracterizar su población o dinámica.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c0" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Describe varios rasgos del territorio (ubicación, población, actividad económica), listados de forma inconexa.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c0" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Integra los rasgos del territorio en una caracterización coherente que explica cómo se relacionan entre sí.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c0" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">La caracterización se articula con marcos conceptuales de determinantes sociales y permite anticipar hipótesis sobre inequidades del territorio.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="35">
    <div class="irc-head"><span class="irc-name">Determinantes estructurales e intermedios</span><span class="irc-weight">35%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c1" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No distingue determinantes estructurales de intermedios, o los confunde con síntomas de salud.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c1" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Identifica un determinante aislado, sin ubicarlo en ninguna capa del modelo.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c1" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Identifica varios determinantes estructurales e intermedios, sin relacionarlos entre sí ni con el modelo Dahlgren-Whitehead/CSDH.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c1" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Organiza los determinantes en capas o categorías del modelo y explica sus relaciones dentro del territorio.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c1" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">El mapa de determinantes anticipa qué elementos serán objeto de relectura crítica en la Entrega 2.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="20">
    <div class="irc-head"><span class="irc-name">Uso de evidencia y fuentes</span><span class="irc-weight">20%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c2" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No cita fuentes o usa datos no verificables.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c2" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Usa una sola fuente (solo observación o solo un dato secundario).</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c2" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Combina fuentes secundarias (DANE, ASIS) y observación de campo, sin contrastarlas.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c2" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Triangula fuentes secundarias y observación de campo, señalando coincidencias y vacíos de información.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c2" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">Incluye una reflexión crítica sobre los límites y sesgos de las fuentes oficiales disponibles para el territorio.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="15">
    <div class="irc-head"><span class="irc-name">Calidad del producto — mapa/gráfico e informe</span><span class="irc-weight">15%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c3" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">Producto incompleto, ilegible o sin relación con el contenido del diagnóstico.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c3" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Presenta un mapa o gráfico simple sin informe que lo acompañe, o viceversa.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c3" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Mapa/gráfico e informe presentes, pero con poca conexión entre ambos.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c3" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">El mapa/gráfico y el informe se complementan y comunican con claridad los hallazgos del diagnóstico.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c3" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">El producto tiene calidad suficiente para ser usado por actores reales del territorio (junta comunal, EAPB, autoridad local).</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="10">
    <div class="irc-head"><span class="irc-name">Trabajo colaborativo</span><span class="irc-weight">10%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c4" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No hay evidencia de trabajo en equipo; el producto refleja aportes desconectados de un solo integrante.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c4" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Participación desigual, con uno o dos integrantes concentrando el trabajo.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c4" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Participación de todos los integrantes, en tareas separadas sin integración.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c4" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">El grupo distribuye tareas complementarias y las integra en un producto coherente.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e0-c4" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">El grupo documenta explícitamente su proceso de trabajo colaborativo, como insumo para mejorar en las entregas siguientes.</span>
      </label>
    </div>
  </div>
</div>
<div class="irc-result" id="irubric-result-0">Sin calificar aún</div>

<div class="rubric-activity">
<h2>2. Entrega 2 · Relectura crítica desde la DS — Corte 2 (30%) · Sesión 7</h2>
<p>Evalúa el tránsito del diagnóstico descriptivo a una lectura dialéctica del mismo territorio, sin caer en cadenas causa-efecto.</p>
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

<div class="irubric" data-entrega="1" data-weight="30">
  <div class="irc" data-weight="30">
    <div class="irc-head"><span class="irc-name">Comprensión del modelo de determinación social</span><span class="irc-weight">30%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c0" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">Confunde determinación social con determinantes sociales, o no logra explicar el modelo.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c0" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Define la determinación social de forma general, sin distinguir sus tres dimensiones.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c0" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Menciona las dimensiones general, particular y singular, pero las trata como una lista, no como un proceso relacional.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c0" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Explica las tres dimensiones como un proceso dialéctico interconectado, distinguiéndolo explícitamente de una cadena causa-efecto.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c0" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">Usa el modelo de determinación social para cuestionar los límites del modelo DSS aplicado en la Entrega 1, con dominio del debate Medicina Social Latinoamericana / Salud Colectiva.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="30">
    <div class="irc-head"><span class="irc-name">Relectura crítica del diagnóstico previo</span><span class="irc-weight">30%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c1" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">Repite el diagnóstico de la Entrega 1 sin relectura ni novedad.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c1" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Señala un aspecto del diagnóstico anterior que podría revisarse, sin desarrollarlo.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c1" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Reinterpreta varios determinantes identificados en la Entrega 1 desde categorías de determinación social, de forma parcial.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c1" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">La relectura muestra cómo los determinantes de la Entrega 1 son expresión de modos de vida, poder e historia — no causas aisladas.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c1" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">La relectura genera preguntas o hipótesis nuevas que orientan explícitamente la propuesta de la Entrega 3.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="20">
    <div class="irc-head"><span class="irc-name">Articulación con instrumentos de planeación territorial</span><span class="irc-weight">20%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c2" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No menciona ningún instrumento de planeación (ASIS, PDSP, POT).</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c2" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Menciona un instrumento sin analizarlo.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c2" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Revisa uno o más instrumentos y describe su contenido, sin compararlo con la relectura crítica.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c2" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Compara el lenguaje técnico de los instrumentos con la lectura de determinación social, señalando coincidencias y omisiones.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c2" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">Propone cómo los instrumentos de planeación podrían incorporar una lectura de determinación social, con argumentos viables para el contexto institucional real.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="10">
    <div class="irc-head"><span class="irc-name">Calidad argumentativa y documento comparativo</span><span class="irc-weight">10%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c3" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">El documento no compara la Entrega 1 y la Entrega 2, o carece de estructura argumentativa.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c3" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Presenta ambas entregas yuxtapuestas sin comparación explícita.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c3" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Compara puntualmente algunos elementos entre ambas entregas.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c3" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">El documento comparativo argumenta de forma coherente las diferencias entre ambas lecturas del mismo territorio.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c3" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">La argumentación es transferible: podría orientar a otro grupo a comparar sus propios diagnósticos DSS/DS.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="10">
    <div class="irc-head"><span class="irc-name">Trabajo colaborativo</span><span class="irc-weight">10%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c4" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">Sin evidencia de trabajo compartido.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c4" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Participación desigual entre integrantes.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c4" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Participación de todos en tareas separadas.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c4" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Tareas complementarias integradas en un producto coherente.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e1-c4" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">El grupo ajusta su forma de organización con base en lo aprendido en la Entrega 1.</span>
      </label>
    </div>
  </div>
</div>
<div class="irc-result" id="irubric-result-1">Sin calificar aún</div>

<div class="rubric-activity">
<h2>3. Entrega 3 · Propuesta integradora de acción territorial — Corte 3 (40%) · Sesión 9</h2>
<p>Evalúa la síntesis final: una propuesta viable que dialoga explícitamente entre los dos modelos comprensivos y se sustenta oralmente.</p>
<div class="weight-bar">
  <div class="w1" style="width:25%;">25%</div>
  <div class="w2" style="width:25%;">25%</div>
  <div class="w3" style="width:15%;">15%</div>
  <div class="w4" style="width:15%;">15%</div>
  <div class="w5" style="width:10%;">10%</div>
  <div class="w6" style="width:10%;">10%</div>
</div>
<div class="weight-legend">
  <span><span class="dot" style="background:var(--teal-500);"></span>Pertinencia y viabilidad</span>
  <span><span class="dot" style="background:var(--teal-700);"></span>Diálogo crítico DSS/DS</span>
  <span><span class="dot" style="background:var(--amber);"></span>Enfoque intersectorial y participativo</span>
  <span><span class="dot" style="background:var(--navy-900);"></span>Reflexión crítica sobre IA/priorización</span>
  <span><span class="dot" style="background:#5eb3a8;"></span>Sustentación oral</span>
  <span><span class="dot" style="background:#94a3b8;"></span>Trabajo colaborativo</span>
</div>
</div>

<div class="irubric" data-entrega="2" data-weight="40">
  <div class="irc" data-weight="25">
    <div class="irc-head"><span class="irc-name">Pertinencia y viabilidad de la propuesta</span><span class="irc-weight">25%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c0" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">La propuesta es genérica, no responde al territorio trabajado o es inviable.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c0" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Responde a un solo determinante o problema, sin considerar el territorio en conjunto.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c0" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Aborda varios determinantes identificados en las entregas anteriores, con viabilidad parcialmente justificada.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c0" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Se articula explícitamente con los hallazgos de la Entrega 1 y la Entrega 2, con recursos y actores viables para el territorio.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c0" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">Incluye una estrategia de sostenibilidad o escalamiento, pensada para actores reales del territorio.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="25">
    <div class="irc-head"><span class="irc-name">Diálogo crítico entre modelos DSS/DS</span><span class="irc-weight">25%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c1" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No hay diálogo entre los dos modelos; se usa solo uno.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c1" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Se mencionan ambos modelos sin ponerlos en relación.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c1" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Se identifican aportes y límites de cada modelo por separado.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c1" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">La propuesta muestra explícitamente dónde el lenguaje DSS y la lectura DS se complementan y dónde se tensionan.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c1" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">El diálogo crítico entre modelos se convierte en un argumento metodológico transferible a otros territorios o problemas de salud pública.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="15">
    <div class="irc-head"><span class="irc-name">Enfoque intersectorial y participativo</span><span class="irc-weight">15%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c2" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">La propuesta depende exclusivamente del sector salud, sin considerar otros actores.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c2" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Menciona un actor o sector adicional sin desarrollar su rol.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c2" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Identifica varios sectores y actores relevantes, sin definir mecanismos concretos de participación.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c2" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Define roles y mecanismos de participación intersectorial y comunitaria coherentes con el territorio.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c2" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">Anticipa posibles tensiones o resistencias intersectoriales y plantea cómo abordarlas.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="15">
    <div class="irc-head"><span class="irc-name">Reflexión crítica sobre IA/priorización</span><span class="irc-weight">15%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c3" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No hay reflexión sobre herramientas de IA o priorización, o se asumen sin cuestionamiento.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c3" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Menciona una herramienta sin analizar su pertinencia para el territorio.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c3" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Describe ventajas y limitaciones generales de estas herramientas.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c3" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Analiza críticamente qué aportan y qué invisibilizan estas herramientas, en diálogo con la lectura de determinación social.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c3" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">Propone criterios propios para el uso ético y situado de estas herramientas en la planeación territorial.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="10">
    <div class="irc-head"><span class="irc-name">Sustentación oral</span><span class="irc-weight">10%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c4" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">No logra comunicar la propuesta con claridad ante el grupo.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c4" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Presenta la propuesta de forma lineal, sin responder con solvencia a preguntas.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c4" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Comunica con claridad los elementos de la propuesta, con respuestas parciales a las preguntas del grupo.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c4" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Sustenta con dominio conceptual y articula las preguntas del grupo con los hallazgos de las tres entregas.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c4" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">La sustentación genera discusión genuina en el grupo, con capacidad de defender y matizar la propuesta ante objeciones.</span>
      </label>
    </div>
  </div>
  <div class="irc" data-weight="10">
    <div class="irc-head"><span class="irc-name">Trabajo colaborativo</span><span class="irc-weight">10%</span></div>
    <div class="irc-levels">
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c5" data-level="1" data-score="1.0">
        <span class="irc-opt-top">1 · Preestructural</span>
        <span class="irc-opt-desc">Sin evidencia de trabajo compartido en el cierre del proceso.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c5" data-level="2" data-score="2.0">
        <span class="irc-opt-top">2 · Uniestructural</span>
        <span class="irc-opt-desc">Participación desigual en la propuesta final.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c5" data-level="3" data-score="3.0">
        <span class="irc-opt-top">3 · Multiestructural</span>
        <span class="irc-opt-desc">Todos participan en tareas separadas de la propuesta.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c5" data-level="4" data-score="4.0">
        <span class="irc-opt-top">4 · Relacional</span>
        <span class="irc-opt-desc">Integración coherente del trabajo de los tres cortes.</span>
      </label>
      <label class="irc-opt">
        <input type="radio" name="determinantes-e2-c5" data-level="5" data-score="5.0">
        <span class="irc-opt-top">5 · Abstracto ampliado</span>
        <span class="irc-opt-desc">El grupo reflexiona explícitamente sobre su propio proceso colaborativo a lo largo del semestre.</span>
      </label>
    </div>
  </div>
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
<thead><tr><th>Estudiante</th><th>Entrega 1 (30%)</th><th>Entrega 2 (30%)</th><th>Entrega 3 (40%)</th><th>Nota final</th><th></th></tr></thead>
<tbody id="gp-table-body"></tbody>
</table>
</div>
</div>

<div class="criteria-block">
<h3>🎯 Criterios transversales</h3>
<dl>
  <dt>Coherencia y trazabilidad entre entregas:</dt> <dd>que la Entrega 2 retome realmente lo hallado en la Entrega 1, y que la Entrega 3 retome lo trabajado en la Entrega 2 — ponderado dentro de la calidad argumentativa de cada rúbrica.</dd>
  <dt>No causalismo:</dt> <dd>en ningún corte se evalúa la búsqueda de "causas" o "causas de las causas": la determinación social se lee como proceso dialéctico entre lo general, lo particular y lo singular.</dd>
</dl>
</div>
