export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "yutingw2"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Yuting"
    );
  }

  if (query.toLowerCase().includes("largest")) {
    const matches = query.match(/\d+/g); // Find all numbers in the query
    if (matches) {
      const numbers = matches.map(Number); // Convert all found strings to numbers
      const largest = Math.max(...numbers); // Find the largest number
      return largest.toString(); // Return the largest number as a string
    }
  }

  if (query.toLowerCase().includes("plus")) {
    // Attempt to extract numbers before and after the word "plus"
    const numbers = query.match(/\d+/g); 
    if (numbers) {
      const sum = numbers.reduce((acc, curr) => acc + parseInt(curr), 0); // Calculate the sum of all numbers
      return sum.toString(); // Return the sum as a string
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const parts = query.match(/(\d+)\s+multiplied by\s+(\d+)/i);
    if (parts && parts.length === 3) { // Check if the match was successful and we have the correct parts
      const num1 = parseInt(parts[1], 10); // First number
      const num2 = parseInt(parts[2], 10); // Second number
      return (num1 * num2).toString(); // Perform the addition and return the result as a string
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const parts = query.match(/(\d+)\s+minus\s+(\d+)/i);
    if (parts && parts.length === 3) { // Check if the match was successful and we have the correct parts
      const num1 = parseInt(parts[1], 10); // First number
      const num2 = parseInt(parts[2], 10); // Second number
      return (num1 - num2).toString(); // Perform the addition and return the result as a string
    }
  }

  if (query.toLowerCase().includes("to the power of")) {
    const parts = query.match(/(\d+)\s+to the power of\s+(\d+)/i);
    if (parts && parts.length === 3) { // Check if the match was successful and we have the correct parts
      const base = parseInt(parts[1], 10); // Base number
      const exponent = parseInt(parts[2], 10); // Exponent
      return (Math.pow(base, exponent)).toString(); // Perform the exponentiation and return the result as a string
    }
  }

  if (query.startsWith("Which of the following numbers is both a square and a cube:")) {
    const numbersInQuery = query.match(/\d+/g); 
    if (numbersInQuery) {
      const numbers = numbersInQuery.map(Number); 
      const validNumbers = numbers.filter(number => {
        const squareRoot = Math.sqrt(number);
        const cubeRoot = Math.cbrt(number);
        return squareRoot === Math.floor(squareRoot) && cubeRoot === Math.floor(cubeRoot);
      });
      return `${validNumbers.join(", ")}`;
    }
  }
  return "";
}
