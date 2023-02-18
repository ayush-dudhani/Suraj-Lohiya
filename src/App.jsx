import Acheivements from "./Components/Achievements/Achievements";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
import MainComponent from "./Components/MainComponent/MainComponent";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <MainComponent></MainComponent>
    <Acheivements></Acheivements>
    <Connect></Connect>
    <Footer></Footer>
    </>
  );
}

export default App;
