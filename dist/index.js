"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-27 10:24
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.format =
  exports.parseCurrency =
  exports.formatCurrency =
  exports.sleep =
  exports.uniqueArray =
  exports.randomInt =
  exports.throttle =
  exports.debounce =
  exports.isEmptyArray =
  exports.isEmptyObject =
  exports.getDateNow =
  exports.getTimestamp =
  exports.timeUtils =
  exports.capitalizeFirstLetter =
  exports.textUtils =
    void 0;
var text_utils_1 = require("./text-utils");
Object.defineProperty(exports, "textUtils", {
  enumerable: true,
  get: function () {
    return text_utils_1.textUtils;
  },
});
Object.defineProperty(exports, "capitalizeFirstLetter", {
  enumerable: true,
  get: function () {
    return text_utils_1.capitalizeFirstLetter;
  },
});
var time_utils_1 = require("./time-utils");
Object.defineProperty(exports, "timeUtils", {
  enumerable: true,
  get: function () {
    return time_utils_1.timeUtils;
  },
});
Object.defineProperty(exports, "getTimestamp", {
  enumerable: true,
  get: function () {
    return time_utils_1.getTimestamp;
  },
});
Object.defineProperty(exports, "getDateNow", {
  enumerable: true,
  get: function () {
    return time_utils_1.getDateNow;
  },
});
var v1_utils_1 = require("./v1-utils");
Object.defineProperty(exports, "isEmptyObject", {
  enumerable: true,
  get: function () {
    return v1_utils_1.isEmptyObject;
  },
});
Object.defineProperty(exports, "isEmptyArray", {
  enumerable: true,
  get: function () {
    return v1_utils_1.isEmptyArray;
  },
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function () {
    return v1_utils_1.debounce;
  },
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function () {
    return v1_utils_1.throttle;
  },
});
Object.defineProperty(exports, "randomInt", {
  enumerable: true,
  get: function () {
    return v1_utils_1.randomInt;
  },
});
Object.defineProperty(exports, "uniqueArray", {
  enumerable: true,
  get: function () {
    return v1_utils_1.uniqueArray;
  },
});
Object.defineProperty(exports, "sleep", {
  enumerable: true,
  get: function () {
    return v1_utils_1.sleep;
  },
});
Object.defineProperty(exports, "formatCurrency", {
  enumerable: true,
  get: function () {
    return v1_utils_1.formatCurrency;
  },
});
Object.defineProperty(exports, "parseCurrency", {
  enumerable: true,
  get: function () {
    return v1_utils_1.parseCurrency;
  },
});
var format = {
  numberToPrice: v1_utils_1.formatCurrency,
  priceToNumber: v1_utils_1.parseCurrency,
  toDefaultTime: time_utils_1.timeUtils.format,
};
exports.format = format;
