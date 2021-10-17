import express from 'express'; // lib import

import Connection from './connection/db.js' // component import 

const app = express();



Connection();

app.listen(8000, ()=>console.log(`Server running on port 8000`));