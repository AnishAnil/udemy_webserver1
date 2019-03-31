const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3010
const publicDirectoryPath = path.join(__dirname, '../public')
//const stylesheet = path.join(__dirname, '../public/css')

app.set('view engine', 'hbs');
//app.set('views', __dirname + 'views'); //--> Works with this setting
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    //res.render('../views/index') --> Works with this setting
    res.render('index'); 
});

app.get('/weather', (req, res) => {
    res.json({
        forecast: 'It will be very hot',
        Location: 'Bangalore'
    });
});

app.get('*', (req, res) => {
    res.send(`Incorrect Port error 400`);
});

app.listen(`${port}`, () => {
    console.log(`Server started on ${port}`)
});



