// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/compare-with-utils-a96ff2ea.js
var compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === "function") {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === "string") {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
var isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === void 0) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some((val) => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};

export {
  compareOptions,
  isOptionSelected
};
