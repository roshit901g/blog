import PostHeader from "./post-header"
import classes from "./post-content.module.css"
export default function PostContent() {
    const Dummy = {
        title: "Getting started with next js", image: "itachi.jpg", content: "next js is the react feramework for production", date: "2020-12-01", slug: "getting-started-with-nectjs"
    }
    const ipath = `/${Dummy.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={Dummy.title} image={ipath} />
            {Dummy.content}
        </article>
    )
}
