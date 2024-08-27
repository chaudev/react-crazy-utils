"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-27 09:25
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCurrency = exports.formatCurrency = exports.sleep = exports.uniqueArray = exports.randomInt = exports.throttle = exports.debounce = exports.isEmptyArray = exports.isEmptyObject = void 0;
/**
 * The function checks if an object is empty.
 * @param {Object} obj - The parameter `obj` is object that you want to check.
 * @returns A boolean value.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
exports.isEmptyObject = isEmptyObject;
/**
 * Function to check if an array is empty.
 * @param arr - The `arr` parameter is the array you want to check.
 * @returns Return `true` if the input array `arr` is empty, otherwise `false`.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
function isEmptyArray(arr) {
    if (arr) {
        return arr.length === 0;
    }
    else
        return false;
}
exports.isEmptyArray = isEmptyArray;
/**
 * The `debounce` function limits the frequency of function calls by delaying execution until a certain amount of time has passed.
 * @param {Function} func - A function that you want to debounce. This function will be called after the debounce time has passed.
 * @param {number} wait - A time in milliseconds. This parameter specifies the delay.
 * @returns A debounce version of the original function that is being returned.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var debounce = function (func, wait) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () { return func.apply(void 0, args); }, wait);
    };
};
exports.debounce = debounce;
/**
 * Limit the number of times a function is called in a given amount of time.
 * @param {Function} func - The function you want to limit the rate at which it is called. The `throttle` function ensures that the `func` function is not called more often than the specified `limit` in milliseconds.
 * @param {number} limit - Indicates the minimum interval between function calls (in milliseconds).
 * @returns The throttle function being returned.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var throttle = function (func, limit) {
    var lastFunc;
    var lastRan;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!lastRan) {
            func.apply(void 0, args);
            lastRan = Date.now();
        }
        else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(void 0, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};
exports.throttle = throttle;
/**
 * Generates a random integer between min and max.
 * @param {number} min - The minimum value of the range you want to generate.
 * @param {number} max - The maximum value you want to generate.
 * @returns Returns a random integer between `min` and `max`.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var randomInt = function (min, max) {
    if (min && max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else
        return null;
};
exports.randomInt = randomInt;
/**
 * Remove duplicate elements from an array.
 * @param {T[]} arr - An array that you want to process.
 * @returns New array with duplicate elements removed.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var uniqueArray = function (arr) {
    if (arr) {
        return Array.from(new Set(arr));
    }
    else
        return [];
};
exports.uniqueArray = uniqueArray;
/**
 * Creates a pause for a specified amount of time in milliseconds.
 * @param {number} ms - The number of milliseconds the function will pause for.
 * @returns Returns a promise that resolves after the specified number of milliseconds.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
exports.sleep = sleep;
/**
 * Formats a given number as currency in Vietnamese Dong.
 * @param {number} amount - The amount you want to format.
 * @returns Returns a formatted currency string.
 *
 * Exp: 1000 -> 1.000
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var formatCurrency = function (amount) {
    if (amount) {
        return new Intl.NumberFormat("vi-VN").format(amount);
    }
    else
        return "";
};
exports.formatCurrency = formatCurrency;
/**
 * Removes any commas and returns the parsed integer value or NaN if the input is empty.
 * @param {string} currency - A string representing the currency value.
 * @returns Returns an integer, otherwise returns `NaN`.
 *
 * Exp: 1.000 -> 1000
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var parseCurrency = function (currency) {
    if (currency) {
        var cleaned = currency.replace(/[,]/g, "").trim();
        return parseInt(cleaned, 10);
    }
    else
        return NaN;
};
exports.parseCurrency = parseCurrency;
