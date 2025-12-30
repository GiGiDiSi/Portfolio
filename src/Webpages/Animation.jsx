import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Title from '../Components/Title.jsx'
import ImgGrid from '../Components/ImgGrid.jsx'
import '../Styles/index.css'
import FadeInDiv from "../Components/FadeIn.jsx";
//import '../Styles/imGrid.css'

function Animation() {
  return(
    <>
      
          <title>GiGiDiSi's Portfolio - Animation</title>
          <FadeInDiv>
            <div id='root'>
                  <Header/>
                  <Title title="Animation"/>
                  <ImgGrid folder="Animation"/>
                  <Footer/>
              </div>
          </FadeInDiv>
          
    </>
  );
}

export default Animation
