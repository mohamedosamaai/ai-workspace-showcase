# 📐 Bagback AI Workspace — Architectural Specification (SPEC.md)

> **Document Version:** 1.0.0  
> **Status:** RATIFIED & ACTIVE  
> **Architect & Owner:** Mohamed Osama (`im@mohamedosama.me`)  
> **Entity:** Bagback Digital Solutions (CR: `218773`, Tax ID: `757-139-248`, Dubai, UAE)  
> **Live Production Platform:** [`https://ai.bagbacktech.com`](https://ai.bagbacktech.com)

---

## 1. Architectural Mission & Invariants

Bagback AI Workspace is a sovereign, enterprise-grade AI prompts engineering laboratory, Model Context Protocol (MCP) server directory, and developer workbench.

### Core Architectural Invariants:
1. **Zero Data Leaks Invariant:** Public showcase repositories contain exclusively verified TypeScript contracts, mock engines, and C4 models. All proprietary databases, private server logic, and encryption secrets remain strictly isolated on private GCP & Firebase infrastructure.
2. **Deterministic Pre-Flight Safety Invariant:** Every prompt payload is evaluated across 10 security vectors prior to persistence or execution.
3. **Multi-Model Cost Transparency Invariant:** Dynamic token budgeting and pricing calculation with zero overhead.
4. **Bilingual Native Invariant:** First-class RTL (Arabic Cairo font) and LTR (English Plus Jakarta Sans) layouts without layout shifts.

---

## 2. Technical Stack Specifications

| Subsystem | Production Technology | Showcase Public Counterpart |
|---|---|---|
| **Frontend Framework** | React 18/19, Vite 6, Tailwind CSS | Standalone Showcase Workbench (`index.html`) |
| **Type System** | TypeScript 5.x Strict Mode | `@mohamedosamaai/ai-workspace-core` |
| **Mock Engine** | N/A (Live Backend API) | `@mohamedosamaai/ai-workspace-mock` |
| **Backend Compute** | Google Cloud Run, FastAPI (Python 3.11+) | Abstract OpenAPI & REST Schemas |
| **Database** | Cloud SQL (PostgreSQL), SQLite | Type-Safe Relational Entity Definitions |
| **Supply Chain Security** | Sigstore SLSA Level 3 Provenance | GitHub Actions Attestation Workflows |

---

## 3. Data Flow & Security Boundaries

```
[Developer / Agent]
        │
        ▼ (HTTPS / Zod Input Validation)
[Edge CDN / Gateway]
        │
        ├── (Public Showcase Mode) ──▶ [Local Mock Engine & Token Estimator]
        │
        └── (Production Mode) ───────▶ [FastAPI Backend on Google Cloud Run]
                                                │
                                                ├──▶ [Secret Vault / Encrypted Keys]
                                                ├──▶ [Cloud SQL PostgreSQL DB]
                                                └──▶ [Vertex AI / Gemini / Groq Gateways]
```

---

## 4. Quality & Compliance Assurance Gates

- **Static Analysis (SAST):** CodeQL Security Matrix with 0 open alerts.
- **Dependency Audit:** npm audit with pinned overrides (0 CVEs).
- **Provenance Attestation:** Automated SLSA v2 Sigstore build signing.
- **Entity Authority:** Grounded with Wikidata `Q141252311`, Google Cloud Vertex AI Studio Certificate `24009731`, and Dubai Chamber Award `MeYYoRxN`.
