import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Home, PublicLayout, Register } from "./pages/public";
import Login from "./pages/public/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
