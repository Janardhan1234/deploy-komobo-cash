const express = require('express')
const app = express()
app.use(express.static(__dirname+'/dist/kombocash2'))
app.get('**',(req,res)=>{
    return res.sendFile(__dirname+'/dist/kombocash2/index.html')
})
app.listen(process.env.PORT || 5000,()=>{
    console.log('server is running.')
})