import "./mainComponent.css";
import Typed from "react-typed";
import logo from "../../Assets/logo.jpg";
export default function MainComponent() {
  return (
    <>
      <section id="home">
        <div className="main-container">
          <div className="intro">
            
            <span>Hello! </span>
            <span>I am Suraj! </span>
            I'm a Businessman by Profession <br />
            Gaming is my Hobby! <br />
            I play various PC and Mobile Games. <br /> <br />
            BGMI, VALORANT, GTA 5, Among Us are some of my favourites!
          </div>
          <div className="logo">
            <img src={logo} alt="Commando Gaming" width={350} height={350} />
          </div>
        </div>
        <div className="commando-gaming">
            <h1>
            <Typed
            strings={["COMMANDO GAMING"]}
            typeSpeed={200}
            backSpeed={60}
            loop
            showCursor={false}
          ></Typed>
          </h1>
        </div>
      </section>
    </>
  );
}
