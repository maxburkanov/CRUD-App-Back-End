const express = require('express');
const router = express.Router();
const Customers = require('../models/Customers');

// GET ALL
router.get('/customers', async (req, res) => {
  let customers;
  try {
    customers = await Customers.find({});
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
  res.status(200).json(customers);
});

// POST
router.post('/customers', async (req, res) => {
  let newCreatedCustomer;
  try {
    const newData = new Customers(req.body);
    newCreatedCustomer = await newData.save();
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
  res.json(newCreatedCustomer);
});

// DELETE
router.delete('/customers', async (req, res) => {
  const id = req.query.id;
  let deletedCustomer;
  try {
    deletedCustomer = await Customers.findByIdAndDelete({ _id: id });
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
  res.json(deletedCustomer);
});

// UPDATE
// router.put('/customers', async (req, res) => {

// })

module.exports = router;

