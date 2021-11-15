import mongoose from 'mongoose'

//Async DB Connection method

// const Connection = async () => {
//     try{
//         const connectionString=`mongodb://dbUser:passfordb@content-aggregator-shard-00-00.ajhhe.mongodb.net:27017,content-aggregator-shard-00-01.ajhhe.mongodb.net:27017,content-aggregator-shard-00-02.ajhhe.mongodb.net:27017/content-aggregator?ssl=true&replicaSet=atlas-lqnuzj-shard-0&authSource=admin&retryWrites=true&w=majority`

//         await mongoose.connect(connectionString,{useNewUrlParser : true});
//         console.log(`DB connected!`)
//     }
//     catch(err){
//         console.log(`Oops! DB connection err`,err)
//     }

// }

const Connection=()=>{ 
    
    mongoose.connect(`mongodb://dbUser:passfordb@content-aggregator-shard-00-00.ajhhe.mongodb.net:27017,content-aggregator-shard-00-01.ajhhe.mongodb.net:27017,content-aggregator-shard-00-02.ajhhe.mongodb.net:27017/content-aggregator?ssl=true&replicaSet=atlas-lqnuzj-shard-0&authSource=admin&retryWrites=true&w=majority`)
    .then(()=>console.log(`DB connected!`))
    .catch(err=>console.log(`Oops! DB connection err: ${err}`))
}
export default Connection;