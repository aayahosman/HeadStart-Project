// backend/routes/financialData.js
const express = require('express');
const FinancialData = require('../models/FinancialData');

const router = express.Router();

// Create or update financial data for a user
router.post('/', async (req, res) => {
  const { userId, income, expenses, goals } = req.body;

  try {
    let financialData = await FinancialData.findOne({ userId });

    if (!financialData) {
      financialData = await FinancialData.create({ userId, income, expenses, goals });
    } else {
      financialData.income = income;
      financialData.expenses = expenses;
      financialData.goals = goals;
      await financialData.save();
    }

    res.json(financialData);
  } catch (err) {
    res.status(500).json({ error: 'Error saving financial data' });
  }
});

module.exports = router;
