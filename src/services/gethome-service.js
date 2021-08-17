const { Property } = require("../model/property.schema");

const getHomesList = async () => {
  try {
    const data = await Property.find();
    return data;
  } catch (e) {
    return new Error("Couldn't get list of properties");
  }
};

module.exports = {
  getHomesList,
};
