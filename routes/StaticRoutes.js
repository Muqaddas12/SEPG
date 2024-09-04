const express = require('express')
//importing file from Controller
 const{Generate,Generated}=require('../controller/ExamSheetGenerator')

const Router=express.Router()
//HomePage
Router.get('/',(req,res)=>{
    res.render('index',{title:'Homepage'})
})
Router.post('/Generate',Generate)
Router.get('/Generated',(req,res)=>{
    res.render('GeneratedExamSheets',{title:'GeneratedExamSheets'})
})
module.exports=Router;