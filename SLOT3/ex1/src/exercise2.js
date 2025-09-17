// Hàm tính tổng
function sum(...nums) {
  return nums.reduce((acc, val) => {
    // ép kiểu sang số
    const n = Number(val);
    // chỉ cộng khi là số hợp lệ (không NaN)
    return isNaN(n) ? acc : acc + n;
  }, 0);
}

// Hàm tính trung bình
function avg(...nums) {
  const validNums = nums.reduce((arr, val) => {
    const n = Number(val);
    if (!isNaN(n)) arr.push(n);
    return arr;
  }, []);

  if (validNums.length === 0) return 0;

  const total = validNums.reduce((acc, n) => acc + n, 0);
  return (total / validNums.length).toFixed(2); // 2 chữ số thập phân
}

// Test
console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 'x', 4));      // 5
console.log(avg(1, 2, 3, 4));     // "2.50"
console.log(avg());               // 0