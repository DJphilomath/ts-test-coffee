import "coffee-script/register";

describe('test', () => {

  describe('Uses coffee-script register', () => {

      it('should pass', () => {
        expect(true).toBe(true);
      });

      it('should not pass on line 13', () => {
        // extra line
        expect(true).toBe(false);
      });

  });
});