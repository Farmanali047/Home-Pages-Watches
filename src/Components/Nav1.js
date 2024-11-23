import React, { useState } from "react";
import { FaMapMarkerAlt, FaEye, FaUser, FaSearch, FaBars } from "react-icons/fa";
import Nav2 from "./Nav2";

const Nav1 = ({isTransparent,isVisible}) => {
    const [isNav2Visible, setIsNav2Visible] = useState(false);

    const toggleNav2 = () => {
        setIsNav2Visible(!isNav2Visible);
    };

    return (
        <div
        className="nav1"
        style={{
            background: isTransparent
                ? "linear-gradient(to bottom, rgba(59, 130, 246, 0.7), rgba(23, 62, 172, 0.7))"
                : "linear-gradient(to bottom, #3B82F6, #173eac)"
        }}
    >
            {/* Left side with icons and menu icon for mobile */}
            <div className="nav1-left">
                <FaBars className="menu-icon"/> {/* Menu icon */}
                <FaMapMarkerAlt className="icon location-icon" />
                <FaEye className="icon" />
            </div>

            {/* Center text */}
            <div className="nav1-center">
                <h1 className="text-center" style={{ fontFamily: "'Newsreader', serif",marginLeft:'100px',fontSize:'23px'}}>E T E R N I S <br /> <h5 style={{ color: "#ccc", fontSize: "13px" }}>B E R L I N</h5></h1>
            </div>

            {/* Right side with dropdown and icons */}
            <div className="nav1-right">
                <select className="language-select">
                    <option>EU . EN</option>
                    <option>US . EN</option>
                    <option>FR . FR</option>
                </select>
                <FaUser className="icon" />
                <FaSearch className="icon" />
            </div>

            {/* Nav2 component (collapsible) */}
            {isNav2Visible && <Nav2 />} {/* Conditionally render Nav2 based on isNav2Visible */}
        </div>
    );
};

export default Nav1;