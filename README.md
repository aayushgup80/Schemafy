# Schemafy

Schemafy is a visual database studio prototype built with **plain HTML, CSS and JavaScript**. It does not require React, Node.js, npm, Vite, or a Supabase connection.

## Run it

1. Download/clone this repository.
2. Open `index.html` with VS Code Live Server or host the folder as a static site.
3. Select **Create free account**. Create a local account and start using the studio.

## What works in this prototype

- Dedicated landing page, animated `login.html`, overview page, and ten project pages (`proj_1.html` through `proj_10.html`)
- Local sign-up and sign-in screen
- Projects, schemas, tables, columns and records
- Column types: text, number, boolean, JSON and date
- Required/unique column validation for newly added records
- Generated JavaScript command examples for select, insert, update, delete and schema info
- Ten-project cap, separate project navigation pages, and per-project website URL links
- Project JSON export/import and a downloadable project-specific `schemafy-client.js` browser SDK
- Button hover/press animations and animated project cards
- Copy command button
- Responsive light-blue and black design with transitions
- Workspace data stored in browser `localStorage`, separated by local account

## Important prototype limitation

There is **no hosted database or real server authentication yet**. Accounts and workspace data live only in the current browser profile and can be cleared with browser storage. This is for UI/prototype development, not production credentials or multi-device syncing. The downloadable SDK runs in the browser and stores records in that app's localStorage. It is useful for a same-origin prototype, but it is **not a hosted database API** and will not sync data between devices or users.

A production version will need a backend database, secure authentication, project-scoped credentials, and a runtime API before other apps can execute commands against hosted tables.
