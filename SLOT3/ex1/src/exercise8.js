const ages = [12, 17, 19, 22, 25, 30, 15, 13];
const stats = ages.reduce((acc, age) => {
  // Cập nhật tổng
  acc.total += age;

  // Cập nhật min
  if (age < acc.min) acc.min = age;

  // Cập nhật max
  if (age > acc.max) acc.max = age;

  // Đếm nhóm tuổi
  if (age >= 13 && age <= 19) {
    acc.buckets.teen++;
  } else if (age >= 20) {
    acc.buckets.adult++;
  }

  return acc;
}, {
  total: 0,
  min: Infinity,
  max: -Infinity,
  buckets: { teen: 0, adult: 0 }
});

console.log(`Total: ${stats.total}, Min: ${stats.min}, Max: ${stats.max}`);
console.log(`Buckets:`, stats.buckets);
