const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const app = express(); 
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password:  'password',  
    database: 'songs', 

}); 

app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.json()); 

app.get('/api/get/freestyleWords', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM freestyle_words"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/lyrixx', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM lyrixx"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/library', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM library"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/IWillBecome', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM i_will_become"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/IWBDoc', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM i_w_b_documentary"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
});

app.get('/api/get/year0', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM year0tweet"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/year1', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM year1tweet"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/year2', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM year2tweet"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/year0beats', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM year0beats"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/year1beats', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM year1beats"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/api/get/year2beats', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM year2beats"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 


app.post('/api/insert', (req, res) => {
    const movieName = req.body.movieName; 
    const movieReview = req.body.movieReview; 

    const sqlINsert = 
    "INSERT INTO movie_reviews (review, movie_review) VALUES (?, ?); "
    db.query(sqlINsert, [movieName, movieReview], (err, result) => {
        console.log("congrats"); 
    });                                 
}); 

app.listen(3001, () => {
    console.log(`Serving is running at 3001`);
}); 
