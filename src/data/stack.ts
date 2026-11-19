/** Colonnes de la section « 02 — Stack ». Le libellé est la clé i18n stack.columns.<key>. */
export interface StackColumn {
  key: 'languages' | 'frameworks' | 'data' | 'infra' | 'tools'
  items: string[]
}

export const stack: StackColumn[] = [
  { key: 'languages', items: ['TypeScript', 'Swift', 'C#', 'SQL', 'JavaScript'] },
  { key: 'frameworks', items: ['AdonisJS', 'Vue 3', 'Next.js', '.NET MAUI', 'SwiftUI'] },
  { key: 'data', items: ['MySQL · MariaDB', 'PostgreSQL', 'Supabase', 'MongoDB', 'Redis'] },
  { key: 'infra', items: ['Docker · Swarm', 'K3s', 'Nginx', 'Vercel', 'Cloudflare'] },
  { key: 'tools', items: ['Git', 'JetBrains', 'Xcode', 'Bruno', 'Figma'] },
]
