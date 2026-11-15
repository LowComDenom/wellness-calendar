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
    note_type text not null,
    fields json not null
);
