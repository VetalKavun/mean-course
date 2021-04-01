const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTOINS');
  next();
})

app.use(bodyParser.json());

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added succesfully'
  });
})

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'erq325ewrew',
      title: 'The first post',
      content: 'The first content'
    },
    {
      id: 'erqwertwrtyrew',
      title: 'The second post',
      content: 'The second content'
    }
  ];
  res.status(200).json({
    message: "Posts fetched succesfully",
    posts: posts
  });
});

module.exports = app;
