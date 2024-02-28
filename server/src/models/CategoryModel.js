const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    categoryName: {
        type: String,
        unique: true,
        required: true,
    },
    subCategoryName:[String]
 
   

}, {timestamps:true,versionKey:false})







const CategoryModel = mongoose.model("categories",dataSchema );

module.exports = CategoryModel