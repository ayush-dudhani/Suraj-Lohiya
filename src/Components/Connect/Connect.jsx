import "./connect.css";
import { SocialIcon } from "react-social-icons";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  AOS.init();
  return (
    <>
      <section id="follow">
        <div className="youtube-heading">
        <h1>YouTube</h1>
        </div>
        
        <div className="yt-video">
            
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/zn2HMnmY4_k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div data-aos="fade-up" className="connect-container">
          <h4>Follow Me On</h4>
          <div className="social-links">
            <SocialIcon
              url="https://twitter.com/surajlohiya99?s=20"
              target="_blank"
            />
            <SocialIcon
              url="https://youtube.com/@commandogaming6015"
              target="_blank"
            />
            <SocialIcon
              url="https://instagram.com/ig.commandobgmi?igshid=YmMyMTA2M2Y="
              target="_blank"
            />
          </div>
        </div>
      </section>
    </>
  );
}
