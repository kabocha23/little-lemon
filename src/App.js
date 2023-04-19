import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Specials from "./components/Specials/Specials";
import ReserveTable from "./components/ReserveTable/ReserveTable";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/reserve-table" element={<ReserveTable />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
