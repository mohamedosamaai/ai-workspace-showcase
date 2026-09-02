# 💻 Developer Setup & Operations Runbook

## 1. Prerequisites
- **Node.js:** `v20.x` or `v22.x` (LTS)
- **Python:** `3.11+`
- **Git:** `2.40+`

---

## 2. Local Environment Setup

### 2.1 Backend Setup
```bash
cd backend
python -m venv venv

# Activate Virtualenv:
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# Linux/macOS:
source venv/bin/activate

# Install Dependencies:
pip install -r requirements.txt

# Run Migrations:
alembic upgrade head

# Start FastAPI Development Server:
uvicorn app.main:app --reload --port 8000
```

### 2.2 Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Running on http://localhost:5173
```

---

## 3. Verification & Testing Commands

```bash
# Frontend Typecheck
cd frontend && npx tsc --noEmit -p tsconfig.app.json

# Frontend Lint
npm run lint

# Backend Test Suite
pytest backend/tests
```
