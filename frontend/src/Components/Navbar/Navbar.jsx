import React, { useState } from 'react'
import st from './Navbar.module.css';
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineFieldTime } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { BsCart3, BsFillJournalBookmarkFill } from "react-icons/bs";
const Navbar = (props) => {
    const [activeItem, setActiveItem] = useState(props.act);
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className={st.par}>
            <div className={st.nav}>
                <div className={activeItem === 'Home' ? `${st.actnavbtn} ` : `${st.navbtn}`} onClick={() => handleItemClick('Home')}><BsFillClipboard2DataFill style={{ color: "#ffffff" }} size={"4vh"}></BsFillClipboard2DataFill>
                    <div className={activeItem === 'Home' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Dashboard</div>
                </div>

                <div className={activeItem === 'Brw' ? `${st.actnavbtn} active` : `${st.navbtn}`} onClick={() => handleItemClick('Brw')}><BsFillJournalBookmarkFill style={{ color: "#ffffff" }} size={"4vh"}></BsFillJournalBookmarkFill>
                    <div className={activeItem === 'Brw' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Borrowed Books</div>
                </div>


                <div className={activeItem === 'Ovrd' ? `${st.actnavbtn} active` : `${st.navbtn}`} onClick={() => handleItemClick('Ovrd')}><AiOutlineFieldTime style={{ color: "#ffffff" }} size={"4vh"}></AiOutlineFieldTime>
                    <div className={activeItem === 'Ovrd' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Overdue Books</div>
                </div>


                <div className={activeItem === 'Cart' ? `${st.actnavbtn} active` : `${st.navbtn}`} onClick={() => handleItemClick('Cart')}><BsCart3 style={{ color: "#ffffff" }} size={"4vh"} ></BsCart3><div className={activeItem === 'Cart' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Cart</div></div>


                <div className={activeItem === 'Profile' ? `${st.actnavbtn} active` : `${st.navbtn}`} onClick={() => handleItemClick('Profile')}><AiOutlineUser style={{ color: "#ffffff" }} size={"4vh"}></AiOutlineUser><div className={activeItem === 'Profile' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Profile</div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
