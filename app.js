const express = require('express');
const app = express();
const path = require('path');
//router require
const userRouter = require('./routers/usersRouter');
//view engine ayarları

app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'public')));

//İndex Router
app.get('/',(req,res,next)=>{
    res.render('index');
});
app.use('/admin', userRouter);

app.listen(3000,()=>{
    console.log('sunucu Çalıştı');
});