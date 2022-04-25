import { Route, Routes } from "react-router-dom";
import Errorpage from "./components/Pages/Errorpage";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<Errorpage></Errorpage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
