import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./components/Footer";
import MyPage from "./mypage/MyPage";
import NotFound from "./NotFound";
import Main from "./Main";
import GenerateImage from "./generate/GenerateImage";
import MyPageDetail from "./mypage/MyPageDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/:imageId" element={<MyPageDetail />} />
        <Route path="/generate" element={<GenerateImage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
