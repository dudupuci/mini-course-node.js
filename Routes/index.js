const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    return res.send({
        message: 'GET OK!'
    })
});

router.post('/', (req, res) => {
    return res.send({
        message: 'POST OK!'
    })
});


module.exports = router;