const express = require(`express`)
const path = require(`path`)

const app = express()

app.set(`view engine`, 'pug')
// app.use(express.static('css'));
app.use(express.static(path.join(__dirname, "public")))

app.get(`/`, (req, res) => {
  res.render(`index`)
})

app.get(`/about`, (req, res) => {
  res.render(`about`)
})

app.get(`/resume`, (req, res) => {
  res.setHeader('Content-type', 'application/pdf');
  res.sendFile("/resume/Badri-swd.pdf");
})

const port = 3001;

app.listen(port, () => console.log(`this app is listening to port ${port}...`))
