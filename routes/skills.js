var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
 // All actual paths start with "/skills"

router.get('/new', skillsCtrl.new);
// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/ :id
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create); 

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
