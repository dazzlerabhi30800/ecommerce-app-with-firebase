import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarMobile } from "./Components/Navbar/NavbarMobile";
import { Resize } from "./context/Resize";

function App() {
  const size = Resize();
  return (
    <>
      <Navbar />
      {size <= 700 && <NavbarMobile />}
    </>
  );
}

export default App;
