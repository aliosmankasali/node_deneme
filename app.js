const express = require('express');
const app = express();
//router require
const userRouter = require('./routers/usersRouter');
//view engine ayarları

app.set('view engine','pug');

//İndex Router
app.get('/',(req,res,next)=>{
    res.render('index');
});
app.use('/admin', userRouter);

app.listen(3000,()=>{
    console.log('sunucu Çalıştı');
});