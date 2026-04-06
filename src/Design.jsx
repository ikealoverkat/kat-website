import { useState } from 'react';
import Footer from './Footer';

const SpaceshipImages = [
    { src: "images/design/webdesign/screenshot.png", alt: "spaceship hero" },
    { src: "images/design/webdesign/spaceship_prizes.png", alt: "spaceship prizes page" },
    { src: "images/design/webdesign/spaceship_footer.png", alt: "spaceship website footer" },
    { src: "images/design/webdesign/spaceship_faq.png", alt: "spaceship FAQ" },
    { src: "images/design/webdesign/spaceship_mascots.png", alt: "spaceship mascot picture" },
]

const paradoxImages = [
    { src: "images/design/webdesign/brand_kit.png", alt: "paradox brand kit" },
    { src: "images/design/webdesign/hero.png", alt: "paradox landing page hero" },
    { src: "images/design/webdesign/FAQ.png", alt: "paradox FAQ page" },
    { src: "images/design/webdesign/projects_empty.png", alt: "paradox projects page with no filled info" },
    { src: "images/design/webdesign/projects.png", alt: "paradox projects page" },
]

const sleepoverImages = [
    { src: "images/design/webdesign/sleepover_brand_ki.png", alt: "sleepover brand kit" },
    { src: "images/design/webdesign/sleepover_landing.png", alt: "sleepover landing page" },
    { src: "images/design/webdesign/sleepover_home.png", alt: "sleepover home page" },
    { src: "images/design/webdesign/gallery.png", alt: "sleepover gallery page" },
    { src: "images/design/webdesign/sleepover_shop.png", alt: "sleepover shop page" },
    { src: "images/design/webdesign/sleepover_order.png", alt: "sleepover order page" },
]

function WebDesignContainer({ title, description, link, imgConstants }) {
    return (
        <div className="m-[2vh]">
            <h1 className="bad-handwriting text-5xl underline text-pink-900">{title}</h1>
            <h2 className="bad-handwriting text-3xl">{description} <a className="italic text-pink-700 underline hover:decoration-wavy" href={link} target="_blank">See the website</a></h2>
            <div className="mt-[2vh] flex flex-row [&>img]:m-[1vh] scrollbar overflow-x-scroll [&>img]:h-[20vh] [&>img]:outline-2 [&>img]:outline-pink-900 [&>img]:hover:scale-102 [&>img]:duration-200 [&>img]:rounded-xl">
                {imgConstants.map(imgConstant => (
                    <img src={imgConstant.src} alt={imgConstant.alt} />
                ))}
            </div>
        </div>)
}

function DesignTool({ tool }) {
    return (
        <h1 className="rounded-xl p-[1.2vh] duration-100 hover:p-[1.5vh] text-3xl bad-handwriting bg-linear-to-b from-white to-white/80 shadow-md shadow-black/25 hover:shadow-black/50 hover:shadow-md">{tool}</h1>
    )
}

function Design() {
    const [activeSection, setActiveSection] = useState(null);
    return (
        <div className="p-[4vh] bg-[url('images/backgrounds/pink_bg_2.webp')] bg-cover">
            {/* title block */}
            <div className="flex flex-row gap-[4vh] h-40">
                {/* text */}
                <div>
                    <a href="/" className="text-3xl bad-handwriting underline hover:decoration-wavy">back</a>
                    <h1 className="text-7xl bad-handwriting underline text-pink-800">design</h1>
                    <h2 className="text-5xl bad-handwriting">I love to design mascots & create branding!</h2>
                </div>
                <img src="images/vegetable2.png" alt="vegetable cat" className="object-scale-down" />
            </div>
            {/* nav thing */}
            <div className="flex flex-row h-full gap-[4vh] m-[4vh] [&>div]:p-[4vh] [&>div]:rounded-2xl [&>div]:shadow-lg">
                {/* sidebar */}
                <div class="w-fit bg-linear-to-b from-white to-white/50">
                    <ul className="[&>li]:text-5xl [&>li]:mb-[1vh] [&>li]:hover:decoration-wavy [&>li]:hover:underline [&>li]:hover:scale-103 [&>li]:duration-200">
                        <li className="bad-handwriting text-pink-800 underline italic">explore</li>
                        <li className="bad-handwriting" onClick={() => activeSection !== 'webdesign' ? setActiveSection('webdesign') : setActiveSection(null)}>web design</li>
                        <li className="bad-handwriting" onClick={() => activeSection !== 'mascots' ? setActiveSection('mascots') : setActiveSection(null)}>mascots</li>
                        <li className="bad-handwriting" onClick={() => activeSection !== 'graphicdesign' ? setActiveSection('graphicdesign') : setActiveSection(null)}>graphic design</li>
                        <li className="bad-handwriting" onClick={() => activeSection !== 'illustration' ? setActiveSection('illustration') : setActiveSection(null)}>illustration</li>
                        <li className="bad-handwriting" onClick={() => activeSection !== 'aboutcontact' ? setActiveSection('aboutcontact') : setActiveSection(null)}>about + contact</li>
                    </ul>
                </div>
                {/* body */}
                <div class="w-full bg-linear-to-b  from-white/90 to-white/10">
                    {/* nothing here yet div */}
                    <div className={activeSection === null ? 'block place-self-center h-[55vh]' : 'hidden'}>
                        <h1 className="text-center bad-handwriting text-3xl text-pink-900">you haven't opened anything yet. <br />click an item on the sidebar to view my work!</h1>
                    </div>

                    <div className={activeSection === 'webdesign' ? 'block h-[55vh] overflow-y-scroll scrollbar' : 'hidden'}>
                        <h1 className="text-6xl bad-handwriting text-pink-800">web design</h1>
                        <h2 className="text-4xl bad-handwriting">work for <a className="underline hover:decoration-wavy" href="https://hackclub.com" target="_blank">Hack Club</a> and my personal websites. </h2>
                        <WebDesignContainer title="Sleepover" description="Branding for Hack Club Athena Initiative's Sleepover, an all-girls coding program where teens spend 30 hours creating technical projects for a Sleepover-themed hackathon in Chicago." link="https://sleepover.hackclub.com" imgConstants={sleepoverImages} />
                        <WebDesignContainer title="Spaceship" description="Website design for Hack Club's Spaceship, a pitch for a program where teens code 35+ hours to earn a trip to wherever they want, or exchange their hours for prizes!" link="https://spaceship-website.vercel.app/" imgConstants={SpaceshipImages} />
                        <WebDesignContainer title="Paradox" description="Branding I did for Hack Club's Paradox, a program where teens spend 35 hours building projects to go to a hackathon in a theatre in London." link="https://paradox.hackclub.com" imgConstants={paradoxImages} />
                        {/* more */}
                        <div>
                            <h1 className="bad-handwriting text-5xl underline text-pink-900">+ More</h1>
                            <h2 className="bad-handwriting text-3xl">Other design work I've done.</h2>
                            <p>add arcade website and storyboard anmd shi etc</p>
                        </div>
                    </div>

                    {/* graphic design container */}
                    <div className={activeSection === 'graphicdesign' ? 'block h-[55vh] overflow-y-scroll scrollbar' : 'hidden'}>
                        <h1 className="text-6xl bad-handwriting text-pink-800">graphic design</h1>
                        <h2 className="text-4xl bad-handwriting">made with Figma, Canva, Adobe Photoshop, and Krita. <br /> freelance work and various ads for Student Council. </h2>
                        <div className="justify-center flex flex-row flex-wrap [&>img]:h-[27vh] [&>img]:hover:scale-104 [&>img]:rounded-xl [&>img]:duration-200 gap-[2vh] mt-[2vh] [&>img]:outline-1 [&>img]:outline-pink-800">
                            <img src="images/design/graphicdesign/campaign_2.png" alt="design1" />
                            <img src="images/design/graphicdesign/campaign_1.png" alt="design1" />
                            <img src="images/design/graphicdesign/OSAP.png" alt="design1" />
                            <img className="bg-linear-to-b from-blue-50 to-blue-100" src="images/design/graphicdesign/weddinginv.png" alt="design1" />
                            <img src="images/design/graphicdesign/spcpost-final.png" alt="design1" />
                            <img src="images/design/graphicdesign/halloweek3.png" alt="design1" />
                            <img src="images/design/graphicdesign/photo day post.png" alt="design1" />
                            <img src="images/design/graphicdesign/frc.png" alt="design1" />
                            <img src="images/design/graphicdesign/OSCARS 2025.jpg" alt="design1" />
                            <img src="images/design/graphicdesign/OSCARS 2025 2.jpg" alt="design1" />
                            <img src="images/design/graphicdesign/meet the studco.jpg" alt="design1" />
                            <img src="images/design/graphicdesign/bots.png" alt="design1" />
                        </div>
                    </div>
                    {/* about + contact page */}
                    <div className={activeSection === 'aboutcontact' ? 'block h-[55vh] overflow-y-scroll scrollbar' : 'hidden'}>
                        {/* contact& work info part */}
                        <div>
                            <h1 className="text-6xl bad-handwriting">Let's work together!</h1>
                            <h1 className="text-4xl bad-handwriting mb-[2vh]">If you're interested in collaborating to make your brand, website, or idea come to life, please reach out for more information.</h1>
                        </div>
                        {/* idk this front part */}
                        <div className="flex flex-row gap-[2vh] [&>div]:w-[50%]">
                            <div>
                                <h1 className="text-5xl bad-handwriting text-pink-700">design tools</h1>
                                <div className="flex flex-row flex-wrap gap-[1vh] m-[2vh] ml-[2vh] mr-[2vh] justify-center place-content-center">
                                    <DesignTool tool="Figma" />
                                    <DesignTool tool="Canva" />
                                    <DesignTool tool="Adobe Illustrator" />
                                    <DesignTool tool="Adobe Photoshop" />
                                    <DesignTool tool="Adobe Animate" />
                                    <DesignTool tool="Adobe Premiere Pro" />
                                    <DesignTool tool="Adobe After Effects" />
                                    <DesignTool tool="Krita" />
                                    <DesignTool tool="Live2D Cubism" />
                                    <DesignTool tool="ibisPaint X" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-5xl bad-handwriting text-pink-700">contact me!</h1>
                                {/* contact */}
                                {/* chopped asl fix later */}
                                <div className="flex flex-row gap-[4vh] pointer-events-auto">
                                    <a href="https://github.com/ikealoverkat" target="_blank"><img src="images/icon_github.png" width="50vh" className="hover:w-[6.5vh] duration-200"></img></a>
                                    <a href="mailto:katwang7749@gmail.com" target="_blank"><img src="images/icon_mail.png" width="50vh" className="mt-2 hover:w-[6.5vh] duration-200"></img></a>
                                    <a href="https://www.instagram.com/777luckykat" target="_blank"><img src="images/icon_instagram.png" width="50vh" className="hover:w-[6.5vh] duration-200"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Design