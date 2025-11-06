import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
// import PaymentList from "../components/PaymentList"; // nếu bạn có component này

export default function HomePage() {
  const { state, logout } = useAuth();

  // State cho tìm kiếm và sắp xếp
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // State cho danh sách thanh toán (giả sử bạn sẽ fetch từ json-server)
  const [payments, setPayments] = useState([]);

  // TODO: Fetch dữ liệu từ json-server bằng axios
  useEffect(() => {
    // axios.get("http://localhost:3001/payments").then((res) => {
    //   setPayments(res.data);
    // });
  }, []);

  return (
    <>
      {/* Header với thông tin người dùng và logout */}
      <Header fullName={state.user?.fullName} onLogout={logout} />

      <div className="container mt-4">
        <h2 className="text-center mb-3">
          Welcome {state.user?.fullName}
        </h2>
        <p className="text-center">This is your Tuition Dashboard.</p>

        {/* Bộ lọc và sắp xếp */}
        <FilterBar
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />

        {/* TODO: Hiển thị danh sách thanh toán */}
        {/* <PaymentList payments={payments} search={search} sort={sort} /> */}
      </div>
    </>
  );
}
