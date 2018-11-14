'use strict'

const Sequelize = require('sequelize');  

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//Models/tables
db.bookings = require('./models/Bookings.js')(sequelize, Sequelize);  
db.locations = require('./models/Locations.js')(sequelize, Sequelize);
db.partners = require('./models/Partners.js')(sequelize, Sequelize);
db.pessengers = require('./models/Pessengers.js')(sequelize, Sequelize);
db.transactions = require('./models/Transactions.js')(sequelize, Sequelize);


//Relations
db.bookings.hasMany(db.pessengers);  
db.pessengers.belongsTo(db.bookings);  


module.exports = db;