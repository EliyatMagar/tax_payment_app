const Property = require("../models/Property");

const addProperty = async (req, res) => {
  const { name, value, taxAmount } = req.body;

  try {
    const newProperty = new Property({ name, value, taxAmount });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { addProperty, getProperties };
