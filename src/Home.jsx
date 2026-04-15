
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import App from './App';
import Footer from './Footer';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="block m-auto w-screen h-screen bg-[url('images/backgrounds/home.webp')] bg-cover">
      {/* header */}
      <div className="bg-linear-to-t from-white via-20% via-white to-70% to-transparent w-screen h-screen absolute pointer-events-none">
        {/* contents */}
        <div className="absolute top-[53vh] left-[15vh] flex flex-row items-center">
          <img src="images/logo.png" className=" w-[55vh] m-[2vh]"></img>
          <div className="flex flex-col m-[4vh] mt-[5vh] gap-[1.5vh]">
            <h1 className="text-7xl bad-handwriting"><b>illlustrator</b> - web developer - creative</h1>
            <h1 className="text-5xl bad-handwriting">student - EOM SS </h1>
            {/* contact */}
            <div className="flex flex-row gap-[4vh] pointer-events-auto">
              <a href="https://github.com/ikealoverkat" target="_blank"><img src="images/icon_github.png" width="50vh" className="hover:w-[6.5vh] duration-200"></img></a>
              <a href="mailto:katwang7749@gmail.com" target="_blank"><img src="images/icon_mail.png" width="50vh" className="mt-2 hover:w-[6.5vh] duration-200"></img></a>
              <a href="https://www.instagram.com/777luckykat" target="_blank"><img src="images/icon_instagram.png" width="50vh" className="hover:w-[6.5vh] duration-200"></img></a>
            </div>
          </div>
        </div>
        <div>
          <img src="images/vegetable1.png" className="absolute bottom-[5vh] right-[27vh] w-[20vh] h-[20vh]"></img>
          <img src="images/pillow1.png" className="absolute bottom-[5vh] right-[10vh] w-[20vh] h-[20vh]"></img>
        </div>
      </div>
      {/* images */}
      <div className="flex flex-row content-center justify-center align-center">
        {/* me */}
        <img src="images/me_2.png" className="w-175 h-160 m-[6vh] shadow-lg shadow-black/80"></img>
        {/* img gallery */}
        <div id="imageGallery" className="flex flex-wrap gap-[1vh] w-[100vh] h-[85vh] overflow-y-scroll overflow-h-visible scrollbar-hide [&>img]:w-[45%] [&>img]:shadow-md [&>img]:shadow-black/80">
          <img src="images/overglade_3.JPG"></img>
          <img src="images/overglade_5.JPG"></img>
          <img src="images/overglade_6.JPG"></img>
          <img src="images/overglade_1.JPG"></img>
          <img src="images/overglade_2.JPG"></img>
          <img src="images/overglade_4.JPG"></img>
          <img src="images/overglade_7.JPG"></img>
          <img src="images/parthenon_1.jpg"></img>
        </div>
      </div>
    </div>
  )
}

function Icon({ src, text }) {
  return (
    <div className="flex flex-col text-center gap-[2vh]">
      <img src={src} className="w-[40vh] hover:w-[43vh] duration-200"></img>
      <h2 className="text-5xl bad-handwriting">{text}</h2>
    </div>
  )
} //icons for links to different website sections

function Home() {
  return (
    <div>
      <Hero />
      <h1 id="navigation" className="text-8xl text-center bad-handwriting">hi, I'm Kat! look at my...</h1>
      {/* Navigation */}
      <nav className="flex place-self-center">
        <Link to="/design">
          <div className="place-items-center">
            <img src="images/icon_design.png" className="w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">design</h2>
          </div>
        </Link>
        <Link to="/">
          <div className="place-items-center hidden">
            <img src="images/icon_awards.png" className="w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">work/ECs & achievements</h2>
          </div>
        </Link>
        <Link to="/">
          <div className="place-items-center hidden">
            <img src="images/icon_projects.png" className="w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">projects</h2>
          </div>
        </Link>
        <Link to="/blog">
          <div className="place-items-center">
            <img src="images/icon_blog.png" className="w-[40vh] hover:w-[43vh] duration-200"></img>
            <h2 className="text-5xl bad-handwriting">blog</h2>
          </div>
        </Link>
      </nav>

      {/* <div className = "flex flex-row content-center justify-center align-center gap-[5vh] m-[10vh]">
        <Icon src="images/icon_design.png" text="design"/>
        <Icon src="images/icon_awards.png" text="events/work/awards"/>
        <Icon src="images/icon_projects.png" text="projects"/>
        <a href="Blog.jsx"> 
          <Icon src="images/icon_blog.png" text="blog"/>
        </a>
      </div> */}
      <div className="p-[10vh] bg-[url(images/backgrounds/home.webp)] bg-cover m-[12vh] gap-[2vh] rounded-2xl flex flex-row -pb-[8vh] drop-shadow-xl drop-shadow-black/25 hover:drop-shadow-black/50 duration-300">
        <img src="images/vegetable3.png" className="w-[50vh] m-[10vh]"></img>
        <div>
          <h1 className="text-5xl bad-handwriting">I'm a freelance artist & HS student...</h1>
          <p className="text-3xl bad-handwriting mt-[3vh]">
            ...with <b>design</b> <i>(Figma, Adobe Suites, Krita)</i> and <b>web development</b> <i>(HTML/CSS/JS, React, Svelte, Express.js)</i> experience.
            <br /><br />
            I'm currently an intern at <a href="hackclub.com" className="underline hover:decoration-wavy">Hack Club</a>, an international non-profit that encourages teens to make technical projects.
            I've organized multiple Hack Club events for other teens, such as <a href="paradox.hackclub.com" class="underline hover:decoration-wavy">Paradox,</a> <a href="storyboard.hackclub.com" className="underline hover:decoration-wavy">Storyboard</a> and <a href="campfire.hackclub.com/ottawa" className="underline hover:decoration-wavy">Campfire Ottawa.</a>
            <br /><br />
            This summer, I'll be working with Hack Club's <a href="athena.hackclub.com" className="underline hover:decoration-wavy">Athena</a>, a program that supports gender minorities in tech.

            <br /><br /> Interested in working with me? <a href="_top" class="underline hover:decoration-wavy text-pink-800 hover:text-pink-900">Contact me!</a>

          </p>
          <a href="#navigation"><h2 className="text-4xl bad-handwriting mt-[2vh] font-bold underline hover:decoration-wavy">see all my work here...</h2></a>
        </div>
      </div>
      <Footer />
    </div>
  )

}

export default Home
