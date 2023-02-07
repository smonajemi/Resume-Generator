
const express = require('express')
const path = require("path");
const app = express()

app.use(express.static(path.join(__dirname, "./public/build")))
app.get("*", (_, res) => {
    res.sendFile(
        path.join(__dirname, "./public/build/index.html"),
        function (error) {
            res.status(500).send(error)
            
        }
    )
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})
