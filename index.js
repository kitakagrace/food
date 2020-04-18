const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.listen(3000, ()=>{
    console.log('Food App is running on port 3000')
})