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
        res.send(result);
        //チェックしてOKだったら、リダイレクト。NGなら、エラーメッセージ
    }
    );

});

module.exports = router;
