# Yibo Wang

Source for **https://yiboprofile.github.io**, a portfolio of the products Yibo Wang built and the people they brought in.

Content and data by Yibo Wang; site designed and built with Claude Code.

## Run it

```bash
npm ci
npm run dev
```

`npm run dev` and `npm run build` show the review version, with the blanks still to be written highlighted.
`npm run build:release` builds the public version that hides them.

## Deploy

Every push to `main` builds the release version and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). The site asks search engines not to index it.

Built with Vite, React 19, TypeScript and Tailwind CSS v4.
