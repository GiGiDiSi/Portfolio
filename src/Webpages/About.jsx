import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Title from '../Components/Title.jsx'
import Card from '../Components/Card.jsx'
import '../Styles/index.css'
import FadeInDiv from '../Components/FadeIn.jsx'
//import '../Styles/imGrid.css'

function About() {
  return(
    <>
          <title>GiGiDiSi's Portfolio - About</title>
          <FadeInDiv>
          <div>
              <Header/>
                <div className="container">
                    <Card />
                    <Title title="About Me"/>
                    <p>They/Them || Filipino Hobbyist Artist</p>
                    <p>
                        Hello, I'm GiGi. I began pursuing digital art as a hobby around 2020. 
                        Started uploading my art in the internet around 2022 under the name GiGiDiSi, commonly uploading Touhou fanarts. 
                        Currently I upload my art on Tumblr and Bluesky doing random art such as OC Art, Pixel Art, and Quick Animations.
                    </p>
                </div>
          </div>
          </FadeInDiv>
    </>
  );
}

export default About