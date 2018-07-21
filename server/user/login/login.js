const express = require('express');
const router = express.Router();
const models = require('../../../models');

router.get('/', (req, res) => {

    //console.log('req', req);
//    console.log('req : ' + req);
 //   console.log('req.USER : ' + req.USER);

  //  console.log('req.params : ');
  //   console.log(req.params);

  //   console.log('req.params.USER : ' + req.params.USER);

    //  console.log('req.params.id : ');
    //  console.log(req.params.id);

    //  console.log('req.body.id : ');
    //  console.log(req.body.id);

    //  console.log('req.params.user : ');
    //  console.log(req.params.user);

    //  console.log('req.params.user.id : ');
    //  console.log(req.params.user.id);

    //  console.log('req.body.USER : ' + req.body.USER);
    //  console.log('req.body.params : ' + req.body.params);
    //  console.log('req.body.USER.user_id : ' + req.body.USER.user_id);
    //  console.log('req.body.USER.password : ' + req.body.USER.password);
//     console.log('req.params.USER.user_id : ' + req.params.USER.user_id);
  //  console.log('req.params.USER.password : ' + req.params.USER.password);
    console.log("req",req.query.user_id);
    console.log("req_id",req.query.id);
    models.USER.findAll(
        {
            where: {
                user_id: req.query.id
                //user_id: 'yamap789@gmail.com'
            }
        }
    ).then(result => {
        //console.log('デバックログlogin.js');

//        console.log('req.USER.user_id : ');
//        console.log(req.USER.user_id);

        res.send(result);
        //チェックしてOKだったら、リダイレクト。NGなら、エラーメッセージ
    }
    );

});

module.exports = router;
