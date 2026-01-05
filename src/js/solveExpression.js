export const solveExpression = (input) => {
  try {
    let formula = input.replace(/×/g, "*").replace(/÷/g,"/");
    return String(eval(formula))
  } catch (error) {
    console.error('Error solving expression:', error);
  }
} 