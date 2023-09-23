import React, { useState } from 'react'
import st from './Dashboard.module.css';
import Navbar from '../../Navbar/Navbar';
import UpperBox from './UpperBox/UpperBox';
const Dashboard = () => {
  const [search,setSearch]=useState('');

  const type=(args)=>{
    setSearch(args);
  }
  return (
    <div className={st.body}>
      <Navbar act="Home"></Navbar>
      <div className={st.right}>
          <div className={st.upperbx}>
            <UpperBox type={type}></UpperBox>
          </div>
          <div className={st.downbx}>

          </div>
      </div>
    </div>
  )
}

export default Dashboard
