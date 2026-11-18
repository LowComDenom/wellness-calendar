import bcrypt from 'bcryptjs'

import db from '../pg-client'

export async function newNote(note_data) {
  const { user_id, date, title, description, type, fields } = note_data
  const { rows: [note] } = await db.query(
    `
    insert into notes (user_id, date, title, description, type, fields)
    values ($1, $2, $3, $4, $5, $6)
    returning *
    `, [user_id, date, title, description, type, JSON.stringify(fields)])
}

export async function getUserNotes(user_id) {
  const { rows: notes } = await db.query(`select * from notes where user_id = $1`, [user_id])
  return notes
}
