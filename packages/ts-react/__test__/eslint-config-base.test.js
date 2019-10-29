import config from '..';

describe('eslint config base', () => {
  it('should import correctly', () => {
    expect(typeof config).toBe('object');
  });
});
