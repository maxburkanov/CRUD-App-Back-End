const mongoose = require('mongoose');

// schema
const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  courses: {
    type: Array,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
  },
});
// model
const Customers = mongoose.model('Customers', customerSchema);

module.exports = Customers;
