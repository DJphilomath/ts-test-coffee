# ts-tests-coffeescript

Minimal repo to show how adding coffeescript register messes up with sourcemaps

## Getting started

Using npm
```
npm install
npm test
```

Using yarn
```
yarn install
yarn test
```

## Expected output

```
$ jest --runInBand
 FAIL  src/coffee-require.test.ts
  ● test › no line match due to coffee-script register › should not pass

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

       9 |       });
      10 |
    > 11 |       it('should not pass', () => {
         |                          ^
      12 |         // extra line
      13 |         expect(true).toBe(false);
      14 |       });

      at Object.it (src/coffee-require.test.ts:11:26)

 FAIL  src/line-matches.test.ts
  ● test › line matches › should not pass

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

       9 |       it('should not pass', () => {
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
Time:        4.452s
```