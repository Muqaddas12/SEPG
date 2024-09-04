const Generate = (req,res)=>{
    const data = req.body
console.log(data)
    if(!data){
        return res.render('index',{status:'Please Select Correct Fields'})
    }
   

res.send('generated')
}


const Generated = (req,res)=>{

}

module.exports={
    Generate,
    Generated
}