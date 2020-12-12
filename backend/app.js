const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
    const posts =[
       { 
         id: 'fadf12421l', 
         title: 'First server-side post', 
         content: 'This is coming from the server '
        },
     
        { 
         id: 'ksajflaj132', 
         title: 'First server-side post', 
         content: 'This is coming from the server '
        }
    ];
    res.status(200).json({
    message: 'posts fetched succesfully!',
    posts: posts
    });
});

module.exports = app;