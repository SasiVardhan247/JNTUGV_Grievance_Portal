const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require("cors");
require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT
const authRoutes = require('./routes/auth.route');
const grievanceRoutes = require('./routes/grievance.route')

app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth',authRoutes)
app.use('/api/grievance',grievanceRoutes)

connectDB() //DB connection

app.listen(port,()=>{
    console.log(`Server is running on https://localhost:${port}!!!`);
})