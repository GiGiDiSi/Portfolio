import '../Styles/index.css';
import '../Styles/Btns.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="btn"
      >
        <h2>{title}{/* {accordionOpen ? <h2>-</h2> : <h2>+</h2>} */}</h2>
        
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } dropdown-item`}
      >
        <a class="dropdown-item" href="#">{answer}</a>
      </div>
    </div>
  );
};
export default Accordion;