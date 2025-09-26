export function Exercise2() {
  const numbers = [1,-20,12,4,-5,6,9,-10,8,7,-15];
  const sumArray = numbers.reduce((acc, cur) => acc + cur, 0);

  const names = ["An","Tinh","Cuong","Phuoc","Hung"];

  const people = [
    { id: 1, name: "An", age: 20 },
    { id: 2, name: "Bình", age: 22 },
    { id: 3, name: "Cường", age: 19 },
    { id: 4, name: "Hùng", age: 25 },
    { id: 5, name: "Dũng", age: 21 },
    { id: 6, name: "Khánh", age: 23 },
    { id: 7, name: "Long", age: 24 },
    { id: 8, name: "Minh", age: 20 },
    { id: 9, name: "Nam", age: 26 },
    { id: 10, name: "Phước", age: 22 }
  ];

  const teenList = people.filter(p => p.age >= 13 && p.age <= 19);
  const averageAge = people.reduce((acc, p) => acc + p.age, 0) / people.length;

  return (
    <div>
      <p>Các phần tử của mảng:</p>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <p>Tổng các phần tử trong mảng: <strong>{sumArray}</strong></p>
      <p>Số lượng phần tử trong mảng: {numbers.length}</p>

      <p>Hiển thị danh sách tên tăng dần:</p>
      <ul>
        {names.sort().map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <p>Những người có tuổi từ 13 đến 19:</p>
      <ul>
        {teenList.map(p => (
          <li key={p.id}>{p.name} - {p.age} tuổi</li>
        ))}
      </ul>

      <p>Tổng số lượng người trong mảng: {people.length}</p>
      <p>Độ tuổi trung bình của mọi người: <strong>{averageAge.toFixed(2)}</strong></p>
    </div>
  );
}
