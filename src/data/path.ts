/** Entrées de la section « 03 — Parcours ». Texte : path.items.<key>. */
export interface PathEntry {
  key: string
  /** Faux hash de commit, purement décoratif */
  hash: string
  year: string
  /** Entrée mise en avant (point plein, hash en accent) */
  head?: boolean
}

export const path: PathEntry[] = [
  { key: 'cfc', hash: 'a3f9c21', year: '2028', head: true },
  { key: 'year3', hash: '7d2e0b4', year: '2026' },
  { key: 'start', hash: '4c81f9a', year: '2024' },
]
