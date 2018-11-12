module.exports = (sequelize, Sequelize) => {
  const Partners = sequelize.define('partners', {
  'id': {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  'name': Sequelize.STRING,
  'active': Sequelize.INTEGER,
  'additionalFee': {
      type: Sequelize.STRING,
      field: 'additional_fee'
  },
  'createdAt': {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  'updatedAt': {
    type: Sequelize.DATE,
    field: 'updated_at',
  }});
  
  return Partners;
};
