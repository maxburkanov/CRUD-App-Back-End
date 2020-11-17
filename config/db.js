const mongoose = require('mongoose');
require('dotenv').config();

const initAndConnectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('Database Successfully Connected!');
    });
  } catch (err) {
    console.error(err.toString());
    process.exit(1);
  }
};

module.exports = initAndConnectDB;
