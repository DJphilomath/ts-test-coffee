# ts-tests-coffeescript

Minimal repo to show how adding coffeescript register messes up with sourcemaps

## Getting started

Using npm
```
npm install
npm test-jest
npm test-mocha
```

Using yarn
```
yarn
yarn test-jest
yarn test-mocha
```

## Output

### Jest
```
$ jest --runInBand
 FAIL  src/coffee-require.test.ts
  ● test › Uses coffee-script register › should not pass on line 13

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

       9 |       });
      10 |
    > 11 |       it('should not pass on line 13', () => {
         |                          ^
      12 |         // extra line
      13 |         expect(true).toBe(false);
      14 |       });

      at Object.it (src/coffee-require.test.ts:11:26)

 FAIL  src/line-matches.test.ts
  ● test › line matches › should not pass. Fails on line 11

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

       9 |       it('should not pass. Fails on line 11', () => {
      10 |         // extra line
    > 11 |         expect(true).toBe(false);
         |                      ^
      12 |       });
      13 |
      14 |   });

      at Object.it (src/line-matches.test.ts:11:22)

Test Suites: 2 failed, 2 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   0 total
Time:        4.666s
Ran all test suites.
```

### Mocha
```
$ mocha --require coffee-script/register --require ts-node/register src/**/*.mocha.ts


  test
    Uses coffee-script register
      ✓ should pass
      1) should not pass. Error on line 15

  test
    line matches
      ✓ should pass
      2) should not pass. fails on line 14


  2 passing (66ms)
  2 failing

  1) test
       Uses coffee-script register
         should not pass. Error on line 15:

      AssertionError: expected true to equal false
      + expected - actual

      -true
      +false

      at Context.it (src/coffee-require.mocha.ts:15:25)

  2) test
       line matches
         should not pass. fails on line 14:

      AssertionError: expected true to equal false
      + expected - actual

      -true
      +false

      at Context.it (src/line-matches.mocha.ts:14:25)



error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```