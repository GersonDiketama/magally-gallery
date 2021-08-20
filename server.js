const express = require('express');

const app = express();

const path =  require('path')



app.use(express.static(path.join(__dirname,"public")))


app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.use(express.static(path.join(__dirname,"Bilamba")))
app.use(express.static(path.join(__dirname,"Rido")))
app.use(express.static(path.join(__dirname,"Suki")))


app.get('/Bilamba', (req, res) =>
{
    res.redirect('bilamba.html')
})


app.get('/Suki', (req, res) =>
{
    res.redirect('Suki.html')
})


app.get('/Rido', (req, res) =>
{
    res.redirect('Rido.html')
})








  

app.listen(3000, function(){console.log('Server running on Port 3000')})