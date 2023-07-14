import "./App.css";
import Home from "./Components/HomePage/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarMobile } from "./Components/Navbar/NavbarMobile";
import { Resize } from "./context/Resize";

function App() {
  const size = Resize();
  return (
    <>
      <Navbar />
      {size <= 750 && <NavbarMobile />}
      <Home />
    </>
  );
}

export default App;
