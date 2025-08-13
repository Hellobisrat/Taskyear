import express from 'express'
import connect from './db/connect.js';

const PORT = 5000;


const app = express();

app.use(express.json())
//app.use(cors())


app.listen(()=>{
  connect();
  console.log(`app start listening at http:localhost/${PORT}`)
})