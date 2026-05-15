# Dossier 81 System (WorkFamilyAI)

This folder is the canonical implementation pack for the **81 Dossier** operating model.

## What this is
- 81 dossiers (9×9) are the *human-scale* operating units.
- Each dossier is backed by a 4–5 member agent crew.
- Every action routes through: **dossier → crew → tasks → activity → evidence**.

## Why 81 not 727
- 727/729 is the full role universe.
- 81 is the durable set of *life cells* you can actually run continuously.

## Files
- `supabase/ddl_dossier_core.sql` — database tables, views, triggers
- `schemas/dossier_81.schema.json` — machine dossier schema (JSON Schema)
- `schemas/crew.schema.json` — crew and crew-member schema
- `templates/dossier_one_pager.md` — human-readable dossier template
- `scripts/seed_dossiers_81.py` — deterministic seeding script (81 dossiers + default crews)

## Status
- This repo commit is an implementation pack.
- **BLOCKED** for canonical push into `TML-4PM/the-pen` because the GitHub app does not currently have access to that repo.

## Next moves
1) Apply the SQL to Supabase
2) Run the seed script
3) Bind real agents (from 727) to crew member slots
4) Turn on mandatory telemetry + evidence enforcement
