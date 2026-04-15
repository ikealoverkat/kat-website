
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';
import Blog from './Blog';
import Design from './Design';
import Empty from './Empty';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/design" element={<Design />}/>
        <Route path="/empty" element={<Empty />}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;