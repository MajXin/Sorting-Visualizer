import { useState, useCallback, useRef } from 'react';

const useAnimationController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const animationFrame = useRef(null);
  const lastStepTime = useRef(0);

  // TODO: Implement these functions
  const startAnimation = useCallback((steps, speed = 100) => {
    // 1. Set up animation loop
    // 2. Use requestAnimationFrame
    // 3. Control timing between steps
    // 4. Update visualization state
  }, []);

  const pauseAnimation = useCallback(() => {
    // 1. Cancel animation frame
    // 2. Update playing state
    // 3. Preserve current progress
  }, []);

  const resetAnimation = useCallback(() => {
    // 1. Cancel any ongoing animation
    // 2. Reset all state
    // 3. Clear visualization
  }, []);

  const nextStep = useCallback((steps) => {
    // 1. Check if we have more steps
    // 2. Execute next step
    // 3. Update state
    // 4. Return true if more steps exist
  }, []);

  return {
    isPlaying,
    currentStep,
    startAnimation,
    pauseAnimation,
    resetAnimation,
    nextStep
  };
};

export default useAnimationController;

/**
 * Hook Usage Example:
 * 
 * const {
 *   isPlaying,
 *   currentStep,
 *   startAnimation,
 *   pauseAnimation,
 *   resetAnimation,
 *   nextStep
 * } = useAnimationController();
 * 
 * // Start sorting animation
 * startAnimation(sortingSteps, animationSpeed);
 */
