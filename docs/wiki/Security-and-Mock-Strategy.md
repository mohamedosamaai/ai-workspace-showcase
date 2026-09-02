# 🔒 Security & Mock Showcase Strategy

## 1. Zero Data Leaks & Public Showcase Architecture

To protect commercial secrets, private API keys, and sensitive business logic, Bagback AI Workspace enforces a strict dual-layer strategy:

```
┌─────────────────────────────────────────────────────────────┐
│                    SHOWCASE ISOLATION LAYER                 │
├──────────────────────────────┬──────────────────────────────┤
│ Production (Private Hub)     │ Cloud SQL + Secret Manager   │
│ Public Showcase (GitHub)     │ TypeScript Contracts + Mocks │
│ Sensitive Keys               │ Masked at rest & in transit  │
│ Static Code Analysis         │ CodeQL Strict + Semgrep SAST │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 2. DevSecOps Standards
- **Zero Vulnerabilities Policy:** Pinned security overrides in `package.json` for all nested dependencies.
- **Strict Linting:** Ruff enforced with `--select E,F,W --ignore E501` to maintain pristine Python standards.
- **SLSA Build Provenance (v2):** Releases attested with cryptographic Sigstore signatures.
