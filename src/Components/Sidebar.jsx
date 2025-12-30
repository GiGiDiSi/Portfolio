import "../Styles/HeadSideFoot.css";
import '../Styles/Modal.css'
import Socials from "../Components/Socials.jsx";
const Sidebar = ({ isOpen }) => {
  return (
    <div className= {`${isOpen ? "modal" : ""}`} >
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="container">
          <a href="/Original">
            <h2>Original</h2>
          </a>

          <a href="/FanArts">
            <h2>Fan Arts</h2>
          </a>

          <a href="/Animation">
            <h2>Animation</h2>
          </a>

          <a href="/About">
            <h2>About</h2>
          </a>

          <a href="/FAQ">
            <h2>FAQ</h2>
          </a>
          <Socials />
        </div>
        
      </div>
    </div>
  );
};
export default Sidebar;
