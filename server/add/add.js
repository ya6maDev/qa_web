const express = require('express');
const router = express.Router();
const models = require('../../models');

router.post('/', (req, res) => {

    models.QA.create(req.body)
        .then(() => {
            res.status(201).json({data: {message: '登録が完了しました。'}});
        })
        .catch(err => {
            console.log('err : ', err.message);
            res.status(500).json({ error: true, data: { message: err.message } });
        });
});

module.exports = router;
