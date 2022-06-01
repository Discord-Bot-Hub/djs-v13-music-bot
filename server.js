const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Extinct Host On✅')
})

app.listen(port, () => {
  console.log(`Ready To host at : ${port}`)
})