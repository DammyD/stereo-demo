"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logo from "../../public/logo.svg"
import { qrcode } from "@/public/assets"
import Mobile from "../Mobile/Mobile";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <div className={`wrapper ${isActive ? "active" : ""}`}>
            <nav>
                <Link href={"/"} className="logo">
                    <Image className="image" src={logo} alt={logo} />
                </Link>

                {isActive ? (
                    <div className="close-icon" onClick={closeMenu}>
                        <MdClose size="35px" />
                    </div>

                ) : (

                    <div className="menu-icon" onClick={toggleMenu}>
                        <FiMenu size="35px" />
                    </div>

                )}

                <div className="menu-items">
                    <Link className="links active" href={"/"}>Explore</Link>
                    <Link className="links" href={"/about"}>About</Link>
                    <Link className="links" href={"/people"}>People</Link>
                    <Link className="links" href={"/more"}>More</Link>
                    <div className="barcode-container">
                       <Link href="/"><Image src={qrcode} alt={qrcode} className="barcode" /></Link>
                        <div className="barcode-overlay">
                            <Image src={qrcode} alt={qrcode} className="overlay-qrcode"/>
                            <span className="overlay-text">Scan to download Stereo</span>
                        </div>
                    </div>
                </div>

            </nav>
            <div className="mobile" style={{ display: isActive ? 'block' : 'none' }}>
                <Mobile isActive={isActive} />
            </div>
        </div>

    )
}

export default Navbar;