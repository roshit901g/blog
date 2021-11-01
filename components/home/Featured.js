import classes from "./Featured.module.css"
import PostsGrid from "../posts/posts-grid"

export default function Featured(props) {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    )
}
