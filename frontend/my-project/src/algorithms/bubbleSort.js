/**
 * Generates steps for bubble sort visualization
 * @param {number[]} array - The array to sort
 * @returns {Array<{type: string, indices: number[], values: number[]}>} Array of sorting steps
 */
export const bubbleSort = (array) => {
  const steps = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;

  // TODO: Implement bubble sort algorithm
  // For each step:
  // 1. When comparing elements:
  //    steps.push({ type: 'compare', indices: [i, j], values: [arrayCopy[i], arrayCopy[j]] })
  // 2. When swapping elements:
  //    steps.push({ type: 'swap', indices: [i, j], values: [arrayCopy[i], arrayCopy[j]] })
  // 3. When an element is in its final position:
  //    steps.push({ type: 'sorted', indices: [i], values: [arrayCopy[i]] })

  return steps;
};

/**
 * Example step format:
 * {
 *   type: 'compare' | 'swap' | 'sorted',
 *   indices: number[],    // Indices involved in this step
 *   values: number[],     // Values at these indices
 *   // Optional: Add more properties as needed
 * }
 */
