import React, { useState } from 'react'
import { Button, Heading, Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/react'
import st from './LoginPg.module.css';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginPg = () => {
    const [email, setMail] = useState("");
    const [password, setPwd] = useState("");
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();
    const signuphandler=()=>{
        navigate('/signup')
    }
    const submitHandler = async (par) => {

        par.preventDefault()  //imp line for submit form   
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/users/login",
                {  email, password},
                config
            );
            
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/dashboard");

        } catch (error) {
            console.log(error);
        }
    }
        return (
            <div className={st.par}>
                <div className={st.content}>
                    <div className={st.header}>
                        <div className={st.font}>
                            Login
                        </div>
                        <div className={st.subtxt}>
                            Please fill the input here
                        </div>
                    </div>

                    <FormControl color={'white'} mt={'5'}>
                        <FormLabel class={st.label}>Enter Email</FormLabel>
                        <Input type='email' border={0} backgroundColor={'#38314d'} onChange={(e)=>setMail(e.target.value)} />
                    </FormControl>

                    <FormControl color={'white'} mt={'5'}>
                        <FormLabel class={st.label} color={'white'} >Enter Password </FormLabel>
                        <InputGroup size='md'  backgroundColor={'#38314d'}>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder=''
                                onChange={(e)=>setPwd(e.target.value)}
                                border={0}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <button className={st.btn} onClick={submitHandler}>Login </button>

                    <div className={st.footer} onClick={signuphandler}>
                        Don't have an account ? <div className={st.sp}>&nbsp;Sign Up </div>
                    </div>
                </div>
            </div>
        )
    }

    export default LoginPg
