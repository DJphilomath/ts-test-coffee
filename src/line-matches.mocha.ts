import * as chai from "chai"
const expect = chai.expect;

describe('test', () => {

  describe('line matches', () => {

      it('should pass', () => {
        expect(true).to.equal(true);
      });

      it('should not pass. fails on line 14', () => {
        // extra line
        expect(true).to.equal(false);
      });

  });
});