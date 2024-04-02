import Link from "next/link";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="yellow">
            <div className="wrapper">
                <div className="content-container">
                    <div className="text">
                        <span>Don't miss out!</span>

                         <div className="text-content">
                            <p>People on stereo are the first to talk about it</p>
                        </div> 
                    </div>
                    <div className="text">
                    <button className="btn pink">
                        <Link href={"/"}>Let's go!</Link>
                    </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;