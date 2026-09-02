/**
 * @package @mohamedosamaai/ai-workspace-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license Proprietary - Bagback Digital Solutions (CR: 218773)
 */

export type LanguageCode = 'ar' | 'en';

export type PromptCategory =
  | 'engineering'
  | 'architecture'
  | 'devops'
  | 'security'
  | 'data-science'
  | 'creative'
  | 'business';

export type ModelTier =
  | 'gemini-2.5-flash'
  | 'gemini-3.7-flash'
  | 'gemini-3.7-pro'
  | 'claude-3.5-sonnet'
  | 'gpt-4o'
  | 'deepseek-v3'
  | 'llama-3.3-70b';

export type ComplexityLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface PromptCard {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  content: string;
  category: PromptCategory;
  tags: string[];
  language: LanguageCode;
  useCase: string;
  recommendedModel: ModelTier;
  complexity: ComplexityLevel;
  tokenCount: number;
  estimatedCostUsd: number;
  isVerified: boolean;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export type McpTransportType = 'stdio' | 'sse' | 'http';

export interface McpToolParameter {
  name: string;
  type: string;
  description: string;
  required: boolean;
}

export interface McpToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, McpToolParameter>;
}

export interface McpServerConfig {
  id: string;
  name: string;
  description: string;
  serverUrl?: string;
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  transport: McpTransportType;
  tools: McpToolDefinition[];
  isActive: boolean;
  verifiedPublisher: string;
}

export interface ThreatVectorFlags {
  promptInjection: boolean;
  ignorePrevious: boolean;
  stealTokens: boolean;
  credentialExposure: boolean;
  rmRf: boolean;
  curlBash: boolean;
  encodedPowerShell: boolean;
  phishingLinks: boolean;
  xssHtmlRisk: boolean;
  unsafeMcp: boolean;
}

export interface SafetyReport {
  scannedAt: string;
  passed: boolean;
  riskScore: number;
  detectedThreats: string[];
  flags: ThreatVectorFlags;
  quarantineRequired: boolean;
}

export interface TokenMetrics {
  tokenCount: number;
  characterCount: number;
  wordCount: number;
  estimatedLatencyMs: number;
  estimatedCostUsd: number;
  model: ModelTier;
}

export interface DeveloperSkillPlaybook {
  id: string;
  name: string;
  description: string;
  category: string;
  targetFramework: string;
  steps: string[];
  prerequisites: string[];
  verificationCriteria: string[];
}
