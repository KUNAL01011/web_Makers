import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SingleVideo from "./pages/SingleVideo";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/singlevideo" element={<SingleVideo/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
