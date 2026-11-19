import express from 'express'

import db from './db/pg-client'
import getUserFromToken from './middleware/getUserFromToken'
import userRouter from './api/user-router'
import noteRouter from './api/note-router'

const app = express()
const PORT = Number(process.env.PORT ?? 3000)

await db.connect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(getUserFromToken)

app.use('/users', userRouter)
app.use('/notes', noteRouter)

app.get('/', (req, res) => {
  res.send('nothing to see here')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Something went wrong.')
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})