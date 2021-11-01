import AllPosts from "../../components/posts/all-posts"
export default function Allposts() {
    const Dummy = [{ title: "Getting started with next js", image: "itachi.jpg", excert: "next js is the react feramework for production", date: "2020-12-01", slug: "getting-started-with-nectjs" },
    { title: "Getting started with next js2", image: "itachi.jpg", excert: "next js is the react feramework for production", date: "2020-12-01", slug: "getting-started-with-nectjs2" },
    { title: "Getting started with next js3", image: "itachi.jpg", excert: "next js is the react feramework for production", date: "2020-12-01", slug: "getting-started-with-nectjs3" }]


    return (
        <AllPosts posts={Dummy} />
    )
}
