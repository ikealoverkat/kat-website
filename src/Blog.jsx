import { Link } from "react-router-dom";
import Footer from './Footer';

function BlogContainer({ title, description, date, link }) {
    return (
        <div className="bg-[url('images/backgrounds/home.webp')] w-[40%] bg-cover m-[4vh] p-[4vh] rounded-2xl shadow-lg shadow-black/15 hover:p-[6vh] duration-300 hover:shadow-xl" href={link}>
            <div className="flex flex-row gap-[4vh] items-center">
                <h2 className="text-5xl bad-handwriting underline hover:decoration-wavy">{title}</h2>
                <h3 className="text-3xl bad-handwriting text-pink-950">{date}</h3>
            </div>
            <p className="text-2xl bad-handwriting">{description}</p>
        </div>
    )
}

function Blog() {
    return (
        <div>
            {/* everything but footer */}
            <div className="p-[4vh] bg-linear-to-b from-white to-[#faf4f4]">
                {/* title block */}
                <div>
                    <a href="/" className="text-3xl bad-handwriting underline hover:decoration-wavy">back</a>
                    <h1 className="text-7xl bad-handwriting underline text-pink-800">kat journal</h1>
                    <h2 className="text-5xl bad-handwriting">I write stuff sometimes</h2>
                </div>
                {/* blog containers */}
                <div class="flex flex-row flex-wrap m-[4vh] justify-center">
                    <BlogContainer title="bomboclat" description="bomboclat" date="4/3/26" link="bomboclat.com" />
                    <BlogContainer title="bomboclat" description="bomboclat" date="4/3/26" link="bomboclat.com" />
                    <BlogContainer title="bomboclat" description="bomboclat" date="4/3/26" link="bomboclat.com" />
                    <BlogContainer title="bomboclat" description="bomboclat" date="4/3/26" link="bomboclat.com" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog