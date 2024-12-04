// backend/routes/financialData.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const FinancialData = require('../models/FinancialData.jsx');
const authMiddleware = require('../authMiddleware.jsx');

const router = express.Router();

// Create or update financial data for a user
router.post(
  '/',
  authMiddleware,
  [
    body('income').isNumeric().withMessage('Income must be a number'),
    body('expenses').isNumeric().withMessage('Expenses must be a number'),
    body('goals').isArray().withMessage('Goals must be an array'),
  ],
  async (req, res) => {
    const { income, expenses, goals } = req.body;
    const userId = req.userId; // Extract userId from the middleware

    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

module.exports = router;
