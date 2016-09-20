var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
        'article-one' : { 
            title: 'Article One',
            heading: 'Article One',
            content : ' This is the first article '
        },
        
        'article-two ': { 
            title: 'Article Two',
            heading: 'Article Two',
            content : ' This is the second article '
        },
        
        'article-three' :{ 
            title: 'Article Three',
            heading: 'Article Three',
            content : ' This is the third article '
        }
};

function createtemplate(data){
        var title  = data.title;
        var heading=data.heading;
        var content=data.content;
        var htmltemplate=`
                <!doctype html>
                <html>
                <head>
                <title>
                ${title}
                </title>
                <link rel="stylesheet" href="/ui/style.css">
                </head>
                <body>
                <div id="container">
                <h1><font color="red">${heading}</font></h1>
                <br/>
                <a href="/">Home</a>
                <br/>
                ${content}
                </div>
                </body>
                </html>
                `;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:ArticleName', function (req, res) {
   var ArticleName = req.params.ArticleName ;
   res.send(createtemplate(articles[ArticleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req , res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
