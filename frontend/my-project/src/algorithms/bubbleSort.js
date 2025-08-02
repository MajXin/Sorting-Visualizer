/**
 * Generates steps for bubble sort visualization
 * @param {number[]} array - The array to sort
 * @returns {Array<{type: string, indices: number[], values: number[]}>} Array of sorting steps
 */
export const bubbleSort = (array) => {
  const steps = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      steps.push({
        type: 'compare',
        indices: [j, j + 1],
        values: [arrayCopy[j], arrayCopy[j + 1]]
      });

      // Swap if the element found is greater than the next element
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        const temp = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = temp;

        steps.push({
          type: 'swap',
          indices: [j, j + 1],
          values: [arrayCopy[j], arrayCopy[j + 1]]
        });
      }
    }
    
    // Mark the last element of this pass as sorted
    steps.push({
      type: 'sorted',
      indices: [n - i - 1],
      values: [arrayCopy[n - i - 1]]
    });
  }

  // Mark the first element as sorted (it will be the smallest)
  steps.push({
    type: 'sorted',
    indices: [0],
    values: [arrayCopy[0]]
  });

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
