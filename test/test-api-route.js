const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

const app = require("../app");

chai.use(chaiHttp);

describe("testing /api route", function() {
  describe("testing GET / - (code: 200)", function() {
    it("should return object { message: Hello World! you are on api routes. }", async function() {
      const response = await chai.request(app).get("/api");

      expect(response).to.have.status(200);
      expect(response).to.have.property("body");
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal(
        "Hello World! you are on api routes."
      );
    });
  });

  describe("testing GET /top-100 - (code: 200)", function() {
    it("should return object response contain top 100 playlist", async function() {
      const response = await chai.request(app).get("/api/top-100");

      expect(response).to.have.status(200);
      expect(response).to.have.property("body");
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("response");
      expect(response.body.response).to.be.an("object");
      expect(response.body.response).to.have.property("top-100");
      expect(response.body.response["top-100"]).to.be.an("array");
      expect(response.body.response["top-100"].length).to.equal(100);
    });
  });
});
