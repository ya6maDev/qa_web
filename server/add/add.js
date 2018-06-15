const express = require('express');
const router = express.Router();
const models = require('../../models');

router.post('/', (req, res) => {
    models.QA.create(req.body)
        .then(() => {
            res
                .status(201)
                .json({ successFlg: true, 
                    data: { message: '登録が完了しました。' } });
        })
        .catch(err => {
            res
                .status(500)
                .json({ successFlg: false, 
                    data: { message: err.message } });
        });
});

module.exports = router;
