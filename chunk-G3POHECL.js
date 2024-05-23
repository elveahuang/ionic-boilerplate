// node_modules/.pnpm/@ionic+core@8.2.0/node_modules/@ionic/core/dist/esm/spinner-configs-964f7cf3.js
var spinners = {
  bubbles: {
    dur: 1e3,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          "animation-delay": animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1e3,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          "animation-delay": animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: "none",
        viewBox: "24 24 48 48",
        transform: "translate(0,0)",
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + "ms";
      return {
        r: 6,
        style: {
          left: `${32 - 32 * index}%`,
          "animation-delay": animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1e3,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform,
          "animation-delay": animationDelay
        }
      };
    }
  },
  "lines-small": {
    dur: 1e3,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform,
          "animation-delay": animationDelay
        }
      };
    }
  },
  "lines-sharp": {
    dur: 1e3,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform,
          "animation-delay": animationDelay
        }
      };
    }
  },
  "lines-sharp-small": {
    dur: 1e3,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform,
          "animation-delay": animationDelay
        }
      };
    }
  }
};
var SPINNERS = spinners;

export {
  SPINNERS
};
