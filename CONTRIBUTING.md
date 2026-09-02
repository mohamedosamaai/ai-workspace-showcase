# Contributing to Bagback AI Workspace Showcase

Thank you for your interest in contributing! We welcome contributions to our public contracts, mock harnesses, and documentation suites.

---

## 1. Development Workflow

1. **Fork and Clone the Repository:**
   ```bash
   git clone https://github.com/mohamedosamaai/ai-workspace-showcase.git
   cd ai-workspace-showcase
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Typecheck and Tests:**
   ```bash
   npm run typecheck
   npm test
   ```

---

## 2. Commit Message Standards (Conventional Commits)

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` A new feature or contract schema
- `fix:` A bug fix in mock scanner or estimator
- `docs:` Documentation or C4 architecture updates
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `security:` Security patch or SAST rule compliance
- `ci:` Changes to CI/CD workflows and provenance scripts

Example:
```
feat(contracts): add AST token optimization schema
```

---

## 3. Pull Request Guidelines

1. Ensure all unit tests pass with `npm test`.
2. Ensure TypeScript compilation passes with `npm run typecheck`.
3. Link relevant GitHub Issues in the PR description.
4. Verify no proprietary secrets, connection strings, or internal tokens are introduced.
