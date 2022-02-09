import express from 'express'; // lib import
import cors from 'cros'
import bodyParser from 'body-parser'


import Connection from './connection/db.js' // component import 
import Route from './routes/route.js'

const app = express();

app.use('/', cors());
app.use('/', bodyParser.urlencoded({extended : true})); // body parser for urlencoded and json content types 
app.use('/', bodyParser.json({extended : true}))
app.use('/', Route)


Connection();

app.listen(8000, ()=>console.log(`Sever running on port 8000`));