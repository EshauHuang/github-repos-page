import GlobalStyle from "./globalStyle";

import { useEffect, useState } from "react";

import SiteRepos from "./components/SiteRepos";
import SiteHeader from "./components/SiteHeader";

function App() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const debounce = (fn, delay) => {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn();
        }, delay);
      };
    };
    window.onscroll = () => {
      const handleScroll = debounce(() => {
        setScroll(Math.ceil(window.pageYOffset));
      }, 60);
      handleScroll();
    };

    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <SiteHeader scroll={scroll >= 330 ? 330 : scroll} />
      <SiteRepos scroll={scroll} />
    </>
  );
}

export default App;
