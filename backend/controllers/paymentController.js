const Payment = require("../models/Payment");
const Property = require("../models/Property");

const makePayment = async (req, res) => {
  const { propertyId, amountPaid } = req.body;

  try {
    // Find the property
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(400).json({ msg: "Property not found" });
    }

    // Create a new payment record
    const newPayment = new Payment({
      propertyId,
      userId: req.user.id, // Assuming you will add user authentication
      amountPaid,
    });

    // Update the property tax status
    property.taxStatus = "Paid";
    await property.save();

    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { makePayment };
