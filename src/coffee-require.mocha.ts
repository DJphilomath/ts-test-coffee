import "coffee-script/register";
import * as chai from "chai"
const expect = chai.expect;

describe('test', () => {

  describe('Uses coffee-script register', () => {

      it('should pass', () => {
        expect(true).to.equal(true);
      });

      it('should not pass. Error on line 15', () => {
        // extra line
        expect(true).to.equal(false);
      });

  });
});