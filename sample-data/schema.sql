drop table if exists stats;
drop table if exists goals;
drop table if exists notes;
drop table if exists users;

create table users (
    id serial primary key,
    username text unique not null,
    password text not null
);

create table notes (
    user_id int not null references users(id) on delete cascade,
    date date not null,
    title text,
    note text,
    type text not null,
    body json not null
);

create table goals (
    user_id int not null references users(id) on delete cascade,
    title text,
    duration_start date not null,
    duration_end date not null,
    description text,
    completed boolean not null
);

create table stats (
    user_id int not null references users(id) on delete cascade,
    total_notes int not null,
    total_nutrition_notes int not null,
    total_goals int not null,
    goals_completed int not null
);

/* stats entries will have a lot more types */
