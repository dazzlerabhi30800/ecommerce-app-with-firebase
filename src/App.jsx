import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarMobile } from "./Components/Navbar/NavbarMobile";
import { Resize } from "./context/Resize";

function App() {
  const size = Resize();
  console.log(size);
  return (
    <>
      <Navbar />
      <NavbarMobile />
    </>
  );
}

export default App;
