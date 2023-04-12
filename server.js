const express = require('express')
const path = require('path')
const app = express()
const port = process.env.REACT_APP_PORT || 9000
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.listen(port, () => {
   console.log(`Server is running on port: ${port}`)
})