import "coffee-script/register";

describe('test', () => {

  describe('no line match due to coffee-script register', () => {

      it('should pass', () => {
        expect(true).toBe(true);
      });

      it('should not pass', () => {
        // extra line
        expect(true).toBe(false);
      });

  });
});