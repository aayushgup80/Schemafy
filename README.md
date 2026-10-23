# Schemafy

A developer-friendly database studio for creating schemas, tables, and records, then connecting applications through a generated JavaScript SDK.

## Vision

- Supabase Auth for Schemafy accounts
- Up to 10 projects per account
- Visual project, schema, table, column, and row management
- Generated JavaScript SDK for CRUD operations
- Secure server-side data access with ownership checks and row-level security

## Security

Never commit `.env` files or server-side Supabase secrets. Only use a Supabase publishable key in browser code, with correctly configured Row Level Security (RLS). Keep any service-role or secret key in trusted server-side environment variables only.

## Status

Early development. The application, database migrations, and SDK are not yet implemented.
