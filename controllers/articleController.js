const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

//INDEX
router.get('/', (req, res) => {
    Article.find({}, (err, foundArticles) => {
        if(err){
            res.send(err);
          } else {
            console.log(foundArticles);
            res.render('articleIndex.ejs', {
                articles: foundArticles,
            });
          }
    });
});

//NEW
router.get('/new', (req, res) =>{
    res.render('articleNew.ejs')
})

//CREATE
router.post('/', (req, res) => {
    Article.create(req.body, (err, createdArticle) => {
        if(err){
          res.send(err);
        } else {
          console.log(createdArticle);
          res.redirect('/articles');
        }
      })
})


//EDIT
router.get('/:id/edit', (req, res) => {
    Article.findById(req.params.id, (err, foundArticle) => { 
      //WHY WONT _id: req.params.id WORK???? on .find
        if(err){
            res.send(err);
          } else {
            console.log(foundArticle);
            res.render('articleEdit.ejs', {
                article: foundArticle,
                //id: req.params.id
            })
          }
    })
})


//UPDATE
router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, {new: true},(err,updatedArticle)=>{
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(updatedArticle)
      res.redirect('/articles')
    }
  });
});

//SHOW
router.get('/:id', (req, res) => {
  Article.findById(req.params.id, (err, foundArticle) => {
      if(err){
          res.send(err);
        } else {
          console.log(foundArticle);
          res.render('articleShow.ejs', {
              articles: foundArticle,
          });
        }
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
      if(err){
        res.send(err);
      } else {
        console.log(deletedArticle);
        res.redirect('/articles');
      }
    })
})






module.exports = router;