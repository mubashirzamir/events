const router = require('express').Router();
const EventController = require('../controllers/EventControllers');

router.get('', EventController.getPrograms);
router.get('/:event_id', EventController.getPrograms);

module.exports = router;
