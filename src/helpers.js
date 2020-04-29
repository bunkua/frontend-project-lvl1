export const generateNumber = (min = 0, max = 20) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export default { generateNumber };
