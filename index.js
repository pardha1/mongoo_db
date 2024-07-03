//Import all necessary 
const express = require('express')
const mongoose = require('mongoose')
const app = express()//express app
const port =3001;
const url = 'mongodb+srv://user:user@cluster0.acu9dgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const UserApi = require('./routes/userRouter')
app.use(express.json())
// ->/users -> Router 
app.use('/users',UserApi)
mongoose.connect(url).then(()=>{console.log('Db connected')}).catch((edho)=>{console.log(edho)})
app.listen(port,()=>{console.log(`Server Live at ${port}`)}) //2 pars(port,function)