/**
 * Projets affichés dans la section « 01 — Projets ».
 *
 * Pour ajouter un projet :
 *   1. ajouter une entrée ci-dessous (id unique) ;
 *   2. ajouter ses textes sous `projects.items.<id>` dans src/locales/fr.json et en.json
 *      (clés : title, type, description).
 */

export type ProjectRole = 'solo' | 'pair' | 'team'

export interface Project {
  /** Identifiant, aussi utilisé comme clé i18n : projects.items.<id> */
  id: string
  /** Numéro affiché, ex. « P/02 » */
  code: string
  role: ProjectRole
  stack: string[]
  /** Dépôt GitHub « owner/repo ». À omettre si le dépôt est privé : la carte n'a alors pas de lien. */
  repo?: string
  /** Carte vedette (une seule) */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'pulse',
    code: 'P/01',
    role: 'solo',
    stack: ['Swift', 'Xcode', 'macOS'],
    repo: 'latifcodess/Pulse',
    featured: true,
  },
  {
    id: 'openInVsCode',
    code: 'P/02',
    role: 'solo',
    stack: ['Swift', 'SwiftUI', 'FinderSync'],
    repo: 'latifcodess/OpenInVsCode',
  },
  {
    id: 'passionLecture',
    code: 'P/03',
    role: 'pair',
    stack: ['Vue 3', 'AdonisJS 6', 'MySQL', 'VineJS'],
    repo: 'AsDeLaGachette/PassionLecture',
  },
  {
    id: 'runeado',
    code: 'P/04',
    role: 'team',
    stack: ['AdonisJS 6', 'Edge', 'Lucid', 'MySQL'],
    // Dépôt privé : pas de lien
  },
  {
    id: 'dockerSwarm',
    code: 'P/05',
    role: 'solo',
    stack: ['Docker Swarm', 'Nginx', 'MariaDB', 'DockGraph'],
    repo: 'latifcodess/347-docker-swarm-wordpress',
  },
  {
    id: 'flashcards',
    code: 'P/06',
    role: 'solo',
    stack: ['AdonisJS', 'MVC', 'JavaScript'],
    repo: 'latifcodess/FlashCards',
  },
]

export const repoUrl = (repo: string) => `https://github.com/${repo}`
