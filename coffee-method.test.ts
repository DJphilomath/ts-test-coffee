import { register } from "coffee-script";
register();



describe('test', () => {

  describe('independent tests', () => {

    it('should pass', () => {
      expect(true).toBe(true);
    });

    it('should pass in setImmediate!', (done) => {
      setImmediate(() => {
        expect(true).toBe(true);
        done();
      });
    });

    it('should fail in setImmediate', (done) => {

      expect(true).toBe(true);

      setImmediate(() => {

        let param = void(0);
        expect(param.attr.attr2).toBe(true);
        done();
      });

    });

  });
});
