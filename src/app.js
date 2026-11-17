import express from 'express'

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('nothing to see here')
})

app.post('/', (req, res) => {
  res.send('Got the POST')
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
