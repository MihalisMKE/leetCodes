const {stringCoverter} = require('./test/script');


test('adds 1 + 2 to equal 3', () => {
    expect(stringCoverter('asd')).toBe('AsD');
  });


  test('adds 1 + 2 to equal 3', () => {
    expect(stringCoverter('asdf')).toBe('AsDf');
  });

  test('adds 1 + 2 to equal 3', () => {
    try {
        stringCoverter(1111);c
      } catch (error) {
        expect(error.message).toBe('Input must be string');
      }
  });