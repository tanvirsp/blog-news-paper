const { AddCategoryService, CategoryService } = require("../services/CategoryServices")

exports.AddCategory =async(req, res) =>{

    const result = await AddCategoryService(req)
    res.status(200).json(result)
}

exports.Category =async(req, res) =>{

    const result = await CategoryService(req)
    res.status(200).json(result)
}