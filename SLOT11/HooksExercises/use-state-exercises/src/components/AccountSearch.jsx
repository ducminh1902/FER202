// src/components/AccountSearch.jsx
import React, { useState } from 'react';
// Nếu bạn đã import bootstrap ở index.js thì comment dòng dưới
import 'bootstrap/dist/css/bootstrap.min.css';

const accounts = [
  { id: 1, username: 'john_doe', password: '1234', avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, username: 'jane_smith', password: 'abcd', avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: 3, username: 'minh_le', password: '5678', avatar: 'https://i.pravatar.cc/100?img=3' },
];

export default function AccountSearch() {
  const [query, setQuery] = useState('');

  const filtered = accounts.filter(acc =>
    acc.username.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Tìm kiếm Account</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Nhập username cần tìm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="row">
        {filtered.length > 0 ? (
          filtered.map(acc => (
            <div className="col-md-4 mb-4" key={acc.id}>
              <div className="card text-center shadow-sm p-3">
                <img
                  src={acc.avatar}
                  alt={acc.username}
                  className="rounded-circle mx-auto"
                  style={{ width: 80, height: 80, objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{acc.username}</h5>
                  <p className="card-text text-muted">Password: {acc.password}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger fs-5">Không tìm thấy kết quả</p>
        )}
      </div>
    </div>
  );
}
