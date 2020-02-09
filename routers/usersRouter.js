const express = require('express');
const router = express.Router();

const userLoginget = router.get('/login', (req,res,next)=>{
    res.render('login');
});

module.exports = router;