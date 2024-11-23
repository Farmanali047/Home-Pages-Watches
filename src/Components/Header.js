import { useRef,useState,useEffect } from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const Header = () => {

    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0); // To store the last scroll position
    const [isTransparent, setIsTransparent] = useState(true);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTransparent(true); // At the top, make it transparent
        } else {
            setIsTransparent(false); // Scrolled down, make it solid
        }    
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current) {
            // User is scrolling down, hide Nav2
            setIsVisible(false);
        } else {
            // User is scrolling up, show Nav2
            setIsVisible(true);
        }

        // Update the last scroll position for next scroll event
        lastScrollY.current = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="Header">
            <div >
                {/* Your content here */}
                <Nav1 isTransparent={isTransparent} isVisible={isVisible} />
            </div>


            <hr className="navbar-divider" />
            <div style={{ backgroundColor: isTransparent ? "transparent" : "#183e25" }}>
                {/* Your content here */}
                <Nav2 isVisible={isVisible}/>
            </div>
            <hr className="navbar-divider" />
        </div>
    );
};

export default Header;
