module.exports = (sequelize, Sequelize) => {
  const Locations = sequelize.define('locations', {
  'id': {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  'name': Sequelize.STRING,
  'address': Sequelize.STRING,
  'city': Sequelize.STRING,
  'createdAt': {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  'updatedAt': {
    type: Sequelize.DATE,
    field: 'updated_at',
  }});
  
  return Locations;
};
