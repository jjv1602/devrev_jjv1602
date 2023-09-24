import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Screen/Dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
import Borrowed from './Components/Screen/Borrowed/Borrowed';
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/borrowed" element={<Borrowed />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
