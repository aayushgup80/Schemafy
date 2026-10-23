# Schemafy

**Shape your data. Power your app.**

Schemafy is a developer-friendly database studio. Create projects, group tables into schemas, define typed columns, and manage records in a visual editor.

## Current status

The initial studio is under active development.

- Supabase email/password sign-up and sign-in
- Up to 10 projects per account, enforced by a database trigger
- Project website URL metadata
- Visual schemas, tables, typed columns and JSON-backed rows
- Row-level security ownership policies on all Schemafy metadata and records
- Responsive dark UI

The JavaScript SDK generator and secure runtime API for external apps are **not implemented yet**. The current row editor is for authenticated Schemafy users.

## Local development

1. Install Node.js LTS.
2. Copy `.env.example` to `.env.local`.
3. In Supabase project settings, retrieve the project URL and publishable key.
4. Put those values in `.env.local`:

```dotenv
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

5. Install and run:

```bash
npm install
npm run dev
```

## Security

- Never commit `.env` or `.env.local`; `.gitignore` excludes them.
- Only the Supabase URL and publishable key belong in browser configuration.
- Never put a Supabase service-role or secret key in frontend code or this public repository.
- All tables use RLS; records are restricted to their owning account.
- Database migrations are stored in `supabase/migrations/`.

## Architecture notes

Schemas, tables and columns are stored as metadata. Record values are stored in `sf_rows.data` as JSONB, with a generated UUID per row. This lets the studio add user-defined fields without creating a new physical PostgreSQL table for every user's table definition.

Before the generated SDK can safely serve external game clients, Schemafy needs a server-side API that authenticates project-scoped credentials, validates table/column definitions and enforces quotas. Do not use the Schemafy browser publishable key as an external app's data-access credential.
