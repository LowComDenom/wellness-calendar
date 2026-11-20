import bcrypt from 'bcryptjs'

import db from '../pg-client'

const SALT = Number(process.env.SALT_LVL ?? 10)

/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @returns user
 */
export async function register(username, password) {
  const password_hash = await bcrypt.hash(password, SALT)
  
  const { rows: [user] } = await db.query(
    `
    insert into users (username, password_hash)
    values ($1, $2)
    returning id, username
    `
    , [username, password_hash])
  
  return user
}

/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @returns user
 */
export async function login(username, password) {
  const { rows: [user] } = await db.query(`select * from users where username = $1`, [username])
  
  if (!user) return null
  
  const verified = await bcrypt.compare(password, user.password_hash)
  
  if (!verified) return null
  
  return user
}

/**
 * 
 * @param {*} id 
 * @returns user
 */
export async function getUser(id) {
  const { rows: [user] } = await db.query(`select * from users where id = $1`, [id])
  
  return user
}