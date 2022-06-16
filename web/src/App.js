import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

import { useSelector, useDispatch } from "react-redux";
import { logar } from "./store/modules/users/action";
import ListServices from "./pages/ListServices";
import Chats from "./pages/Chats";


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
          <Route index path="/" element={
            <LoginAuth>
              <Login />
            </LoginAuth>
          } />

          <Route path="/home" element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />

          <Route path="/servicos" element={
            <RequireAuth>
              <ListServices />
            </RequireAuth>
          } />

          <Route path="/chats" element={
            <RequireAuth>
              <Chats />
            </RequireAuth>
          } />

      </Routes>
    </div>
  );
}

function RequireAuth(props) {
  const user = useSelector(state => state.users);

  if (user) {
    return props.children;
  }

  return <Navigate to="/" replace />;
}

function LoginAuth(props) {
  const user = useSelector(state => state.users);

  if (!user) {
    return props.children;
  }

  return <Navigate to="/home" replace />;
}
