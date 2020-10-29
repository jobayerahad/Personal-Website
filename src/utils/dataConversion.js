export const firebaseToUiStr = (obj) => {
  let val = "";
  for (const key in obj) val = obj[key].name;
  return val;
};

export const firebaseToUiStrArr = (obj) => {
  const arr = [];
  for (const key in obj) arr.push(obj[key].name);
  return arr;
};
