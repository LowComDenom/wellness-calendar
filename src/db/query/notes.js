import db from '../pg-client'

export async function newNote(user_id, note_data) {
  const { date, title, description, type, fields } = note_data
  
  const { rows: [note] } = await db.query(
    `
    insert into notes (user_id, date, title, description, type, fields)
    values ($1, $2, $3, $4, $5, $6)
    returning *
    `, [user_id, date, title, description, type, JSON.stringify(fields)])
  
  return note
}

export async function getNote(id) {
  const { rows: [note] } = await db.query(`select * from notes where id = $1`, [id])
  
  return note
}

export async function getNotes(user_id) {
  const { rows: notes } = await db.query(`select * from notes where user_id = $1`, [user_id])
  
  return notes
}

export async function getNotesByDate(user_id, date) {
  const { rows: notes } = await db.query(`select * from notes where user_id = $1 and date = $2`, [user_id, date])
  
  return notes
}
