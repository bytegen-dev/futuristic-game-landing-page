import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import SitePreloader from "./components/loaders/SitePreloader";
import "./styles/index.scss"
import { HiMenuAlt3 } from "react-icons/hi";

function App() {
  const [uiState, setUiState] = useState({
    showMenu: false,
    darkTheme: false,
    isVpn: false,
    userLocation: "",
    isLoading: false,
  })

  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(()=>{
    const darkSave = localStorage.getItem("darkTheme")
    if(darkSave){
      setUiState((prev)=>{
        return ({
          ...prev,
          darkTheme: true,
        })
      })
    } else{
      setUiState((prev)=>{
        return ({
          ...prev,
          darkTheme: false,
        })
      })
    }
  }, [])

  const toggleMenu = ()=>{
    setUiState((prev)=>{
      return ({
        ...prev,
        showMenu: !prev.showMenu
      })
    })
  }

  const handleMenu = (value)=>{
    setUiState((prev)=>{
      return ({
        ...prev,
        showMenu: value
      })
    })
  }

  useEffect(() => {
    const pageElement = document.querySelector(".page")
    const handleScroll = () => {
      const scrolledToTop = pageElement.scrollTop <= 100;
      setIsScrolledToTop(scrolledToTop);
    };

    // Attach the scroll event listener
    pageElement.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      pageElement.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className={`App ${uiState.showMenu ? "show-menu" : ""} ${uiState.darkTheme ? "dark-theme" : ""}`}>
      <>
        {uiState.isLoading && <SitePreloader uiState={uiState} />}
        <div className={`hamburger-fixed ${isScrolledToTop ? "" : "visible"}`} onClick={()=>{
          handleMenu(true)
        }}>
          <HiMenuAlt3 />
        </div>
        <Menu handleMenu={handleMenu} uiState={uiState} />
        <Home toggleMenu={toggleMenu} uiState={uiState} />
      </>
    </div>
  );
}

export default App;
