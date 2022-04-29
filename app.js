const express = require('express');
const app = express();
const student = require('./router/student')
const port = process.env.PORT || 3000;

app.use('/student', student)

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(port, () => {
  console.log(`Server is up. Listening on port: ${port}`)
})

