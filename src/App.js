import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/contact";
import Home from "./pages/home";
import News from "./pages/news";

// Thiện
function App() {
  return (
    <div className={`flex flex-col items-center justify-center w-full`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
