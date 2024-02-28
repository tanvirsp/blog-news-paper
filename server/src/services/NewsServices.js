const mongoose =require('mongoose');
const ObjectId= mongoose.Types.ObjectId;

const NewsModel = require("../models/NewsModel");


exports.AddNewsService = async(req) =>{
    try {
        const reqBody = req.body;
        const data = await NewsModel.create(reqBody);

        return {status:"success", data:data};
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}


exports.AllNewsService = async(req) => {
    try {
        // const data = await NewsModel.find({}).limit(20);
       const projectStage ={
        $project: {
            year: {$year: "$createdAt"},
            month: {$month: "$createdAt"},
            day: {$dayOfMonth: "$createdAt"},
            title: 1, 
            image: 1,
            category: 1,
            author: 1,
        }
       }

       const sortStage = { $sort: {"createdAt" : -1}    };
       const limitStage = {$limit: 20}



        const data = await NewsModel.aggregate([
            sortStage,
            limitStage,
            // projectStage,

        ])

        return {status:"success", data:data};
        
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }

}



exports.NewsByCategoryService= async(req) =>{
    try {
        const categody = req.params.category;

        const matchingStage = {$match: {category: categody }}
        const result = await NewsModel.aggregate([
            matchingStage
        ])

        return {status:"success", data:result};

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}



exports.TopNewsByCategoryService= async(req) =>{
    try {
        const category = req.params.category;

        const matchingStage = {$match: {category: category }}
        const sortStage = {$sort: {createdAt: -1}}
        const limitStage = {$limit: 7};
    

        const result = await NewsModel.aggregate([
            matchingStage,
            sortStage,
            limitStage,
        
        ])

        return {status:"success", data:result};

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}



exports.TopNewsService= async(req) =>{
    try {

        const matchingStage = {$match: {tags: {$in:["top"] } }}
        const sortStage = {$sort: {createdAt: -1}}
        const limitStage = {$limit: 5}
        const projectionStage = {
            $project: { title: 1, category: 1, image: 1}
        }

        const result = await NewsModel.aggregate([
            matchingStage,
            sortStage,
            limitStage,
            projectionStage
        ])

        return {status:"success", data:result};

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}

exports.NewsDetailsService = async(req) =>{
    
    try {
        const NewsId = new ObjectId(req.params.id);
        const MatchingStage = { $match: { _id: NewsId} }

        const result = await NewsModel.aggregate([
            MatchingStage

        ])

        return {status:"success", data:result};
        
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}