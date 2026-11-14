const express=require('express')
const app = express()
app.get('/data',(req,res)=>{
    const dummy=[{
        username:"rana harsh",
        city:"ranchi",
        age:20
    }
]
res.setHeader('Access-Control-Allow-Origin','http://localhost:5173').json({data:dummy})
// res.setHeader('access_contact')
//     res.send("hello guys")
})
app.listen(8000,()=>{
    console.log("server is running at 8000 port");
})