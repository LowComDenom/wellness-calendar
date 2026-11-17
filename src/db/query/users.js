import bcrypt from 'bcryptjs'

import db from '../pg-client'

/*
  To-do:
  - make sure that username and password inputs are validated somewhere down the line
  - change to `returning id, username` in the future
  - give feedback to users who attempt to use a duplicate username
*/

export async function register(username, password) {
  const hash = bcrypt.hash(password, process.env.SALT_LVL)
  const { rows: [user] } = await db.query(
    `
    insert into users (username, password_hash)
    values ($1, $2)
    returning *
    `
    , [username, hash])
  return user
}