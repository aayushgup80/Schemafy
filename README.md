# Schemafy

**Shape your data. Power your app.**

Schemafy is a visual database studio built with **plain HTML, CSS and JavaScript**. It connects directly to Supabase and lets you create projects, schemas, tables, typed columns and records.

## No Node.js or build tools

There is no React, Node.js, npm, Vite or bundler requirement.

1. Open the repository in VS Code.
2. Install/use the **Live Server** extension and choose **Open with Live Server** on `index.html`. You can also host the files on any static web host.
3. Enter your Supabase project URL and public publishable/anon key in Schemafy's connection screen.
4. Sign up or sign in and start creating your data model.

The Supabase JavaScript client is loaded in the browser from jsDelivr. Connection details are stored in this browser's local storage. Use only a publishable/anon key; never put a service-role or secret key in browser code.

## Features

- Email/password sign-up and sign-in
- Up to 10 projects per account
- Project website URL metadata
- Visual schemas, tables and typed columns
- JSON-backed rows with add/delete actions
- Row-level security ownership policies on Schemafy metadata and records
- Responsive light-blue and black theme

The JavaScript SDK generator and secure runtime API for external apps are **not implemented yet**. The current row editor is for authenticated Schemafy users.

## Architecture

Schemas, tables and columns are stored as metadata. Record values are stored in `sf_rows.data` as JSONB, with a generated UUID per row. This lets the studio add user-defined fields without creating a new physical PostgreSQL table for every user's table definition.

Before a generated SDK can safely serve external game clients, Schemafy needs a server-side API that authenticates project-scoped credentials, validates table/column definitions and enforces quotas.
