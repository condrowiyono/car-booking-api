module.exports = (sequelize, Sequelize) => {
  const Pessengers = sequelize.define('pessengers', {
  'id': {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  'identityId': {
    type: Sequelize.STRING,
    field: 'identity_id'
  },
  'name': Sequelize.STRING,
  'email': Sequelize.STRING,
  'phone': Sequelize.STRING,
  'age': Sequelize.INTEGER,
  'address': Sequelize.STRING,
  'bookingId': {
    type: Sequelize.INTEGER,
    field: 'booking_id',
  },
  'createdAt': {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  'updatedAt': {
    type: Sequelize.DATE,
    field: 'updated_at',
  }});
  
  return Pessengers;
};

