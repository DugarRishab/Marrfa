import React, { useState } from "react";
import "./Navbar.css";
import Logo from "/assets/Marrfa.png";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";

const tabroutes = { Home: "", Projects: "projects", Blogs: "blogs", "About us": "about" };

const Navbar = () => {
    const [selected, setSelected] = useState(0);
    const handleSelect = (item) => {
        setSelected(() => item);
    };

    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="brand">
                    <img src={Logo} />
                    <div className="brand-name">Marrfa</div>
                </div>
                <div className="tabs">
                    {Object.keys(tabroutes).map((key, idx) => (
                        <Link
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            className={"item" + (selected == idx ? " active" : "")}
                            to={`/${tabroutes[key]}`}
                        >
                            {key}
                        </Link>
                    ))}
                </div>
                <div className="action">
                    {/* <div className="item">Log in</div>
                    <div className="item">Request Callback</div> */}
                    <CustomButton style={{background: "grey", color: "#fff", padding: "10px", height: "2em"}} invert rounded={false} text={"Log in"} />
                    <CustomButton style={{background: "grey", color: "#fff", padding: "10px", height: "2em"}} invert rounded={false} text={"Request a callback"} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
