# Documentation Guide

This guide explains how to complete the Wellness Calendar documentation. The goal is to make the project understandable to a new contributor without documenting plans as if they already work.

## What the documentation covers

- `../README.md` is the repository entry point: what the project is, how to run it, its current status, and where to find deeper documentation.
- `docs.html` is the product overview: who the app is for, its main concepts, current scope, and links to the detail pages.
- `server.html` describes the backend contract and persistence behavior.
- `client.html` describes the web app's routes, screens, and interactions.
- `glossary.html` defines shared product and data terms. Link a term to its detailed explanation when appropriate.
- `info to add.md` is a working-notes file. Treat it as a source of questions and ideas, not as a user-facing specification. Move settled decisions into the relevant page and remove or mark superseded notes.

The README and overview currently describe a broader product than the running code. Keep that distinction explicit. Use **Implemented**, **In progress**, and **Planned** labels wherever a reader could otherwise mistake a roadmap item for working behavior. Update those labels when code changes.

## Recommended order

Write the documentation in this order so that the pages agree with one another:

1. **Resolve shared concepts and open decisions.** Define a note, goal, user, date, statistic, and any recurring behavior. Use the notes in `info to add.md` to identify questions, then record decisions rather than copying unresolved sketches.
2. **Document the data model and server contract.** State what the API accepts and returns, and how records are stored and scoped to a user. This becomes the shared contract for the client.
3. **Document client screens against that contract.** Describe what the user sees and what requests the UI makes, including empty, loading, validation, and error states.
4. **Complete the overview and glossary.** Summarize the now-defined behavior and link to the detailed pages. Keep the glossary consistent with the model and API names.
5. **Update the README last.** Add the actual local setup and deployment workflow once it matches the scripts and configuration in the repository.

If a decision is not settled, add it to a short **Open decisions** section in the relevant page. Do not invent a definitive behavior to make a page look complete.

## Page-by-page content

### README

Keep the README concise. It should answer:

- What the backend repository does and how it relates to the web repository.
- Which features work today and which are planned.
- Prerequisites and exact commands to install dependencies, start the app, and run the local database/seed workflow.
- Required environment variables, with names and safe example values only. Never include credentials or real tokens.
- Where to find the product, server, client, and data documentation.
- The current next steps and deployment target, if chosen.

Only list commands that have been checked against the current project scripts and files. Keep roadmap items in the To-do section; do not describe them as available features.

### `docs.html` - product overview

Expand the existing overview with:

- A short description of the user problem and intended audience.
- The core workflow: create dated notes, set goals, and review progress.
- A compact feature table with status and a link to the relevant page.
- A simple architecture diagram that reflects the current repositories and data flow. Mark future components as planned.
- Technology choices that are in use, separated from technologies under consideration.

Avoid repeating all API or field details here. Keep those on the server and client pages.

### `server.html` - backend behavior and contract

Organize this page into sections for:

1. Runtime and configuration: entry point, port, environment variables, and startup behavior.
2. Authentication and authorization: supported flow, password handling, token/session behavior, and which endpoints require a user. Document only what is implemented; clearly label planned security behavior.
3. Data model: each table/entity, fields, types, nullability, keys, relationships, deletion behavior, and ownership rules. Explain any JSON fields with concrete examples and validation rules.
4. Database operations: query modules, transaction boundaries, and how statistics are stored or derived.
5. API routes: request and response contracts, validation, status codes, and error format.
6. Local development: schema setup, mock seed data, reset behavior, and any data that must never be used outside local development.

Use this template for each endpoint:

```text
### `METHOD /path`

Purpose: ...
Status: Implemented | In progress | Planned
Authentication: Required | Not required

Request
- Path/query parameters: ...
- JSON body: ...

Success response
- Status: ...
- JSON: ...

Errors
- `400`: ...
- `401`: ...
- `404`: ...
- `500`: ...

Data effects: ...
```

Include a compact JSON example for nontrivial payloads. Use the same field names and types as the implementation and client documentation.

### `client.html` - web application behavior

Document the web client as a user-facing guide for contributors:

- Route table: URL, screen/component, purpose, and access requirement.
- Main flows: registration/login, calendar navigation, creating/editing/deleting notes, setting goals, and viewing summaries or statistics, as each becomes implemented.
- Component responsibilities and parent/child relationships for complex screens.
- Data flow: context/state ownership, API calls, and how server responses are represented in the UI.
- Form fields and validation, with links to the server payload contract.
- Loading, empty, success, and error states, including what happens when a request fails.
- Responsive and accessibility expectations that are part of the intended design.

Keep design intentions separate from current behavior. Add screenshots only after the screen exists and is stable enough to represent the current UI.

### `glossary.html` - shared vocabulary

Define terms that could otherwise be interpreted differently across the client, server, and data model. Start with terms from the product notes, such as **note**, **nutrition note**, **fitness note**, **goal**, **recurrence**, **goal period**, **statistic**, and **preset**.

For each entry, give a plain-language definition and, where relevant, the exact field or API name. Clarify units and date/time meanings. Do not use this page as an unstructured inventory of every private helper function; link to source code or a focused technical section for implementation details.

## Decisions to settle before documenting as fact

The notes and schema sketch raise questions that should be resolved and recorded before they become API promises:

- Are nutrition and fitness details represented by one flexible JSON body, separate structures, or a mix? If JSON is used, define a versioned shape and validation rules.
- Are notes and goals assigned to a calendar date, a date range, or both? Define time zone handling and whether times are local or absolute.
- How are recurring goals represented and evaluated? Define the target measure, unit, period, and what counts as success or a missed period.
- Are statistics calculated from notes on demand, persisted, or cached? Define when they refresh and how corrections/deletions affect them.
- Which data is required versus optional, and what is the deletion behavior for notes, goals, users, and derived statistics?
- How does a user authenticate, and how does every read/write ensure one user's data cannot be accessed by another?

The schema file is the source for current database structure; this page should explain its intent and constraints. If the schema changes, update the server docs and any affected client payload examples in the same change.

## Writing and maintenance conventions

- Prefer direct language, short sections, tables for field/route inventories, and examples for complex behavior.
- Use the exact names found in code, SQL, and API payloads. Explain user-facing terms separately when they differ.
- Mark each feature's status. For behavior that is not implemented, use future tense and identify it as planned.
- Link pages with relative paths, for example `server.html#authentication`.
- Keep one canonical description of each contract. Other pages should summarize it and link to the canonical section.
- Include edge cases and failure behavior, not just the happy path.
- Do not put passwords, API keys, real user wellness data, or production connection strings in examples. Use clearly fake values.
- When a behavior changes, update the implementation, examples, and related pages together. Remove obsolete notes or mark them as superseded so they cannot be mistaken for current guidance.

## Completion checklist

- A new contributor can tell what works now and what remains planned.
- The README setup steps match the current scripts and configuration.
- Every documented route and payload matches the backend implementation.
- Client screens and their states match the API contract.
- Schema fields, ownership, constraints, and deletion behavior are explained.
- Dates, units, recurrence, statistics, and authentication have unambiguous definitions.
- Links work, examples are safe, and no contradictory or superseded notes remain.
