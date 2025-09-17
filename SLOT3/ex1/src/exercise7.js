const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
];

// Tạo company0New (sao chép bằng spread, thay đổi start mà không ảnh hưởng bản gốc)
const company0New = { ...companies[0], start: companies[0].start + 1 };

console.log("companies[0]:", companies[0]);
console.log("company0New:", company0New);

// Hàm dùng rest parameter để nhận nhiều mảng, rồi spread để gộp
function concatAll(...arrays) {
  return [].concat(...arrays); 
  // hoặc: return arrays.flat(); (ES2019+)
}

console.log(concatAll([1,2],[3],[4,5])); // [1, 2, 3, 4, 5]
