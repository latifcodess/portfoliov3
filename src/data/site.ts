export const site = {
  domain: 'latif.codes',
  email: 'latif.krasniqi@eduvaud.ch',
  githubUser: 'latifcodess',
  github: 'https://github.com/latifcodess',
  linkedin: 'https://www.linkedin.com/in/latif-krasniqi-34089a3a9',
  // TODO: renseigner le lien du CV (ex. '/cv.pdf' après l'avoir déposé dans public/)
  cv: '/cv.pdf',
}

/** Lien de repli tant qu'une URL n'est pas renseignée. */
export const hrefOr = (url: string) => url || '#'
