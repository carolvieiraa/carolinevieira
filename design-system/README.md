# Design System — Caroline Vieira

Base visual para prototipar o **novo portfólio**. É extraída do site atual e evoluída onde ele tinha falhas. O motivo das escolhas (por que preto, areia e azul-marinho, por que serif itálico etc.) está no [DESIGN.md](../DESIGN.md). Esta pasta guarda os valores e os contratos.

| Arquivo | O que tem |
|---|---|
| [tokens.css](tokens.css) | **Fonte da verdade dos valores:** primitivos, papéis semânticos por tema, tipografia, espaço, forma, movimento |
| [components.css](components.css) | Componentes (`ds-*`), com todos os estados |
| [index.html](index.html) | Vitrine: tokens, componentes e estados nos 3 temas, com o contraste medido ao vivo |

**Versão:** 0.1.0 · **Status:** estável, exceto o Campo de formulário (experimental) · **Última revisão:** 2026-10-29 · **Próxima revisão:** 2027-01, ou antes de começar o protótipo.

## Como usar num protótipo

```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
<body class="ds">                         <!-- tema escuro (padrão) -->
  <section data-theme="light">…</section> <!-- trecho em areia -->
  <section data-theme="navy">…</section>  <!-- território dos cases -->
</body>
```

- As fontes vêm do Google Fonts: Inter Tight (300 a 700) e Instrument Serif (normal e itálico). Veja o `<head>` de [index.html](index.html).
- **Regras para quem prototipa, inclusive agentes:**
  - use só os papéis `--color-*`, nunca os primitivos (`--sand-300`, `--navy-800`…) direto num componente;
  - não crie cor, tamanho ou raio novo no meio do protótipo. Se faltar algo, registre como pendência e pergunte;
  - todo texto nasce em PT, EN e ES. Os componentes já aceitam textos mais longos (veja Overflow abaixo).

## Fontes e decisões

| Decisão | Origem | Status |
|---|---|---|
| Mesma identidade do site atual, com espaço para evoluir | Caroline, 2026-10-29 | CONFIRMADO |
| Protótipo em código (HTML/CSS) | Caroline, 2026-10-29 | CONFIRMADO |
| Paleta, tipografia, “nada parece clicável se não for”, retrato editorial, o nome como marca | [DESIGN.md](../DESIGN.md) v1.0 (aprovado) | CONFIRMADO |
| Valores primitivos | Inventário de [style.css](../assets/css/style.css) e [cv.css](../assets/css/cv.css): cerca de 40 tons e 30 tamanhos foram consolidados em escalas | OBSERVADO → consolidado |
| **Evolução 1:** areia de texto `--sand-600 #7a5a48` sobre fundos claros | No site atual, `#9c7560` (3,3:1) e `#8a6a58` (3,9:1) falham no AA em texto pequeno | PROPOSTA, a validar |
| **Evolução 2:** tema `light` (areia) e `navy` como temas formais | Já existiam como seções soltas no site; agora têm papéis completos | PROPOSTA, a validar |
| **Evolução 3:** cor de erro coral (`--coral-300` / `--coral-700`) | O site não tinha estado de erro; o novo portfólio pode ter formulário | PROPOSTA, a validar |
| **Evolução 4:** contorno de controle `--color-border-strong` com pelo menos 3:1 | As bordas atuais (≈1,3:1) servem para divisórias, mas não para delimitar controles | PROPOSTA, a validar |
| **Evolução 5:** botão quebra o rótulo em linhas em vez de vazar | Textos em ES são mais longos; no site atual o botão tinha `nowrap` | PROPOSTA, a validar |

Biblioteca de componentes: o portfólio é HTML/CSS/JS puro, sem build, publicado no GitHub Pages. Adotar uma biblioteca de UI traria dependência e etapa de build sem ganho para um site estático, então o DS é CSS próprio sobre variáveis nativas. Se o novo portfólio usar um framework (React, Astro…), os tokens migram sem mudar de nome.

## Tokens

Gramática: `--<categoria>-<papel>[-<variante>]`. Os componentes consomem os **papéis semânticos**:

| Papel | Uso |
|---|---|
| `--color-bg` / `--color-bg-raised` | Fundo da página / de cards e painéis |
| `--color-surface` / `--color-surface-hover` | Preenchimento translúcido de campos, abas, itens |
| `--color-text` / `--color-text-muted` / `--color-text-accent` | Texto principal / secundário / destaque (`em`, eyebrow, números) |
| `--color-border` / `--color-border-strong` | Divisória decorativa / contorno de controle (≥ 3:1) |
| `--color-action-bg` / `-fg` / `-bg-hover` | Botão primário e item selecionado |
| `--color-focus` | Anel de foco |
| `--color-success` / `--color-danger` | Status (sempre com texto ou ícone junto) |

Os temas trocam só os valores. O primário é **areia com texto escuro** no tema escuro e no marinho, e **preto com texto creme** no tema areia (como no contato do site atual). Valores exatos: [tokens.css](tokens.css).

Tipografia (`--text-*`): `xs` 12 (rótulo em caixa-alta), `sm` 14, `md` 15 (UI), `base` 17 (texto corrido), `lead`, `h3`, `h2`, `display`, `hero` (fluidos com `clamp`). Espaço: múltiplos de 4 (`--space-1` a `--space-20`), mais `--space-section` e `--gutter`. Movimento: `--ease-out` e as durações `fast` (250 ms), `base` (500 ms), `slow` (900 ms) e `reveal` (1000 ms). Com `prefers-reduced-motion`, todas caem para 1 ms.

## Contratos dos componentes

Estados marcados com ✓ podem ser vistos na [vitrine](index.html).

| Componente | Propósito e limites | Estados | Acessibilidade |
|---|---|---|---|
| **Botão** `.ds-btn` (`--secondary`, `--sm`, `--lg`, `__icon`) | Uma ação primária por seção; o secundário serve para alternativas. Para navegar, use `<a>`; para agir, `<button>` | default, hover, focus ✓, active (encolhe 2%), disabled ✓, loading ✓ (`aria-busy`), overflow ✓ (quebra a linha) | Disabled: `disabled` no `<button>`, `aria-disabled="true"` no `<a>`. No loading, o rótulo continua no DOM para leitores de tela. A seta é `aria-hidden` |
| **Link** `.ds-link`, `.ds-link-pill` | Link no meio do texto / link de destaque (contato) | default, hover, focus | Sempre sublinhado ou com contorno: nunca depende só da cor |
| **Chip** `.ds-chip` (`--accent`, `--filled`) | Rótulo **estático** (tags, formação). Não use como botão | default, overflow ✓ (quebra) | Em grupo, use uma lista `<ul class="ds-chips">` |
| **Badge** `.ds-badge` | Status curto (“Disponível para projetos”) | default; o pulso para com movimento reduzido | O ponto é `aria-hidden`; o status vem do texto |
| **Feedback** `.ds-feedback` (`.is-success`) | Confirmação inline (“E-mail copiado”) | neutro, sucesso ✓ | `role="status"` anuncia a mudança |
| **Segmentado** `.ds-segmented` | Alterna um modo (idioma, tema). Para trocar conteúdo, use Abas | default, hover, selecionado ✓, disabled ✓, focus | `role="group"` + `aria-label`; botões com `aria-pressed` |
| **Abas** `.ds-tabs`, `.ds-tab`, `.ds-tabpanel` | Alternar conteúdo no mesmo lugar (Resultados / Como fiz…) | default, hover, selecionada ✓, focus | `tablist`/`tab`/`tabpanel`; ← → Home End; foco itinerante (só a aba ativa entra no Tab) ✓ |
| **Lista** `.ds-list` | Itens de resultado ou método | default | Lista semântica; a seta é decorativa (pseudo-elemento) |
| **Card** `.ds-card` (`--link`) | Superfície de conteúdo. **Estático por padrão**; `--link` só quando o card inteiro é um `<a>` | default ✓, hover e focus (só `--link`) ✓, overflow ✓ | O card link precisa de texto que descreva o destino |
| **Número** `.ds-stat` | Métrica com origem (`__source`). Número real, arredondado para baixo | default ✓, loading ✓ (skeleton) | Durante o carregamento: `aria-busy` + texto “Carregando” só para leitores de tela |
| **Depoimento** `.ds-quote`, `.ds-avatar` | Citação com autoria | default ✓ | `<figure>` + `<blockquote>` + `<figcaption>`; o avatar com iniciais é `aria-hidden` |
| **Vazio** `.ds-empty` | Quando não há conteúdo (ex.: sem depoimento num idioma): diga o porquê e dê um próximo passo | ✓ | Sempre com texto, não só com ilustração |
| **Etapas** `.ds-steps`, `.ds-step` | Processo navegável (`--steps` define a quantidade) | default, hover, selecionada ✓, concluída ✓, focus | Mesmo modelo de teclado das abas ✓; “concluída” também se distingue pela borda, não só pela cor |
| **Campo** `.ds-field`, `.ds-input` — *experimental* | Formulário de contato do novo portfólio | default, hover, focus, erro ✓, disabled ✓, somente leitura ✓ | `<label for>` sempre; erro com `aria-invalid` + `aria-describedby` apontando para a mensagem; o erro tem ícone e texto, não só a borda |
| **Navegação** `.ds-nav` (`--scrolled`) | Menu centralizado, sem logotipo | default, hover, atual (`aria-current`), focus | `<nav aria-label>`. **Pendente:** padrão mobile (menu hambúrguer) |
| **Retrato** `.ds-portrait` | Foto editorial com moldura deslocada | — | `alt` com o nome |
| **Celular** `.ds-phone` | Moldura para o motion dos cases ([motion.js](../assets/js/motion.js)) | — | O motion interno segue as regras de movimento reduzido |

## Qualidade

**Baseline adotado** (hipótese, a validar): WCAG 2.2 AA. Navegadores evergreen (Chrome, Edge, Safari e Firefox atuais). Viewports de 375, 768, 1366 e 1440 px. Temas escuro, areia e marinho. Conteúdo em PT, EN e ES.

**Validações executadas em 2026-10-29:**
- **Contraste**, medido nas cores renderizadas, nos 3 temas: os 11 pares por tema (texto, secundário, destaque, ação, erro, sucesso, contorno e foco sobre os fundos) passam no AA. O pior caso de texto é o destaque areia no tema claro, 4,97:1; o de contorno de controle é `border-strong` no tema claro, 3,34:1.
- **Teclado:** as abas e as etapas respondem a ← → Home End, com foco itinerante.
- **Overflow:** nenhum botão vaza da coluna; no celular (375 px), a vitrine não tem rolagem horizontal.

**Não verificado:** leitor de tela real (NVDA/VoiceOver), zoom de 200% e texto ampliado, Safari e Firefox, e o hover em dispositivos de toque.

## Migração do site atual (backlog, não feito)

O site atual **não** usa este DS. Se ele for mantido em paralelo ao novo:
1. Trocar o `#9c7560` e o `#8a6a58` usados em texto pequeno sobre areia pelo `--sand-600`. Esse é um ganho de acessibilidade direto.
2. Trocar a cor do rótulo “Contato” (`#6e5242` sobre `#d8beaf`, 4,0:1) pelo `--sand-700` (4,8:1).
3. Migrar por seção, apontando as variáveis de `style.css` para os papéis semânticos.

## Pendências

- Validar as 5 evoluções propostas, acima.
- Navegação mobile (menu hambúrguer) e um padrão de **rodapé**.
- Decidir se o novo portfólio terá formulário. Isso define se o Campo sai de experimental.
- Ícones: hoje só setas tipográficas (→ ↗ ↓). Se o novo portfólio precisar de ícones, escolher um conjunto.

## Changelog

- **0.1.0 — 2026-10-29:** primeira versão, extraída do portfólio atual e do DESIGN.md v1.0. Traz as escalas consolidadas, 3 temas, 17 componentes e as 5 evoluções propostas.
