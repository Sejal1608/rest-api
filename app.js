const express = require('express');
const app = express();

const router = require('Router');



router.post('/',(req,res,next)=>{
  res.status(200).then(result=>{
    res.status(200).json({
      "status":"_success",
      "userid" : "SejalKumari_11122001",
      "emailId":"sejalkeshripolu@gmail.com",
      "collegeroll":"12015961",
      "evennum":"{4,344,8,10}",
      "oddnum":"{1,3,9,19}"
      
      
    })
  .catch(err=>{
    res.status(400).json({
      error:err
    })
  })
})

module.exports = app;