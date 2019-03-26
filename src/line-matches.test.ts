describe('test', () => {

  describe('line matches', () => {

      it('should pass', () => {
        expect(true).toBe(true);
      });

      it('should not pass', () => {
        // extra line
        expect(true).toBe(false);
      });

  });
});