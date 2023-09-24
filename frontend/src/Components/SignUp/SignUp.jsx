import React, { useState } from 'react'
import st from './SignUp.module.css'
import { Button, Heading, Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/react'
import { AiOutlineUser } from "react-icons/ai";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
    const [email, setMail] = useState("");
    const [mob, setMob] = useState("");
    const [name, setName] = useState("");
    const [password, setPwd] = useState("");
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();

    const submitHandler = async (par) => {

        par.preventDefault()  //imp line for submit form   
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/users",
                { name, email, password, mob },
                config
            );

            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate('/dashboard');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={st.par}>
            <div className={st.content}>
                <div className={st.header}>
                    <div className={st.font}>
                        Create Account
                    </div>
                    <div className={st.subtxt}>
                        Please fill the input here
                    </div>
                </div>
                <FormControl color={'white'} >
                    <FormLabel class={st.label}>Enter Name</FormLabel>
                    <Input type='text' border={0} backgroundColor={'#38314d'} onChange={(e)=>setName(e.target.value)}/>
                </FormControl>
                <FormControl color={'white'} mt={'5'}>
                    <FormLabel class={st.label}>Enter Email</FormLabel>
                    <Input type='email' border={0} backgroundColor={'#38314d'} onChange={(e)=>setMail(e.target.value)}/>
                </FormControl>
                <FormControl color={'white'} mt={'5'}>
                    <FormLabel class={st.label}>Enter Phone Number</FormLabel>
                    <InputGroup mt={'5'}>
                        <InputLeftAddon color={'black'} children='+91' />
                        <Input type='tel' placeholder='Phone Number' onChange={(e)=>setMob(e.target.value)}/>
                    </InputGroup>
                </FormControl>
                <FormControl color={'white'} mt={'5'}>
                    <FormLabel class={st.label}>Enter Password </FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            onChange={(e)=>setPwd(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <button className={st.btn} onClick={submitHandler}>Sign Up </button>
            </div>
        </div>
    )
}

export default SignUp
