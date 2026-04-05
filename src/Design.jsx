import Footer from './Footer';

function Design() {
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
                    <ul className="[&>li]:text-5xl [&>li]:mb-[1vh] [&>li]:hover:decoration-wavy [&>li]:hover:underline">
                        <li className="bad-handwriting text-pink-800 underline italic">explore</li>
                        <li className="bad-handwriting" id="webdesign">web design</li>                        
                        <li className="bad-handwriting" id="mascots">mascots</li>
                        {/* fix this thing and do usestate instead rip */}
                        <li className="bad-handwriting" id="graphicdesign" onClick={() => document.getElementById('graphicdesign_container').classList.remove('hidden')}>graphic design</li>                        
                        <li className="bad-handwriting" id="illustration">illustration</li>
                        <li className="bad-handwriting" id="aboutcontact">about + contact</li>
                    </ul>
                </div>
                {/* body */}
                <div class="w-full bg-linear-to-b  from-white/90 to-white/10">
                    {/* nothing here yet div */}
                    <div className="hidden place-self-center">
                        <h1 className="text-center bad-handwriting text-3xl text-pink-900">you haven't opened anything yet. <br />click an item on the sidebar to view my work!</h1>
                    </div>
                    <div id="graphicdesign_container" className="hidden h-[55vh] overflow-y-scroll">
                        <h1 className="text-6xl bad-handwriting text-pink-800">graphic design</h1>
                        <h2 className="text-4xl bad-handwriting">made with Figma, Canva, Adobe Photoshop, and Krita. </h2>
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Design