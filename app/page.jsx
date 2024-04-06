import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { FiHeadphones, FiHeart } from "react-icons/fi";
import { BsWechat, BsMic } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";
import { data, trendingTopics, trendingToday } from "@/data";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <header>
            <h1 className="heading">Trending <br />Today</h1>
          </header>
          <div className="trending-today">
            <div className="left" >
              <div className="image-container">

                {trendingToday.map(trends => (
                  <div key={trends.id} className="border" style={{ backgroundImage: `url(${trends.backdrop})` }}>
                    <div className="inner-content">
                      <div className="left-div">
                        <div className="user">
                          <span>{trends.name}</span>
                          <span>{trends.caption}</span>
                        </div>
                      </div>

                      <div className="right-div">
                        <div className="follow">
                          <Image src={`/assets/${trends.image}`} alt={trends.name} width={50} height={50} className="rounded-image" />
                          <div className="follow-btn" style={{ color: "black" }}>{trends.button}</div>
                        </div>

                        <div className="likes">
                          <div><FiHeart size="25px" color="#fff" /></div>
                          <div>{trends.likes}</div>
                        </div>

                        <div className="message">
                          <div><BsWechat size="25px" color="#fff" /></div>
                          <div>{trends.msg}</div>
                        </div>

                        <div className="share">
                          <div><PiShareFat size="25px" color="#fff" /></div>
                          <div>{trends.share}</div>
                        </div>

                        <div className="mic">
                          <div className=""><BsMic size="25px" color="#fff" /></div>
                        </div>
                      </div>
                    </div>

                    <div className="followers">
                      <span> <Image src={`/assets/${trends.image}`} alt={trends.name} width={50} height={50} /></span>
                      <span> <Image src={`/assets/${trends.image}`} alt={trends.name} width={50} height={50} /></span>
                      <span> <Image src={`/assets/${trends.image}`} alt={trends.name} width={50} height={50} /></span>
                      <span> <Image src={`/assets/${trends.image}`} alt={trends.name} width={50} height={50} /></span>
                    </div>

                  </div>
                ))}
              </div>

            </div>

            <div className="right-section">
              <section className="join-community">
                <div className="join-community-heading">
                  <h2>Join the Stereo community</h2>
                </div>
                <div className="join-community-text">
                  <p>Create audio and video content, start new trends, meet new people, talk with friends in group chats, share your thoughts, ask anything & create communities.</p>
                </div>
                <div className="mobile-tablet-menu-container-content right">
                  <button className="btn black right">
                    <Link href={"/"}>Join Stereo</Link>
                  </button>
                </div>
              </section>

              <section className="suggested-accounts">
                <div>
                  <h3>Suggested accounts</h3>
                </div>
                {data && data.map((user) => (
                  <div key={user.id} className="suggested-content">
                    <Image src={`/assets/${user.image}`} alt={user.name} width={50} height={50} className="rounded-image" />
                    <div className="info-container">
                      <div className="user-info">
                        <p className="name">{user.name}</p>
                        <p className="handle">{user.handle}</p>
                      </div>
                      <div className="extraText">
                        <p className="">{user.extraText}</p>
                      </div>
                    </div>
                    <div className="button-container">
                      <button className="btn black">{user.buttonText}</button>
                    </div>
                  </div>
                ))}
                <div className="see-all">
                  <Link href={"#"}>
                    <div className="see-all-content">
                      <span>See all</span>
                      <MdArrowForward size="20px" color="#ff6864" />
                    </div>
                  </Link>
                </div>
              </section>

              <section className="trending-topics">
                <div>
                  <h3>Trending topics</h3>
                </div>
                <div className="topics-container">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="topic-item">
                      <div className="items-one">
                        <div>{topic.topic}</div>
                        <FiHeadphones color="#9ba6bc" />
                        <span className="listener">{topic.listeners}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <Link href={"#"} className="see-all">
                    <div className="see-all-content">
                      <span>See all</span>
                      <MdArrowForward size="20px" color="#ff6864" />
                    </div>
                  </Link>
                </div>
              </section>


              <div className="links-container">
                <div className="links">
                  <Link href={"#"}>Privacy</Link>
                  <Link href={"#"}>Terms</Link>
                  <Link href={"#"}>FAQs</Link>
                  <Link href={"#"}>Guidelines</Link>
                  <Link href={"#"}>Contact</Link>
                </div>
                <div className="language-container">
                  <span>English</span>
                </div>
              </div>
              <span className="copyright"></span>
              <span className="copyright">&copy; Stereo, 2024</span>
            </div>
          </div>

          <div className="mobile-tablet-menu-container-footer border">
            <div className="mobile-tablet-menu-container-footer left">
              <p>Follow Us</p>
              <Link href={"#"}><FaTiktok size="35px" /></Link>
              <Link href={"#"}><FaInstagram size="35px" /></Link>
              <Link href={"#"}><FaTwitter size="35px" /></Link>
            </div>
            <div className="mobile-tablet-menu-container-footer right">
              <span className="hide">English</span>
              <span> &copy; Stereo, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

