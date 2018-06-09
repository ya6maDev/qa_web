const express = require('express');
const router = express.Router();

/**
 * 質問に対する回答を取得する。
 */
router.get('/', (req, res) => {
    //console.log('params : ', req)
    const qa = {
        question: '質問',
        answer: '答え'
    };
    res.send(qa);
});

module.exports = router;
