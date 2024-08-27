/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-27 09:25
 */
/**
 * The function checks if an object is empty.
 * @param {Object} obj - The parameter `obj` is object that you want to check.
 * @returns A boolean value.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare function isEmptyObject(obj: Object): boolean;
/**
 * Function to check if an array is empty.
 * @param arr - The `arr` parameter is the array you want to check.
 * @returns Return `true` if the input array `arr` is empty, otherwise `false`.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare function isEmptyArray(arr: Array<any>): boolean;
/**
 * The `debounce` function limits the frequency of function calls by delaying execution until a certain amount of time has passed.
 * @param {Function} func - A function that you want to debounce. This function will be called after the debounce time has passed.
 * @param {number} wait - A time in milliseconds. This parameter specifies the delay.
 * @returns A debounce version of the original function that is being returned.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare const debounce: (func: Function, wait: number) => (...args: any[]) => void;
/**
 * Limit the number of times a function is called in a given amount of time.
 * @param {Function} func - The function you want to limit the rate at which it is called. The `throttle` function ensures that the `func` function is not called more often than the specified `limit` in milliseconds.
 * @param {number} limit - Indicates the minimum interval between function calls (in milliseconds).
 * @returns The throttle function being returned.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare const throttle: (func: Function, limit: number) => (...args: any[]) => void;
/**
 * Generates a random integer between min and max.
 * @param {number} min - The minimum value of the range you want to generate.
 * @param {number} max - The maximum value you want to generate.
 * @returns Returns a random integer between `min` and `max`.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare const randomInt: (min: number, max: number) => number | null;
/**
 * Remove duplicate elements from an array.
 * @param {T[]} arr - An array that you want to process.
 * @returns New array with duplicate elements removed.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare const uniqueArray: <T>(arr: T[]) => T[];
/**
 * Creates a pause for a specified amount of time in milliseconds.
 * @param {number} ms - The number of milliseconds the function will pause for.
 * @returns Returns a promise that resolves after the specified number of milliseconds.
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare const sleep: (ms: number) => Promise<unknown>;
/**
 * Formats a given number as currency in Vietnamese Dong.
 * @param {number} amount - The amount you want to format.
 * @returns Returns a formatted currency string.
 *
 * Exp: 1000 -> 1.000
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare const formatCurrency: (amount: number) => string;
/**
 * Removes any commas and returns the parsed integer value or NaN if the input is empty.
 * @param {string} currency - A string representing the currency value.
 * @returns Returns an integer, otherwise returns `NaN`.
 *
 * Exp: 1.000 -> 1000
 *
 * Copyright (c) 2024 Nguyen Chau
 */
export declare const parseCurrency: (currency: string) => number;
