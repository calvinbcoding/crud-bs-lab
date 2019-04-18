const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// router.get('/', (req, res) => {
//     res.send('authorIndexRouterhit')
// });

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

router.get('/new', (req, res) =>{
    res.render('authorNew.ejs')
})
//redirect cannot reference a .ejs file
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

router.get('/:id/edit', (req, res) => {
    Author.find({_id:req.params.id}, (err, foundAuthor) => {
        if(err){
            res.send(err);
          } else {
            console.log(foundAuthor);

            res.render('authorEdit.ejs', {
                author: foundAuthor
            })
          }
    })
})


router.put('')







module.exports = router;