const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.send('Merhaba Express');
});

app.listen(3000,()=>{
    console.log('sunucu Çalıştı');
});