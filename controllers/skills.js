const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkills
  };

  function newSkills(req, res) {
    res.render('skills/new', { title: 'New Skills' });
  }

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  };

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skill Details'
    });
  }