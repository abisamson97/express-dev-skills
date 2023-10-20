var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
 // All actual paths start with "/skills"

router.get('/new', skillsCtrl.new);
// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/ :id
router.get('/:id', skillsCtrl.show);
// GET /todos/new


module.exports = router;
