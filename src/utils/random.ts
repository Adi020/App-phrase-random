export const getRandom = <T>(elements: T[]) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

export const getRandomObj = <T>(elements: T[]) => {
  const randomObject = elements[Math.floor(Math.random() * elements.length)];
  return randomObject;
};
