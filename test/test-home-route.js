const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

const app = require("../app");

chai.use(chaiHttp);

describe("testing home route", function() {
  describe("testing GET / - (code: 200)", function() {
    it("should return object { message: 'Hello World!' }", async function() {
      const response = await chai.request(app).get("/");

      expect(response).to.have.status(200);
      expect(response).to.have.property("body");
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Hello World!");
    });
  });
});
