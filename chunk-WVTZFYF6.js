import {
  win
} from "./chunk-NU6NIPSH.js";

// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/capacitor-59395cbd.js
var getCapacitor = () => {
  if (win !== void 0) {
    return win.Capacitor;
  }
  return void 0;
};

export {
  getCapacitor
};
