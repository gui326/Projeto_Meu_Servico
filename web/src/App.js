import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logar } from "./store/modules/users/action";


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('user')){
      dispatch(logar(JSON.parse(localStorage.getItem('user'))));
    }
  })

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={
            <LoginAuth>
              <Login />
            </LoginAuth>
          } />

          <Route index path="/home" element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />
      </Routes>
    </div>
  );
}

function RequireAuth(props) {
  const user = useSelector(state => state.users);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return props.children;
}

function LoginAuth(props) {
  const user = useSelector(state => state.users);

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return props.children;
}