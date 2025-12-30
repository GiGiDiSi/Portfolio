import Card from "../Components/Card.jsx";
import Footer from "../Components/Footer.jsx";
import Btn from "../Components/Btn.jsx";
import Socials from "../Components/Socials.jsx";
import "../Styles/index.css";
import FadeInDiv from "../Components/FadeIn.jsx";

function Home() {
  return (
    <>
      <title>GiGiDiSi's Portfolio</title>
      <FadeInDiv>
        <div id="root">
          <div className="container">
            <Card />
            <Btn />
            <Socials />
          </div>
          <Footer />
        </div>
      </FadeInDiv>
    </>
  );
}

export default Home;
