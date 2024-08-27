# React Crazy Utils

📚 VIETNAMESE Documents: [VIEW NOW](https://thatthuvi.com/lap-trinh/react-crazy-utils)

react-crazy-utils is a useful library for React that helps you write better code.

## Installation

You can install react-crazy-utils via bun, npm or yarn:

### Using bun

`bash bun add react-crazy-utils`

### Using npm

`bash npm install react-crazy-utils`

### Using yarn

`bash yarn add react-crazy-utils`

## Usage

### 1. isEmptyObject

This function checks if an object is empty.

```typescript const obj = {};
console.log("Empty Object?", isEmptyObject(obj)); // Output: true
```

### 2. isEmptyArray

This function checks if an array is empty.

```typescript
const arr = [];
console.log("Empty Array?", isEmptyArray(arr)); // Output: true
```

### 3. debounce

This function limits the frequency of function calls by delaying execution until when a certain amount of time has passed.

```typescript
const debouncedFunc = debounce(
  () => console.log("Call debounce function"),
  300
);

debouncedFunc();
```

### 4. throttle This function limits the number of function calls within a given period of time.

```typescript
const throttledFunc = throttle(
  () => console.log("Call throttle function"),
  500
);

throttledFunc();
```

### 5. randomInt

This function generates a random integer in the range `min` to `max`.

```typescript
const randomNum = randomInt(1, 10);
console.log("Random number:", randomNum);
```

### 6. uniqueArray

This function removes the duplicate elements in array.

```typescript
const originalArray = [1, 2, 2, 3, 3, 4];
const uniqueValues = uniqueArray(originalArray);
console.log("Array after removing duplicates:", uniqueValues);
```

### 7. sleep

This function creates a wait time in milliseconds.

```typescript
async function exampleUsage() {
  console.log("Starting waiting...");
  await sleep(2000); // Wait 2 seconds
  console.log("End of wait!");
}

exampleUsage();
```

### 8. formatCurrency

This function formats a number to a currency string.

```typescript
const formattedAmount = formatCurrency(1000000);
console.log("Formatted Amount:", formattedAmount); // Output: "1,000,000"
```

### 9. parseCurrency

This function removes commas and returns a numeric value corresponding integer or NaN if the input is invalid.

```typescript
const inputString = "1,000,000";
const parsedValue = parseCurrency(inputString);
console.log("Integer value:", parsedValue); // Output: 1000000
```

### 11. getDateNow

This function returns a Date object representing the current time

```typescript
const currentDate = getDateNow();
console.log("Current date and time:", currentDate);
```

### 12. getTimestamp

This function returns the current time as a timestamp (milliseconds / seconds)

```typescript
const timestamp = getTimestamp();
console.log("Current timestamp:", timestamp);
```

### 13. capitalizeFirstLetter

Capitalizes the first character of the passed string.

```typescript const inputString = "hello, world!";
const capitalizedString = capitalizeFirstLetter(inputString);
console.log("Capitalized string:", capitalizedString); // Output: "Hello, world!"
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Author

Nguyen Phuc Bao Chau - [GitHub Profile](https://github.com/chaudev)

## License

This project is licensed under the MIT License.
