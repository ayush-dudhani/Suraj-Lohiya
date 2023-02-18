import "./achievements.css";
import img1 from "../../Assets/img1.PNG";
import img2 from "../../Assets/img2.PNG";
import img3 from "../../Assets/img3.PNG";
import img4 from "../../Assets/img4.PNG";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Acheivements() {
  AOS.init();
  return (
    <>
      <section id="achievements">
        <div className="achievements">

        <div className="container-first" data-aos="fade-right">
            <div className="achievement-image">
              <img src={img2} alt="" height={400} width={800} />
            </div>
            <div className="achievement-detail">
              <p>
                #3 Rank in INDIA
              </p>
            </div>
          </div>

          <div className="container-first" data-aos="fade-left">
            <div className="achievement-image" >
              <img src={img1} alt="" height={400} width={800} />
            </div>
            <div className="achievement-detail">
              <p>
                All Time Weekly Popularity Rank Holder
              </p>
            </div>
          </div>

          

          <div className="container-first" data-aos="fade-left">
            <div className="achievement-image">
              <img src={img3} alt="" height={400} width={800} />
            </div>
            <div className="achievement-detail">
              <p>
                Top 30 in Weekly Global Popularity Ranking
              </p>
            </div>
          </div>

          <div className="container-first" data-aos="fade-right">
            <div className="achievement-image">
              <img src={img4} alt="" height={400} width={800} />
            </div>
            <div className="achievement-detail">
              <p>
                #4 Squad Wins
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
