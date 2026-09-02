# 🏗️ C4 Architecture Specification: Bagback AI Workspace

## 1. Introduction
This document defines the structural architecture of the **Bagback AI Workspace** using the C4 model standard (Context, Container, Component, and Dynamic Sequence).

---

## 2. Level 1: System Context
The System Context diagram illustrates how external actors and AI ecosystems interact with the Bagback AI Workspace:

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

---

## 3. Level 2: Container Diagram
The Container diagram illustrates the high-level boundaries between frontend, type-safe contracts, and backend services:

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
    ClientRules -.->|Production Mode - Private API| API
    API --> DBEngine
```

---

## 4. Level 3: Dynamic Sequence Diagram
The sequence diagram details the 10-vector security scan and token calculation lifecycle:

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
