const jwt = require('jsonwebtoken');
module.exports = function(req, res, next) {
    const user = {
        id: 1,
        username:  'vidya412',
        email: 'vidyaazzahra@gmail,com'
      }
    
      jwt.sign({user}, 'password', { expiresIn: '1 days' }, (err, token) =>{
        res.json({token})
      });
}