// Hat.test.js

import { Hat, StrawHat } from "../../src/design_pattern/้homework/hat";


describe('Hat class tests', () => {
  it('should create a Hat object correctly', () => {
    const hat = new Hat('blue', 'cotton', 58.0);
    expect(hat.color).toBe('blue');
    expect(hat.material).toBe('cotton');
    expect(hat.size).toBe(58.0);
  });

  it('should create a StrawHat object correctly', () => {
    const strawHat = new StrawHat('yellow', 57.0);
    expect(strawHat.color).toBe('yellow');
    expect(strawHat.material).toBe('straw');
    expect(strawHat.size).toBe(57.0);
  });

  it('should call wear method of Hat without error', () => {
    const hat = new Hat('red', 'wool', 59.0);
    expect(() => hat.wear()).not.toThrow();
  });

  it('should call wear method of StrawHat without error', () => {
    const strawHat = new StrawHat('green', 55.5);
    expect(() => strawHat.wear()).not.toThrow();
  });
});
