const express =require('express');
const hbs=require('hbs');

const app=express();

app.use(date=(req,res,next)=>{
    let requestDate=new Date();
    let requestDay= requestDate.getDay();
    let requestHours= requestDate.getHours();
    console.log(requestDay,requestHours)
    if(requestDay>0&&requestDay<6){if(requestHours>8&&requestHours<18){next()}};
})

app.set('view engine',hbs);

app.get('/home',(req,res)=>{
    res.render('index.hbs',{name:"home page",image:"https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg"})
})
app.get('/services',(req,res)=>{
    res.render('index.hbs',{name:"Our Services",image:"https://www.n-denkei.com/img/index/banner_service.png"})
})
app.get('/contact',(req,res)=>{
    res.render('index.hbs',{name:"Contact",image:"https://media2.schoenox.net/contact.jpg"})
})

app.listen(3000,(err)=> {
    if(err) console("server is not running")
    else console.log("server is running on port 3000")
})