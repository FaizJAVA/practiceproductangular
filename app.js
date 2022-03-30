const express =require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const app=express();
const port=process.env.PORT || 3000;
const adminRouteImport=require('./route/adminroute');
mongoose.connect('mongodb+srv://Faizaan:123@newprojectculster.b4vzf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(result=>{
    console.log('Success');
}).catch(err=>{
    console.log(err);
});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/',(request,response)=>{
    response.send('Hello');
});
app.use('/api/admin/',adminRouteImport)
app.listen(port,()=>{
    console.log('Server Running');
})