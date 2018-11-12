'use strict'

module.exports = (sequelize, Sequelize) => {
  const Bookings = sequelize.define('bookings', {
  'id': {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  'transactionId': {
    type: Sequelize.INTEGER,
    field: 'transaction_id'
  },
  'dropLocation': {
    type: Sequelize.INTEGER,
    field: 'drop_location'
  },
  'pickLocation': {
    type: Sequelize.INTEGER,
    field: 'pick_location'
  },
  'dropTime': {
    type: Sequelize.DATE,
    field: 'drop_time'
  },
  'pickTime': {
    type: Sequelize.DATE,
    field: 'pick_time'
  },
  'fare': Sequelize.INTEGER,
  'additionalFee': {
    type: Sequelize.INTEGER,
    field: 'additional_fee'
  },
  'discount': Sequelize.INTEGER,
  'totalAmount': {
    type: Sequelize.INTEGER,
    field: 'total_amount'
  },
  'createdAt': {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  'updatedAt': {
    type: Sequelize.DATE,
    field: 'updated_at',
  }});

  return Bookings;
};