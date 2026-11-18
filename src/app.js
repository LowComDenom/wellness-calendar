import express from 'express'

import db from './db/pg-client'

const app = express()
const PORT = Number(process.env.PORT)

await db.connect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('nothing to see here')
})

app.post('/', (req, res) => {
  res.send('Got the POST')
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})

