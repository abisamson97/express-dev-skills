const skills = [
    {id: 1, skill: 'JavaScript', learned: true},
    {id: 2, skill: 'Node.JS', learned: true},
    {id: 3, skill: 'Python', learned: false}

];
 
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function getAll() {
    return skills;
  };


function getOne(id) {

    id = parseInt(id);

    return skills.find(skill => skill.id === id);
  };