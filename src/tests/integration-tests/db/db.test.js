const mongoose = require("mongoose");

const {
  addHome,
  getHomesList,
  deleteHome,
  updateHome,
} = require("../../../services");

const db = require("./setup/connection");

let id;

const mockData = {
  name: "Test Home",
  location: "Test world",
  contact: "Testing",
};

describe("Database Integration Tests", () => {
  afterAll(() => {
    db.close();
  });

  describe("Add a home to the DB", () => {
    it("Should add a new home data to DB", (done) => {
      addHome(mockData).then((data) => {
        id = data._id;
        expect(data.name).toBe(mockData.name);
        expect(data.location).toBe(mockData.location);
        expect(data.contact).toBe(mockData.contact);
        done();
      });
    });
  });

  describe("Get list of homes", () => {
    it("Should return list of all the homes available in DB", (done) => {
      getHomesList().then((data) => {
        expect(data).toHaveLength(2);
        expect(data[0].name).toBe(mockData.name);
        expect(data[0].location).toBe(mockData.location);
        expect(data[0].contact).toBe(mockData.contact);
        done();
      });
    });
  });

  describe("Update a home in DB", () => {
    it("Should update the properties of a homes in DB", (done) => {
      updateHome({
        id: id,
        name: "Hello world",
        location: "UK",
        contact: "gmail",
      }).then((data) => {
        expect(data.name).toBe("Hello world");
        expect(data.location).toBe("UK");
        expect(data.contact).toBe("gmail");
        done();
      });
    });
  });

  describe("Delete a home in DB", () => {
    it("Should delete a home data in DB given an id", (done) => {
      deleteHome(id).then((data) => {
        expect(data).toBe("Home Deleted");
        done();
      });
    });
  });
});
