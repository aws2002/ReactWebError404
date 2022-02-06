import Error404 from "./components/Pages/Error404";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Pages/Main";
import ScrollToTop from "./components/Tools/ScrollToTop";
export default function App() {
  return (
    <div className=" bg-bg_color dark:bg-white dark:text-black text-white transition duration-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}
