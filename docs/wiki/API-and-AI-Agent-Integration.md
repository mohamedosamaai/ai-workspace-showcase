# 🔌 API & AI Agent Integration

## 1. RESTful API Endpoints

FastAPI exposes versioned endpoints under `/api/v1/`:

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/health` | Service liveness & readiness check | No |
| `GET` | `/api/v1/prompts` | Paginated prompt search with taxonomy filters | No |
| `POST` | `/api/v1/prompts/analyze` | Token counting, cost estimation & safety scan | No |
| `GET` | `/api/v1/mcp/servers` | List registered Model Context Protocol servers | No |
| `POST` | `/api/v1/mcp/execute` | Sandbox execution for validated MCP tools | Yes (Admin) |
| `GET` | `/api/v1/skills` | Developer playbooks and refactoring recipes | No |

---

## 2. Model Context Protocol (MCP) Integration

Bagback AI Workspace indexes official and community MCP server configurations:
- **Transport Types:** `stdio` (local subprocesses) and `sse` (Server-Sent Events / HTTP).
- **Tool Mapping:** Schemas are parsed, validated, and formatted into standard JSON tool definitions compatible with Gemini Function Calling, Claude Tool Use, and OpenAI Function Schemas.
