const express = require('express')
const app = express()
var path = require('path');
const port = 5000 

// function middlewar
const hours = new Date().getHours()
const days= new Date().getDay()
function acces (req, res, next) {
    if (days>0 && days<6 &&(hours >= 9 && hours<=17 ) ) {
        return next()
    }
    else {
        res.send("<h1>site is closed</h1>")
    }
}
app.use(acces) 


// html page to express route

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname + '/ourservice.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.use(express.static('public'));


app.listen(port , (error) => {
    error ? console.log(error)
    :
    console.log(`Server is running on port ${port}..`)
})              