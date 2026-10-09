/* Conteúdo do portfólio em 3 idiomas.
   Para editar um texto, altere a mesma chave em pt, en e es. */
window.I18N = {
  pt: {
    meta: {
      title: "Caroline Vieira — Business Designer | IA • Dados • Estratégia",
      description: "Portfólio de Caroline Vieira, Business & Service Designer. Pesquisa, dados e design para transformar problemas complexos em estratégias e resultados de negócio."
    },
    nav: { about: "Sobre", skills: "Habilidades", process: "Processo", projects: "Projetos", testimonials: "Reconhecimento", contact: "Contato", cv: "Acessar CV", menu: "Menu" },
    hero: {
      role1: "Business Designer",
      role2: "IA • Dados • Estratégia",
      tagline: "Uso pesquisa, dados e design para transformar <strong>problemas complexos em estratégias</strong> e resultados de negócio, potencializando decisões por meio da IA.",
      ctaProjects: "Ver projetos",
      ctaContact: "Vamos conversar",
      scroll: "Role para explorar",
      location: "Business & Service Designer"
    },
    clients: { title: "Empresas que confiam no meu trabalho" },
    about: {
      eyebrow: "Sobre mim",
      title: "Boas decisões nascem da <em>escuta genuína</em> e de evidências.",
      p1: "Sou movida pela curiosidade de entender pessoas antes de propor soluções. Como especialista em Business Design e consultora estratégica, combino pesquisa, dados e visão de negócio para transformar problemas complexos em jornadas e estratégias de alto impacto.",
      p2: "MBA em Big Data Aplicado ao Marketing (ESPM). Uno pesquisa aprofundada, análise de dados e storytelling para construir frameworks que reduzem riscos e geram resultados concretos, como o crescimento de até 60% em canais digitais que ajudei a estruturar.",
      badge: "MBA Big Data · ESPM"
    },
    impact: {
      eyebrow: "Impacto gerado",
      title: "Resultados que vão além da entrega.",
      items: [
        { to: 480, pre: "R$ ", suf: " mil", label: "Riscos financeiros identificados", client: "Pague Menos" },
        { to: 60, pre: "+", suf: "%", label: "Acima da meta nacional de vendas", client: "Novo Nordisk" },
        { to: 33, pre: "R$ ", suf: " mil", label: "Receita adicional gerada para a consultoria", client: "Novo Nordisk" },
        { to: 14, pre: "+", suf: " mil", label: "Avaliações de usuários analisadas", client: "Pague Menos" },
        { to: 270, pre: "+", suf: " mil", label: "Pedidos processados", client: "Ale Combustíveis" }
      ]
    },
    skills: {
      eyebrow: "Habilidades",
      title: "O que eu faço, <em>e por quê</em>.",
      lead: "Competências desenvolvidas em projetos de transformação digital, produtos e serviços para grandes organizações.",
      items: [
        { title: "Discovery & Research", statement: "Entendo problemas antes de propor soluções.", tags: ["Pesquisa qualitativa e quantitativa", "Entrevistas e Shadowing", "Benchmarking", "Síntese de Insights"] },
        { title: "Facilitação & Liderança", statement: "Alinho equipes para acelerar decisões.", tags: ["Storytelling Executivo", "Gestão de Stakeholders", "Workshops de cocriação e estratégia", "Business Agility"] },
        { title: "Dados & Inteligência Artificial", statement: "Uso dados e IA para ampliar a tomada de decisão.", tags: ["IA Generativa", "Analytics e BI", "Dashboards Executivos", "Automação de Processos"] },
        { title: "Product Design", statement: "Materializo estratégias em experiências digitais.", tags: ["Arquitetura da Informação", "User Flows", "Prototipação", "Design Systems"] },
        { title: "Service & Experience Design", statement: "Conecto pessoas, processos e experiências.", tags: ["CX e EX", "Jornadas End-to-End", "Service Blueprints", "Arquitetura de Ecossistemas"] },
        { title: "Business & Product Strategy", statement: "Transformo descobertas em decisões de negócio.", tags: ["Business Design", "Product Strategy", "MVPs e Roadmaps", "Priorização e De-risking"] }
      ]
    },
    process: {
      eyebrow: "Processo",
      title: "Da investigação <em>à entrega</em>.",
      lead: "Transformando dores complexas em soluções de produto eficientes, seguras e orientadas a dados.",
      roleEyebrow: "Meu papel",
      role: "Atuo na intersecção entre Business Design, Service Design (CX/EX) e Engenharia de Soluções. Meu papel é guiar frentes de imersão e discovery contínuo para mitigar riscos, alinhar stakeholders e desenhar arquiteturas operacionais que traduzam visões de negócio em resultados financeiros e eficiência real.",
      upstream: "Upstream",
      downstream: "Downstream",
      derisking: "De-risking",
      phases: [
        { name: "Imersão", desc: "Mergulho no contexto: pessoas, operação e dados.", tools: ["Pesquisa", "Shadowing", "Benchmarking", "Análise de Dados"] },
        { name: "Alinhamento", desc: "Convergência entre negócio, usuários e tecnologia.", tools: ["Lean Inception", "Priorização", "Análise de Viabilidade", "Definição de MVP"] },
        { name: "Entrega", desc: "Da estratégia ao plano executável.", tools: ["Roadmaps", "Implementação", "KPIs", "Storytelling Executivo"] },
        { name: "Métricas", desc: "Medir para aprender e escalar.", tools: ["OKRs", "KPIs", "Leading Indicators", "Métricas de Produto"] }
      ]
    },
    projects: {
      eyebrow: "Projetos estratégicos",
      title: "Cases <em>selecionados</em>.",
      labels: { challenge: "O desafio", contributed: "Como contribuí", how: "Como fiz", results: "Resultados", viewCase: "Ver case completo", note: "Dashboard interativo do case (em português)", videoNote: "" },
      items: [
        {
          id: "pague-menos", client: "Pague Menos", year: "Varejo farma",
          title: "Redesenhando a jornada digital do aplicativo",
          tags: ["Business Design", "Product Strategy", "Future Thinking"],
          challenge: "Como transformar o app na “estrela digital” da companhia, unindo a jornada transacional à saúde preventiva para impulsionar vendas e fidelização?",
          stats: [["+14 mil", "avaliações analisadas"], ["32", "entrevistas com stakeholders"], ["23", "marcas no benchmarking"]],
          contributed: ["Business Design", "Futurismo (Future Thinking)", "Análise orientada a dados", "Estratégia omnichannel", "Redução de riscos (De-risking)"],
          how: ["Análise de +14 mil avaliações de usuários e 32 entrevistas com stakeholders", "Benchmarking de 23 marcas (diretas e indiretas)", "Definição de 3 Horizontes de Inovação (H1, H2 e H3)", "Mapeamento de +70 funcionalidades prioritárias", "Workshop de cocriação com lideranças estratégicas"],
          results: ["Causa raiz técnica (falhas de API) de R$ 480 mil em perdas identificada e priorizada.", "Dashboard adotado como referência interna pela operação do cliente.", "Roadmap estratégico conectado a OKRs de conversão e retenção."]
        },
        {
          id: "novo-nordisk", client: "Novo Nordisk", year: "Saúde",
          title: "Acelerando o diagnóstico da Hemofilia Adquirida",
          tags: ["Business Discovery", "Service Design", "Dados"],
          challenge: "Como reduzir o tempo entre o diagnóstico e o tratamento de uma doença ultrarrara em escala nacional?",
          stats: [["66%", "acima da meta de identificação"], ["7", "entrevistas em profundidade"], ["+15", "fontes de desk research"]],
          contributed: ["Business Discovery", "Pesquisa qualitativa e quantitativa", "Service Design", "Estratégia comercial", "Governança de indicadores"],
          how: ["7 entrevistas em profundidade", "+15 fontes de desk research", "Service Blueprint (front e backstage)", "Roadmap de ondas de priorização", "Dashboards estratégicos e segmentação", "Criação de cenários de implementação interativos"],
          results: ["66% acima da meta na identificação de pacientes (5 diagnósticos vs. meta de 3).", "R$ 33 mil de receita adicional gerada para a consultoria através do projeto."]
        },
        {
          id: "jll", client: "JLL", year: "Real estate · LATAM",
          title: "Conectando estratégia, cultura e agilidade organizacional",
          tags: ["Business Agility Transformation", "Deep Design", "Consultoria Estratégica"],
          challenge: "Como engajar equipes em 10 países, conectando EX e CX para criar um ecossistema de agilidade que impulsione o crescimento exponencial?",
          stats: [["30", "entrevistas qualitativas"], ["10", "países da América Latina"], ["13", "pain-points mapeados"]],
          contributed: ["Consultoria estratégica", "Deep Design", "Business Agility Transformation", "Alinhamento de liderança executiva", "Governança de OKRs"],
          how: ["30 entrevistas qualitativas em 10 países da América Latina", "Aplicação do Business Agility Framework (18 perspectivas analisadas)", "Facilitação de workshops baseados no “The Startup Way”", "Mapeamento de 13 principais pain-points organizacionais", "Matriz de Benefício vs. Complexidade para as iniciativas"],
          results: ["Alinhamento total da liderança (Presidente e VPs) ao programa transformacional.", "Definição de quick wins estratégicos para reduzir a erosão de margem.", "Continuação do projeto em uma segunda etapa de implementação."]
        }
      ]
    },
    testimonials: {
      eyebrow: "Reconhecimento profissional",
      title: "Quem trabalhou comigo <em>diz</em>.",
      lead: "A percepção de quem acompanhou meu trabalho em projetos de transformação digital, estratégia e inovação.",
      prev: "Anterior", next: "Próximo",
      items: [
        { name: "Juliana Amorim", role: "Head de Design", company: "Performa IT", quote: "Uma profissional organizada, dedicada e sempre à frente na adoção de novas tecnologias como IA." },
        { name: "Marcy Reinert", role: "Tech Lead", company: "Performa IT", quote: "Entrega com visão estratégica, domínio técnico e espírito de liderança." },
        { name: "Rodrigo Cheida", role: "Business Strategist", company: "Compass UOL", quote: "A Carol é uma Service Designer nata, com visão estratégica de negócio e excelente capacidade de consolidar insights." },
        { name: "Flavia de Castro", role: "Delivery Manager", company: "BRQ", quote: "Comprometida, ética e excelente em pesquisas centradas no usuário, sempre buscando aprofundar o entendimento dos problemas." },
        { name: "Camila Falabella", role: "Business & Service Designer", company: "", quote: "Fiquei impressionada com a Carol: ela mapeia jornadas complexas a partir dos primeiros dados, ainda superficiais, e sabe exatamente como proceder e quais ferramentas e métodos usar conforme a necessidade de cada projeto." }
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos <em>conversar</em>?",
      lead: "Toda grande transformação começa com um problema bem compreendido. Se você busca estruturar produtos, serviços ou estratégias orientadas por evidências, será um prazer conhecer o seu desafio.",
      schedule: "Agendar uma conversa",
      email: "E-mail", linkedin: "LinkedIn", cv: "Currículo",
      copy: "Copiar e-mail", copied: "E-mail copiado!"
    },
    footer: { line: "Business & Service Designer · IA · Discovery Estratégico · Product Strategy · Transformação Digital", top: "Voltar ao topo" }
  },

  en: {
    meta: {
      title: "Caroline Vieira — Business Designer | AI • Data • Strategy",
      description: "Portfolio of Caroline Vieira, Business & Service Designer. Research, data and design to turn complex problems into strategies and business results."
    },
    nav: { about: "About", skills: "Skills", process: "Process", projects: "Projects", testimonials: "Recognition", contact: "Contact", cv: "View resume", menu: "Menu" },
    hero: {
      role1: "Business Designer",
      role2: "AI • Data • Strategy",
      tagline: "I use research, data and design to turn <strong>complex problems into strategies</strong> and business results, empowering decisions through AI.",
      ctaProjects: "See projects",
      ctaContact: "Let's talk",
      scroll: "Scroll to explore",
      location: "Business & Service Designer"
    },
    clients: { title: "Companies that trust my work" },
    about: {
      eyebrow: "About me",
      title: "Good decisions come from <em>genuine listening</em> and evidence.",
      p1: "I'm driven by curiosity to understand people before proposing solutions. As a Business Design specialist and strategy consultant, I combine research, data and business vision to turn complex problems into high-impact journeys and strategies.",
      p2: "MBA in Big Data Applied to Marketing (ESPM). I bring together in-depth research, data analysis and storytelling to build frameworks that reduce risk and deliver concrete results — like the up to 60% growth in digital channels I helped structure.",
      badge: "MBA Big Data · ESPM"
    },
    impact: {
      eyebrow: "Impact delivered",
      title: "Results that go beyond the deliverable.",
      items: [
        { to: 480, pre: "R$ ", suf: "K", label: "Financial risks identified", client: "Pague Menos" },
        { to: 60, pre: "+", suf: "%", label: "Above the national sales target", client: "Novo Nordisk" },
        { to: 33, pre: "R$ ", suf: "K", label: "Additional revenue generated for the consultancy", client: "Novo Nordisk" },
        { to: 14, pre: "", suf: "K+", label: "User reviews analyzed", client: "Pague Menos" },
        { to: 270, pre: "", suf: "K+", label: "Orders processed", client: "Ale Combustíveis" }
      ]
    },
    skills: {
      eyebrow: "Skills",
      title: "What I do, <em>and why</em>.",
      lead: "Capabilities built through digital transformation, product and service projects for large organizations.",
      items: [
        { title: "Discovery & Research", statement: "I understand problems before proposing solutions.", tags: ["Qualitative and quantitative research", "Interviews and shadowing", "Benchmarking", "Insight synthesis"] },
        { title: "Facilitation & Leadership", statement: "I align teams to speed up decisions.", tags: ["Executive storytelling", "Stakeholder management", "Co-creation and strategy workshops", "Business Agility"] },
        { title: "Data & Artificial Intelligence", statement: "I use data and AI to broaden decision-making.", tags: ["Generative AI", "Analytics and BI", "Executive dashboards", "Process automation"] },
        { title: "Product Design", statement: "I bring strategies to life as digital experiences.", tags: ["Information architecture", "User flows", "Prototyping", "Design systems"] },
        { title: "Service & Experience Design", statement: "I connect people, processes and experiences.", tags: ["CX and EX", "End-to-end journeys", "Service blueprints", "Ecosystem architecture"] },
        { title: "Business & Product Strategy", statement: "I turn discoveries into business decisions.", tags: ["Business Design", "Product strategy", "MVPs and roadmaps", "Prioritization and de-risking"] }
      ]
    },
    process: {
      eyebrow: "Process",
      title: "From investigation <em>to delivery</em>.",
      lead: "Turning complex pain points into efficient, safe and data-driven product solutions.",
      roleEyebrow: "My role",
      role: "I work at the intersection of Business Design, Service Design (CX/EX) and Solutions Engineering. My role is to lead immersion and continuous discovery efforts to mitigate risk, align stakeholders and design operating architectures that translate business visions into financial results and real efficiency.",
      upstream: "Upstream",
      downstream: "Downstream",
      derisking: "De-risking",
      phases: [
        { name: "Immersion", desc: "Diving into the context: people, operations and data.", tools: ["Research", "Shadowing", "Benchmarking", "Data analysis"] },
        { name: "Alignment", desc: "Converging business, users and technology.", tools: ["Lean Inception", "Prioritization", "Feasibility analysis", "MVP definition"] },
        { name: "Delivery", desc: "From strategy to an executable plan.", tools: ["Roadmaps", "Implementation", "KPIs", "Executive storytelling"] },
        { name: "Metrics", desc: "Measuring to learn and scale.", tools: ["OKRs", "KPIs", "Leading indicators", "Product metrics"] }
      ]
    },
    projects: {
      eyebrow: "Strategic projects",
      title: "Selected <em>cases</em>.",
      labels: { challenge: "The challenge", contributed: "My contribution", how: "How I did it", results: "Results", viewCase: "View full case", note: "Interactive case dashboard (in Portuguese)", videoNote: "Original interface in Portuguese" },
      items: [
        {
          id: "pague-menos", client: "Pague Menos", year: "Pharma retail",
          title: "Redesigning the app's digital journey",
          tags: ["Business Design", "Product Strategy", "Future Thinking"],
          challenge: "How do we turn the app into the company's “digital star”, bringing together the transactional journey and preventive health to boost sales and loyalty?",
          stats: [["14K+", "reviews analyzed"], ["32", "stakeholder interviews"], ["23", "brands benchmarked"]],
          contributed: ["Business Design", "Future Thinking", "Data-driven analysis", "Omnichannel strategy", "Risk reduction (de-risking)"],
          how: ["Analysis of 14K+ user reviews and 32 stakeholder interviews", "Benchmarking of 23 brands (direct and indirect)", "Definition of 3 Horizons of Innovation (H1, H2 and H3)", "Mapping of 70+ priority features", "Co-creation workshop with strategic leadership"],
          results: ["Technical root cause (API failures) behind R$ 480K in losses identified and prioritized.", "Dashboard adopted as an internal reference by the client's operations.", "Strategic roadmap tied to conversion and retention OKRs."]
        },
        {
          id: "novo-nordisk", client: "Novo Nordisk", year: "Healthcare",
          title: "Accelerating the diagnosis of Acquired Hemophilia",
          tags: ["Business Discovery", "Service Design", "Data"],
          challenge: "How do we shorten the time between diagnosis and treatment of an ultra-rare disease on a national scale?",
          stats: [["66%", "above the identification target"], ["7", "in-depth interviews"], ["15+", "desk research sources"]],
          contributed: ["Business Discovery", "Qualitative and quantitative research", "Service Design", "Commercial strategy", "KPI governance"],
          how: ["7 in-depth interviews", "15+ desk research sources", "Service Blueprint (front and backstage)", "Roadmap of prioritization waves", "Strategic dashboards and segmentation", "Interactive implementation scenarios"],
          results: ["66% above target in patient identification (5 diagnoses vs. a target of 3).", "R$ 33K in additional revenue generated for the consultancy through the project."]
        },
        {
          id: "jll", client: "JLL", year: "Real estate · LATAM",
          title: "Connecting strategy, culture and organizational agility",
          tags: ["Business Agility Transformation", "Deep Design", "Strategy Consulting"],
          challenge: "How do we engage teams across 10 countries, connecting EX and CX to build an agility ecosystem that drives exponential growth?",
          stats: [["30", "qualitative interviews"], ["10", "Latin American countries"], ["13", "pain points mapped"]],
          contributed: ["Strategy consulting", "Deep Design", "Business Agility Transformation", "Executive leadership alignment", "OKR governance"],
          how: ["30 qualitative interviews across 10 Latin American countries", "Business Agility Framework applied (18 perspectives analyzed)", "Workshops facilitated based on “The Startup Way”", "Mapping of the 13 main organizational pain points", "Benefit vs. Complexity matrix for initiatives"],
          results: ["Full leadership alignment (President and VPs) with the transformation program.", "Strategic quick wins defined to reduce margin erosion.", "Project extended into a second implementation phase."]
        }
      ]
    },
    testimonials: {
      eyebrow: "Professional recognition",
      title: "What colleagues <em>say</em>.",
      lead: "How people who followed my work on digital transformation, strategy and innovation projects see it.",
      prev: "Previous", next: "Next",
      items: [
        { name: "Juliana Amorim", role: "Head of Design", company: "Performa IT", quote: "An organized, dedicated professional who is always ahead in adopting new technologies such as AI." },
        { name: "Marcy Reinert", role: "Tech Lead", company: "Performa IT", quote: "She delivers with strategic vision, technical mastery and a true leadership spirit." },
        { name: "Rodrigo Cheida", role: "Business Strategist", company: "Compass UOL", quote: "Carol is a natural-born Service Designer, with a strategic business vision and an excellent ability to consolidate insights." },
        { name: "Flavia de Castro", role: "Delivery Manager", company: "BRQ", quote: "Committed, ethical and excellent at user-centered research, always looking to deepen the understanding of problems." },
        { name: "Camila Falabella", role: "Business & Service Designer", company: "", quote: "Carol impressed me: she maps complex journeys from the very first, still superficial data, and knows exactly how to proceed and which tools and methods to use for each project's needs." }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Shall we <em>talk</em>?",
      lead: "Every great transformation starts with a well-understood problem. If you're looking to shape products, services or strategies grounded in evidence, I'd love to hear about your challenge.",
      schedule: "Book a conversation",
      email: "Email", linkedin: "LinkedIn", cv: "Resume",
      copy: "Copy email", copied: "Email copied!"
    },
    footer: { line: "Business & Service Designer · AI · Strategic Discovery · Product Strategy · Digital Transformation", top: "Back to top" }
  },

  es: {
    meta: {
      title: "Caroline Vieira — Business Designer | IA • Datos • Estrategia",
      description: "Portafolio de Caroline Vieira, Business & Service Designer. Investigación, datos y diseño para transformar problemas complejos en estrategias y resultados de negocio."
    },
    nav: { about: "Sobre mí", skills: "Habilidades", process: "Proceso", projects: "Proyectos", testimonials: "Reconocimiento", contact: "Contacto", cv: "Ver CV", menu: "Menú" },
    hero: {
      role1: "Business Designer",
      role2: "IA • Datos • Estrategia",
      tagline: "Uso investigación, datos y diseño para transformar <strong>problemas complejos en estrategias</strong> y resultados de negocio, potenciando decisiones a través de la IA.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Conversemos",
      scroll: "Desplázate para explorar",
      location: "Business & Service Designer"
    },
    clients: { title: "Empresas que confían en mi trabajo" },
    about: {
      eyebrow: "Sobre mí",
      title: "Las buenas decisiones nacen de la <em>escucha genuina</em> y de la evidencia.",
      p1: "Me mueve la curiosidad por entender a las personas antes de proponer soluciones. Como especialista en Business Design y consultora estratégica, combino investigación, datos y visión de negocio para transformar problemas complejos en recorridos y estrategias de alto impacto.",
      p2: "MBA en Big Data Aplicado al Marketing (ESPM). Uno investigación profunda, análisis de datos y storytelling para construir frameworks que reducen riesgos y generan resultados concretos, como el crecimiento de hasta un 60% en canales digitales que ayudé a estructurar.",
      badge: "MBA Big Data · ESPM"
    },
    impact: {
      eyebrow: "Impacto generado",
      title: "Resultados que van más allá de la entrega.",
      items: [
        { to: 480, pre: "R$ ", suf: " mil", label: "Riesgos financieros identificados", client: "Pague Menos" },
        { to: 60, pre: "+", suf: "%", label: "Por encima de la meta nacional de ventas", client: "Novo Nordisk" },
        { to: 33, pre: "R$ ", suf: " mil", label: "Ingresos adicionales generados para la consultora", client: "Novo Nordisk" },
        { to: 14, pre: "+", suf: " mil", label: "Reseñas de usuarios analizadas", client: "Pague Menos" },
        { to: 270, pre: "+", suf: " mil", label: "Pedidos procesados", client: "Ale Combustíveis" }
      ]
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Lo que hago, <em>y por qué</em>.",
      lead: "Competencias desarrolladas en proyectos de transformación digital, productos y servicios para grandes organizaciones.",
      items: [
        { title: "Discovery & Research", statement: "Entiendo los problemas antes de proponer soluciones.", tags: ["Investigación cualitativa y cuantitativa", "Entrevistas y shadowing", "Benchmarking", "Síntesis de insights"] },
        { title: "Facilitación & Liderazgo", statement: "Alineo equipos para acelerar decisiones.", tags: ["Storytelling ejecutivo", "Gestión de stakeholders", "Workshops de cocreación y estrategia", "Business Agility"] },
        { title: "Datos & Inteligencia Artificial", statement: "Uso datos e IA para ampliar la toma de decisiones.", tags: ["IA generativa", "Analytics y BI", "Dashboards ejecutivos", "Automatización de procesos"] },
        { title: "Product Design", statement: "Materializo estrategias en experiencias digitales.", tags: ["Arquitectura de la información", "User flows", "Prototipado", "Design systems"] },
        { title: "Service & Experience Design", statement: "Conecto personas, procesos y experiencias.", tags: ["CX y EX", "Recorridos end-to-end", "Service blueprints", "Arquitectura de ecosistemas"] },
        { title: "Business & Product Strategy", statement: "Transformo descubrimientos en decisiones de negocio.", tags: ["Business Design", "Product strategy", "MVPs y roadmaps", "Priorización y de-risking"] }
      ]
    },
    process: {
      eyebrow: "Proceso",
      title: "De la investigación <em>a la entrega</em>.",
      lead: "Transformando dolores complejos en soluciones de producto eficientes, seguras y orientadas a datos.",
      roleEyebrow: "Mi rol",
      role: "Trabajo en la intersección entre Business Design, Service Design (CX/EX) e Ingeniería de Soluciones. Mi rol es guiar frentes de inmersión y discovery continuo para mitigar riesgos, alinear stakeholders y diseñar arquitecturas operativas que traduzcan visiones de negocio en resultados financieros y eficiencia real.",
      upstream: "Upstream",
      downstream: "Downstream",
      derisking: "De-risking",
      phases: [
        { name: "Inmersión", desc: "Inmersión en el contexto: personas, operación y datos.", tools: ["Investigación", "Shadowing", "Benchmarking", "Análisis de datos"] },
        { name: "Alineación", desc: "Convergencia entre negocio, usuarios y tecnología.", tools: ["Lean Inception", "Priorización", "Análisis de viabilidad", "Definición de MVP"] },
        { name: "Entrega", desc: "De la estrategia a un plan ejecutable.", tools: ["Roadmaps", "Implementación", "KPIs", "Storytelling ejecutivo"] },
        { name: "Métricas", desc: "Medir para aprender y escalar.", tools: ["OKRs", "KPIs", "Leading indicators", "Métricas de producto"] }
      ]
    },
    projects: {
      eyebrow: "Proyectos estratégicos",
      title: "Casos <em>seleccionados</em>.",
      labels: { challenge: "El desafío", contributed: "Cómo contribuí", how: "Cómo lo hice", results: "Resultados", viewCase: "Ver caso completo", note: "Dashboard interactivo del caso (en portugués)", videoNote: "Interfaz original en portugués" },
      items: [
        {
          id: "pague-menos", client: "Pague Menos", year: "Retail farmacéutico",
          title: "Rediseñando el recorrido digital de la app",
          tags: ["Business Design", "Product Strategy", "Future Thinking"],
          challenge: "¿Cómo convertir la app en la “estrella digital” de la compañía, uniendo el recorrido transaccional con la salud preventiva para impulsar ventas y fidelización?",
          stats: [["+14 mil", "reseñas analizadas"], ["32", "entrevistas con stakeholders"], ["23", "marcas en el benchmarking"]],
          contributed: ["Business Design", "Futurismo (Future Thinking)", "Análisis orientado a datos", "Estrategia omnicanal", "Reducción de riesgos (de-risking)"],
          how: ["Análisis de +14 mil reseñas de usuarios y 32 entrevistas con stakeholders", "Benchmarking de 23 marcas (directas e indirectas)", "Definición de 3 Horizontes de Innovación (H1, H2 y H3)", "Mapeo de +70 funcionalidades prioritarias", "Workshop de cocreación con el liderazgo estratégico"],
          results: ["Causa raíz técnica (fallas de API) de R$ 480 mil en pérdidas identificada y priorizada.", "Dashboard adoptado como referencia interna por la operación del cliente.", "Roadmap estratégico conectado a OKRs de conversión y retención."]
        },
        {
          id: "novo-nordisk", client: "Novo Nordisk", year: "Salud",
          title: "Acelerando el diagnóstico de la Hemofilia Adquirida",
          tags: ["Business Discovery", "Service Design", "Datos"],
          challenge: "¿Cómo reducir el tiempo entre el diagnóstico y el tratamiento de una enfermedad ultrarrara a escala nacional?",
          stats: [["66%", "por encima de la meta de identificación"], ["7", "entrevistas en profundidad"], ["+15", "fuentes de desk research"]],
          contributed: ["Business Discovery", "Investigación cualitativa y cuantitativa", "Service Design", "Estrategia comercial", "Gobernanza de indicadores"],
          how: ["7 entrevistas en profundidad", "+15 fuentes de desk research", "Service Blueprint (front y backstage)", "Roadmap de olas de priorización", "Dashboards estratégicos y segmentación", "Escenarios de implementación interactivos"],
          results: ["66% por encima de la meta en la identificación de pacientes (5 diagnósticos vs. una meta de 3).", "R$ 33 mil de ingresos adicionales generados para la consultora a través del proyecto."]
        },
        {
          id: "jll", client: "JLL", year: "Real estate · LATAM",
          title: "Conectando estrategia, cultura y agilidad organizacional",
          tags: ["Business Agility Transformation", "Deep Design", "Consultoría Estratégica"],
          challenge: "¿Cómo involucrar a equipos en 10 países, conectando EX y CX para crear un ecosistema de agilidad que impulse un crecimiento exponencial?",
          stats: [["30", "entrevistas cualitativas"], ["10", "países de América Latina"], ["13", "pain points mapeados"]],
          contributed: ["Consultoría estratégica", "Deep Design", "Business Agility Transformation", "Alineación del liderazgo ejecutivo", "Gobernanza de OKRs"],
          how: ["30 entrevistas cualitativas en 10 países de América Latina", "Aplicación del Business Agility Framework (18 perspectivas analizadas)", "Facilitación de workshops basados en “The Startup Way”", "Mapeo de los 13 principales pain points organizacionales", "Matriz de Beneficio vs. Complejidad para las iniciativas"],
          results: ["Alineación total del liderazgo (Presidente y VPs) con el programa de transformación.", "Definición de quick wins estratégicos para reducir la erosión de margen.", "Continuidad del proyecto en una segunda etapa de implementación."]
        }
      ]
    },
    testimonials: {
      eyebrow: "Reconocimiento profesional",
      title: "Lo que <em>dicen</em> de mi trabajo.",
      lead: "La percepción de quienes acompañaron mi trabajo en proyectos de transformación digital, estrategia e innovación.",
      prev: "Anterior", next: "Siguiente",
      items: [
        { name: "Juliana Amorim", role: "Head de Diseño", company: "Performa IT", quote: "Una profesional organizada, dedicada y siempre a la vanguardia en la adopción de nuevas tecnologías como la IA." },
        { name: "Marcy Reinert", role: "Tech Lead", company: "Performa IT", quote: "Entrega con visión estratégica, dominio técnico y espíritu de liderazgo." },
        { name: "Rodrigo Cheida", role: "Business Strategist", company: "Compass UOL", quote: "Carol es una Service Designer nata, con visión estratégica de negocio y una excelente capacidad para consolidar insights." },
        { name: "Flavia de Castro", role: "Delivery Manager", company: "BRQ", quote: "Comprometida, ética y excelente en investigaciones centradas en el usuario, siempre buscando profundizar la comprensión de los problemas." },
        { name: "Camila Falabella", role: "Business & Service Designer", company: "", quote: "Carol me impresionó: mapea recorridos complejos a partir de los primeros datos, aún superficiales, y sabe exactamente cómo proceder y qué herramientas y métodos usar según la necesidad de cada proyecto." }
      ]
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿<em>Conversamos</em>?",
      lead: "Toda gran transformación comienza con un problema bien comprendido. Si buscas estructurar productos, servicios o estrategias basadas en evidencia, será un placer conocer tu desafío.",
      schedule: "Agendar una conversación",
      email: "E-mail", linkedin: "LinkedIn", cv: "Currículum",
      copy: "Copiar e-mail", copied: "¡E-mail copiado!"
    },
    footer: { line: "Business & Service Designer · IA · Discovery Estratégico · Product Strategy · Transformación Digital", top: "Volver arriba" }
  }
};
