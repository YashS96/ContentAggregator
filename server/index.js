import express from 'express'; // lib import
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'


import Connection from './connection/db.js' // component import 
import Route from './routes/route.js'
import User from './model/user.js';

const app = express();

app.use('/', cors());
app.use('/', bodyParser.urlencoded({extended : true})); // body parser for urlencoded and json content types 
app.use('/', bodyParser.json({extended : true}))
app.use('/', Route)

dotenv.config();

//env variables for global usage
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 

Connection(username,password);

app.listen(8000, ()=>console.log(`Sever running on port 8000`));