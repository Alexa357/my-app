import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignIn from "./Pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>SRBIJA NE SME DA STANE</h1>} />
      <Route path="login" element={<SignIn />} />
    </Routes>
  );
}

export default App;
