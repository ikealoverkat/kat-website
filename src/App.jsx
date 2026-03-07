
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';
import Blog from './Blog';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="flex place-self-center">
        <Link to="/">
          <div className = "place-items-center">
            <img src="images/icon_design.png" className = "w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">design</h2>
          </div>
        </Link>
        <Link to="/">
          <div className = "place-items-center">
            <img src="images/icon_awards.png" className = "w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">events/work/awards</h2>
          </div>
        </Link>
        <Link to="/">
          <div className = "place-items-center">
            <img src="images/icon_projects.png" className = "w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">projects</h2>
          </div>
        </Link>                
        <Link to="/blog">
          <div className = "place-items-center">
            <img src="images/icon_blog.png" className = "w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">blog</h2>
          </div>
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;