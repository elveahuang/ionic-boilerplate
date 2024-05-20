// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/index-9b0d46f4.js
var printIonWarning = (message, ...params) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};
var printIonError = (message, ...params) => {
  return console.error(`[Ionic Error]: ${message}`, ...params);
};
var printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`);
};

export {
  printIonWarning,
  printIonError,
  printRequiredElementError
};
