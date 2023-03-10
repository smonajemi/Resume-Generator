const express = require('express')
const path = require('path')
const app = express()
const port = process.env.REACT_APP_PORT || 9000
const cors = require('cors')
// const connectDB = require('./db');

// async function startServer() {
//     try {
//       const data =  await connectDB();
//       if (!data) throw new Error("hello")
//       // your server code here
//     } catch (error) {
//       console.log('sina', error)
//     }
// }
// startServer()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
   console.log(`Server is running on port: ${port}`)
})