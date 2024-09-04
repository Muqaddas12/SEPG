const express =require('express')
const path=require('path')

const bodyParser=require('body-parser')

//importing routes
const StaticRoutes = require('./routes/StaticRoutes')
const UserAuthentication= require('./routes/UserAuthentication')

const app=express()
// Setting up the template engine ejs
app.set('view engine','ejs')
//resolving the path of views folder
app.set('views',path.resolve('./views'))
//setting up the middleware to accept form data from client side
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//setting up public directory for static files
app.use(express.static(path.resolve(__dirname,'public')))

//Registering the routes in application
app.use('/', StaticRoutes)
app.use('/Login',UserAuthentication)
app.use('/Authenticate',UserAuthentication)



app.listen(3000,()=>{
    console.log('listening on port 3000')
})