/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-27 10:24
 */
import { textUtils, capitalizeFirstLetter } from "./text-utils";
import { timeUtils, getTimestamp, getDateNow } from "./time-utils";
import { isEmptyObject, isEmptyArray, debounce, throttle, randomInt, uniqueArray, sleep, formatCurrency, parseCurrency } from "./v1-utils";
declare const format: {
    numberToPrice: (amount: number) => string;
    priceToNumber: (currency: string) => number;
    toDefaultTime: (date: import("moment").MomentInput, format?: string | undefined) => string;
};
export { textUtils, capitalizeFirstLetter, timeUtils, getTimestamp, getDateNow, isEmptyObject, isEmptyArray, debounce, throttle, randomInt, uniqueArray, sleep, formatCurrency, parseCurrency, format, };
