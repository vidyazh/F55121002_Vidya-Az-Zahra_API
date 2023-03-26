const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


const DatasControllers = require('../controllers/datas/login')
const DatasShowControllers = require('../controllers/datas/show')

router.post('/login', DatasControllers); 
router.post('/databook/:id_book', verifyToken, DatasShowControllers); 

function verifyToken (req, res, next){
  const bearerHeader = req.headers['authorization'];
  console.log('bearerHeader');
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }else{
    res.sendStatus(403)
  }
}

module.exports = router;
