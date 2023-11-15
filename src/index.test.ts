import { fizzBuzz } from "./index";

describe("Fizz Buzz", () => {
  it('should return 1 for input 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('should return 2 for input 2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });

  it('should return "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    
  });

  it('should return "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    
  });

  it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    
  });

  it('should return the number itself if not a multiple of 3 or 5', () => {
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(7)).toBe(7);
  });
});
