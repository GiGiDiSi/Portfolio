import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Title from '../Components/Title.jsx'
import ImgGrid from '../Components/ImgGrid.jsx'
import FadeInDiv from '../Components/FadeIn.jsx'
import '../Styles/index.css'
//import '../Styles/imGrid.css'

function FanArts() {
  return(
    <>
          <FadeInDiv>
            <div id="root">
              <title>GiGiDiSi's Portfolio - Fan arts</title>
              <Header/>
              <Title title="Fan arts"/>
              <ImgGrid folder="FanArts"/>
              <Footer/>
            </div>
          </FadeInDiv>
          
    </>
  );
}

export default FanArts
