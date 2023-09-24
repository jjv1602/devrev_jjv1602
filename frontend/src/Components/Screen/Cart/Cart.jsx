import React, { useEffect, useState } from 'react'
import st from './Cart.module.css';
import Navbar from '../../Navbar/Navbar';
import UpperBox from './UpperBox/UpperBox';
import DownBox from './DownBox/DownBox';
import axios from 'axios';
const Cart = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const typing = async (args) => {
        try {
            setSearch(args);
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const token = userInfo.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    //only Bearer token is accepted so we send token
                },
            };
            const { data } = await axios.get("/api/books/getwishlist", config);
            var arr = data.wishlist.filter((e) => e.book_name.toLowerCase().includes(search.toLowerCase()));
            setSearchResults(arr);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        typing();
    }, [searchResults])
    return (
        <div className={st.body}>
            <Navbar act="Cart"></Navbar>
            <div className={st.right}>
                <div className={st.upperbx}>
                    <UpperBox typing={typing}></UpperBox>
                </div>
                <div className={st.downbx}>
                    <DownBox searchResults={searchResults} tying={typing} ></DownBox>
                </div>
            </div>
        </div>
    )
}

export default Cart
