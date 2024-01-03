import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignIn from "./Pages/LoginPage";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="login" element={<SignIn />} />
    </Routes>
  );
}

export default App;
