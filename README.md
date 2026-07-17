# GlauberIA 🤖📚

> **GlauberIA** é uma plataforma e dashboard de inteligência artificial aplicada à educação, desenvolvido pelo **Dr. Glauber Santiago**, Professor Titular do Departamento de Artes e Comunicação da **UFSCar** (Universidade Federal de São Carlos).

A plataforma centraliza recursos, ferramentas e guias metodológicos para auxiliar professores e instituições de ensino a integrarem Inteligência Artificial em suas práticas pedagógicas de forma ética e eficiente.

---

## 🌟 Funcionalidades Principais

O portal é dividido em diferentes seções temáticas, cada uma abordando um aspecto da IA na educação:

| Seção | Descrição | Arquivo Fonte |
| :--- | :--- | :--- |
| **🏠 Início** | Apresentação e visão geral da plataforma GlauberIA. | `index.html` / `inicio.html` |
| **✍ Prompts** | Banco de prompts estruturados e otimizados para uso educacional. | `prompts.html` / `prompts_db.json` |
| **🤖 Assistentes** | Agentes e assistentes inteligentes baseados em IA configurados para tarefas de ensino. | `assistentes.html` |
| **🧩 Apps & Canvas** | Modelos (Canvas) e ferramentas interativas para planejamento de aulas. | `canvas.html` |
| **📚 Propostas** | Banco de dados de propostas e designs curriculares integrando IA. | `propostas.html` / `propostas_db.json` |
| **🎓 Formação** | Conteúdos voltados para a formação contínua de professores. | `formacao.html` |
| **📋 Roteiro** | Guia e roteiro prático para implantação de IA em instituições. | `roteiro.html` |
| **💼 Estudos & Vídeos** | Estudos de caso reais, tutoriais práticos e vídeo-aulas gravadas. | `estudos.html` / `videos.html` |

---

## 🛠️ Tecnologias Utilizadas

A plataforma foi desenvolvida focando em performance, carregamento rápido e design premium responsivo:

- **Core**: HTML5 Semântico e Javascript (ES6+).
- **Estilização**: CSS3 Vanilla estruturado através de variáveis globais e sistema de cores HSL adaptativo (com suporte a tema claro e escuro automático).
- **Tipografia**: Fontes premium do Google Fonts (`Outfit` para títulos e `Plus Jakarta Sans` para o corpo).
- **Hospedagem**: [Firebase Hosting](https://firebase.google.com/) com URLs amigáveis (`cleanUrls`).
- **Banco de Dados Estático**: Arquivos JSON (`prompts_db.json`, `propostas_db.json`) estruturados para consulta rápida via JS.

---

## 🚀 Como Executar Localmente

Como a plataforma é estática, você pode executá-la localmente de forma muito simples.

### Opção 1: Usando um Servidor Local Simples (Recomendado)
Você pode usar qualquer servidor estático local para simular a hospedagem com suporte a URLs amigáveis.

**Usando Python:**
```bash
python -m http.server 8000
```
Acesse `http://localhost:8000`.

**Usando Node.js (ex: live-server ou serve):**
```bash
npx live-server
```

### Opção 2: Firebase Emulator
Se você possui o Firebase CLI instalado:
```bash
firebase emulators:start
```

---

## 📦 Implantação (Deployment)

Para atualizar o site de produção hospedado no Firebase Hosting:

1. Certifique-se de que está autenticado no Firebase CLI:
   ```bash
   firebase login
   ```
2. Execute o deploy:
   ```bash
   firebase deploy
   ```

---

## 👤 Autor

- **Dr. Glauber Santiago**
  - Professor Titular do Departamento de Artes e Comunicação (DAC)
  - Universidade Federal de São Carlos (UFSCar)
