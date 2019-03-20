// test.js
describe('test', () => {



  it('should pass', () => {

    console.log(`TEsting templates`);



    expect(true).toBe(true);
  });


  it('should pass async!', (done) => {

    console.log(`TEsting templates`);

    setImmediate(() => {

      expect(true).toBe(true);
      done();
    });

  });

  it('should fail', (done) => {

    console.log(`TEsting templates`);



    expect(true).toBe(true);




    setImmediate(() => {

      let param = void(0);
      expect(param.attr.attr2).toBe(true)
      done();
    });





  });
});