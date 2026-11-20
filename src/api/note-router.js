import express from 'express'
const router = express.Router()
export default router

import { newNote, getNotes, getNote, getNotesByDate } from '../db/query/notes'
import requireBody from '../middleware/requireBody'
import requireUser from '../middleware/requireUser'

router.use(requireUser)

router.get('/', async (req, res) => {
  const notes = await getNotes(req.user.id)
  
  res.send(notes)
})

router.post('/', requireBody(['date', 'type', 'fields']), async (req, res) => {
  const note = await newNote(req.user.id, req.body)
  
  res.status(201).send(note)
})

// Get notes from a particular date (Ex: 2026-05-03)
router.param('date', async (req, res, next, date) => {
  const notes = await getNotesByDate(req.user.id, date)
  
  if (notes.length <= 0) return res.status(404).send([])

  if (notes[0].user_id !== req.user.id)
    return res.status(403).send('Authentication error.')
  
  req.notes = notes
  
  next()
})

router.get('/by-date/:date', (req, res) => {
  res.send(req.notes)
})

// Get notes by ID
router.param('id', async (req, res, next, id) => {
  const note = await getNote(id)
  
  if (!note) return res.status(404).send('Note not found.')
  
  if (note.user_id !== req.user.id)
    return res.status(403).send('Authentication error.')
  
  req.note = note
  
  next()
})

router.get('/by-id/:id', (req, res) => {
  res.send(req.note)
})