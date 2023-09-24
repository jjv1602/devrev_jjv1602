import React from 'react'
import st from './UpperBox.module.css';
import { Input, Button } from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";
const UpperBox = (props) => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    return (
        <div className={st.par}>
            <div className={st.srchpar}>
                <Input placeholder='Search your cart ' width="80%" className={st.inp}
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                    onChange={(e)=>props.typing(e.target.value)}
                />
                <Button size='md' style={{ backgroundColor: "#164bea", color: "white" }}>
                    <AiOutlineSearch></AiOutlineSearch>
                </Button>
            </div>
            <div className={st.calendar}>
                <AiOutlineCalendar size={"6vh"}></AiOutlineCalendar>
                <div id={st["date"]}>{currentDate}</div>
            </div>
        </div>
    )
}

export default UpperBox
