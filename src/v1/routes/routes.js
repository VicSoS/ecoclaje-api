const { Router } = require('express');
const router = Router();

router.get('/hol', (req, res) => {
    res.json({ message: 'Hello World' });
});

module.exports = router;