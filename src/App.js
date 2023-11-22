import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./common/footer/Footer";
import ContactUsPage from "./pages/contactuspage/ContactUsPage";
import Portfolio from "./pages/portfolio/Portfolio";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Contact" element={<ContactUsPage />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
