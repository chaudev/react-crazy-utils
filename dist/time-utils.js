"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-27 09:25
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeUtils = exports.getDateNow = exports.getTimestamp = void 0;
var moment_1 = __importDefault(require("moment"));
/**
 * The function `getTimestamp` returns the current timestamp in milliseconds.
 * @returns The `getTimestamp` function returns the current timestamp in milliseconds using the
 * `getTime` method of the `Date` object.
 *
 * Created 2024-08-27
 */
var getTimestamp = function () {
    return new Date().getTime();
};
exports.getTimestamp = getTimestamp;
/**
 * The function `getDateNow` returns the current date and time.
 * @returns A new Date object representing the current date and time is being returned.
 *
 * Created 2024-08-27
 */
var getDateNow = function () {
    return new Date();
};
exports.getDateNow = getDateNow;
/**
 * Format date using Moment.js.
 * @param date - Date to format (Date, string, moment object, etc.).
 * @param format - Optional format string.
 * @returns Formatted date string or empty string if no date.
 *
 * Created 2024-08-27
 */
var format = function (date, format) {
    if (date) {
        return (0, moment_1.default)(date).format(format || "HH:mm DD-MM-YYYY");
    }
    else
        return "";
};
exports.timeUtils = {
    timestamp: exports.getTimestamp,
    dateNow: exports.getDateNow,
    format: format,
};
