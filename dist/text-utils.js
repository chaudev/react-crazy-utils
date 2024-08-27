"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-27 09:25
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.textUtils = exports.capitalizeFirstLetter = void 0;
/**
 * Converts the first letter of the string to uppercase.
 * @param {string} str - The string whose first letter you want to capitalize.
 * @returns Returns the input string with the first letter capitalized.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
var capitalizeFirstLetter = function (str) {
    if (!str && (str === null || str === void 0 ? void 0 : str.length) > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    else
        return "";
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.textUtils = {
    capitalizeFirstLetter: exports.capitalizeFirstLetter,
};
