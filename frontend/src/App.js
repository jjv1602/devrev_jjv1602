import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { LayoutGroupContext } from 'framer-motion';
import { lazy } from 'react';
const Borrowed = lazy(() => import('./Components/Screen/Borrowed/Borrowed'));
const Cart  = lazy(() => import('./Components/Screen/Cart/Cart'));
const Dashboard=lazy(()=>import('./Components/Screen/Dashboard/Dashboard'));
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/borrowed" element={<Borrowed />} />
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
