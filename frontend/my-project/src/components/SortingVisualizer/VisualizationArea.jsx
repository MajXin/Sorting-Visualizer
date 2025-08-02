import PropTypes from 'prop-types';

const VisualizationArea = ({ 
  array, 
  comparingIndices, 
  swappingIndices, 
  sortedIndices 
}) => {
  // TODO: Implement these helper functions
  const getBarHeight = (value) => {
    const maxHeight = 226; // 256px (h-64) - 30px padding
    const minHeight = 5;   // Minimum bar height
    
    // Find maximum value in array for scaling
    const maxValue = Math.max(...array);
    
    // Calculate scaling factor
    const scale = (maxHeight - minHeight) / maxValue;
    
    // Calculate height and ensure it's at least minHeight
    const height = Math.max(minHeight, value * scale);
    
    return `${height}px`;
  };

  const getBarColor = (index) => {
    // Check if the bar is being compared
    if (comparingIndices.includes(index)) {
      return '#eab308'; // yellow-500
    }
    
    // Check if the bar is being swapped
    if (swappingIndices.includes(index)) {
      return '#ef4444'; // red-500
    }
    
    // Check if the bar is in its sorted position
    if (sortedIndices.includes(index)) {
      return '#22c55e'; // green-500
    }
    
    // Default state
    return '#3b82f6'; // blue-500
  };

  return (
    <div className="h-64 flex items-end justify-center gap-1">
      {array.map((value, index) => (
        <div
          key={`${index}-${value}`}
          className="w-4 bg-blue-500 transition-all duration-200"
          style={{
            height: getBarHeight(value),
            backgroundColor: getBarColor(index)
          }}
        />
      ))}
    </div>
  );
};

VisualizationArea.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  comparingIndices: PropTypes.arrayOf(PropTypes.number),
  swappingIndices: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

VisualizationArea.defaultProps = {
  comparingIndices: [],
  swappingIndices: [],
  sortedIndices: []
};

export default VisualizationArea;

/**
 * Implementation Notes:
 * 
 * 1. Bar Height Calculation:
 *    - Consider the container height (h-64 = 16rem = 256px)
 *    - Scale values to fit within this range
 *    - Leave space for larger numbers
 * 
 * 2. Color States:
 *    - Default: blue-500
 *    - Comparing: yellow-500
 *    - Swapping: red-500
 *    - Sorted: green-500
 * 
 * 3. Transitions:
 *    - Height transitions for smooth animations
 *    - Color transitions for state changes
 *    - Consider performance with larger arrays
 */
