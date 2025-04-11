const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  taxAmount: { type: Number, required: true },
  taxStatus: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
});

module.exports = mongoose.model("Property", PropertySchema);
