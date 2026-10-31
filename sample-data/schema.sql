/* drop table if exists goals; */
drop table if exists notes;
drop table if exists users;

create table users (
    id serial primary key,
    username text unique not null,
    password_hash text not null
);

create table notes (
    id serial primary key,
    user_id int not null references users(id) on delete cascade,
    date date not null,
    title text,
    description text,
    type text not null,
    body json not null
);

/* Not in MVP

create table goals (
    id serial primary key,
    user_id int not null references users(id) on delete cascade,
    title text,
    description text,
    duration_start date not null,
    duration_end date not null,
    completed boolean not null
);

*/

/* Assessment from Codex

Goal completion: completed is still a required boolean on the goal itself. That works for a one-time goal, but doesn’t say how recurring goals are evaluated across weeks or months. You may need separate goal periods or occurrences later.

Note type and body: type accepts any text, and body is unvalidated JSON. Define allowed note types and validate each body shape in the API. Consider jsonb if you expect to query JSON fields.

Query performance: consider indexes for notes by (user_id, date) and goals by (user_id, duration_start, duration_end).

Local reset safety: the script still drops the tables. Label it as a local development reset so it can’t be mistaken for a production migration.

*/
