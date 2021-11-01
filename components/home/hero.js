import Image from 'next/image'
import classes from "../hero.module.css"

export default function hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/itachi.jpg" width={300} height={300}></Image>
            </div>
            <h1>
                hi I Roshi
            </h1>
            <p>
                this is my Nextjs demo
            </p>
        </ section>
    )
}
