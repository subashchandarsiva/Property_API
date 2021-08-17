const { Property } = require("../../model/property.schema");

jest.mock("../../model/property.schema");

const { addHome } = require("../../services");

describe("Checking our service functions which talks to DB", () => {
  describe("Add Homes - Success", () => {
    beforeEach(() => {
      const mockData = {
        contact: "subashchandarsiva@gmail.com",
        id: "611ad1b6b08571205eb3066c",
        location: "UK,Canary Wharf",
        name: "Subashchandar S",
      };
      Property.save = jest.fn().mockResolvedValue(mockData);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should return successful response when adding a home", (done) => {
      const expected = {
        contact: "subashchandarsiva@gmail.com",
        id: "611ad1b6b08571205eb3066c",
        location: "UK,Canary Wharf",
        name: "Subashchandar S",
      };
      const data = addHome({
        name: expected.name,
        location: expected.location,
        contact: expected.contact,
      });
      expect(data).resolves.toEqual(expected);
      done();
    });
  });

  describe("Add Homes - Failure", () => {
    beforeEach(() => {
      Property.save = jest
        .fn()
        .mockRejectedValue(new Error("Error in saving the property"));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should return an error when adding fails", (done) => {
      const expected = {
        contact: "subashchandarsiva@gmail.com",
        id: "611ad1b6b08571205eb3066c",
        location: "UK,Canary Wharf",
        name: "Subashchandar S",
      };
      const data = addHome({
        name: expected.name,
        location: expected.location,
        contact: expected.contact,
      });
      expect(data).rejects.toEqual(new Error("Error in saving the property"));
      done();
    });
  });
});
