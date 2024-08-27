# React Crazy Utils

📚 Tài liệu TIẾNG VIỆT (Vietnamese Documents): [XEM NGAY](https://thatthuvi.com/lap-trinh/react-crazy-utils)

`react-crazy-utils`

## Installation

You can install react-crazy-utils via bun, npm or yarn:

### Using bun

```bash
bun add react-crazy-utils
```

### Using npm

```bash
npm install react-crazy-utils
```

### Using yarn

```bash
yarn add react-crazy-utils
```

## Usage

### 1. isEmptyObject

Hàm này kiểm tra xem một đối tượng có trống không.

```typescript
const obj = {};
console.log("Đối tượng trống?", isEmptyObject(obj)); // Kết quả: true
```

### 2. isEmptyArray

Hàm này kiểm tra xem một mảng có trống không.

```typescript
const arr = [];
console.log("Mảng trống?", isEmptyArray(arr)); // Kết quả: true
```

### 3. debounce

Hàm này giới hạn tần suất gọi hàm bằng cách trì hoãn thực thi cho đến khi đã qua một khoảng thời gian nhất định.

```typescript
const debouncedFunc = debounce(() => console.log("Gọi hàm debounce"), 300);
debouncedFunc();
```

### 4. throttle

Hàm này giới hạn số lần gọi hàm trong một khoảng thời gian nhất định.

```typescript
const throttledFunc = throttle(() => console.log("Gọi hàm throttle"), 500);
throttledFunc();
```

### 5. randomInt

Hàm này tạo số nguyên ngẫu nhiên trong khoảng từ `min` đến `max`.

```typescript
const randomNum = randomInt(1, 10);
console.log("Số ngẫu nhiên:", randomNum);
```

### 6. uniqueArray

Hàm này loại bỏ các phần tử trùng lặp trong mảng.

```typescript
const originalArray = [1, 2, 2, 3, 3, 4];
const uniqueValues = uniqueArray(originalArray);
console.log("Mảng sau khi loại bỏ trùng lặp:", uniqueValues);
```

### 7. sleep

Hàm này tạo một khoảng thời gian chờ trong milliseconds.

```typescript
async function exampleUsage() {
  console.log("Bắt đầu chờ...");
  await sleep(2000); // Chờ 2 giây
  console.log("Kết thúc chờ!");
}

exampleUsage();
```

### 8. formatCurrency

Hàm này định dạng một số thành chuỗi tiền tệ.

```typescript
const formattedAmount = formatCurrency(1000000);
console.log("Số tiền định dạng:", formattedAmount); // Kết quả: "1.000.000"
```

### 9. parseCurrency

Hàm này loại bỏ dấu phẩy và trả về giá trị số nguyên tương ứng hoặc NaN nếu đầu vào không hợp lệ.

```typescript
const inputString = "1.000.000";
const parsedValue = parseCurrency(inputString);
console.log("Giá trị số nguyên:", parsedValue); // Kết quả: 1000000
```

### 11. getDateNow

Hàm này trả về một đối tượng Date đại diện cho thời gian hiện tại

```typescript
const currentDate = getDateNow();
console.log("Ngày giờ hiện tại:", currentDate);
```

### 12. getTimestamp

Hàm này trả về thời gian hiện tại dưới dạng timestamp (milliseconds / seconds)

```typescript
const timestamp = getTimestamp();
console.log("Timestamp hiện tại:", timestamp);
```

### 13. capitalizeFirstLetter

Viết hoa ký tự đầu tiên của chuỗi được truyền vào.

```typescript
const inputString = "hello, world!";
const capitalizedString = capitalizeFirstLetter(inputString);
console.log("Capitalized string:", capitalizedString); // Output: "Hello, world!"
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Author

Nguyen Phuc Bao Chau - [GitHub Profile](https://github.com/chaudev)

## License

This project is licensed under the MIT License.
