// backend/models/FinancialData.js
const mongoose = require('mongoose');

const financialDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  goals: { type: [String], required: true },
});

const FinancialData = mongoose.model('FinancialData', financialDataSchema);
module.exports = FinancialData;
