import classes from "./post-item.module.css"
import Link from "next/link"
import Image from "next/image";
export default function PostItem(props) {
    const { title, image, excert, date, slug } = props.post;
    const fdate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: "long", year: "numeric" });
    const imagepath = `/${image}`
    const linkpath = `/posts/${slug}`
    return (
        <li className={classes.post}>
            <Link href={linkpath}>
                <a>
                    <div className={classes.image}>
                        <Image src={imagepath} width={300} height={300} layout="responsive"></Image>
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{fdate}</time>
                        <p>{excert}</p>
                    </div>
                </a>
            </Link>
        </li>

    )
}
