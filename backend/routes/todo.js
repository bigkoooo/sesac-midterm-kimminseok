const express = require('express');
const controller = require('../controller/Ctodo');
const router = express.Router();

// 작업 순서
// read all -> create -> delte -> read one -> update

// GET / => localhost:PORT/
// router.get('/', controller.todo);
router.get('/todos', controller.gettodos);
router.get('/todos/:id', controller.gettodos);
router.post('/todos', controller.posttodos);



// router.patch('/:title', controller.patchPlayer);
// router.delete('/:done', controller.deletePlayer);



module.exports = router;