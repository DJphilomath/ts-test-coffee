import * as request from 'supertest';
import { app } from './src/app-coffee';

describe('test', () => {

  describe('app', () => {
    it('should pass', (done) => {

      expect(true).toBe(true);
      request(app)
      done();

    });
  });

  describe('independent tests', () => {

      it('should pass', () => {

        expect(true).toBe(true);
      });

      it('should pass in setImmediate!', (done) => {

        console.log(`TEsting templates`);

        setImmediate(() => {

          expect(true).toBe(true);

          done();
        });

      });

      it('should fail in setImmediate', (done) => {

        console.log(`TEsting templates`);

        expect(true).toBe(true);

        setImmediate(() => {

          let param = void(0);
          expect(param.attr.attr2).toBe(true);
          done();
        });

      });

  });
});