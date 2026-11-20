import db from '../pg-client'

/**
 * 
 * @param {*} user_id 
 * @param {*} note_data 
 * @returns note
 */
export async function newNote(user_id, note_data) {
  const { date, title, description, type, fields } = note_data
  
  const { rows: [note] } = await db.query(
    `
    insert into notes (user_id, date, title, description, type, fields)
    values ($1, $2, $3, $4, $5, $6)
    returning
      id,
      user_id,
      to_char(date, 'YYYY-MM-DD') as date,
      title,
      description,
      type,
      fields
    `, [user_id, date, title, description, type, JSON.stringify(fields)])
  
  return note
}

/**
 * 
 * @param {*} id 
 * @returns note
 */
export async function getNote(id) {
  // const { rows: [note] } = await db.query(`select * from notes where id = $1`, [id])
  const { rows: [note] } = await db.query(
    `select id, user_id, to_char(date, 'YYYY-MM-DD') as date, title, description, type, fields
    from notes where id = $1`,
    [id]
  )
  
  return note
}

/**
 * 
 * @param {*} user_id 
 * @returns user's notes 
 */
export async function getNotes(user_id) {
  // const { rows: notes } = await db.query(`select * from notes where user_id = $1`, [user_id])
  const { rows: notes } = await db.query(
    `select id, user_id, to_char(date, 'YYYY-MM-DD') as date, title, description, type, fields
    from notes where user_id = $1`,
    [user_id]
  )
  
  return notes
}

/**
 * 
 * @param {*} user_id 
 * @param {*} date 
 * @returns user's notes for a specified date
 */
export async function getNotesByDate(user_id, date) {
  // const { rows: notes } = await db.query(`select * from notes where user_id = $1 and date = $2`, [user_id, date])
  const { rows: notes } = await db.query(
    `select id, user_id, to_char(date, 'YYYY-MM-DD') as date, title, description, type, fields
    from notes where user_id = $1 and date = $2`,
    [user_id, date]
  )
  
  return notes
}
