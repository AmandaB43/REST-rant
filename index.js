//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./controllers/places')
//const methodOverride = requre('method-override')
//const mongoose = require('mongoose')


//Express Settings
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine() )
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
//app.use(methodOverride('_method'))
//app.use('/places', router)

//Controllers and Routes
app.use('/places',require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get ('*', (req,res) =>{
        res.render('error404')
})


app.listen(process.env.PORT)

