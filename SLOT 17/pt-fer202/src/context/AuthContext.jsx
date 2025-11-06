import React, { createContext, useReducer, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "LOGIN_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username, password) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await api.get("/users");
      const users = res.data;
      const found = users.find(
        (u) => u.username === username && u.password === password
      );
      if (!found) throw new Error("Invalid username or password");
      dispatch({ type: "LOGIN_SUCCESS", payload: found });
      return found;
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL", payload: err.message });
      throw err;
    }
  };

  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
