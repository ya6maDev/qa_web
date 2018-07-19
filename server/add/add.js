const express = require('express');
const router = express.Router();
const models = require('../../models');

/**
 * 単一QAをDBに登録する。
 */
router.post('/input', (req, res) => {
    // insert文を発行する。
    models.QA.create(req.body.param)
        .then(() => {
            res.status(201).json({
                successFlg: true,
                data: { message: '登録が完了しました。' }
            });
        })
        .catch(err => {
            res.status(500).json({
                successFlg: false,
                data: { message: err.message }
            });
        }); 
});

/**
 * 複数QAをDBに登録する。
 */
router.post('/upload', (req, res) => {
    // 一括でinsert文を発行する。
    models.QA.bulkCreate(req.body.param)
        .then(() => {
            res.status(201).json({
                successFlg: true,
                data: { message: '登録が完了しました。' }
            });
        })
        .catch(err => {
            res.status(500).json({
                successFlg: false,
                data: { message: err.message }
            });
        }); 
});

module.exports = router;
