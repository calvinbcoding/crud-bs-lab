const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// router.get('/', (req, res) => {
//     res.send('authorIndexRouterhit')
// });


//INDEX
router.get('/', (req, res) => {
    Author.find({}, (err, foundAuthors) => {
        if(err){
            res.send(err);
          } else {
            console.log(foundAuthors);
            res.render('authorIndex.ejs', {
                authors: foundAuthors,
            });
          }
    });
});


//NEW
router.get('/new', (req, res) =>{
    res.render('authorNew.ejs')
})

//CREATE
router.post('/', (req, res) => {
    Author.create(req.body, (err, createdAuthor) => {
        if(err){
          res.send(err);
        } else {
          console.log(createdAuthor);
          res.redirect('/authors');
        }
      })
})


//EDIT
router.get('/:id/edit', (req, res) => {
    Author.findById(req.params.id, (err, foundAuthor) => { 
      //WHY WONT _id: req.params.id WORK???? on .find
        if(err){
            res.send(err);
          } else {
            console.log(foundAuthor);
            res.render('authorEdit.ejs', {
                author: foundAuthor,
                //id: req.params.id
            })
          }
    })
})


//UPDATE
router.put('/:id', (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body, {new: true},(err,updatedAuthor)=>{
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(updatedAuthor)
      res.redirect('/authors')
    }
  });
});

//SHOW
router.get('/:id', (req, res) => {
  Author.findById(req.params.id, (err, foundAuthor) => {
      if(err){
          res.send(err);
        } else {
          console.log(foundAuthor);
          res.render('authorShow.ejs', {
              authors: foundAuthor,
          });
        }
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  Author.findByIdAndDelete(req.params.id, (err, deletedAuthor) => {
      if(err){
        res.send(err);
      } else {
        console.log(deletedAuthor);
        res.redirect('/authors');
      }
    })
})


module.exports = router;