const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    title: {type: String, required: true},
    des: {type: String, required: true},
    image: {type: String,  required: true},
    category:{type:String, required:true },
    tags: {type: [String], required: true},
    view: {type: Number, default: 0} ,
    author: {type: String, required: true},

}, {timestamps:true,versionKey:false})







const NewsModel = mongoose.model("news",dataSchema );

module.exports = NewsModel