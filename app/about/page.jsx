import React from 'react'
import "./about.css"
import Link from 'next/link'
import Image from 'next/image'
import { avatarData, trademarkData } from '@/data'
import { FaApple } from "react-icons/fa";
import { animation01, animation02, animation03, animation04, googleplay, phoneframe, qrcode } from '@/public/assets';
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <div className="about">
            <div className="about-us">
                <section className="about-head gray-bg">
                    <div className="wrapper">
                        <h1>
                            Come find out what <br />everyone&apos;s talking <br /> about
                        </h1>
                        <div className="head-text">
                            <p>
                                The social app for viral voice notes, spontaneous <br /> conversations and finding your community.
                            </p>
                        </div>
                    </div>

                    <div className="animated-images">
                        {avatarData.map((avatar) => (
                            <div key={avatar.id} className="avatar-item">
                                <div className="avatar-container">
                                    <span>
                                        <Image className="avatar" src={`/assets/${avatar.image}`} width={150} height={100} /></span>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>


                <div className="stereo-download">
                    <div className="stereo-left">
                        <p>Be on Stereo, don't be on here</p>
                    </div>
                    <div className="stereo-right">
                        <div className="stereo-right-icon">
                            <div className="inner btn">
                                <Link href={""}>
                                    <div className="stereo-icon">
                                        <FaApple className="icon" size="35" color="white" />
                                        <div>
                                            <p> Download on the</p>
                                            <span>App Store</span></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="inner btn">
                                <Link href={""}>
                                    <div className="stereo-icon">
                                        <Image className="icon" src={googleplay} alt="googleplay" width={30} height={30} />
                                        <div>
                                            <p>GET IT ON</p>
                                            <span>Google Play</span></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="what-we-do">
                    <div className="what-we-do-flex">
                        <div className="about-left">
                            <div>
                                <div className="block">
                                    <div><span className="posts">Posts</span></div>
                                    <div><span className="posts-others">Talks</span></div>
                                    <div><span className="posts-others">DMs</span></div>
                                    <div><span className="posts-others">Games</span></div>
                                    <div><span className="posts-others">Customize</span></div>
                                </div>
                                <div className="block-content">
                                    <p>Stereo posts are the on-ramp to the hot-take highway. Voice what&apos;s on your mind, amp it up with media -and make every second count.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-right">
                            <div className="about-right-video">
                                <div className="about-right-video-play">
                                    <video className="video-play" autoPlay muted loop playsInline>
                                        <source src="https://storage.stereo.com/stereo-static/landing_videos/soundbites_scaled.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <Image className="video-image" src={phoneframe} alt="phoneframe" width={200} height={100} />

                            </div>
                        </div>
                    </div>
                </section>

                <section className="animated-gifs white-bg">
                    <div className="animate">
                        <h1>
                            Say, hey. <br /> Then whatever <br /> comes to you.
                        </h1>
                    </div>

                    <div className="animate-image">
                        <div className="animation01 animate">
                            <Image src={animation01} alt={animation01} width={150} height={100} style={{ animationName: 'phone', animationDuration: '12s' }} />
                        </div>
                        <div className="animation02 animate">
                            <Image src={animation02} alt={animation02} width={150} height={100} />
                        </div>
                        <div className="animation03 animate">
                            <Image src={animation03} alt={animation03} width={150} height={100} />
                        </div>
                        <div className="animation04 animate">
                            <Image src={animation04} alt={animation04} width={150} height={100} />
                        </div>
                    </div>
                </section>
            </div>

            <section className="more-info">
                <div>
                    <div className="more-info-flex">
                        <div className="more-info-flex-inner">
                            <div>
                                <video className="video-play-info" autoPlay muted loop playsInline>
                                    <source src="https://storage.stereo.com/stereo-static/landing_videos/footer_scaled.mp4"></source>
                                </video>
                            </div>

                            <div className="more-info-flex-inner-content">
                                <div className="resources">
                                    <div>
                                        <p>Resources</p>
                                    </div>
                                    <Link className="links-column" href={""}>FAQs</Link>
                                    <Link className="links-column"  href={""}>Guidelines</Link>
                                    <Link className="links-column" href={""}>Privacy</Link>
                                    <Link className="links-column" href={""}>Terms</Link>
                                    <Link className="links-column" href={""}>Teens</Link>
                                </div>

                                <div className="resources">
                                    <div>
                                        <p>Contact Us</p>
                                    </div>
                                    <Link className="links-column" href={""}>Contact</Link>
                                    <Link className="links-column" href={""}>Press</Link>
                                </div>
                            </div>
                        </div>

                        <div className="scancode">
                            <div className="scancode-image">
                                <Image src={qrcode} alt={qrcode} className="scancode-logo" width={200} height={200} />
                            </div>

                            <div className="scancode-text">
                                <span>Scan to download <br/> stereo</span>
                            </div>
                            <div className="stereo-download">
                                <div className="stereo-right">
                                    <div className="stereo-right-icon">
                                        <div className="inner btn">
                                            <Link href={""}>
                                                <div className="stereo-icon">
                                                    <FaApple className="icon" size="35" color="white" />
                                                    <div>
                                                        <p> Download on the</p>
                                                        <span>App Store</span></div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="inner btn">
                                            <Link href={""}>
                                                <div className="stereo-icon">
                                                    <Image className="icon" src={googleplay} alt="googleplay" width={30} height={30} />
                                                    <div>
                                                        <p>GET IT ON</p>
                                                        <span>Google Play</span></div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>               
                    </div>

                    <div className="mobile-tablet-menu-container-footer">
            <div className="mobile-tablet-menu-container-footer left">
              <p>Follow Us</p>
              <Link href={"#"}><FaTiktok size="35px" color="#fff"/></Link>
              <Link href={"#"}><FaInstagram size="35px" color="#fff"/></Link>
              <Link href={"#"}><FaTwitter size="35px" color="#fff"/></Link>
            </div>
            <div className="mobile-tablet-menu-container-footer right">
              <span className="hide">English</span>
              <span> &copy; Stereo, 2024</span>
            </div>
          </div>
                </div>
            </section>

            <section className="animated-images-stereo-footer">
                <div>
                    <div>
                    <div className="animated-images-footer">
                        {trademarkData.map((trademark) => (
                            <div key={trademark.id} className="avatar-item">
                                <div className="avatar-container">
                                    <div className="avatar-container-text">
                                    <p>{trademark.text}</p>
                                    </div>
                                    <span>
                                        <Image className="avatar-image" src={`/assets/${trademark.image}`} width={80} height={80} /></span>
                                </div>

                            </div>
                        ))}
                    </div>
                  </div>
                </div>
            </section>
        </div>

    )
}

export default About