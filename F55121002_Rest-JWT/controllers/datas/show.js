const datas = require('../../db/databook.json')
const jwt = require('jsonwebtoken');
module.exports = function(req, res) {
    jwt.verify(req.token, 'password', (err, authData) =>{
        if(err){
            res.sendStatus(403);
        }else{
            const data = datas.find(data => data.id_book == req.params.id_book)
            res.send(data);
            authData
        }
    });
}