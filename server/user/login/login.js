const express = require('express');
const router = express.Router();
const models = require('../../../models');

router.get('/', (req, res) => {
    models.USER.findAll(
        {
            where: {
                //user_id: req.user.user_id
                user_id: 'yamap789@gmail.com'
            }
        }
    ).then(result => {
        console.log('デバックログlogin.js');

//        console.log('req.USER.user_id : ');
//        console.log(req.USER.user_id);

        console.log('req : ' + req);
        console.log('req.USER : ' + req.USER);
  
        console.log('req.params : ');
        console.log(req.params);

        console.log('req.params.USER : ' + req.params.USER);

        console.log('req.body : ');
        console.log(req.body);

        console.log('req.body.USER : ' + req.body.USER);
        console.log('req.body.params : ' + req.body.params);
        console.log('req.body.USER.user_id : ' + req.body.USER.user_id);
        console.log('req.body.USER.password : ' + req.body.USER.password);
        console.log('req.params.USER.user_id : ' + req.params.USER.user_id);
       console.log('req.params.USER.password : ' + req.params.USER.password);
        res.send(result);
        //チェックしてOKだったら、リダイレクト。NGなら、エラーメッセージ
    }
    );

});

module.exports = router;
