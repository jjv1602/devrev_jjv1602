import React from 'react'
import st from './Downbox.module.css';
import { FiFilter } from "react-icons/fi";
import { Box, Tag, Tooltip } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Suspense, lazy } from 'react';
// Custom Card for chakra ui tooltip 
const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p='1'>
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
))

const Result=React.lazy(()=>import('./Result'));
const DownBox = (props) => {

  return (
    <div className={st.par}>
      <div className={st.topbar}>
        <div className={st.heading}>Search Results</div>
        <Select placeholder='Filter By ' background={"white"} width={"20vw"} id={st["filter"]}>
          <option value='option1'>Filter By Author</option>
          <option value='option2'>Filter By Genre</option>
          <option value='option3'>Filter By Publish Date</option>
        </Select>
        <Tooltip label='Filter'>
          <CustomCard>
            <button className={st.filter}>
              <FiFilter size={"5vh"}></FiFilter>
            </button>
          </CustomCard>
        </Tooltip>
        
      </div>
      <div className={st.results}>
        <Result searchResults={props.searchResults} typing={props.typing}></Result>
      </div>
    </div >
  )
}

export default DownBox
