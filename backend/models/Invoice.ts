import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
    unique: true,
  },
  lawyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case',
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  paidDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'overdue'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Invoice', invoiceSchema);