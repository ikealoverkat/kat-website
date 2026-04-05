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
                        <li className="bad-handwriting" id="graphicdesign">graphic design</li>
                        <li className="bad-handwriting" id="mascots">mascots</li>
                        <li className="bad-handwriting" id="webdesign">web design</li>
                        <li className="bad-handwriting" id="logos">logos</li>
                        <li className="bad-handwriting" id="illustration">illustration</li>
                        <li className="bad-handwriting" id="aboutcontact">about + contact</li>
                    </ul>
                </div>
                {/* body */}
                <div class="w-full bg-linear-to-b  from-white/90 to-white/10">
                    {/* nothing here yet div */}
                    <div className="place-self-center">
                        <h1 className="text-center bad-handwriting text-3xl text-pink-900">you haven't opened anything yet. <br />click an item on the sidebar to view my work!</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Design