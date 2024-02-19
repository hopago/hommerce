export const generateKey = (pre1: unknown) => {
  return `${pre1}-${new Date().getTime()}`;
};
