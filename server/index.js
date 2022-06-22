import express from 'express'; // lib import
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cluster from 'cluster' // PM2 is a better tool for scaling to multiple cores
import os from 'os'


import Connection from './connection/db.js' // component import 
import logger from './logger/index.js' 
import Route from './routes/route.js'
import User from './model/user.js';

//cluster.IsPrimary vs cluster.IsMater (deprecated) 
//cluster.isWorker

    if(cluster.isPrimary){
        const cpuCount = os.cpus().length;
        console.log(`CPU cores: ${cpuCount}`)

        // creating server for each CPU core
        for(let i=0;i< cpuCount; i++){
            logger.info(`forking ${i}:`)
            cluster.fork();
        }
        // listeing to dying worker to spin them up again
        cluster.on('exit', () => {
            cluster.fork()
        })
    }
    else{
        const app = express();

        app.use('/', cors());
        app.use('/', bodyParser.urlencoded({extended : true})); // body parser for urlencoded and json content types 
        app.use('/', bodyParser.json({extended : true}))
        app.use('/', Route)

        dotenv.config();

        //env variables for global usage
        const username = process.env.DB_USERNAME;
        const password = process.env.DB_PASSWORD; 
        const port = process.env.PORT

        Connection(username,password);

        app.listen(port, ()=>logger.info(`Sever running on port ${port}`));
    }

