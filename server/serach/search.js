const express = require('express');
const router = express.Router();
const models = require('../../models');

/**
 * 質問に対する回答を取得する。
 */
router.get('/ai', (req, res) => {
    const qa = {
        question: '質問',
        answer: '答え'
    };
    res.send(qa);
});

/**
 * QAを全件検索する。
 */
router.get('/all', (req, res) => {
    models.QA.findAll({
        attributes:['id', 'question', 'answer']
    }).then(qas =>{
        res.status(201).json({
            successFlg: true,
            data: { qas }
        });
    }).catch(err => {
        res.status(500).json({
            successFlg: false,
            data: { message: err.message }
        });
    });
});

module.exports = router;
