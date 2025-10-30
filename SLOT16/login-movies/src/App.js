import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import MovieList from "./components/MovieList";
import PrivateRoute from "./components/PrivateRoute.jsx";
// Defensive resolver for possible `{ default: ... }` wrappers caused by
// module interop or accidental re-exports. Ensures we pass a function/class
// component (or string) to JSX rather than an object.
const _resolve = (mod) => (mod && mod.default ? mod.default : mod);

const ResolvedAuthProvider = _resolve(AuthProvider);
const ResolvedAuthContext = _resolve(AuthContext);
const ResolvedLoginForm = _resolve(LoginForm);
const ResolvedMovieList = _resolve(MovieList);
const ResolvedPrivateRoute = _resolve(PrivateRoute);

if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line no-console
  console.log("App imports shapes (resolved):", {
    AuthProviderType: typeof ResolvedAuthProvider,
    AuthProvider: ResolvedAuthProvider,
    AuthContextType: typeof ResolvedAuthContext,
    AuthContext: ResolvedAuthContext,
    LoginFormType: typeof ResolvedLoginForm,
    LoginForm: ResolvedLoginForm,
    MovieListType: typeof ResolvedMovieList,
    MovieList: ResolvedMovieList,
    PrivateRouteType: typeof ResolvedPrivateRoute,
    PrivateRoute: ResolvedPrivateRoute,
  });
}

export default function App() {
  const Provider = ResolvedAuthProvider;
  const Login = ResolvedLoginForm;
  const Movies = ResolvedMovieList;
  const Protected = ResolvedPrivateRoute;

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/movies"
            element={
              <Protected>
                <Movies />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}
