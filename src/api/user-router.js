import express from 'express'
const router = express.Router()
export default router

import { register, login } from '../db/query/users'
import { newToken } from '../utils/jwt'
import requireBody from '../middleware/requireBody'

router.post('/register', requireBody(['username', 'password']), async (req, res) => {
  const { username, password } = req.body
  
  const user = await register(username, password)

  const token = newToken({ id: user.id })
  
  res.status(201).send(token)
})

router.post('/login', requireBody(['username', 'password']), async (req, res) => {
  const { username, password } = req.body
  
  const user = await login(username, password)
  
  if (!user) return res.status(401).send('Invalid username or password.')
  
  const token = newToken({ id: user.id })
  
  res.send(token)
})
