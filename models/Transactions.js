module.exports = (sequelize, Sequelize) => {
  const Transactions = sequelize.define('transactions', {
  'id': {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  'partnerId': {
    type: Sequelize.INTEGER,
    field: 'partner_id'
  },
  'carInfo': {
    type: Sequelize.TEXT,
    field: 'car_info'
  },
  'status': Sequelize.INTEGER,
  'buyerName': {
    type: Sequelize.STRING,
    field: 'buyer_name'
  },
  'buyerEmail': {
    type: Sequelize.STRING,
    field: 'buyer_email'
  },
  'invoiceId': {
    type: Sequelize.STRING,
    field: 'invoice_id'
  },
  'totalAmount': {
    type: Sequelize.INTEGER,
    field: 'total_amount'
  },
  'exipiredTime': {
    type: Sequelize.DATE,
    field: 'expired_time',
  },
  'issuedAt': {
    type: Sequelize.DATE,
    field: 'issued_at',
  },
  'bookedAt': {
    type: Sequelize.DATE,
    field: 'booked_at',
  },
  'cancelAt': {
    type: Sequelize.DATE,
    field: 'cancel_at',
  },
  'failedAt': {
    type: Sequelize.DATE,
    field: 'failed_at',
  },
  'expiredAt': {
    type: Sequelize.DATE,
    field: 'expired_at',
  },
  'createdAt': {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  'updatedAt': {
    type: Sequelize.DATE,
    field: 'updated_at',
  }});
  
  return Transactions;
};