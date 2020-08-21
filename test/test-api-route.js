const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

const app = require("../app");

chai.use(chaiHttp);

describe("testing api route", function() {
  describe("testing GET /api - (code: 200)", function() {
    it("should return object { message: 'Hello World!' }", async function() {
      const response = await chai.request(app).get("/api");

      expect(response).to.have.status(200);
      expect(response).to.have.property("body");
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Hello World!");
    });
  });
});
