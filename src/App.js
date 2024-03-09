import "./styles/main.css";
// BrowserRouter робимо як Router для зручності
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbarr from "./components/navbar/Navbarr";

import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        {/* чтобы шла всегда прокрутка вверх когда выбираем другой путь  */}
        <ScrollToTop />
        <Navbarr />
        <Routes>
          {/* path шлях по якому переходимо */}
          {/* element = той елемент який повинен бути відкритий коли ми находимось на данному маршуті на шляху / ми ідемо в home ітд */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* id айди каждого проекта(можно /:id забрать) */}
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
