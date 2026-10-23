# Schemafy

Schemafy is a visual database studio prototype built with **plain HTML, CSS and JavaScript**. It does not require React, Node.js, npm, Vite, or a Supabase connection.

## Run it

1. Download/clone this repository.
2. Open `index.html` with VS Code Live Server or host the folder as a static site.
3. Select **Create free account**. Create a local account and start using the studio.

## What works in this prototype

- Dedicated landing page, `login.html`, and `app.html`
- Local sign-up and sign-in screen
- Projects, schemas, tables, columns and records
- Column types: text, number, boolean, JSON and date
- Required/unique column validation for newly added records
- Generated JavaScript command examples for select, insert, update, delete and schema info
- Copy command button
- Responsive light-blue and black design with transitions
- Workspace data stored in browser `localStorage`, separated by local account

## Important prototype limitation

There is **no hosted database or real server authentication yet**. Accounts and workspace data live only in the current browser profile and can be cleared with browser storage. This is for UI/prototype development, not production credentials or multi-device syncing. The command panel generates examples; it is not a live external database API or SDK yet.

A production version will need a backend database, secure authentication, project-scoped credentials, and a runtime API before other apps can execute commands against hosted tables.
