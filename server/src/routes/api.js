const express = require('express');
const router = express.Router()

const upload = require('../middleware/uploader');

const NewsController = require("../controllers/NewsController");
const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");
const AuthVerification = require('../middleware/AuthVerification');

//image upload
router.post("/file-upload", upload.single('image'),  async(req, res) =>{
    try {
        
      res.status(200).send({status: true, data: req.file});
    } catch (error) {
        res.status(400).send({status: false,  message: error.message})
        
    }
  
  });



  //News API
  router.post('/news', AuthVerification,  NewsController.AddNews );
  router.get('/news',  NewsController.AllNews );
  router.get("/news/:category", NewsController.NewsByCategory);
  router.get("/details/:id", NewsController.NewsDetails);



  //top 7 news for home page API
  router.get("/news/top/:category", NewsController.TopNewsByCategory);

  router.get("/top-news", NewsController.TopNews);



  //User API
  router.post('/user', UserController.Register );
  router.post('/login', UserController.Login );
  router.get('/logout', UserController.Logout );
  
  //Category API
  router.post('/category', AuthVerification, CategoryController.AddCategory);
  router.get('/category', AuthVerification, CategoryController.Category);











  


module.exports = router;