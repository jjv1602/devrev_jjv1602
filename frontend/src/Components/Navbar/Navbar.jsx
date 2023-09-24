import React, { useState } from 'react'
import st from './Navbar.module.css';
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineFieldTime } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { BsCart3, BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = (props) => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(props.act);
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    const logouthandler=()=>{
        console.log("clicked btn");
        console.log("clicked btn");
        console.log("clicked btn");
        localStorage.removeItem("userInfo");
        navigate('/');
    }
    return (
        <div className={st.par}>
            <div className={st.nav}>
                <a href='/dashboard'>
                    <div className={activeItem === 'Home' ? `${st.actnavbtn} ` : `${st.navbtn}`} onClick={() => handleItemClick('Home')}><BsFillClipboard2DataFill style={{ color: "#ffffff" }} size={"4vh"}></BsFillClipboard2DataFill>
                        <div className={activeItem === 'Home' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Dashboard</div>
                    </div>
                </a>
                <a href='/borrowed'>
                    <div className={activeItem === 'Brw' ? `${st.actnavbtn} active` : `${st.navbtn}`} onClick={() => handleItemClick('Brw')}><BsFillJournalBookmarkFill style={{ color: "#ffffff" }} size={"4vh"}></BsFillJournalBookmarkFill>
                        <div className={activeItem === 'Brw' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Borrowed Books</div>
                    </div>
                </a>



                <a href='/cart'>
                    <div className={activeItem === 'Cart' ? `${st.actnavbtn} active` : `${st.navbtn}`} onClick={() => handleItemClick('Cart')}><BsCart3 style={{ color: "#ffffff" }} size={"4vh"} ></BsCart3><div className={activeItem === 'Cart' ? `${st.actnavtxt} ` : `${st.navtxt}`}>Cart</div></div>
                </a>
                
                <div className={st.navbtn} ><AiOutlineUser style={{ color: "#ffffff" }} size={"4vh"}></AiOutlineUser><div className={st.navtxt} onClick={ logouthandler} >Logout</div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
