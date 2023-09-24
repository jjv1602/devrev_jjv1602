import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { LayoutGroupContext } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Loader from './Components/Loader/Loader';
const Borrowed = lazy(() => import('./Components/Screen/Borrowed/Borrowed'));
const Cart  = lazy(() => import('./Components/Screen/Cart/Cart'));
const Dashboard=lazy(()=>import('./Components/Screen/Dashboard/Dashboard'));
const LoginPg=lazy(()=>import('./Components/LoginPg/LoginPg'));
const SignPg=lazy(()=>import('./Components/SignUp/SignUp'));
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/borrowed" element={<Borrowed />} />
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/" element={<LoginPg/>}></Route>
          <Route path="/signup" element={<SignPg/>}></Route>
          <Route path="/load" element={<Loader/>}></Route>
          

        </Routes>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
