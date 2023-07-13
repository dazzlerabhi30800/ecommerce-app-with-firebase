import React, { useEffect, useState } from "react";

export const Scroll = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  function checkScroll() {
    setScrollTop(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [scrollTop]);

  return scrollTop;
};
