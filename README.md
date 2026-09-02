<div align="center">

# 🏛️ Bagback AI Workspace — Showcase & Architecture Suite
### Sovereign Bilingual AI Prompts Library, MCP Registry & Type-Safe Mock Contracts

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=22C46F&center=true&vCenter=true&width=780&lines=Bilingual+AI+Prompts+Library+%26+Developer+Workbench;Model+Context+Protocol+(MCP)+Registry+%26+Tool+Profiles;Zero-Leak+Public+Showcase+%C2%B7+Type-Safe+Contracts+%C2%B7+C4+Architecture;Architected+by+Mohamed+Osama+%7C+Bagback+Digital+Solutions" alt="Typing SVG" />
</a>

<br/>

[![CI / Verify](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/verify.yml/badge.svg)](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/verify.yml)
[![Security SAST](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/security.yml/badge.svg)](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/security.yml)
[![CodeQL Strict](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/codeql.yml/badge.svg)](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/codeql.yml)
[![Publish Package](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/publish-package.yml/badge.svg)](https://github.com/mohamedosamaai/ai-workspace-showcase/actions/workflows/publish-package.yml)
[![SLSA Provenance](https://img.shields.io/badge/SLSA_Attested-Level_3_Sigstore-success?style=flat&logo=sigstore)](https://github.com/mohamedosamaai/ai-workspace-showcase)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x_Strict-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat)](LICENSE)

<br/>

[🌐 **Live Production App**](https://ai.bagbacktech.com) • [🏛️ **Architect Hub**](https://mohamedosama.me) • [📚 **Wiki Architecture Suite**](docs/wiki/Home.md) • [🔒 **Showcase Security Strategy**](docs/SECURITY_SHOWCASE_STRATEGY.md)

</div>

---

## 📊 Architectural Metrics & Showcase Indicators

| Metric Card | Value / SLA | Architectural Standard |
|---|---|---|
| **Public Showcase Strategy** | `Zero Data Leaks` | Complete separation of private backend implementation and public API contracts |
| **Bilingual Support** | `100%` AR / EN | Native RTL Cairo typography & English LTR layout specifications |
| **Security Scanning Engine** | `10-Vector Scan` | Client-side and server-side jailbreak, injection & exfiltration rules |
| **Supply Chain Security** | `SLSA v2 + Sigstore` | Cryptographically attested release builds with automated provenance |
| **Dependencies Security** | `0 CVEs` (npm) | Pinned security overrides with strict SAST & CodeQL workflows |
| **Live Target Platform** | Cloud Run + Firebase | Enterprise scale-to-zero production environment at `ai.bagbacktech.com` |

---

## 🏛️ C4 Architecture Suite

### 1. System Context Diagram (Level 1)
```mermaid
graph TD
    User["👤 Software Engineers & Prompt Creators"]
    
    subgraph BagbackEcosystem["🏛️ Bagback AI Ecosystem"]
        ShowcaseApp["🌐 ai.bagbacktech.com<br/>(AI Workbench & Prompt Hub)"]
        Hub["📡 Hub Telemetry Bus<br/>(hub.bagbacktech.com)"]
    end

    ExternalLLM["🤖 External AI Gateways<br/>(Gemini 2.5/3, Groq, Claude, OpenAI)"]
    MCPRegistry["🔌 MCP Ecosystem<br/>(Official MCP Servers & Skills)"]
    Wikidata["🌐 Knowledge Graph<br/>(Wikidata Q141252311)"]

    User -->|Searches, Evaluates, Scans Prompts| ShowcaseApp
    ShowcaseApp -->|Event Telemetry & Audit| Hub
    ShowcaseApp -->|Context-Aware Execution| ExternalLLM
    ShowcaseApp -->|Loads Configs & Tools| MCPRegistry
    ShowcaseApp -.->|Entity Grounding| Wikidata
```

### 2. Container Diagram (Level 2)
```mermaid
graph TD
    subgraph ClientLayer["🖥️ Frontend Container (React 18/19 + TypeScript)"]
        UI["Bilingual UI Components<br/>(Tailwind CSS, Lucide, Framer)"]
        State["State Management<br/>(Zustand + TanStack Table)"]
        ClientRules["Zod Schema Validator<br/>(Input Sanitization)"]
    end

    subgraph ShowcaseLayer["📦 Showcase Contract & Mock Layer"]
        TypeContracts["TypeScript Types<br/>(PromptCard, McpConfig, SafetyReport)"]
        MockEngine["Mock Safety & Token Engine<br/>(10-Vector Risk Scanner)"]
    end

    subgraph BackendInfrastructure["⚙️ Production Backend (Private Server)"]
        API["FastAPI REST Router<br/>(Endpoints, CORS, Auth)"]
        DBEngine[("Cloud SQL / PostgreSQL")]
    end

    UI --> State
    State --> ClientRules
    ClientRules --> TypeContracts
    TypeContracts --> MockEngine
    ClientRules -.->|Production Mode (Private API)| API
    API --> DBEngine
```

### 3. Dynamic Sequence Diagram (Prompt Safety Scan & Token Estimation)
```mermaid
sequenceDiagram
    autonumber
    actor Dev as Developer
    participant UI as Showcase UI
    participant Mock as Mock Safety Engine
    participant Tokenizer as Token Estimation Layer

    Dev->>UI: Input Prompt or MCP Tool Config
    UI->>Mock: scanPromptSafety(content)
    Note over Mock: Evaluates 10 Vectors (Injection, rm -rf, Token Stealing, XSS)
    Mock-->>UI: SafetyReport { passed: true, riskScore: 0.0 }
    UI->>Tokenizer: estimateTokenMetrics(content, model)
    Tokenizer-->>UI: TokenMetrics { tokenCount: 240, estimatedCostUsd: 0.00036 }
    UI-->>Dev: Display Verified Quality Badge & Cost Breakdown
```

---

## 🔒 Security & Showcase Isolation Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                   DEVSECOPS MULTI-LAYER DEFENSE                        │
├──────────────────────────┬─────────────────────────────────────────────┤
│ Layer 1: Client Input    │ Zod schema validation & client XSS sanitization│
│ Layer 2: API Protection │ CORS whitelist, rate-limiting, secure headers│
│ Layer 3: Payload Safety  │ 10-vector jailbreak, prompt-injection, leak  │
│ Layer 4: SAST & Auditing │ CodeQL Strict, Semgrep, Flake8, Gitleaks     │
│ Layer 5: Supply Chain    │ SLSA Level 3 Provenance via Sigstore         │
└──────────────────────────┴─────────────────────────────────────────────┘
```

---

## 🛠️ Quick Start & Integration

### 1. Install via NPM
```bash
npm install @mohamedosamaai/ai-workspace-showcase --registry=https://npm.pkg.github.com
```

### 2. Usage in TypeScript
```typescript
import {
  scanPromptSafety,
  estimateTokenMetrics,
  MOCK_PROMPT_CARDS
} from '@mohamedosamaai/ai-workspace-showcase';

// Run 10-vector safety analysis
const report = scanPromptSafety('Write a secure FastAPI route with JWT verification.');
console.log('Safety Report:', report);

// Estimate token usage & cost for Gemini 3.7
const metrics = estimateTokenMetrics('Your prompt text...', 'gemini-3.7-flash');
console.log('Estimated Cost (USD):', metrics.estimatedCostUsd);
```

---

<details>
<summary><b>🏛️ Ecosystem Authority & Verified Credentials (Click to Expand)</b></summary>

<br/>

### 👤 Architect & Founder Grounding
- **Architect & Full-Stack Systems Engineer:** Mohamed Osama (محمد أسامة)
- **Primary Knowledge & Authority Hub:** [https://mohamedosama.me](https://mohamedosama.me)
- **Wikidata Entity:** [Q141252311](https://www.wikidata.org/wiki/Q141252311)
- **LinkedIn Profile:** [mohamed-osama-ai](https://www.linkedin.com/in/mohamed-osama-ai/)
- **GitHub Authority:** [@mohamedosamaai](https://github.com/mohamedosamaai)
- **Contact:** `im@mohamedosama.me`

### 📜 Verified Corporate & Certification Credentials
- **Commercial Entity:** Bagback Digital Solutions (باج باك للحلول الرقمية)
- **Commercial Registration (CR):** `218773`
- **Tax Identification Number (TIN):** `757-139-248`
- **Google Cloud Platform Certification:** Vertex AI Studio Certified (`24009731`)
- **Dubai Chamber of Commerce:** Commercial Recognition Reference (`MeYYoRxN`)

### 🌐 7 Live Production Platforms in the Ecosystem

| # | Platform | Core Architecture | Live URL |
|---|---|---|---|
| 1 | **Bagback AI Workspace** | Bilingual AI Prompts, MCP Directory & Developer Workbench | [ai.bagbacktech.com](https://ai.bagbacktech.com) |
| 2 | **Ops ERP Engine** | Real-time field operations, work orders & offline PWA | [ops.bagbacktech.com](https://ops.bagbacktech.com) |
| 3 | **BagbackTech Digital** | Enterprise digital platform engineering & AI studio | [bagbacktech.com](https://bagbacktech.com) |
| 4 | **Elitk Sovereign Webmail** | Ultra-fast multi-mailbox mail engine (React 19 + BullMQ) | [mail.elitk.com](https://mail.elitk.com) |
| 5 | **Elitk Marketing SaaS** | AI-driven omni-channel marketing & automation suite | [elitk.com](https://elitk.com) |
| 6 | **Resonance 8** | 3D WebGL Particle Engine & Multimodal AI Experience | [8.elitk.com](https://8.elitk.com) |
| 7 | **Bagback Shop** | Multi-vendor commerce, affiliate engine & fulfillment | [bagback.shop](https://bagback.shop) |

</details>

---

## ⚖️ License & Intellectual Property

**Proprietary Showcase — All Rights Reserved.**  
Copyright © 2023–2026 **Mohamed Osama / BAGBACK Digital Solutions** (CR: 218773).  
Unauthorized copying or redistribution of proprietary assets is strictly prohibited.
