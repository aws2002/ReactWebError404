import Error404 from "./components/Pages/Error404";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import Main from "./components/Pages/Main";
export default function App() {
  return (
    <div className=" bg-bg_color">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Main/>} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </div>
  );
}
