# Multi-stage Dockerfile for Bagback AI Workspace Showcase
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm ci

COPY src/ ./src/
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY index.html ./
COPY src/ ./src/

EXPOSE 3000
CMD ["node", "-e", "import('http').then(h => h.createServer((_, r) => { import('fs').then(f => f.createReadStream('./index.html').pipe(r)) }).listen(3000, () => console.log('Showcase running on http://localhost:3000')) )"]
