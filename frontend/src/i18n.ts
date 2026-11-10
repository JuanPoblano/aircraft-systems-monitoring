// UI copy is keyed by the English source text. Missing entries fall back to English.
// Domain types and API payloads deliberately remain language-neutral.
export type Locale = 'en'|'es'|'fr';
const translations: Record<string, [string,string]> = {
  "Overview": [
    "Resumen",
    "Resumen"
  ],
  "Flight Simulation": [
    "Simulación de vuelo",
    "Simulation de vol"
  ],
  "Telemetry": [
    "Telemetría",
    "Télémétrie"
  ],
  "Fault Scenarios": [
    "Escenarios de averías",
    "Scénarios de panne"
  ],
  "ATA Systems": [
    "Sistemas ATA",
    "Systèmes ATA"
  ],
  "Event Log": [
    "Registro de eventos",
    "Journal des événements"
  ],
  "About the Project": [
    "Sobre el proyecto",
    "À propos du projet"
  ],
  "Settings": [
    "Configuración",
    "Paramètres"
  ],
  "Preflight": [
    "Prevuelo",
    "Prévol"
  ],
  "Takeoff": [
    "Despegue",
    "Décollage"
  ],
  "Climb": [
    "Ascenso",
    "Montée"
  ],
  "Cruise": [
    "Crucero",
    "Croisière"
  ],
  "Descent": [
    "Descenso",
    "Descente"
  ],
  "Landing": [
    "Aterrizaje",
    "Atterrissage"
  ],
  "Landed": [
    "En tierra",
    "Au sol"
  ],
  "Flight Simulation · Telemetry · Fault Analysis (Educational)": [
    "Simulación de vuelo · Telemetría · Análisis de fallos (educativo)",
    "Simulation de vol · Télémétrie · Analyse des pannes (pédagogique)"
  ],
  "Simulation Running": [
    "Simulación en curso",
    "Simulation en cours"
  ],
  "Simulation Ready": [
    "Simulación lista",
    "Simulation prête"
  ],
  "Flight Completed": [
    "Vuelo finalizado",
    "Vol terminé"
  ],
  "Demo · Simulated Data": [
    "Demo · Datos simulados",
    "Démo · Données simulées"
  ],
  "AS-001 · Educational Model": [
    "AS-001 · Modelo educativo",
    "AS-001 · Modèle pédagogique"
  ],
  "All aircraft data is simulated. Not for operational use.": [
    "Todos los datos son simulados. No apto para uso operativo.",
    "Toutes les données sont simulées. Ne pas utiliser en exploitation."
  ],
  "System status, flight phase and key telemetry at a glance.": [
    "Estado de los sistemas, fase de vuelo y telemetría principal de un vistazo.",
    "État des systèmes, phase de vol et télémétrie principale en un coup d'œil."
  ],
  "Start": [
    "Iniciar",
    "Démarrer"
  ],
  "Pause": [
    "Pausar",
    "Pause"
  ],
  "Reset": [
    "Reiniciar",
    "Réinitialiser"
  ],
  "Configure Scenario": [
    "Configurar escenario",
    "Configurer un scénario"
  ],
  "Normal Operation": [
    "Funcionamiento normal",
    "Fonctionnement normal"
  ],
  "Fault Detected": [
    "Fallo detectado",
    "Panne détectée"
  ],
  "Flight phase": [
    "Fase de vuelo",
    "Phase de vol"
  ],
  "Flight time": [
    "Tiempo de vuelo",
    "Temps de vol"
  ],
  "Altitude": [
    "Altitud",
    "Altitude"
  ],
  "Airspeed (IAS)": [
    "Velocidad indicada (IAS)",
    "Vitesse indiquée (IAS)"
  ],
  "Vertical Speed": [
    "Velocidad vertical",
    "Vitesse verticale"
  ],
  "Heading": [
    "Rumbo",
    "Cap"
  ],
  "N1 (Engine)": [
    "N1 (motor)",
    "N1 (moteur)"
  ],
  "EGT (Engine)": [
    "EGT (motor)",
    "EGT (moteur)"
  ],
  "Aircraft": [
    "Aeronave",
    "Aéronef"
  ],
  "AS-001 (Sim.)": [
    "AS-001 (sim.)",
    "AS-001 (sim.)"
  ],
  "Aircraft Systems": [
    "Sistemas de la aeronave",
    "Systèmes de l'aéronef"
  ],
  "(Simplified)": [
    "(Simplificado)",
    "(Simplifié)"
  ],
  "Key Telemetry": [
    "Telemetría principal",
    "Télémétrie principale"
  ],
  "Flight Profile": [
    "Perfil de vuelo",
    "Profil de vol"
  ],
  "● Altitude · ft": [
    "● Altitud · ft",
    "● Altitude · ft"
  ],
  "Simulated readings": [
    "Lecturas simuladas",
    "Mesures simulées"
  ],
  "Active Alerts": [
    "Alertas activas",
    "Alertes actives"
  ],
  "No active faults": [
    "Sin averías activas",
    "Aucune panne active"
  ],
  "All monitored parameters are within simulated normal conditions.": [
    "Todos los parámetros monitorizados están dentro de las condiciones normales simuladas.",
    "Tous les paramètres surveillés sont dans la plage normale simulée."
  ],
  "Recent Events": [
    "Eventos recientes",
    "Événements récents"
  ],
  "View log": [
    "Ver registro",
    "Voir le journal"
  ],
  "Flight Phase": [
    "Fase de vuelo",
    "Phase de vol"
  ],
  "Control a simplified flight profile and inject predefined system faults.": [
    "Controla un perfil de vuelo simplificado e introduce averías predefinidas.",
    "Contrôlez un profil de vol simplifié et déclenchez des pannes prédéfinies."
  ],
  "Educational · Not a flight model": [
    "Educativo · No es un modelo de vuelo real",
    "Pédagogique · Pas un modèle de vol réel"
  ],
  "Flight phases advance automatically according to the simulated timeline. Select a phase to jump to its beginning.": [
    "Las fases avanzan automáticamente según la cronología simulada. Selecciona una fase para saltar a su inicio.",
    "Les phases avancent automatiquement selon la chronologie simulée. Sélectionnez une phase pour aller à son début."
  ],
  "Fictional flight profile. No real route or aircraft position is tracked.": [
    "Perfil ficticio. No se rastrean rutas ni posiciones reales de aeronaves.",
    "Profil fictif. Aucun itinéraire ni aucune position réelle d'aéronef n'est suivi."
  ],
  "Elapsed": [
    "Transcurrido",
    "Temps écoulé"
  ],
  "Phase": [
    "Fase",
    "Phase"
  ],
  "START": [
    "INICIO",
    "DÉBUT"
  ],
  "END": [
    "FIN",
    "FIN"
  ],
  "Start Simulation": [
    "Iniciar simulación",
    "Démarrer la simulation"
  ],
  "Pause Simulation": [
    "Pausar simulación",
    "Mettre en pause"
  ],
  "Inject Fault": [
    "Introducir avería",
    "Déclencher une panne"
  ],
  "Simulation speed": [
    "Velocidad de simulación",
    "Vitesse de simulation"
  ],
  "Simulation Timeline": [
    "Cronología de la simulación",
    "Chronologie de la simulation"
  ],
  "Artificial flight parameters, engine indications and system states.": [
    "Parámetros de vuelo, indicaciones de motor y estados de sistemas artificiales.",
    "Paramètres de vol, indications moteur et états des systèmes artificiels."
  ],
  "Engine N1": [
    "N1 del motor",
    "N1 du moteur"
  ],
  "Engine EGT": [
    "EGT del motor",
    "EGT du moteur"
  ],
  "DC Bus Voltage": [
    "Tensión del bus CC",
    "Tension du bus CC"
  ],
  "Communication & Electrical Status": [
    "Estado de comunicaciones y electricidad",
    "État des communications et de l'électricité"
  ],
  "VHF Communication": [
    "Comunicación VHF",
    "Communication VHF"
  ],
  "DC Bus": [
    "Bus CC",
    "Bus CC"
  ],
  "Active faults": [
    "Averías activas",
    "Pannes actives"
  ],
  "ONLINE": [
    "EN LÍNEA",
    "EN LIGNE"
  ],
  "OFFLINE": [
    "DESCONECTADO",
    "HORS LIGNE"
  ],
  "Load predefined educational failures and explore simplified system effects.": [
    "Activa averías educativas predefinidas y observa sus efectos simplificados en los sistemas.",
    "Déclenchez des pannes pédagogiques prédéfinies et explorez leurs effets simplifiés."
  ],
  "Clear All Faults": [
    "Eliminar todas las averías",
    "Effacer toutes les pannes"
  ],
  "Scenario Active · View": [
    "Escenario activo · Ver",
    "Scénario actif · Voir"
  ],
  "Load Scenario": [
    "Cargar escenario",
    "Charger le scénario"
  ],
  "HIGH": [
    "ALTA",
    "ÉLEVÉE"
  ],
  "MEDIUM": [
    "MEDIA",
    "MOYENNE"
  ],
  "LOW": [
    "BAJA",
    "FAIBLE"
  ],
  "SIMULATED": [
    "SIMULADO",
    "SIMULÉ"
  ],
  "System Overview": [
    "Vista general del sistema",
    "Vue d'ensemble du système"
  ],
  "Simplified functional diagram. Not a manufacturer wiring diagram.": [
    "Diagrama funcional simplificado. No es un esquema eléctrico del fabricante.",
    "Schéma fonctionnel simplifié, pas un schéma de câblage constructeur."
  ],
  "Possible Causes — Predefined Text": [
    "Posibles causas — Texto predefinido",
    "Causes possibles — Texte prédéfini"
  ],
  "Affected Systems": [
    "Sistemas afectados",
    "Systèmes concernés"
  ],
  "Scenario Timeline": [
    "Cronología del escenario",
    "Chronologie du scénario"
  ],
  "Systems nominal": [
    "Sistemas normales",
    "Systèmes normaux"
  ],
  "Simulated fault injected": [
    "Avería simulada introducida",
    "Panne simulée déclenchée"
  ],
  "Detection rule triggered": [
    "Regla de detección activada",
    "Règle de détection déclenchée"
  ],
  "Predefined analysis displayed": [
    "Análisis predefinido mostrado",
    "Analyse prédéfinie affichée"
  ],
  "Educational scenario only. No certified troubleshooting, maintenance instructions or AI-generated diagnosis.": [
    "Escenario exclusivamente educativo. No incluye diagnóstico certificado, instrucciones de mantenimiento ni IA generativa.",
    "Scénario pédagogique uniquement. Aucun diagnostic certifié, aucune instruction de maintenance ni IA générative."
  ],
  "General ATA chapter references and original, simplified educational diagrams.": [
    "Referencias generales de capítulos ATA y diagramas educativos originales y simplificados.",
    "Références générales aux chapitres ATA et schémas pédagogiques originaux et simplifiés."
  ],
  "ATA CHAPTER": [
    "CAPÍTULO ATA",
    "CHAPITRE ATA"
  ],
  "Scenario available": [
    "Escenario disponible",
    "Scénario disponible"
  ],
  "Overview only": [
    "Solo descripción",
    "Présentation uniquement"
  ],
  "Explore": [
    "Explorar",
    "Explorer"
  ],
  "This system is included in the simulated aircraft overview; detailed fault modeling is outside the current scope.": [
    "Este sistema figura en la vista general de la aeronave ficticia; su modelado detallado queda fuera del alcance actual.",
    "Ce système apparaît dans la vue générale de l'aéronef fictif ; sa modélisation détaillée dépasse la portée actuelle."
  ],
  "ATA chapters are general classification references. All diagrams and descriptions are independently created simplifications; no manufacturer manuals are reproduced.": [
    "Los capítulos ATA son referencias generales de clasificación. Los diagramas y las descripciones son simplificaciones propias; no se reproducen manuales de fabricantes.",
    "Les chapitres ATA servent de références générales. Les schémas et descriptions sont des simplifications originales ; aucun manuel constructeur n'est reproduit."
  ],
  "Session history of simulated flight phases, fault injections and system events.": [
    "Historial de fases, averías y eventos de sistemas de la sesión simulada.",
    "Historique des phases, des pannes et des événements de la session simulée."
  ],
  "All events": [
    "Todos los eventos",
    "Tous les événements"
  ],
  "Info": [
    "Información",
    "Information"
  ],
  "Warning": [
    "Advertencia",
    "Avertissement"
  ],
  "Fault": [
    "Avería",
    "Panne"
  ],
  "Export JSON": [
    "Exportar JSON",
    "Exporter en JSON"
  ],
  "Events exist only in the current browser session. In full-stack mode, the local backend has separate SQLite persistence.": [
    "Los eventos solo existen durante la sesión del navegador. El backend local cuenta con su propio almacenamiento SQLite independiente.",
    "Les événements ne durent que pendant la session du navigateur. Le backend local dispose de son propre stockage SQLite indépendant."
  ],
  "Time": [
    "Hora",
    "Temps"
  ],
  "Type": [
    "Tipo",
    "Type"
  ],
  "ATA": [
    "ATA",
    "ATA"
  ],
  "Event": [
    "Evento",
    "Événement"
  ],
  "No events match the selected filter.": [
    "No hay eventos para el filtro seleccionado.",
    "Aucun événement ne correspond au filtre choisi."
  ],
  "PROJECT DOCUMENTATION": [
    "DOCUMENTACIÓN DEL PROYECTO",
    "DOCUMENTATION DU PROJET"
  ],
  "An educational software engineering project that simulates flight phases, monitors artificial telemetry, detects predefined faults and explains possible causes using simplified ATA-based references.": [
    "Proyecto educativo de ingeniería de software que simula fases de vuelo, monitoriza telemetría artificial, detecta averías predefinidas y explica posibles causas mediante referencias ATA simplificadas.",
    "Projet pédagogique d'ingénierie logicielle simulant les phases de vol, surveillant une télémétrie artificielle, détectant des pannes prédéfinies et expliquant des causes possibles à l'aide de références ATA simplifiées."
  ],
  "Educational Simulation": [
    "Simulación educativa",
    "Simulation pédagogique"
  ],
  "AS-001 · Fictional Aircraft": [
    "AS-001 · Aeronave ficticia",
    "AS-001 · Aéronef fictif"
  ],
  "Version 1.2.0": [
    "Versión 1.2.0",
    "Version 1.2.0"
  ],
  "Project Motivation": [
    "Motivación del proyecto",
    "Motivation du projet"
  ],
  "Connect knowledge of aircraft systems and avionics with practical software engineering. The goal is to demonstrate system modeling, data handling, API design and technical communication in one accessible project.": [
    "Conectar conocimientos de sistemas aeronáuticos y aviónica con ingeniería de software práctica. El objetivo es demostrar modelado de sistemas, gestión de datos, diseño de APIs y comunicación técnica en un único proyecto accesible.",
    "Relier les connaissances en systèmes aéronautiques et avionique à l'ingénierie logicielle pratique. L'objectif est de démontrer la modélisation des systèmes, la gestion de données, la conception d'API et la communication technique dans un projet accessible."
  ],
  "Objectives": [
    "Objetivos",
    "Objectifs"
  ],
  "Simulate flight phases and synthetic sensor readings.": [
    "Simular fases de vuelo y lecturas artificiales de sensores.",
    "Simuler les phases de vol et les mesures synthétiques des capteurs."
  ],
  "Monitor key flight and engine parameters.": [
    "Monitorizar los parámetros principales de vuelo y motor.",
    "Surveiller les principaux paramètres de vol et du moteur."
  ],
  "Inject predefined failures and display their effects.": [
    "Introducir averías predefinidas y mostrar sus efectos.",
    "Déclencher des pannes prédéfinies et afficher leurs effets."
  ],
  "Explain fault scenarios using general ATA references.": [
    "Explicar escenarios de averías mediante referencias ATA generales.",
    "Expliquer les scénarios de panne à l'aide de références ATA générales."
  ],
  "How the Simulation Works": [
    "Cómo funciona la simulación",
    "Fonctionnement de la simulation"
  ],
  "Choose a flight phase or auto-advance.": [
    "Selecciona una fase de vuelo o permite el avance automático.",
    "Sélectionnez une phase de vol ou laissez progresser automatiquement."
  ],
  "Generate artificial telemetry using phase-specific rules.": [
    "Genera telemetría artificial con reglas específicas para cada fase.",
    "Générez une télémétrie artificielle selon des règles propres à chaque phase."
  ],
  "Inject a fault to alter the simulated system state.": [
    "Introduce una avería para alterar el estado simulado del sistema.",
    "Déclenchez une panne pour modifier l'état du système simulé."
  ],
  "Review predetermined causes, diagrams and event history.": [
    "Consulta causas predefinidas, diagramas e historial de eventos.",
    "Consultez les causes prédéfinies, les schémas et l'historique des événements."
  ],
  "Technology Stack": [
    "Tecnologías utilizadas",
    "Technologies utilisées"
  ],
  "React runs the standalone browser demo. FastAPI, SQLite and Docker power the optional local full-stack environment.": [
    "React ejecuta la demo autónoma en el navegador. FastAPI, SQLite y Docker permiten ejecutar opcionalmente el sistema completo en local.",
    "React exécute la démo autonome dans le navigateur. FastAPI, SQLite et Docker permettent d'exécuter le système complet en local."
  ],
  "Architecture & Deployment": [
    "Arquitectura y despliegue",
    "Architecture et déploiement"
  ],
  "Browser demo · GitHub Pages": [
    "Demo en navegador · GitHub Pages",
    "Démo navigateur · GitHub Pages"
  ],
  "Optional local backend": [
    "Backend local opcional",
    "Backend local facultatif"
  ],
  "Local event storage": [
    "Almacenamiento local de eventos",
    "Stockage local des événements"
  ],
  "GitHub Pages runs without a backend. The local full-stack setup can connect the dashboard to FastAPI for telemetry and SQLite persistence through Settings. The browser demo does not require that API.": [
    "GitHub Pages funciona sin backend. La instalación local permite conectar el dashboard con FastAPI para obtener telemetría y almacenar eventos en SQLite desde Configuración. La demo web no necesita esa API.",
    "GitHub Pages fonctionne sans backend. L'installation locale permet de connecter le tableau de bord à FastAPI pour la télémétrie et le stockage des événements dans SQLite depuis Paramètres. La démo web n'a pas besoin de cette API."
  ],
  "Simulation vs. Real Systems": [
    "Simulación frente a sistemas reales",
    "Simulation et systèmes réels"
  ],
  "Flight data": [
    "Datos de vuelo",
    "Données de vol"
  ],
  "Synthetic, generated locally": [
    "Sintéticos, generados localmente",
    "Synthétiques, générés localement"
  ],
  "Fault scenarios": [
    "Escenarios de averías",
    "Scénarios de panne"
  ],
  "Predefined educational cases": [
    "Casos educativos predefinidos",
    "Cas pédagogiques prédéfinis"
  ],
  "ATA references": [
    "Referencias ATA",
    "Références ATA"
  ],
  "General chapter categories": [
    "Categorías generales de capítulos",
    "Catégories générales de chapitres"
  ],
  "Maintenance analysis": [
    "Análisis de mantenimiento",
    "Analyse de maintenance"
  ],
  "Prewritten explanatory text": [
    "Texto explicativo predefinido",
    "Texte explicatif prédéfini"
  ],
  "Diagrams": [
    "Diagramas",
    "Schémas"
  ],
  "Original simplified schematics": [
    "Esquemas simplificados originales",
    "Schémas simplifiés originaux"
  ],
  "Scope & Limitations": [
    "Alcance y limitaciones",
    "Portée et limites"
  ],
  "No real aircraft data or manufacturer-specific behavior.": [
    "Sin datos reales de aeronaves ni comportamientos específicos de fabricantes.",
    "Aucune donnée aéronautique réelle ni aucun comportement spécifique à un constructeur."
  ],
  "No certified diagnostic procedures or proprietary manuals.": [
    "Sin procedimientos de diagnóstico certificados ni manuales propietarios.",
    "Aucune procédure de diagnostic certifiée ni aucun manuel propriétaire."
  ],
  "No generative AI or automatic maintenance decisions.": [
    "Sin IA generativa ni decisiones automáticas de mantenimiento.",
    "Aucune IA générative ni aucune décision automatique de maintenance."
  ],
  "Values and thresholds are illustrative, not operational limits.": [
    "Los valores y umbrales son ilustrativos, no límites operativos.",
    "Les valeurs et seuils sont illustratifs, pas des limites opérationnelles."
  ],
  "Not suitable for flight operations or maintenance release.": [
    "No apto para operaciones de vuelo ni aprobación de mantenimiento.",
    "Inadapté aux opérations de vol et à la remise en service."
  ],
  "Testing & Validation": [
    "Pruebas y validación",
    "Tests et validation"
  ],
  "Backend unit tests for simulation rules and fault effects.": [
    "Pruebas unitarias del backend para reglas de simulación y efectos de averías.",
    "Tests unitaires du backend pour les règles de simulation et les effets des pannes."
  ],
  "REST endpoint smoke tests using FastAPI TestClient.": [
    "Pruebas básicas de endpoints REST con FastAPI TestClient.",
    "Tests de vérification des endpoints REST avec FastAPI TestClient."
  ],
  "Frontend TypeScript checks and production build.": [
    "Comprobaciones TypeScript y compilación de producción del frontend.",
    "Vérifications TypeScript et compilation de production du frontend."
  ],
  "Manual review of phase changes and scenario controls.": [
    "Revisión manual de cambios de fase y controles de escenarios.",
    "Vérification manuelle des changements de phase et des commandes de scénario."
  ],
  "Tests verify software behavior within the educational model, not aircraft-system fidelity.": [
    "Las pruebas verifican el comportamiento del software educativo, no su fidelidad a sistemas aeronáuticos reales.",
    "Les tests vérifient le logiciel pédagogique, pas sa fidélité aux systèmes aéronautiques réels."
  ],
  "Future Roadmap — Not Implemented": [
    "Evolución futura — No implementado",
    "Évolutions futures — Non implémentées"
  ],
  "Expanded scenarios and system dependencies": [
    "Más escenarios y dependencias entre sistemas",
    "Scénarios et dépendances entre systèmes élargis"
  ],
  "Improved event replay and export": [
    "Mejor reproducción y exportación de eventos",
    "Relecture et exportation d'événements améliorées"
  ],
  "More detailed simulated maintenance reports": [
    "Informes de mantenimiento simulado más detallados",
    "Rapports de maintenance simulée plus détaillés"
  ],
  "Optional local AI/RAG with legally usable documents": [
    "IA/RAG local opcional con documentación de uso autorizado",
    "IA/RAG locale facultative avec documents utilisables légalement"
  ],
  "Optional external aviation datasets and integrations": [
    "Datos aeronáuticos externos e integraciones opcionales",
    "Jeux de données aéronautiques externes et intégrations facultatives"
  ],
  "Simulation preferences and optional local backend connectivity.": [
    "Preferencias de simulación y conexión opcional al backend local.",
    "Préférences de simulation et connexion facultative au backend local."
  ],
  "Simulation": [
    "Simulación",
    "Simulation"
  ],
  "Reset Session": [
    "Reiniciar sesión",
    "Réinitialiser la session"
  ],
  "Local API Connectivity": [
    "Conexión a la API local",
    "Connexion à l'API locale"
  ],
  "The public demo works independently in the browser. When the local FastAPI server is running, you can switch to backend-generated telemetry and SQLite persistence.": [
    "La demo pública funciona directamente en el navegador. Cuando FastAPI esté ejecutándose en local, puedes utilizar telemetría generada por el backend y persistencia SQLite.",
    "La démo publique fonctionne directement dans le navigateur. Quand FastAPI fonctionne en local, vous pouvez utiliser la télémétrie générée côté serveur et la persistance SQLite."
  ],
  "FastAPI base URL": [
    "URL base de FastAPI",
    "URL de base FastAPI"
  ],
  "Use local backend for telemetry": [
    "Usar backend local para telemetría",
    "Utiliser le backend local pour la télémétrie"
  ],
  "Test /health": [
    "Probar /health",
    "Tester /health"
  ],
  "All displayed data and fault hypotheses are simulated. No real maintenance recommendations are provided.": [
    "Todos los datos y las hipótesis de averías son simulados. No se ofrecen recomendaciones de mantenimiento reales.",
    "Toutes les données et hypothèses de panne sont simulées. Aucune recommandation de maintenance réelle n'est fournie."
  ],
  "AS-001 · Educational simulation · No real aircraft data": [
    "AS-001 · Simulación educativa · Sin datos reales",
    "AS-001 · Simulation pédagogique · Aucune donnée réelle"
  ],
  "Built with React, TypeScript & FastAPI · v1.2.0": [
    "Creado con React, TypeScript y FastAPI · v1.2.0",
    "Créé avec React, TypeScript et FastAPI · v1.2.0"
  ],
  "Not connected": [
    "No conectado",
    "Non connecté"
  ],
  "Connected to local FastAPI": [
    "Conectado a FastAPI local",
    "Connecté à FastAPI local"
  ],
  "API unavailable — switched to browser demo": [
    "API no disponible — Cambiado a la demo del navegador",
    "API indisponible — Retour à la démo navigateur"
  ],
  "Checking...": [
    "Comprobando...",
    "Vérification..."
  ],
  "Unavailable — demo remains functional": [
    "No disponible — La demo sigue funcionando",
    "Indisponible — La démo reste fonctionnelle"
  ],
  "Simulation initialized — educational aircraft AS-001": [
    "Simulación inicializada — Aeronave educativa AS-001",
    "Simulation initialisée — Aéronef pédagogique AS-001"
  ],
  "Simulation started": [
    "Simulación iniciada",
    "Simulation démarrée"
  ],
  "Simulation reset": [
    "Simulación reiniciada",
    "Simulation réinitialisée"
  ],
  "All simulated faults cleared": [
    "Se han eliminado todas las averías simuladas",
    "Toutes les pannes simulées ont été effacées"
  ],
  "Flight completed — aircraft stopped on runway": [
    "Vuelo completado — Aeronave detenida en pista",
    "Vol terminé — Aéronef arrêté sur la piste"
  ],
  "Flight phase changed to": [
    "Fase de vuelo cambiada a",
    "Phase de vol passée à"
  ],
  "injected (ATA": [
    "introducida (ATA",
    "déclenchée (ATA"
  ],
  "Electrical Power": [
    "Alimentación eléctrica",
    "Alimentation électrique"
  ],
  "Communications": [
    "Comunicaciones",
    "Communications"
  ],
  "Navigation": [
    "Navegación",
    "Navigation"
  ],
  "Power Plant": [
    "Propulsión",
    "Groupe motopropulseur"
  ],
  "Hydraulic Power": [
    "Energía hidráulica",
    "Énergie hydraulique"
  ],
  "Fuel": [
    "Combustible",
    "Carburant"
  ],
  "Landing Gear": [
    "Tren de aterrizaje",
    "Train d'atterrissage"
  ],
  "Air Conditioning": [
    "Climatización",
    "Conditionnement d'air"
  ],
  "Electrical Power Loss": [
    "Pérdida de alimentación eléctrica",
    "Perte d'alimentation électrique"
  ],
  "VHF Communication Failure": [
    "Fallo de comunicación VHF",
    "Panne de communication VHF"
  ],
  "Engine EGT Anomaly": [
    "Anomalía de EGT del motor",
    "Anomalie EGT du moteur"
  ],
  "Hydraulic Pressure Low": [
    "Baja presión hidráulica",
    "Pression hydraulique faible"
  ],
  "Landing Gear Indication Fault": [
    "Fallo de indicación del tren de aterrizaje",
    "Défaut d'indication du train d'atterrissage"
  ],
  "Fuel Tank Imbalance": [
    "Desequilibrio de combustible",
    "Déséquilibre de carburant"
  ],
  "A simulated DC bus loses electrical power, affecting dependent equipment.": [
    "Un bus de CC simulado pierde alimentación y afecta a los equipos conectados.",
    "Un bus CC simulé perd son alimentation, ce qui affecte les équipements dépendants."
  ],
  "A simulated VHF transceiver becomes unavailable.": [
    "Un transceptor VHF simulado deja de estar disponible.",
    "Un émetteur-récepteur VHF simulé devient indisponible."
  ],
  "Engine exhaust gas temperature rises beyond an educational threshold.": [
    "La temperatura de los gases de escape del motor supera un umbral educativo.",
    "La température des gaz d'échappement du moteur dépasse un seuil pédagogique."
  ],
  "Simulated hydraulic pressure drops below the model threshold.": [
    "La presión hidráulica simulada cae por debajo del umbral del modelo.",
    "La pression hydraulique simulée passe sous le seuil du modèle."
  ],
  "Simulated gear-position signals disagree.": [
    "Las señales simuladas de posición del tren no coinciden.",
    "Les signaux simulés de position du train sont incohérents."
  ],
  "Simulated left and right tank quantities diverge.": [
    "Las cantidades simuladas de los depósitos izquierdo y derecho divergen.",
    "Les quantités simulées des réservoirs gauche et droit divergent."
  ],
  "Simulated generator or distribution fault": [
    "Fallo simulado del generador o de la distribución",
    "Défaut simulé de générateur ou de distribution"
  ],
  "Simulated contactor or protective device issue": [
    "Problema simulado de contactor o dispositivo de protección",
    "Problème simulé de contacteur ou de dispositif de protection"
  ],
  "Simulated wiring discontinuity": [
    "Discontinuidad simulada en el cableado",
    "Discontinuité simulée du câblage"
  ],
  "Simulated electrical supply interruption": [
    "Interrupción simulada del suministro eléctrico",
    "Interruption simulée de l'alimentation électrique"
  ],
  "Simulated transceiver malfunction": [
    "Avería simulada del transceptor",
    "Dysfonctionnement simulé de l'émetteur-récepteur"
  ],
  "Simulated antenna or connection fault": [
    "Fallo simulado de antena o conexión",
    "Défaut simulé d'antenne ou de connexion"
  ],
  "Simulated engine operating anomaly": [
    "Anomalía simulada de funcionamiento del motor",
    "Anomalie simulée de fonctionnement du moteur"
  ],
  "Simulated temperature sensing fault": [
    "Fallo simulado del sensor de temperatura",
    "Défaut simulé du capteur de température"
  ],
  "Simulated performance degradation": [
    "Degradación simulada del rendimiento",
    "Dégradation simulée des performances"
  ],
  "Simulated pump degradation": [
    "Degradación simulada de la bomba",
    "Dégradation simulée de la pompe"
  ],
  "Simulated fluid loss": [
    "Pérdida simulada de fluido",
    "Perte simulée de fluide"
  ],
  "Simulated pressure sensor issue": [
    "Problema simulado del sensor de presión",
    "Problème simulé du capteur de pression"
  ],
  "Simulated position sensor fault": [
    "Fallo simulado del sensor de posición",
    "Défaut simulé du capteur de position"
  ],
  "Simulated wiring fault": [
    "Fallo simulado del cableado",
    "Défaut simulé de câblage"
  ],
  "Simulated indication logic issue": [
    "Problema simulado de lógica de indicación",
    "Problème simulé de logique d'indication"
  ],
  "Simulated transfer imbalance": [
    "Desequilibrio simulado de transferencia",
    "Déséquilibre simulé de transfert"
  ],
  "Simulated quantity sensor fault": [
    "Fallo simulado del sensor de cantidad",
    "Défaut simulé du capteur de quantité"
  ],
  "Simulated fuel distribution issue": [
    "Problema simulado de distribución de combustible",
    "Problème simulé de distribution de carburant"
  ],
  "Power Source": [
    "Fuente de alimentación",
    "Source d'alimentation"
  ],
  "VHF Radio": [
    "Radio VHF",
    "Radio VHF"
  ],
  "Electrical Supply": [
    "Suministro eléctrico",
    "Alimentation électrique"
  ],
  "VHF Transceiver": [
    "Transceptor VHF",
    "Émetteur-récepteur VHF"
  ],
  "Antenna": [
    "Antena",
    "Antenne"
  ],
  "Engine Core": [
    "Núcleo del motor",
    "Cœur du moteur"
  ],
  "EGT Sensor": [
    "Sensor EGT",
    "Capteur EGT"
  ],
  "Monitoring": [
    "Monitorización",
    "Surveillance"
  ],
  "Hydraulic Pump": [
    "Bomba hidráulica",
    "Pompe hydraulique"
  ],
  "Pressure Line": [
    "Línea de presión",
    "Ligne de pression"
  ],
  "Consumer": [
    "Consumidor",
    "Récepteur"
  ],
  "Gear Position Sensor": [
    "Sensor de posición del tren",
    "Capteur de position du train"
  ],
  "Signal Interface": [
    "Interfaz de señales",
    "Interface de signal"
  ],
  "Display": [
    "Pantalla",
    "Affichage"
  ],
  "Left Tank": [
    "Depósito izquierdo",
    "Réservoir gauche"
  ],
  "Fuel Management": [
    "Gestión de combustible",
    "Gestion du carburant"
  ],
  "Right Tank": [
    "Depósito derecho",
    "Réservoir droit"
  ],
  "DC distribution": [
    "Distribución de CC",
    "Distribution CC"
  ],
  "VHF communication": [
    "Comunicación VHF",
    "Communication VHF"
  ],
  "Voice link": [
    "Enlace de voz",
    "Liaison vocale"
  ],
  "Engine indication": [
    "Indicación del motor",
    "Indication moteur"
  ],
  "Engine monitoring": [
    "Monitorización del motor",
    "Surveillance du moteur"
  ],
  "Hydraulic indication": [
    "Indicación hidráulica",
    "Indication hydraulique"
  ],
  "Selected consumers": [
    "Consumidores seleccionados",
    "Récepteurs sélectionnés"
  ],
  "Gear indication": [
    "Indicación del tren",
    "Indication du train"
  ],
  "Fuel indication": [
    "Indicación de combustible",
    "Indication carburant"
  ],
  "Fuel balance": [
    "Balance de combustible",
    "Équilibrage du carburant"
  ],
  "Understanding the Fault": [
    "Entender la avería",
    "Comprendre la panne"
  ],
  "Modeled telemetry effect": [
    "Efecto modelado en telemetría",
    "Effet modélisé sur la télémétrie"
  ],
  "Visual-only scenario": [
    "Escenario solo visual",
    "Scénario uniquement visuel"
  ],
  "What changes in the simulator?": [
    "¿Qué cambia en el simulador?",
    "Quels changements dans la simulation ?"
  ],
  "Why does this happen?": [
    "¿Por qué ocurre?",
    "Pourquoi cela se produit-il ?"
  ],
  "Parameter / component": [
    "Parámetro / componente",
    "Paramètre / composant"
  ],
  "Simulated effect": [
    "Efecto simulado",
    "Effet simulé"
  ],
  "Scenario explanation": [
    "Explicación del escenario",
    "Explication du scénario"
  ],
  "Simulation Logic & Fault Modeling": [
    "Lógica de simulación y modelado de averías",
    "Logique de simulation et modélisation des pannes"
  ],
  "The flight profile is deterministic: phase, altitude, airspeed, vertical speed, N1 and EGT follow simplified rules. Each active fault is applied after calculating the nominal reading.": [
    "El perfil de vuelo es determinista: fase, altitud, velocidad indicada, velocidad vertical, N1 y EGT siguen reglas simplificadas. Cada avería activa se aplica después de calcular la lectura normal.",
    "Le profil de vol est déterministe : phase, altitude, vitesse indiquée, vitesse verticale, N1 et EGT suivent des règles simplifiées. Chaque panne active est appliquée après le calcul de la mesure nominale."
  ],
  "Only electrical, VHF and engine scenarios currently modify telemetry. Hydraulic, landing gear and fuel scenarios are visual demonstrations and do not yet change sensor readings.": [
    "Solo los escenarios eléctrico, VHF y motor modifican actualmente la telemetría. Los de hidráulica, tren de aterrizaje y combustible son demostraciones visuales y aún no alteran las lecturas de sensores.",
    "Seuls les scénarios électrique, VHF et moteur modifient actuellement la télémétrie. Les scénarios hydraulique, train d'atterrissage et carburant sont visuels et ne modifient pas encore les mesures."
  ],
  "This example models loss of a simulated 28 V DC bus. The bus reading becomes 0 V, and the modeled VHF equipment loses its online status. Flight motion is unchanged.": [
    "El ejemplo representa la pérdida de un bus de CC simulado de 28 V. Su lectura pasa a 0 V y el equipo VHF modelado se desconecta. El movimiento del avión no cambia.",
    "Cet exemple représente la perte d'un bus CC simulé de 28 V. Sa mesure passe à 0 V et l'équipement VHF modélisé devient indisponible. Le mouvement de l'avion reste inchangé."
  ],
  "The VHF radio is marked offline without changing the DC bus, flight path or engine indications.": [
    "La radio VHF aparece desconectada sin cambiar el bus CC, la trayectoria ni las indicaciones del motor.",
    "La radio VHF est marquée hors ligne sans modifier le bus CC, la trajectoire ni les indications du moteur."
  ],
  "The simulator adds 170 °C to its simplified EGT formula. It does not change N1, thrust or the aircraft trajectory. This is an educational effect, not an engine thermodynamic model.": [
    "El simulador suma 170 °C a su fórmula simplificada de EGT. No cambia N1, empuje ni trayectoria. Es un efecto educativo, no un modelo termodinámico del motor.",
    "Le simulateur ajoute 170 °C à sa formule simplifiée d'EGT. Il ne modifie ni N1, ni la poussée, ni la trajectoire. C'est un effet pédagogique, pas un modèle thermodynamique."
  ],
  "This scenario currently displays an alert, ATA information and a predefined diagram. Hydraulic pressure is not part of the current telemetry model.": [
    "Actualmente, este escenario muestra una alerta, información ATA y un diagrama predefinido. La presión hidráulica todavía no forma parte de la telemetría.",
    "Ce scénario affiche actuellement une alerte, une référence ATA et un schéma prédéfini. La pression hydraulique ne fait pas encore partie de la télémétrie."
  ],
  "This scenario currently displays an alert and predefined gear indication information. Gear position signals are not simulated numerically.": [
    "Actualmente, este escenario muestra una alerta e información predefinida del tren. No se simulan numéricamente sus señales de posición.",
    "Ce scénario affiche actuellement une alerte et des informations prédéfinies sur le train. Les signaux de position ne sont pas simulés numériquement."
  ],
  "This scenario currently displays an alert and a predefined fuel-system diagram. Left and right tank quantities are not yet simulated.": [
    "Actualmente, este escenario muestra una alerta y un diagrama del sistema de combustible. No se simulan aún las cantidades de los depósitos.",
    "Ce scénario affiche actuellement une alerte et un schéma prédéfini du circuit carburant. Les quantités des réservoirs ne sont pas encore simulées."
  ],
  "DC bus voltage": [
    "Tensión del bus CC",
    "Tension du bus CC"
  ],
  "VHF status": [
    "Estado VHF",
    "État VHF"
  ],
  "Flight trajectory": [
    "Trayectoria de vuelo",
    "Trajectoire de vol"
  ],
  "EGT reading": [
    "Lectura EGT",
    "Mesure EGT"
  ],
  "System alert": [
    "Alerta del sistema",
    "Alerte du système"
  ],
  "Diagram & ATA": [
    "Diagrama y ATA",
    "Schéma et ATA"
  ],
  "Hydraulic pressure sensor": [
    "Sensor de presión hidráulica",
    "Capteur de pression hydraulique"
  ],
  "Gear-position sensor": [
    "Sensor de posición del tren",
    "Capteur de position du train"
  ],
  "Left / right fuel quantities": [
    "Cantidades de combustible izq./der.",
    "Quantités de carburant gauche/droite"
  ],
  "0 V (nominal: 28 V)": [
    "0 V (normal: 28 V)",
    "0 V (normal : 28 V)"
  ],
  "Offline": [
    "Desconectado",
    "Hors ligne"
  ],
  "Unchanged": [
    "Sin cambios",
    "Inchangé"
  ],
  "+170 °C relative to normal": [
    "+170 °C respecto al valor normal",
    "+170 °C par rapport à la normale"
  ],
  "Recorded in session": [
    "Registrada en la sesión",
    "Enregistrée dans la session"
  ],
  "Predefined educational content": [
    "Contenido educativo predefinido",
    "Contenu pédagogique prédéfini"
  ],
  "Not modeled in v1.2": [
    "No modelado en v1.2",
    "Non modélisé en v1.2"
  ],
  "Only preflight through landed is modeled; no manufacturer-specific avionics or approved maintenance procedures are represented.": [
    "Solo se modelan las fases desde prevuelo hasta en tierra; no se representan sistemas específicos del fabricante ni procedimientos de mantenimiento aprobados.",
    "Seules les phases du prévol à l'arrêt au sol sont modélisées ; aucun système avionique propre au constructeur ni aucune procédure de maintenance approuvée n'est représenté."
  ],
  "Language": [
    "Idioma",
    "Langue"
  ],
  "English": [
    "Inglés",
    "Anglais"
  ],
  "Spanish": [
    "Español",
    "Espagnol"
  ],
  "French": [
    "Francés",
    "Français"
  ],
  "Simulated telemetry line chart": [
    "Gráfico de líneas de telemetría simulada",
    "Graphique de télémétrie simulée"
  ],
  "Open menu": [
    "Abrir menú",
    "Ouvrir le menu"
  ],
  "Monitoring & Fault Diagnosis": [
    "Monitorización y diagnóstico de averías",
    "Surveillance et diagnostic des pannes"
  ],
  "Simplified stylized aircraft outline": [
    "Silueta estilizada y simplificada de una aeronave",
    "Silhouette stylisée et simplifiée d'un aéronef"
  ],
  "No events for this scenario yet. Select Load Scenario to record its activation.": [
    "Todavía no hay eventos para este escenario. Selecciona «Cargar escenario» para registrar su activación.",
    "Aucun événement pour ce scénario. Sélectionnez « Charger le scénario » pour enregistrer son déclenchement."
  ],
  "When the electrical scenario is active, the simulation sets DC bus voltage to zero and VHF availability to false. No other sensor values are changed by this fault.": [
    "Cuando el escenario eléctrico está activo, el simulador pone a cero la tensión del bus CC y marca la VHF como no disponible. Este fallo no modifica otros sensores.",
    "Quand le scénario électrique est actif, le simulateur met la tension du bus CC à zéro et la VHF hors ligne. Cette panne ne modifie aucun autre capteur."
  ],
  "When the VHF scenario is active, the simulation sets the VHF availability flag to false. Bus voltage stays unchanged unless the electrical fault is also active.": [
    "Cuando el escenario VHF está activo, el indicador de disponibilidad pasa a falso. La tensión del bus no cambia salvo que también esté activo el fallo eléctrico.",
    "Quand le scénario VHF est actif, l'indicateur de disponibilité passe à faux. La tension du bus ne change pas, sauf si la panne électrique est également active."
  ],
  "When the engine scenario is active, the EGT calculation adds 170 °C to the nominal value derived from N1. The N1 value itself stays unchanged.": [
    "Cuando el escenario de motor está activo, el cálculo de EGT suma 170 °C al valor normal derivado de N1. El propio valor N1 permanece igual.",
    "Quand le scénario moteur est actif, le calcul de l'EGT ajoute 170 °C à la valeur nominale dérivée de N1. La valeur N1 ne change pas."
  ],
  "The current simulator records this fault identifier and its explanation but has no hydraulic-pressure field, so no numerical sensor output changes.": [
    "El simulador registra la avería y su explicación, pero todavía no tiene una variable de presión hidráulica; por tanto, no cambia ninguna lectura numérica.",
    "Le simulateur enregistre la panne et son explication, mais ne possède pas encore de variable de pression hydraulique : aucune mesure numérique ne change."
  ],
  "The current simulator records this fault identifier and its explanation but has no gear-position sensor field, so no numerical sensor output changes.": [
    "El simulador registra la avería y su explicación, pero todavía no tiene sensores de posición del tren; por tanto, no cambia ninguna lectura numérica.",
    "Le simulateur enregistre la panne et son explication, mais ne possède pas encore de capteurs de position du train : aucune mesure numérique ne change."
  ],
  "The current simulator records this fault identifier and its explanation but has no tank-quantity sensor fields, so no numerical sensor output changes.": [
    "El simulador registra la avería y su explicación, pero todavía no tiene sensores de cantidad de combustible; por tanto, no cambia ninguna lectura numérica.",
    "Le simulateur enregistre la panne et son explication, mais ne possède pas encore de capteurs de quantité de carburant : aucune mesure numérique ne change."
  ]
};
export function translate(locale:Locale, text:string):string {
 if(locale==='en')return text;
 const row=translations[text];
 return row?row[locale==='es'?0:1]:text;
}
export function translatedEvent(locale:Locale, text:string):string {
 const changed=text.match(/^Flight phase changed to (.+)$/);
 if(changed)return `${translate(locale,'Flight phase changed to')} ${translate(locale,changed[1])}`;
 const injected=text.match(/^(.+) injected \(ATA (\d+)\)$/);
 if(injected)return `${translate(locale,injected[1])} ${translate(locale,'injected (ATA')} ${injected[2]})`;
 return translate(locale,text);
}
