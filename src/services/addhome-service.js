const { Property } = require("../model/property.schema");

const addHome = async (data) => {
  const newHome = new Property({
    name: data.name,
    contact: data.contact,
    location: data.location,
  });
  try {
    await newHome.save();
    return newHome;
  } catch (e) {
    return new Error("Error in saving the property");
  }
};

module.exports = {
  addHome,
};
