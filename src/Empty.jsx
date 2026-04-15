function Empty() {
    return (
        <div className="m-[4vh]">
            <h1 className="font-bad-handwriting text-6xl">nothing here yet!</h1>
            <h2 className="font-bad-handwriting text-4xl text-pink-900">maybe this is a blog I haven't written yet or some information I haven't found. Check back later!</h2>
        </div>
    )
}

function EmptyBlog() {
    return (
        <div className="m-[4vh]">
            <a className="text-3xl font-bad-handwriting text-gray-400" href="./blog">back</a>
            <h1 className="font-bad-handwriting text-6xl">nothing here yet!</h1>
            <h2 className="font-bad-handwriting text-4xl text-pink-900">maybe this is a blog I haven't written yet or some information I haven't found. Check back later!</h2>
        </div>
    )
}

export { Empty, EmptyBlog };
export default EmptyBlog;