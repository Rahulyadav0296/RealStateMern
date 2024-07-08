const express = require("express");
const Property = require("../models/property");

const getProperty = async (req, res) => {
  try {
    const property = await Property.find();
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const postProperty = async (req, res) => {
  const { title, description, image, contact } = req.body;

  try {
    const newProperty = new Property({
      title: title,
      description: description,
      image: image,
      contact: contact,
    });
    console.log(newProperty);
    await newProperty.save();
    res
      .status(200)
      .json({ message: "PropertyAdded to watchlist Successfull!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = { postProperty, getProperty };
