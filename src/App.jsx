import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Webpages/Home"
import Original from "./Webpages/Original"
import FanArts from "./Webpages/FanArts";
import Animation from "./Webpages/Animation";
import FAQ from "./Webpages/FAQ";
import About from "./Webpages/About";
function App() {
  return(
    <>
      <BrowserRouter  basename={process.env.PUBLIC_URL || '/Portfolio'}>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element = {<Home />}/>
          <Route path="/Original" element = {<Original />}/>
          <Route path="/FanArts" element = {<FanArts />}/>
          <Route path="/Animation" element = {<Animation />}/>
          <Route path="/FAQ" element = {<FAQ />}/>
          <Route path="/About" element = {<About />}/>
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App
