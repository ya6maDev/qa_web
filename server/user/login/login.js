const express = require('express');
const router = express.Router();
const models = require('../../../models');

router.get('/', (req, res) => {

    models.USER.findAll(
        {
            where: {
                user_id: req.query.id
                ,password: req.query.passwd
            }
        }
    ).then(result => {

        res.send(result);
        //チェックしてOKだったら、リダイレクト。NGなら、エラーメッセージ
    }
    );

});

module.exports = router;
