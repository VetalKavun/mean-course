const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Post = require('./models/post');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://viatlii:qUZASzAmVeccwdNC@cluster0.eiois.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
  console.log('Connected to the database');
})
.catch((err) => {
  console.log(err);
});


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTOINS');
  next();
})

app.use(bodyParser.json());

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  post.save().then((result) => {
    res.status(201).json({
      message: 'Post added succesfully',
      postId: result.id
    });
  });

})

app.get('/api/posts', (req, res, next) => {
  Post.find()
  .then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched succesfully",
      posts: documents
    });
  });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(() => {
    console.log(req.params.id);
    res.status(200).json({
      message: 'The post deleted from DB'
    })
  })
})



module.exports = app;
