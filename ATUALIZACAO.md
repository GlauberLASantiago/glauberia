# Procedimento de Atualização do Site GlauberIA

Este guia define as regras e o passo a passo que o assistente deve seguir sempre que o usuário solicitar a atualização do site com novidades, novos serviços de IA, novos agentes ou melhorias no catálogo.

---

## 1. Arquivos Envolvidos

Sempre que atualizar serviços ou ferramentas na página inicial ou em assistentes, os seguintes arquivos devem ser mantidos sincronizados:

| Arquivo | Finalidade | Pontos de Atenção |
| :--- | :--- | :--- |
| `index.html` | Página principal de serviços de IA do portal oficial. | Atualizar o objeto `UPDATED_DESCRIPTIONS`, a lista `tools` (com ícones de `features` e `tags`) e a data/hora no rodapé. |
| `glauberia_embed.html` | Versão embarcada utilizada dentro do Google Sites. | Deve conter os mesmos itens em `UPDATED_DESCRIPTIONS` e `tools`, mantendo total paridade com `index.html`. |
| `assistentes.html` | Página de Assistentes & Agentes de IA. | Atualizar a seção `⚡ Agentes Autônomos & Executores` e a data/hora no rodapé quando houver novidades em agentes. |
| `canvas.html` | Página de Apps & Canvas. | Atualizar caso sejam adicionadas ferramentas focadas em geração de aplicativos ou canvas. |

---

## 2. Fluxo Padrão de Atualização

### Passo 1: Pesquisa de Novidades (se solicitado)
- Consultar a web por ferramentas de IA em evidência recente (modelos de raciocínio, geração de vídeo/áudio, agentes autônomos, plataformas de "vibe coding", ferramentas educacionais e científicas).
- Apresentar as sugestões ao usuário com link, resumo e categoria sugerida, ou aplicar diretamente caso o usuário já tenha pedido para adicionar.

### Passo 2: Adição / Edição em `index.html` e `glauberia_embed.html`
Para cada novo serviço incluído:
1. **Descrição no dicionário**:
   - Inserir entrada em `UPDATED_DESCRIPTIONS` com texto editorial claro e em português:
     ```js
     "NomeDoServico": "Descrição concisa sobre recursos, benefícios e proposta."
     ```
2. **Entrada no array `tools`**:
   - Adicionar o objeto na categoria adequada (`general`, `education`, `detectors`, `audio`, `video`, `experimental`):
     ```js
     {
       name: "NomeDoServico",
       category: "categoria",
       features: ["📝", "🌐", ...], // usar ícones da LEGEND
       description: "Descrição de resumo para o card.",
       link: "https://url-oficial.com/",
       tags: ["Tag1", "Tag2"]
     }
     ```
3. **Rodapé**:
   - Atualizar o texto de data e hora no rodapé para o momento atual:
     `Última atualização: DD/MM/AAAA às HH:MM`

### Passo 3: Atualização de Agentes em `assistentes.html` (quando aplicável)
- Caso o serviço seja um **agente executor / autônomo** (ex.: Claude Code, Manus, Devin, Project Jarvis, Lovable, Bolt.new):
  - Inserir o card na grade da seção `⚡ Agentes Autônomos & Executores`.
  - Atualizar o timestamp de rodapé de `assistentes.html`.

### Passo 4: Commit e Git Push
Executar no terminal dentro da pasta raiz:
```bash
git add index.html glauberia_embed.html assistentes.html
git commit -m "Atualiza catalogo de servicos e agentes de IA com novidades"
git push
```

### Passo 5: Deploy no Firebase Hosting
Executar o comando de publicação:
```bash
firebase deploy --only hosting
```
Verificar se o retorno informa `Deploy complete!` e confirmar a disponibilidade em `https://glauberia.web.app`.

---

## 3. Diretrizes de Qualidade e Boas Práticas

- **Links Limpos**: Evitar links com parâmetros excessivos de rastreamento (`utm_`, `_ga`, `wfoid`, etc.), deixando apenas a URL limpa de destino.
- **Checagem de Links**: Se o usuário indicar que algum link caiu ou não funciona, remover do array `tools` e do dicionário `UPDATED_DESCRIPTIONS` em ambos os arquivos (`index.html` e `glauberia_embed.html`).
- **Sem Browser Testing**: Este repositório possui diretriz de não utilizar subagente de browser automatizado.
