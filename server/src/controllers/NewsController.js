const { AddNewsService, SliderNewsService, NewsByCategoryService, TopNewsService, AllNewsService, TopNewsByCategoryService, NewsDetailsService } = require("../services/NewsServices")

exports.AddNews = async(req, res) =>{
    const result = await AddNewsService(req)
    res.status(200).json(result)
}


exports.TopNewsByCategory = async(req, res) =>{
    const result = await TopNewsByCategoryService(req)
    res.status(200).json(result)
}


exports.NewsByCategory = async(req, res) =>{
    const result = await NewsByCategoryService(req)
    res.status(200).json(result)
}

exports.TopNews = async(req, res) =>{
    const result = await TopNewsService(req)
    res.status(200).json(result)
}


exports.AllNews = async(req, res) =>{
    const result = await AllNewsService(req)
    res.status(200).json(result)
}


exports.NewsDetails = async(req, res) =>{
    const result = await NewsDetailsService(req)
    res.status(200).json(result)
}