# Caroline Vieira — Portfólio

Site pessoal de Caroline Vieira, Business & Service Designer (IA • Dados • Estratégia), disponível em **português, inglês e espanhol**.

Site estático (HTML, CSS e JavaScript puros), sem etapa de build: funciona direto no GitHub Pages.

## Estrutura

```
index.html            estrutura da página
assets/js/i18n.js     TODOS os textos, nos 3 idiomas (pt, en, es)
assets/js/main.js     interações, troca de idioma e links (e-mail, LinkedIn, CV, WhatsApp, cases)
assets/css/style.css  visual (cores no topo do arquivo, em :root)
assets/img/           foto, logos dos clientes, favicon e imagem de compartilhamento
assets/video/         vídeos dos cases
mapa_cenario*.html    mapas interativos de cenários (arquivos anteriores, mantidos)
```

## Como editar

- **Textos:** abra `assets/js/i18n.js` e altere a mesma chave em `pt`, `en` e `es`.
- **Links de contato e dos cases:** topo de `assets/js/main.js` (`LINKS` e `CASE_URLS`).
- **Cores e fontes:** variáveis no início de `assets/css/style.css`.

## Idiomas

O idioma é escolhido nesta ordem: parâmetro na URL (`?lang=en`), última escolha do visitante, idioma do navegador e, por fim, português.
Links diretos: `?lang=pt`, `?lang=en`, `?lang=es`.

## Publicar no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
3. Em 1–2 minutos o site fica em `https://carolvieiraa.github.io/carolinevieira/`.

## Rodar localmente

```bash
python -m http.server 5173
```

Depois acesse http://localhost:5173.
