import '../Styles/HeadSideFoot.css';
import '../Styles/index.css'
import '../Styles/Btns.css'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationArrow, faHome } from '@fortawesome/free-solid-svg-icons';

function Header(){
    const [SidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!SidebarOpen);
    };
    return(
        <>
            <header>
                <h2><a><FontAwesomeIcon icon={faBars} onClick={toggleSidebar}/></a></h2>
            </header>
            <Sidebar isOpen={SidebarOpen}/>
        </>
        
    );
}
export default Header