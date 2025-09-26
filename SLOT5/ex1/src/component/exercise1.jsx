export function Exercise1(){
    const double = x => x*2;
    const isPositive =x => x>0;
  return(
    <>
      <p>Hello <strong>Exercise 1</strong></p>
      <h2>Chi tiết bài tập 1</h2>
      <p>Ham double(5)</p>
      <p>isPositive: {isPositive(5)? "So Duong": "So am"}</p>
    </>
  )   
}

