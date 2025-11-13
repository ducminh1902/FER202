import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, toggleAdminStatus } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Gọi API khi mở trang
  }, [dispatch]);

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.name} — {user.isAdmin ? 'Admin' : 'User'}
            <button onClick={() => dispatch(toggleAdminStatus(user.id))}>
              Toggle Admin
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
