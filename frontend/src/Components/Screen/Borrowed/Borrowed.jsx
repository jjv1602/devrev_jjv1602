import React, { useEffect, useState } from 'react'
import st from './Borrowed.module.css';
import Navbar from '../../Navbar/Navbar';
import UpperBox from './UpperBox/UpperBox';
import DownBox from './DownBox/DownBox';
import axios from 'axios';
const Borrowed = () => {
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
            const { data } = await axios.get("/api/books/ind", config);
            
            var arr = data.rented.filter((e) => e.book.book_name.toLowerCase().includes(search.toLowerCase()));
            setSearchResults(arr);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        typing();
    }, [])
    return (
        <div className={st.body}>
            <Navbar act="Brw"></Navbar>
            <div className={st.right}>
                <div className={st.upperbx}>
                    <UpperBox typing={typing}></UpperBox>
                </div>
                <div className={st.downbx}>
                    <DownBox searchResults={searchResults} ></DownBox>
                </div>
            </div>
        </div>
    )
}

export default Borrowed
