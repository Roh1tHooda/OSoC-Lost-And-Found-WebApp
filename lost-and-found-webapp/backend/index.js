const express = require("express");
const connectToMongo = require("./db");

const app = express();
const port = 3000;

connectToMongo();

app.use(express.json()) 

app.use('/feedback', require('./routes/feedback'))  

app.listen(port, () => {
    console.log(`myNoteBook backend listening on port ${port}`)
  })