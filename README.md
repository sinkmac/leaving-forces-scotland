# Leaving the Forces Scotland

Static source of truth for the live Leaving the Forces Scotland civic checklist.

Production: https://leaving-forces-scotland.netlify.app/
Netlify site ID: `30c5a662-d2e0-4d40-95b7-9a4b27710845`

## Deploy

This is a plain static site. `index.html` is the deploy root.

```bash
netlify deploy --prod --dir . --site 30c5a662-d2e0-4d40-95b7-9a4b27710845 --message "<message>"
```

The `/veterans-transition` path is preserved by `_redirects` and redirects to `/`.
