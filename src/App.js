import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";
import MyPage from "./MyPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
