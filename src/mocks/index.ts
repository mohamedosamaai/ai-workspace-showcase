import {
  PromptCard,
  McpServerConfig,
  SafetyReport,
  ThreatVectorFlags,
  TokenMetrics,
  ModelTier
} from '../types/index.js';

export const MOCK_PROMPT_CARDS: PromptCard[] = [
  {
    id: 'pmt-c4-arch-01',
    title: 'C4 Architecture Blueprint & Diagram Generator',
    titleAr: 'مُوَلِّد المخططات المعمارية المتقدمة وفق معيار C4',
    description: 'Systematically generates Context, Container, Component, and Sequence diagrams in Mermaid.',
    descriptionAr: 'يولّد تلقائياً مخططات السياق والحاويات والمكونات والتسلسل وفق معيار C4 بدقة عالية.',
    content: 'Act as a Senior Principal Cloud Architect. Generate comprehensive C4 Architecture diagrams for...',
    category: 'architecture',
    tags: ['c4-architecture', 'mermaid', 'system-design', 'cloud'],
    language: 'en',
    useCase: 'Software System Architecture & Documentation',
    recommendedModel: 'gemini-3.7-pro',
    complexity: 'expert',
    tokenCount: 420,
    estimatedCostUsd: 0.00084,
    isVerified: true,
    author: 'Mohamed Osama',
    createdAt: '2026-08-01T00:00:00Z',
    updatedAt: '2026-09-02T00:00:00Z'
  },
  {
    id: 'pmt-sec-audit-02',
    title: 'Zero-Vulnerability DevSecOps & SAST Code Auditor',
    titleAr: 'مدقق الأمان الصارم وتصفير ثغرات الكود وحزم التبعيات',
    description: 'Scans source code for OWASP Top 10, CWE patterns, hardcoded secrets, and dependency CVEs.',
    descriptionAr: 'يفحص الأكواد لاكتشاف ثغرات OWASP Top 10 والأسرار المكشوفة وثغرات الحزم.',
    content: 'Perform an exhaustive DevSecOps static application security testing (SAST) audit on...',
    category: 'security',
    tags: ['security', 'sast', 'codeql', 'owasp', 'audit'],
    language: 'ar',
    useCase: 'Security Hardening & Vulnerability Remediation',
    recommendedModel: 'claude-3.5-sonnet',
    complexity: 'expert',
    tokenCount: 560,
    estimatedCostUsd: 0.00168,
    isVerified: true,
    author: 'Mohamed Osama',
    createdAt: '2026-08-10T00:00:00Z',
    updatedAt: '2026-09-02T00:00:00Z'
  },
  {
    id: 'pmt-mcp-orchestrator-03',
    title: 'Model Context Protocol (MCP) Multi-Server Orchestrator',
    titleAr: 'مُنَسِّق خوادم بروتوكول سياق النموذج المتعددة',
    description: 'Coordinates tool dispatching and tool schema synthesis across connected MCP servers.',
    descriptionAr: 'ينسق استدعاء الأدوات وتحويل مخططات JSON عبر خوادم MCP المتصلة.',
    content: 'Coordinate the execution of multi-step agent tasks using the registered MCP tool catalog...',
    category: 'engineering',
    tags: ['mcp', 'agents', 'tool-calling', 'orchestration'],
    language: 'en',
    useCase: 'Autonomous Agent Tool Dispatching',
    recommendedModel: 'gemini-3.7-flash',
    complexity: 'advanced',
    tokenCount: 380,
    estimatedCostUsd: 0.00038,
    isVerified: true,
    author: 'Mohamed Osama',
    createdAt: '2026-08-20T00:00:00Z',
    updatedAt: '2026-09-02T00:00:00Z'
  }
];

export const MOCK_MCP_SERVERS: McpServerConfig[] = [
  {
    id: 'mcp-github',
    name: 'GitHub MCP Server',
    description: 'Automate issue tracking, PR reviews, repository exploration and Git workflows.',
    transport: 'stdio',
    command: 'docker',
    args: ['run', '-i', '--rm', 'ghcr.io/github/github-mcp-server'],
    isActive: true,
    verifiedPublisher: 'GitHub Official',
    tools: [
      {
        name: 'create_or_update_file',
        description: 'Creates or updates a single file in a GitHub repository',
        parameters: {
          owner: { name: 'owner', type: 'string', description: 'Repository owner', required: true },
          repo: { name: 'repo', type: 'string', description: 'Repository name', required: true },
          path: { name: 'path', type: 'string', description: 'File path', required: true },
          content: { name: 'content', type: 'string', description: 'File content', required: true }
        }
      }
    ]
  },
  {
    id: 'mcp-devpost',
    name: 'Devpost MCP Server',
    description: 'Explore hackathons, submit project stories, and sync competition judging criteria.',
    transport: 'sse',
    serverUrl: 'https://devpost.com/mcp',
    isActive: true,
    verifiedPublisher: 'Devpost Inc.',
    tools: [
      {
        name: 'get_hackathon_overview',
        description: 'Fetches detailed hackathon description and rules',
        parameters: {
          hackathon_id: { name: 'hackathon_id', type: 'string', description: 'Hackathon slug', required: true }
        }
      }
    ]
  },
  {
    id: 'mcp-notion',
    name: 'Notion MCP Server',
    description: 'Search workspaces, manage task databases, and sync project specifications.',
    transport: 'stdio',
    command: 'npx',
    args: ['-y', '@notionhq/notion-mcp-server'],
    isActive: true,
    verifiedPublisher: 'Notion Labs',
    tools: [
      {
        name: 'search_notion',
        description: 'Search pages and databases across Notion workspace',
        parameters: {
          query: { name: 'query', type: 'string', description: 'Search term', required: true }
        }
      }
    ]
  }
];

/**
 * 10-Vector Safety Scanning Engine (Mock Layer)
 */
export function scanPromptSafety(content: string): SafetyReport {
  const lower = content.toLowerCase();
  const flags: ThreatVectorFlags = {
    promptInjection: /ignore\s+(all\s+)?previous|override\s+system\s+role/i.test(lower),
    ignorePrevious: /ignore\s+all\s+instructions/i.test(lower),
    stealTokens: /bearer\s+[a-z0-9_\-\.]+|api[_-]?key/i.test(lower),
    credentialExposure: /ghp_[a-z0-9]{20,}|sk-[a-z0-9]{20,}/i.test(lower),
    rmRf: /rm\s+-rf\s+\/|format\s+c:/i.test(lower),
    curlBash: /curl\s+[^\n|]+\|\s*(ba)?sh/i.test(lower),
    encodedPowerShell: /powershell(\.exe)?\s+-[eE](ncodedCommand)?/i.test(lower),
    phishingLinks: /http[s]?:\/\/[^\s]+\.(ru|xyz|top)\//i.test(lower),
    xssHtmlRisk: /<script[\s\S]*?>[\s\S]*?<\/script>/i.test(lower),
    unsafeMcp: /execute_raw_command|eval\(/i.test(lower)
  };

  const detectedThreats = Object.entries(flags)
    .filter(([_, isTriggered]) => isTriggered)
    .map(([vector]) => vector);

  const passed = detectedThreats.length === 0;

  return {
    scannedAt: new Date().toISOString(),
    passed,
    riskScore: passed ? 0.0 : Math.min(1.0, detectedThreats.length * 0.35),
    detectedThreats,
    flags,
    quarantineRequired: !passed
  };
}

/**
 * Token Metrics & Cost Estimation (Mock Layer)
 */
export function estimateTokenMetrics(content: string, model: ModelTier = 'gemini-3.7-flash'): TokenMetrics {
  const characterCount = content.length;
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const tokenCount = Math.max(1, Math.ceil(characterCount / 3.8));

  const pricingPer1kTokens: Record<ModelTier, number> = {
    'gemini-2.5-flash': 0.0001,
    'gemini-3.7-flash': 0.00015,
    'gemini-3.7-pro': 0.00125,
    'claude-3.5-sonnet': 0.003,
    'gpt-4o': 0.0025,
    'deepseek-v3': 0.0002,
    'llama-3.3-70b': 0.0004
  };

  const pricePerToken = (pricingPer1kTokens[model] || 0.0002) / 1000;
  const estimatedCostUsd = Number((tokenCount * pricePerToken).toFixed(6));

  return {
    tokenCount,
    characterCount,
    wordCount,
    estimatedLatencyMs: Math.max(80, Math.round(tokenCount * 1.8)),
    estimatedCostUsd,
    model
  };
}
