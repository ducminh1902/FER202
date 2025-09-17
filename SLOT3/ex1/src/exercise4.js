const ages = [33, 12, 20, 16];

// Destructuring:
// - first = phần tử đầu tiên
// - bỏ qua phần tử thứ 2 (dùng dấu ,)
// - third = phần tử thứ 3, mặc định = 0 nếu không có
// - restAges = phần còn lại
const [first, , third = 0, ...restAges] = ages;

console.log(first);     // 33
console.log(third);     // 20
console.log(restAges);  // [16]
