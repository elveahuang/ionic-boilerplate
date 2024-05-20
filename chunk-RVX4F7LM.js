import {
  printIonWarning
} from "./chunk-AB2YFIZ6.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/data-ae11fd43.js
var isSameDay = (baseParts, compareParts) => {
  return baseParts.month === compareParts.month && baseParts.day === compareParts.day && baseParts.year === compareParts.year;
};
var isBefore = (baseParts, compareParts) => {
  return !!(baseParts.year < compareParts.year || baseParts.year === compareParts.year && baseParts.month < compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day < compareParts.day);
};
var isAfter = (baseParts, compareParts) => {
  return !!(baseParts.year > compareParts.year || baseParts.year === compareParts.year && baseParts.month > compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day > compareParts.day);
};
var warnIfValueOutOfBounds = (value, min, max) => {
  const valueArray = Array.isArray(value) ? value : [value];
  for (const val of valueArray) {
    if (min !== void 0 && isBefore(val, min) || max !== void 0 && isAfter(val, max)) {
      printIonWarning(`The value provided to ion-datetime is out of bounds.

Min: ${JSON.stringify(min)}
Max: ${JSON.stringify(max)}
Value: ${JSON.stringify(value)}`);
      break;
    }
  }
};
var isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
var getHourCycle = (locale, hourCycle) => {
  if (hourCycle !== void 0) {
    return hourCycle;
  }
  const formatted = new Intl.DateTimeFormat(locale, { hour: "numeric" });
  const options = formatted.resolvedOptions();
  if (options.hourCycle !== void 0) {
    return options.hourCycle;
  }
  const date = /* @__PURE__ */ new Date("5/18/2021 00:00");
  const parts = formatted.formatToParts(date);
  const hour = parts.find((p) => p.type === "hour");
  if (!hour) {
    throw new Error("Hour value not found from DateTimeFormat");
  }
  switch (hour.value) {
    case "0":
      return "h11";
    case "12":
      return "h12";
    case "00":
      return "h23";
    case "24":
      return "h24";
    default:
      throw new Error(`Invalid hour cycle "${hourCycle}"`);
  }
};
var is24Hour = (hourCycle) => {
  return hourCycle === "h23" || hourCycle === "h24";
};
var getNumDaysInMonth = (month, year) => {
  return month === 4 || month === 6 || month === 9 || month === 11 ? 30 : month === 2 ? isLeapYear(year) ? 29 : 28 : 31;
};
var isMonthFirstLocale = (locale, formatOptions = {
  month: "numeric",
  year: "numeric"
}) => {
  const parts = new Intl.DateTimeFormat(locale, formatOptions).formatToParts(/* @__PURE__ */ new Date());
  return parts[0].type === "month";
};
var isLocaleDayPeriodRTL = (locale) => {
  const parts = new Intl.DateTimeFormat(locale, { hour: "numeric" }).formatToParts(/* @__PURE__ */ new Date());
  return parts[0].type === "dayPeriod";
};
var ISO_8601_REGEXP = (
  // eslint-disable-next-line no-useless-escape
  /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/
);
var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
var convertToArrayOfNumbers = (input) => {
  if (input === void 0) {
    return;
  }
  let processedInput = input;
  if (typeof input === "string") {
    processedInput = input.replace(/\[|\]|\s/g, "").split(",");
  }
  let values;
  if (Array.isArray(processedInput)) {
    values = processedInput.map((num) => parseInt(num, 10)).filter(isFinite);
  } else {
    values = [processedInput];
  }
  return values;
};
var getPartsFromCalendarDay = (el) => {
  return {
    month: parseInt(el.getAttribute("data-month"), 10),
    day: parseInt(el.getAttribute("data-day"), 10),
    year: parseInt(el.getAttribute("data-year"), 10),
    dayOfWeek: parseInt(el.getAttribute("data-day-of-week"), 10)
  };
};
function parseDate(val) {
  if (Array.isArray(val)) {
    const parsedArray = [];
    for (const valStr of val) {
      const parsedVal = parseDate(valStr);
      if (!parsedVal) {
        return void 0;
      }
      parsedArray.push(parsedVal);
    }
    return parsedArray;
  }
  let parse = null;
  if (val != null && val !== "") {
    parse = TIME_REGEXP.exec(val);
    if (parse) {
      parse.unshift(void 0, void 0);
      parse[2] = parse[3] = void 0;
    } else {
      parse = ISO_8601_REGEXP.exec(val);
    }
  }
  if (parse === null) {
    printIonWarning(`Unable to parse date string: ${val}. Please provide a valid ISO 8601 datetime string.`);
    return void 0;
  }
  for (let i = 1; i < 8; i++) {
    parse[i] = parse[i] !== void 0 ? parseInt(parse[i], 10) : void 0;
  }
  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    ampm: parse[4] < 12 ? "am" : "pm"
  };
}
var clampDate = (dateParts, minParts, maxParts) => {
  if (minParts && isBefore(dateParts, minParts)) {
    return minParts;
  } else if (maxParts && isAfter(dateParts, maxParts)) {
    return maxParts;
  }
  return dateParts;
};
var parseAmPm = (hour) => {
  return hour >= 12 ? "pm" : "am";
};
var parseMaxParts = (max, todayParts) => {
  const result = parseDate(max);
  if (result === void 0) {
    return;
  }
  const { month, day, year, hour, minute } = result;
  const yearValue = year !== null && year !== void 0 ? year : todayParts.year;
  const monthValue = month !== null && month !== void 0 ? month : 12;
  return {
    month: monthValue,
    day: day !== null && day !== void 0 ? day : getNumDaysInMonth(monthValue, yearValue),
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: yearValue,
    hour: hour !== null && hour !== void 0 ? hour : 23,
    minute: minute !== null && minute !== void 0 ? minute : 59
  };
};
var parseMinParts = (min, todayParts) => {
  const result = parseDate(min);
  if (result === void 0) {
    return;
  }
  const { month, day, year, hour, minute } = result;
  return {
    month: month !== null && month !== void 0 ? month : 1,
    day: day !== null && day !== void 0 ? day : 1,
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: year !== null && year !== void 0 ? year : todayParts.year,
    hour: hour !== null && hour !== void 0 ? hour : 0,
    minute: minute !== null && minute !== void 0 ? minute : 0
  };
};
var twoDigit = (val) => {
  return ("0" + (val !== void 0 ? Math.abs(val) : "0")).slice(-2);
};
var fourDigit = (val) => {
  return ("000" + (val !== void 0 ? Math.abs(val) : "0")).slice(-4);
};
function convertDataToISO(data) {
  if (Array.isArray(data)) {
    return data.map((parts) => convertDataToISO(parts));
  }
  let rtn = "";
  if (data.year !== void 0) {
    rtn = fourDigit(data.year);
    if (data.month !== void 0) {
      rtn += "-" + twoDigit(data.month);
      if (data.day !== void 0) {
        rtn += "-" + twoDigit(data.day);
        if (data.hour !== void 0) {
          rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:00`;
        }
      }
    }
  } else if (data.hour !== void 0) {
    rtn = twoDigit(data.hour) + ":" + twoDigit(data.minute);
  }
  return rtn;
}
var convert12HourTo24Hour = (hour, ampm) => {
  if (ampm === void 0) {
    return hour;
  }
  if (ampm === "am") {
    if (hour === 12) {
      return 0;
    }
    return hour;
  }
  if (hour === 12) {
    return 12;
  }
  return hour + 12;
};
var getStartOfWeek = (refParts) => {
  const { dayOfWeek } = refParts;
  if (dayOfWeek === null || dayOfWeek === void 0) {
    throw new Error("No day of week provided");
  }
  return subtractDays(refParts, dayOfWeek);
};
var getEndOfWeek = (refParts) => {
  const { dayOfWeek } = refParts;
  if (dayOfWeek === null || dayOfWeek === void 0) {
    throw new Error("No day of week provided");
  }
  return addDays(refParts, 6 - dayOfWeek);
};
var getNextDay = (refParts) => {
  return addDays(refParts, 1);
};
var getPreviousDay = (refParts) => {
  return subtractDays(refParts, 1);
};
var getPreviousWeek = (refParts) => {
  return subtractDays(refParts, 7);
};
var getNextWeek = (refParts) => {
  return addDays(refParts, 7);
};
var subtractDays = (refParts, numDays) => {
  const { month, day, year } = refParts;
  if (day === null) {
    throw new Error("No day provided");
  }
  const workingParts = {
    month,
    day,
    year
  };
  workingParts.day = day - numDays;
  if (workingParts.day < 1) {
    workingParts.month -= 1;
  }
  if (workingParts.month < 1) {
    workingParts.month = 12;
    workingParts.year -= 1;
  }
  if (workingParts.day < 1) {
    const daysInMonth = getNumDaysInMonth(workingParts.month, workingParts.year);
    workingParts.day = daysInMonth + workingParts.day;
  }
  return workingParts;
};
var addDays = (refParts, numDays) => {
  const { month, day, year } = refParts;
  if (day === null) {
    throw new Error("No day provided");
  }
  const workingParts = {
    month,
    day,
    year
  };
  const daysInMonth = getNumDaysInMonth(month, year);
  workingParts.day = day + numDays;
  if (workingParts.day > daysInMonth) {
    workingParts.day -= daysInMonth;
    workingParts.month += 1;
  }
  if (workingParts.month > 12) {
    workingParts.month = 1;
    workingParts.year += 1;
  }
  return workingParts;
};
var getPreviousMonth = (refParts) => {
  const month = refParts.month === 1 ? 12 : refParts.month - 1;
  const year = refParts.month === 1 ? refParts.year - 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return { month, year, day };
};
var getNextMonth = (refParts) => {
  const month = refParts.month === 12 ? 1 : refParts.month + 1;
  const year = refParts.month === 12 ? refParts.year + 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return { month, year, day };
};
var changeYear = (refParts, yearDelta) => {
  const month = refParts.month;
  const year = refParts.year + yearDelta;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return { month, year, day };
};
var getPreviousYear = (refParts) => {
  return changeYear(refParts, -1);
};
var getNextYear = (refParts) => {
  return changeYear(refParts, 1);
};
var getInternalHourValue = (hour, use24Hour, ampm) => {
  if (use24Hour) {
    return hour;
  }
  return convert12HourTo24Hour(hour, ampm);
};
var calculateHourFromAMPM = (currentParts, newAMPM) => {
  const { ampm: currentAMPM, hour } = currentParts;
  let newHour = hour;
  if (currentAMPM === "am" && newAMPM === "pm") {
    newHour = convert12HourTo24Hour(newHour, "pm");
  } else if (currentAMPM === "pm" && newAMPM === "am") {
    newHour = Math.abs(newHour - 12);
  }
  return newHour;
};
var validateParts = (parts, minParts, maxParts) => {
  const { month, day, year } = parts;
  const partsCopy = clampDate(Object.assign({}, parts), minParts, maxParts);
  const numDays = getNumDaysInMonth(month, year);
  if (day !== null && numDays < day) {
    partsCopy.day = numDays;
  }
  if (minParts !== void 0 && isSameDay(partsCopy, minParts)) {
    if (partsCopy.hour !== void 0 && minParts.hour !== void 0) {
      if (partsCopy.hour < minParts.hour) {
        partsCopy.hour = minParts.hour;
        partsCopy.minute = minParts.minute;
      } else if (partsCopy.hour === minParts.hour && partsCopy.minute !== void 0 && minParts.minute !== void 0 && partsCopy.minute < minParts.minute) {
        partsCopy.minute = minParts.minute;
      }
    }
  }
  if (maxParts !== void 0 && isSameDay(parts, maxParts)) {
    if (partsCopy.hour !== void 0 && maxParts.hour !== void 0) {
      if (partsCopy.hour > maxParts.hour) {
        partsCopy.hour = maxParts.hour;
        partsCopy.minute = maxParts.minute;
      } else if (partsCopy.hour === maxParts.hour && partsCopy.minute !== void 0 && maxParts.minute !== void 0 && partsCopy.minute > maxParts.minute) {
        partsCopy.minute = maxParts.minute;
      }
    }
  }
  return partsCopy;
};
var getClosestValidDate = ({ refParts, monthValues, dayValues, yearValues, hourValues, minuteValues, minParts, maxParts }) => {
  const { hour, minute, day, month, year } = refParts;
  const copyParts = Object.assign(Object.assign({}, refParts), { dayOfWeek: void 0 });
  if (yearValues !== void 0) {
    const filteredYears = yearValues.filter((year2) => {
      if (minParts !== void 0 && year2 < minParts.year) {
        return false;
      }
      if (maxParts !== void 0 && year2 > maxParts.year) {
        return false;
      }
      return true;
    });
    copyParts.year = findClosestValue(year, filteredYears);
  }
  if (monthValues !== void 0) {
    const filteredMonths = monthValues.filter((month2) => {
      if (minParts !== void 0 && copyParts.year === minParts.year && month2 < minParts.month) {
        return false;
      }
      if (maxParts !== void 0 && copyParts.year === maxParts.year && month2 > maxParts.month) {
        return false;
      }
      return true;
    });
    copyParts.month = findClosestValue(month, filteredMonths);
  }
  if (day !== null && dayValues !== void 0) {
    const filteredDays = dayValues.filter((day2) => {
      if (minParts !== void 0 && isBefore(Object.assign(Object.assign({}, copyParts), { day: day2 }), minParts)) {
        return false;
      }
      if (maxParts !== void 0 && isAfter(Object.assign(Object.assign({}, copyParts), { day: day2 }), maxParts)) {
        return false;
      }
      return true;
    });
    copyParts.day = findClosestValue(day, filteredDays);
  }
  if (hour !== void 0 && hourValues !== void 0) {
    const filteredHours = hourValues.filter((hour2) => {
      if ((minParts === null || minParts === void 0 ? void 0 : minParts.hour) !== void 0 && isSameDay(copyParts, minParts) && hour2 < minParts.hour) {
        return false;
      }
      if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.hour) !== void 0 && isSameDay(copyParts, maxParts) && hour2 > maxParts.hour) {
        return false;
      }
      return true;
    });
    copyParts.hour = findClosestValue(hour, filteredHours);
    copyParts.ampm = parseAmPm(copyParts.hour);
  }
  if (minute !== void 0 && minuteValues !== void 0) {
    const filteredMinutes = minuteValues.filter((minute2) => {
      if ((minParts === null || minParts === void 0 ? void 0 : minParts.minute) !== void 0 && isSameDay(copyParts, minParts) && copyParts.hour === minParts.hour && minute2 < minParts.minute) {
        return false;
      }
      if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.minute) !== void 0 && isSameDay(copyParts, maxParts) && copyParts.hour === maxParts.hour && minute2 > maxParts.minute) {
        return false;
      }
      return true;
    });
    copyParts.minute = findClosestValue(minute, filteredMinutes);
  }
  return copyParts;
};
var findClosestValue = (reference, values) => {
  let closestValue = values[0];
  let rank = Math.abs(closestValue - reference);
  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    const valueRank = Math.abs(value - reference);
    if (valueRank < rank) {
      closestValue = value;
      rank = valueRank;
    }
  }
  return closestValue;
};
var getFormattedDayPeriod = (dayPeriod) => {
  if (dayPeriod === void 0) {
    return "";
  }
  return dayPeriod.toUpperCase();
};
var stripTimeZone = (formatOptions) => {
  return Object.assign(Object.assign({}, formatOptions), {
    /**
     * Setting the time zone to UTC ensures that the value shown is always the
     * same as what was selected and safeguards against older Safari bugs with
     * Intl.DateTimeFormat.
     */
    timeZone: "UTC",
    /**
     * We do not want to display the time zone name
     */
    timeZoneName: void 0
  });
};
var getLocalizedTime = (locale, refParts, hourCycle, formatOptions = { hour: "numeric", minute: "numeric" }) => {
  const timeParts = {
    hour: refParts.hour,
    minute: refParts.minute
  };
  if (timeParts.hour === void 0 || timeParts.minute === void 0) {
    return "Invalid Time";
  }
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, stripTimeZone(formatOptions)), {
    /**
     * We use hourCycle here instead of hour12 due to:
     * https://bugs.chromium.org/p/chromium/issues/detail?id=1347316&q=hour12&can=2
     */
    hourCycle
  })).format(/* @__PURE__ */ new Date(convertDataToISO(Object.assign({
    /**
     * JS uses a simplified ISO 8601 format which allows for
     * date-only formats and date-time formats, but not
     * time-only formats: https://tc39.es/ecma262/#sec-date-time-string-format
     * As a result, developers who only pass a time will get
     * an "Invalid Date" error. To account for this, we make sure that
     * year/day/month values are set when passing to new Date().
     * The Intl.DateTimeFormat call above only uses the hour/minute
     * values, so passing these date values should have no impact
     * on the time output.
     */
    year: 2023,
    day: 1,
    month: 1
  }, timeParts)) + "Z"));
};
var addTimePadding = (value) => {
  const valueToString = value.toString();
  if (valueToString.length > 1) {
    return valueToString;
  }
  return `0${valueToString}`;
};
var getFormattedHour = (hour, hourCycle) => {
  if (hour === 0) {
    switch (hourCycle) {
      case "h11":
        return "0";
      case "h12":
        return "12";
      case "h23":
        return "00";
      case "h24":
        return "24";
      default:
        throw new Error(`Invalid hour cycle "${hourCycle}"`);
    }
  }
  const use24Hour = is24Hour(hourCycle);
  if (use24Hour) {
    return addTimePadding(hour);
  }
  return hour.toString();
};
var generateDayAriaLabel = (locale, today, refParts) => {
  if (refParts.day === null) {
    return null;
  }
  const date = getNormalizedDate(refParts);
  const labelString = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(date);
  return today ? `Today, ${labelString}` : labelString;
};
var getMonthAndYear = (locale, refParts) => {
  const date = getNormalizedDate(refParts);
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric", timeZone: "UTC" }).format(date);
};
var getDay = (locale, refParts) => {
  return getLocalizedDateTimeParts(locale, refParts, { day: "numeric" }).find((obj) => obj.type === "day").value;
};
var getYear = (locale, refParts) => {
  return getLocalizedDateTime(locale, refParts, { year: "numeric" });
};
var getNormalizedDate = (refParts) => {
  var _a, _b, _c;
  const timeString = refParts.hour !== void 0 && refParts.minute !== void 0 ? ` ${refParts.hour}:${refParts.minute}` : "";
  return /* @__PURE__ */ new Date(`${(_a = refParts.month) !== null && _a !== void 0 ? _a : 1}/${(_b = refParts.day) !== null && _b !== void 0 ? _b : 1}/${(_c = refParts.year) !== null && _c !== void 0 ? _c : 2023}${timeString} GMT+0000`);
};
var getLocalizedDateTime = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, stripTimeZone(options)).format(date);
};
var getLocalizedDateTimeParts = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, options).formatToParts(date);
};
var getDateTimeFormat = (locale, options) => {
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, options), { timeZone: "UTC" }));
};
var getTodayLabel = (locale) => {
  if ("RelativeTimeFormat" in Intl) {
    const label = new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(0, "day");
    return label.charAt(0).toUpperCase() + label.slice(1);
  } else {
    return "Today";
  }
};
var removeDateTzOffset = (date) => {
  const tzOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - tzOffset);
  return date;
};
var DATE_AM = removeDateTzOffset(/* @__PURE__ */ new Date("2022T01:00"));
var DATE_PM = removeDateTzOffset(/* @__PURE__ */ new Date("2022T13:00"));
var getLocalizedDayPeriod = (locale, dayPeriod) => {
  const date = dayPeriod === "am" ? DATE_AM : DATE_PM;
  const localizedDayPeriod = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    timeZone: "UTC"
  }).formatToParts(date).find((part) => part.type === "dayPeriod");
  if (localizedDayPeriod) {
    return localizedDayPeriod.value;
  }
  return getFormattedDayPeriod(dayPeriod);
};
var formatValue = (value) => {
  return Array.isArray(value) ? value.join(",") : value;
};
var getToday = () => {
  return removeDateTzOffset(/* @__PURE__ */ new Date()).toISOString();
};
var minutes = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59
];
var hour11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var hour12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var hour23 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var hour24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0];
var getDaysOfWeek = (locale, mode, firstDayOfWeek = 0) => {
  const weekdayFormat = mode === "ios" ? "short" : "narrow";
  const intl = new Intl.DateTimeFormat(locale, { weekday: weekdayFormat });
  const startDate = /* @__PURE__ */ new Date("11/01/2020");
  const daysOfWeek = [];
  for (let i = firstDayOfWeek; i < firstDayOfWeek + 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    daysOfWeek.push(intl.format(currentDate));
  }
  return daysOfWeek;
};
var getDaysOfMonth = (month, year, firstDayOfWeek) => {
  const numDays = getNumDaysInMonth(month, year);
  const firstOfMonth = (/* @__PURE__ */ new Date(`${month}/1/${year}`)).getDay();
  const offset = firstOfMonth >= firstDayOfWeek ? firstOfMonth - (firstDayOfWeek + 1) : 6 - (firstDayOfWeek - firstOfMonth);
  let days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push({ day: i, dayOfWeek: (offset + i) % 7 });
  }
  for (let i = 0; i <= offset; i++) {
    days = [{ day: null, dayOfWeek: null }, ...days];
  }
  return days;
};
var getHourData = (hourCycle) => {
  switch (hourCycle) {
    case "h11":
      return hour11;
    case "h12":
      return hour12;
    case "h23":
      return hour23;
    case "h24":
      return hour24;
    default:
      throw new Error(`Invalid hour cycle "${hourCycle}"`);
  }
};
var generateTime = (locale, refParts, hourCycle = "h12", minParts, maxParts, hourValues, minuteValues) => {
  const computedHourCycle = getHourCycle(locale, hourCycle);
  const use24Hour = is24Hour(computedHourCycle);
  let processedHours = getHourData(computedHourCycle);
  let processedMinutes = minutes;
  let isAMAllowed = true;
  let isPMAllowed = true;
  if (hourValues) {
    processedHours = processedHours.filter((hour) => hourValues.includes(hour));
  }
  if (minuteValues) {
    processedMinutes = processedMinutes.filter((minute) => minuteValues.includes(minute));
  }
  if (minParts) {
    if (isSameDay(refParts, minParts)) {
      if (minParts.hour !== void 0) {
        processedHours = processedHours.filter((hour) => {
          const convertedHour = refParts.ampm === "pm" ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) >= minParts.hour;
        });
        isAMAllowed = minParts.hour < 13;
      }
      if (minParts.minute !== void 0) {
        let isPastMinHour = false;
        if (minParts.hour !== void 0 && refParts.hour !== void 0) {
          if (refParts.hour > minParts.hour) {
            isPastMinHour = true;
          }
        }
        processedMinutes = processedMinutes.filter((minute) => {
          if (isPastMinHour) {
            return true;
          }
          return minute >= minParts.minute;
        });
      }
    } else if (isBefore(refParts, minParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  if (maxParts) {
    if (isSameDay(refParts, maxParts)) {
      if (maxParts.hour !== void 0) {
        processedHours = processedHours.filter((hour) => {
          const convertedHour = refParts.ampm === "pm" ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) <= maxParts.hour;
        });
        isPMAllowed = maxParts.hour >= 12;
      }
      if (maxParts.minute !== void 0 && refParts.hour === maxParts.hour) {
        processedMinutes = processedMinutes.filter((minute) => minute <= maxParts.minute);
      }
    } else if (isAfter(refParts, maxParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  return {
    hours: processedHours,
    minutes: processedMinutes,
    am: isAMAllowed,
    pm: isPMAllowed
  };
};
var generateMonths = (refParts, forcedDate) => {
  const current = { month: refParts.month, year: refParts.year, day: refParts.day };
  if (forcedDate !== void 0 && (refParts.month !== forcedDate.month || refParts.year !== forcedDate.year)) {
    const forced = { month: forcedDate.month, year: forcedDate.year, day: forcedDate.day };
    const forcedMonthIsBefore = isBefore(forced, current);
    return forcedMonthIsBefore ? [forced, current, getNextMonth(refParts)] : [getPreviousMonth(refParts), current, forced];
  }
  return [getPreviousMonth(refParts), current, getNextMonth(refParts)];
};
var getMonthColumnData = (locale, refParts, minParts, maxParts, monthValues, formatOptions = {
  month: "long"
}) => {
  const { year } = refParts;
  const months = [];
  if (monthValues !== void 0) {
    let processedMonths = monthValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.month) !== void 0) {
      processedMonths = processedMonths.filter((month) => month <= maxParts.month);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.month) !== void 0) {
      processedMonths = processedMonths.filter((month) => month >= minParts.month);
    }
    processedMonths.forEach((processedMonth) => {
      const date = /* @__PURE__ */ new Date(`${processedMonth}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), { timeZone: "UTC" })).format(date);
      months.push({ text: monthString, value: processedMonth });
    });
  } else {
    const maxMonth = maxParts && maxParts.year === year ? maxParts.month : 12;
    const minMonth = minParts && minParts.year === year ? minParts.month : 1;
    for (let i = minMonth; i <= maxMonth; i++) {
      const date = /* @__PURE__ */ new Date(`${i}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), { timeZone: "UTC" })).format(date);
      months.push({ text: monthString, value: i });
    }
  }
  return months;
};
var getDayColumnData = (locale, refParts, minParts, maxParts, dayValues, formatOptions = {
  day: "numeric"
}) => {
  const { month, year } = refParts;
  const days = [];
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const maxDay = (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== null && (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== void 0 && maxParts.year === year && maxParts.month === month ? maxParts.day : numDaysInMonth;
  const minDay = (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== null && (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== void 0 && minParts.year === year && minParts.month === month ? minParts.day : 1;
  if (dayValues !== void 0) {
    let processedDays = dayValues;
    processedDays = processedDays.filter((day) => day >= minDay && day <= maxDay);
    processedDays.forEach((processedDay) => {
      const date = /* @__PURE__ */ new Date(`${month}/${processedDay}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), { timeZone: "UTC" })).format(date);
      days.push({ text: dayString, value: processedDay });
    });
  } else {
    for (let i = minDay; i <= maxDay; i++) {
      const date = /* @__PURE__ */ new Date(`${month}/${i}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), { timeZone: "UTC" })).format(date);
      days.push({ text: dayString, value: i });
    }
  }
  return days;
};
var getYearColumnData = (locale, refParts, minParts, maxParts, yearValues) => {
  var _a, _b;
  let processedYears = [];
  if (yearValues !== void 0) {
    processedYears = yearValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== void 0) {
      processedYears = processedYears.filter((year) => year <= maxParts.year);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.year) !== void 0) {
      processedYears = processedYears.filter((year) => year >= minParts.year);
    }
  } else {
    const { year } = refParts;
    const maxYear = (_a = maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== null && _a !== void 0 ? _a : year;
    const minYear = (_b = minParts === null || minParts === void 0 ? void 0 : minParts.year) !== null && _b !== void 0 ? _b : year - 100;
    for (let i = minYear; i <= maxYear; i++) {
      processedYears.push(i);
    }
  }
  return processedYears.map((year) => ({
    text: getYear(locale, { year, month: refParts.month, day: refParts.day }),
    value: year
  }));
};
var getAllMonthsInRange = (currentParts, maxParts) => {
  if (currentParts.month === maxParts.month && currentParts.year === maxParts.year) {
    return [currentParts];
  }
  return [currentParts, ...getAllMonthsInRange(getNextMonth(currentParts), maxParts)];
};
var getCombinedDateColumnData = (locale, todayParts, minParts, maxParts, dayValues, monthValues) => {
  let items = [];
  let parts = [];
  let months = getAllMonthsInRange(minParts, maxParts);
  if (monthValues) {
    months = months.filter(({ month }) => monthValues.includes(month));
  }
  months.forEach((monthObject) => {
    const referenceMonth = { month: monthObject.month, day: null, year: monthObject.year };
    const monthDays = getDayColumnData(locale, referenceMonth, minParts, maxParts, dayValues, {
      month: "short",
      day: "numeric",
      weekday: "short"
    });
    const dateParts = [];
    const dateColumnItems = [];
    monthDays.forEach((dayObject) => {
      const isToday = isSameDay(Object.assign(Object.assign({}, referenceMonth), { day: dayObject.value }), todayParts);
      dateColumnItems.push({
        text: isToday ? getTodayLabel(locale) : dayObject.text,
        value: `${referenceMonth.year}-${referenceMonth.month}-${dayObject.value}`
      });
      dateParts.push({
        month: referenceMonth.month,
        year: referenceMonth.year,
        day: dayObject.value
      });
    });
    parts = [...parts, ...dateParts];
    items = [...items, ...dateColumnItems];
  });
  return {
    parts,
    items
  };
};
var getTimeColumnsData = (locale, refParts, hourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues) => {
  const computedHourCycle = getHourCycle(locale, hourCycle);
  const use24Hour = is24Hour(computedHourCycle);
  const { hours, minutes: minutes2, am, pm } = generateTime(locale, refParts, computedHourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues);
  const hoursItems = hours.map((hour) => {
    return {
      text: getFormattedHour(hour, computedHourCycle),
      value: getInternalHourValue(hour, use24Hour, refParts.ampm)
    };
  });
  const minutesItems = minutes2.map((minute) => {
    return {
      text: addTimePadding(minute),
      value: minute
    };
  });
  const dayPeriodItems = [];
  if (am && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, "am"),
      value: "am"
    });
  }
  if (pm && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, "pm"),
      value: "pm"
    });
  }
  return {
    minutesData: minutesItems,
    hoursData: hoursItems,
    dayPeriodData: dayPeriodItems
  };
};

export {
  isSameDay,
  isBefore,
  isAfter,
  warnIfValueOutOfBounds,
  getHourCycle,
  getNumDaysInMonth,
  isMonthFirstLocale,
  isLocaleDayPeriodRTL,
  convertToArrayOfNumbers,
  getPartsFromCalendarDay,
  parseDate,
  clampDate,
  parseAmPm,
  parseMaxParts,
  parseMinParts,
  convertDataToISO,
  getStartOfWeek,
  getEndOfWeek,
  getNextDay,
  getPreviousDay,
  getPreviousWeek,
  getNextWeek,
  getPreviousMonth,
  getNextMonth,
  getPreviousYear,
  getNextYear,
  calculateHourFromAMPM,
  validateParts,
  getClosestValidDate,
  getLocalizedTime,
  generateDayAriaLabel,
  getMonthAndYear,
  getDay,
  getLocalizedDateTime,
  formatValue,
  getToday,
  getDaysOfWeek,
  getDaysOfMonth,
  generateMonths,
  getMonthColumnData,
  getDayColumnData,
  getYearColumnData,
  getCombinedDateColumnData,
  getTimeColumnsData
};
