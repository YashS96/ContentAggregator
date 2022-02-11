import mongoose from 'mongoose'

let ArticleSchema =  new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    publishDate : String, //Can be Date as well
    
    content : {
        type : String,
        required : true
    },
    category : {
        type : String, // Can be an array if it belongs to more than 1 category
        required : true
    },
    source : {
        type : String,
        required : true 
    },
    shortListed : {
        type : Object, //  [ user1, user2, user3... ]
        required : true
    }
});

let Article = mongoose.model('Article', ArticleSchema);

export default Article;