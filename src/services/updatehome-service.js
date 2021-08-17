const { Property } = require("../model/property.schema");

const updateHome = async (data) => {
  try {
    const updatedHome = await Property.findOneAndUpdate(
      { _id: data.id },
      {
        contact: data.contact,
        location: data.location,
        name: data.name,
      },
      { new: true, useFindAndModify: false }
    );
    return updatedHome;
  } catch (e) {
    return new Error("Error in updating the property");
  }
};

module.exports = {
  updateHome,
};
