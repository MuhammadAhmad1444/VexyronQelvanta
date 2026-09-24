# Vexyron Qelvanta Ltd — website

React + Vite + Tailwind site. Company details live in `src/company.js`; products and services in `src/data.js`.

```bash
npm install
npm run dev     # local dev server
npm run build   # outputs the deployable site to dist/
```

Deploy with the host's default Vite settings (build command `npm run build`, output directory `dist`). `dist/` includes an Apache `.htaccess` for client-side routing.
