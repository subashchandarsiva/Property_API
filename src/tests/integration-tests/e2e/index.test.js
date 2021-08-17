const { app } = require("../../../");
const supertest = require("supertest");

const request = supertest(app);

let id;

describe("End to end testing of application", () => {
  describe("Get all homes", () => {
    it("Should return all available homes in DB", (done) => {
      request
        .post("/graphql")
        .send({
          query: "query{homes{id,name,contact,location}}",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeInstanceOf(Object);
          expect(res.body.data.homes.length).toEqual(1);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    it("Should return 400 when invalid query is passed", (done) => {
      request
        .post("/graphql")
        .send({
          query: "query{id,name,contact,location}",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400)
        .then((data) => done())
        .catch((err) => done(err));
    });
  });

  describe("Add homes", () => {
    it("Should add a home data in DB", (done) => {
      request
        .post("/graphql")
        .send({
          query:
            'mutation{AddHome(name:"Test",contact:"Test",location:"Mars"){id}}',
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeInstanceOf(Object);
          id = res.body.data.AddHome.id;
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    it("Should return 400 when invalid query is passed", (done) => {
      request
        .post("/graphql")
        .send({
          query: 'mutation{(name:"Test",contact:"Test",location:"Mars") {id}}',
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400)
        .then((data) => done())
        .catch((err) => done(err));
    });
  });

  describe("Update home", () => {
    it("Should update a home data in DB", (done) => {
      const query = `mutation{ UpdateHome(id:"${id}",name:"test 1",contact:"test mail",location:"Sun") {    id,contact,location,name }}`;
      request
        .post("/graphql")
        .send({
          query: query,
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeInstanceOf(Object);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    it("Should return 400 when invalid query is passed", (done) => {
      request
        .post("/graphql")
        .send({
          query:
            'mutation{UpdateHome(name:"Test",contact:"Test",location:"Mars") {id}}',
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400)
        .then((data) => done())
        .catch((err) => done(err));
    });
  });

  describe("Delete home", () => {
    it("Should delete a home data in DB", (done) => {
      request
        .post("/graphql")
        .send({
          query: `mutation{DeleteHome(id:"${id}")}`,
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeInstanceOf(Object);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    it("Should return 400 when invalid query is passed", (done) => {
      request
        .post("/graphql")
        .send({
          query: 'mutation{DeleteHome(id:"test") {id,contact}}',
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400)
        .then((data) => done())
        .catch((err) => done(err));
    });
  });
});
