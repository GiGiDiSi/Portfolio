import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Title from '../Components/Title.jsx'
import ImgGrid from '../Components/ImgGrid.jsx'
import FadeInDiv from '../Components/FadeIn.jsx'
import '../Styles/index.css'
//import '../Styles/imGrid.css'

function Original() {
  return(
    <>
    <FadeInDiv>
      <div id="root">
            <title>GiGiDiSi's Portfolio - Originals</title>
            <Header/>
            <Title title="Originals"/>
            <ImgGrid folder="Originals"/>
            <Footer/>
      </div>
    </FadeInDiv>
    </>
  );
}

export default Original
