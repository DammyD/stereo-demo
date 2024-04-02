import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import "./Mobile.css"

const Mobile = () => {
    return (
        <>
            <div className="wrapper">
                <div className="mobile-tablet-menu-container">
                    <div className="menu-items left">
                        <Link className="links" href={"/"}>Explore</Link>
                        <Link href={"/about"}>About</Link>
                        <Link href={"/people"}>People</Link>
                        <Link href={"/contact"}>Contact</Link>
                        <Link href={"/faqs"}>FAQs</Link>
                    </div>

                    <div className="menu-items right">
                        <Link href={"/press"}>Press</Link>
                        <Link href={"/teens"}>Teens</Link>
                        <Link href={"/terms"}>Terms</Link>
                        <Link href={"/privacy"}>Privacy</Link>
                        <Link href={"/guidelines"}>Guidelines</Link>
                        <Link href={"/transparancy"}>Transparancy</Link>
                    </div>
                </div>

                <div className="mobile-tablet-menu-container-content">
                    <p className="">Where the world talks</p>
                    <button className="btn black">
                        <Link href={"/"}>Download</Link>
                    </button>
                </div>

                <div className="mobile-tablet-menu-container-footer">
                    <div className="mobile-tablet-menu-container-footer left">
                        <Link href={"#"}><FaTiktok size="35px" /></Link>
                        <Link href={"#"}><FaInstagram size="35px" /></Link>
                        <Link href={"#"}><FaTwitter size="35px" /></Link>
                    </div>

                    <div className="mobile-tablet-menu-container-footer right">
                        <span>English</span>
                        &copy; 2024 Stereo
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobile;