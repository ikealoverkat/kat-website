import { Link } from "react-router-dom";
import Footer from './Footer';
import EmptyBlog from './Empty';

function BlogContainer({ title, description, date, link }) {
    return (
        <Link to={link} className="bg-linear-to-b from-white/75 to-white/40 w-full lg:w-[40%] bg-cover m-[4vh] p-[4vh] rounded-2xl shadow-lg shadow-black/15 hover:p-[6vh] duration-300 hover:shadow-xl">
            <div>
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[4vh] items-center">
                    <h2 className="text-5xl bad-handwriting underline hover:decoration-wavy">{title}</h2>
                    <h3 className="text-3xl bad-handwriting text-pink-950">{date}</h3>
                </div>
                <p className="text-2xl bad-handwriting text-center lg:text-left">{description}</p>
            </div>
        </Link>
    )
}

function Blog() {
    return (
        <div>
            {/* everything but footer */}
            <div className="p-[4vh] bg-[url('images/backgrounds/home.webp')] bg-cover">
                {/* title block */}
                <div className="flex flex-row gap-[4vh] h-40">
                    {/* text */}
                    <div>
                        <a href="/" className="text-3xl bad-handwriting underline hover:decoration-wavy">back</a>
                        <h1 className="text-7xl bad-handwriting underline text-pink-800">kat journal</h1>
                        <h2 className="text-5xl bad-handwriting">I write stuff sometimes</h2>
                    </div>
                    <img src="images/icon_blog.png" alt="blog cat icon" className="object-scale-down" />
                </div>
                {/* blog containers */}
                <div class="flex flex-row flex-wrap m-[4vh] justify-center">
                    <BlogContainer title="how can we get more girls into tech?" description="Now that I'm an intern for a girls-in-tech program, what can I actually do? why am I in this position?" date="4/3/26" link="/empty" />
                    <BlogContainer title="overglade" description="field notes on a lifechanging 4-day game jam in Singapore + silly 24h layover in SFO" date="4/3/26" link="/empty" />
                    <BlogContainer title="parthenon" description="largest all-girl hackathon in NYC ft. kaylee & joy su: we won 1st place! thoughts on being a girl in tech & NYC" date="4/3/26" link="/empty" />
                    <BlogContainer title="the world is larger than your high school" description="A quotation I heard so so so many times during freshman year. Reflections on the past 1.5 years and all the friends i've made since" date="4/3/26" link="/empty" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog