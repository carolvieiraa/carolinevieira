---
tipo: refinamento
phase: 02_discovery
deliverable: Intenção e rationale de design
owner: Caroline Vieira
status: aprovado
fonte: "nao-rastreada: decisões tomadas em sessão de trabalho no Claude Code (out/2026) e feedback escrito da Camila Falabella (analise-Caroline.pdf)"
related_issues:
processo:
  agente: claude-code
  plugin: 0.15.0
  skills: [dojo-framework:design-md-generator]
  fontes_lidas: [index.html, cv.html, assets/css/style.css, assets/css/cv.css, assets/js/i18n.js, assets/js/main.js, assets/js/motion.js, assets/js/cv-data.js, README.md, analise-Caroline.pdf]
  gerado_em: 2026-10-29
version: 1.0
last_review: 2026-10-29
---
# DESIGN.md — Portfólio de Caroline Vieira

Este documento registra a intenção, os princípios e o rationale de design do portfólio. A implementação é a fonte dos valores: cores e fontes estão nas variáveis de `:root` de [style.css](assets/css/style.css) e [cv.css](assets/css/cv.css), e os motions dos cases estão em [motion.js](assets/js/motion.js). Não existe uma biblioteca de Design System separada.

## Contexto e intenção

**Escopo:** o site-portfólio ([index.html](index.html)) e o currículo embutido ([cv.html](cv.html)), em desktop e mobile, nos idiomas português, inglês e espanhol.
**Público e situação de uso:** recrutadores, lideranças e potenciais clientes, inclusive internacionais. Eles passam poucos minutos no site para decidir se vale uma conversa.
**Experiência desejada:** a de uma profissional estratégica e confiável. O visual é editorial e contido, e quem conduz a leitura são as evidências: números, cases e depoimentos.

## Princípios e rationale

### Paridade entre os três idiomas

**Escolha:** todo conteúdo existe em PT, EN e ES, incluindo os motions dos cases e o currículo. Nenhuma peça fica “só em português”.
**Por quê:** Caroline está aberta a oportunidades internacionais. Os vídeos originais dos cases tinham texto em português e quebravam a experiência de quem lia em EN/ES.
**Consequências e limites:** todo texto novo nasce nos três idiomas, sempre com a mesma chave em [i18n.js](assets/js/i18n.js) e [cv-data.js](assets/js/cv-data.js). Os dashboards externos dos cases continuam em português, e isso é sinalizado no botão “Ver case completo”.
**Fonte e validação:** pedido de Caroline sobre os vídeos; confirmado por ela.

### Cases contados em motion, não em vídeo

**Escolha:** cada case tem um motion curto (cerca de 26 s) dentro do mockup de celular. Ele só anima quando está na tela.
**Por quê:** o motion mantém o roteiro que funcionava nos vídeos originais e, ao mesmo tempo, permite trocar de idioma, fica nítido em qualquer tela e pesa menos. Caroline pediu que ficasse mais bonito que o original e aprovou o resultado.
**Consequências e limites:** os três cases atuais seguem o arco sinal → pergunta que reenquadra → método → resultado. Esse arco **não é regra** para cases futuros: cada case escolhe a narrativa que melhor mostra o próprio raciocínio.
**Fonte e validação:** escolha e aprovação de Caroline; roteiros em [motion.js](assets/js/motion.js), textos em `projects.items[].motion`.

### Nada parece clicável se não for

**Escolha:** os cards de habilidades mostram todo o conteúdo direto, sem o “+” que virava “X”. Os logos do carrossel de marcas não reagem ao mouse.
**Por quê:** no feedback, a Camila tentou fechar o “X” e achou que o carrossel levaria a algum lugar. Um sinal de interação sem ação frustra e esconde conteúdo atrás de um gesto desnecessário.
**Consequências e limites:** o carrossel continua animado, porque comunica a escala das empresas atendidas e Caroline gosta dele. O cursor personalizado só cresce sobre links, botões e abas.
**Fonte e validação:** feedback da Camila (PDF, páginas 1 e 2); Caroline mandou aplicar e decidiu manter o carrossel.

### Retrato editorial

**Escolha:** a foto do hero é um retângulo de cantos quase retos, com uma moldura fina em areia deslocada atrás.
**Por quê:** o arco anterior parecia datado. A moldura deslocada é uma linguagem de revista, que combina com a tipografia serifada em itálico.
**Fonte e validação:** pedido e aprovação de Caroline.

### O nome é a marca

**Escolha:** o menu não tem logotipo. A assinatura é o próprio nome, “Caroline” em sans e “Vieira” em serif itálico, com a linha “Business Designer ─── IA • Dados • Estratégia” ocupando exatamente a largura do nome. O favicon mantém o monograma “cV”.
**Por quê:** o monograma não funcionava como logo no menu. Com a tagline alinhada, nome e cargo leem como uma assinatura única.
**Consequências e limites:** o “cV” fica restrito ao ícone da aba do navegador, onde o nome inteiro não cabe.
**Fonte e validação:** decisões e aprovação de Caroline.

### Preto, areia e azul-marinho

**Escolha:** fundo quase preto, areia como cor de destaque e de chamadas para ação, e azul-marinho reservado à seção de projetos e aos motions dos cases.
**Por quê:** o preto dá sobriedade executiva, e a areia traz calor humano, coerente com a “escuta genuína” que abre a seção Sobre. O azul-marinho marca o território dos cases e dos dados. A paleta vem do portfólio anterior de Caroline, no Canva.
**Consequências e limites:** sobre os fundos claros (habilidades e contato), a areia vira tons mais escuros para manter a leitura.
**Fonte e validação:** confirmado por Caroline.

### Ênfase em serif itálico

**Escolha:** o texto e a interface usam Inter Tight. Instrument Serif em itálico marca a palavra que carrega a ideia, como “escuta *genuína*”, “*à entrega*” e “*propósito?*”.
**Por quê:** o contraste entre o sans técnico e o serif humano espelha o posicionamento: dados e estratégia com sensibilidade.
**Consequências e limites:** a ênfase é uma por frase, nunca um parágrafo inteiro em itálico.
**Fonte e validação:** confirmado por Caroline.

### Números confiáveis

**Escolha:** as métricas são resultados reais, com o case e o cliente identificáveis, e na dúvida são arredondadas para baixo. Por exemplo, os 66% do Novo Nordisk aparecem como 60% no destaque de impacto, e os +18% de conversão e +27% de retenção do Pague Menos são resultados medidos.
**Por quê:** a credibilidade é o principal ativo de um portfólio de estratégia.
**Consequências e limites:** os números do site, do currículo e dos motions precisam bater entre si. Os elementos ilustrativos são exceções explícitas, como as posições das ondas no mapa do Novo Nordisk.
**Fonte e validação:** confirmado por Caroline.

### Navegação que respeita o conteúdo

**Escolha:** ao clicar no menu, o título da seção para logo abaixo da barra fixa. O menu inclui “Reconhecimento”.
**Por quê:** no feedback, a Camila viu os títulos cortados ao navegar e sentiu falta de chegar aos depoimentos pelo menu.
**Fonte e validação:** feedback da Camila (PDF, páginas 2 e 3); Caroline mandou aplicar.

### Currículo como página

**Escolha:** o currículo é uma página do site nos 3 idiomas. O botão “Baixar PDF” gera uma única folha A4, que mantém as cores do site.
**Por quê:** a página fica disponível em todos os idiomas sem manter três arquivos, e uma folha só é o formato que recrutadores esperam.
**Fonte e validação:** pedido de Caroline.

## Aplicação e restrições

- Ao acrescentar conteúdo, escreva primeiro nos três idiomas e confira se os números batem com o currículo.
- Um elemento só mostra sinal de interação (hover, ícone de abrir ou fechar, cursor ampliado) se realmente faz algo.
- A areia é a cor de ação e destaque, e o azul-marinho é o espaço dos cases. Para os valores, consulte o `:root` de [style.css](assets/css/style.css), não este documento.

## Referências

| Fonte | O que consultar |
|---|---|
| [style.css](assets/css/style.css) e [cv.css](assets/css/cv.css) | Cores, fontes e estilos implementados |
| [i18n.js](assets/js/i18n.js) e [cv-data.js](assets/js/cv-data.js) | Textos nos 3 idiomas |
| [motion.js](assets/js/motion.js) | Roteiros dos motions dos cases |
| [README.md](README.md) | Estrutura do projeto e como editar |

## Limitações e decisões abertas

- **Movimento:** o site revela conteúdo com animações e desliga o movimento quando o sistema pede menos movimento (`prefers-reduced-motion`). Esse comportamento está implementado, mas o princípio por trás dele ainda não foi discutido com Caroline. Quem decide: Caroline.
- **Brand book:** não existe brand book formal. Este documento é a referência de intenção visual até que um seja criado.

## Histórico

- 2026-10-29 — versão 1.0, a partir das decisões da sessão de revisão do portfólio e do feedback da Camila Falabella. Validada por Caroline.
