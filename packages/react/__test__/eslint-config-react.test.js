const config = require('..');

describe('eslint config react', () => {
  it('should import correctly', () => {
    expect(typeof config).toBe('object');
  });
});
