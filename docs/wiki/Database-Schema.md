# 🗄️ Database Schema & Data Models

## 1. Relational Entity Models

The application state is persisted using **SQLAlchemy 2.0** ORM mapped across SQLite (development) and Cloud SQL PostgreSQL (production).

```mermaid
erDiagram
    PROMPTS {
        string id PK
        string title
        string content
        string category
        string language
        string use_case
        string recommended_model
        string complexity
        int token_count
        float estimated_cost
        boolean is_verified
        datetime created_at
        datetime updated_at
    }

    MCP_SERVERS {
        string id PK
        string name
        string description
        string server_url
        string transport_type
        json tools_manifest
        boolean is_active
        datetime created_at
    }

    AI_AUDIT_LOGS {
        string id PK
        string prompt_id FK
        string user_id
        string event_type
        json risk_flags
        datetime created_at
    }

    PROMPTS ||--o{ AI_AUDIT_LOGS : "generates"
```

---

## 2. Key Table Attributes

### `prompts` Table
- `id`: UUID Primary Key (`crypto.randomUUID()` / `uuid.uuid4()`).
- `title`: Indexed prompt title (bilingual string).
- `content`: Text body containing prompt instructions and variables.
- `token_count`: Pre-computed token consumption via Tiktoken.
- `language`: Detected ISO 639-1 code (`ar` / `en`).
- `estimated_cost`: Computed cost per run in USD based on `recommended_model`.
