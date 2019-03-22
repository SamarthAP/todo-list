const express = require('express');
const router = express.Router();

const listitem_controller = require('../controllers/listitem.controller');

router.get('/:id', listitem_controller.item_get);
router.post('/create', listitem_controller.item_create);
router.put('/:id/update', listitem_controller.item_update);
router.delete('/:id/delete', listitem_controller.item_delete);

module.exports = router;