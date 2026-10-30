/* The published site is built with VITE_RELEASE=1 (see .github/workflows/deploy.yml).
   In that build every review aid disappears: blanks, "Still to write" lists, the review switch
   and the sections that are still placeholders. Local `npm run dev` keeps them all visible. */
export const RELEASE = import.meta.env.VITE_RELEASE === '1'

/* Public files (images, video) live under the site's base path, which is a sub-folder on GitHub Pages */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
