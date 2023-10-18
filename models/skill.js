const skills = [
    {id: 1, skill: 'JavaScript', learned: true},
    {id: 2, skill: 'Node.JS', learned: true},
    {id: 3, skill: 'Python', learned: false}

];
 
module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  };


function getOne(id) {

    id = parseInt(id);

    return skills.find(skill => skill.id === id);
  };