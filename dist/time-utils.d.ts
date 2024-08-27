/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-27 09:25
 */
import moment from "moment";
/**
 * The function `getTimestamp` returns the current timestamp in milliseconds.
 * @returns The `getTimestamp` function returns the current timestamp in milliseconds using the
 * `getTime` method of the `Date` object.
 *
 * Created 2024-08-27
 */
export declare const getTimestamp: () => number;
/**
 * The function `getDateNow` returns the current date and time.
 * @returns A new Date object representing the current date and time is being returned.
 *
 * Created 2024-08-27
 */
export declare const getDateNow: () => Date;
export declare const timeUtils: {
    timestamp: () => number;
    dateNow: () => Date;
    format: (date: moment.MomentInput, format?: string) => string;
};
