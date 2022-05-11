export const isPrime = (n: number): boolean => {
  //throw error, if n is negative
  if (n < 1) {
    throw new Error("Number must be greater than 0");
  }

  //check if n is divisible by any number between 2 and n
  if (n < 2) {
    return false;
  }

  //check not prime
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  //number is prime
  return true;
};
