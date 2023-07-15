import { useEffect, useState } from "react";

const Scroll = () => {
  const [scroll, setScroll] = useState(document.documentElement.scrollTop);

  function checkScrollTop() {
    setScroll(document.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  });
  return scroll;
};

export default Scroll;
