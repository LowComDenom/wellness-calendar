import bcrypt from 'bcryptjs'

import db from '../pg-client'

const SALT = Number(process.env.SALT_LVL)

/*
  To-do:
  - make sure that username and password inputs are validated somewhere down the line
  - change to `returning id, username` in the future
  - give feedback to users who attempt to use a duplicate username
*/

export async function register(username, password) {
  const password_hash = await bcrypt.hash(password, SALT)
  const { rows: [user] } = await db.query(
    `
    insert into users (username, password_hash)
    values ($1, $2)
    returning *
    `
    , [username, password_hash])
  return user
}

  
