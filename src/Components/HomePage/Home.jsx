import React, { useContext } from "react";
import Banner from "./Banner";
import Products from "./Products";
import { AuthContext } from "../../context/SetContext";

const Home = () => {
  const { searchInput } = useContext(AuthContext);
  return (
    <main className="main--container">
      {searchInput.length < 1 && <Banner />}
      <Products />
    </main>
  );
};

export default Home;
