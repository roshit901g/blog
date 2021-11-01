import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home/hero'
import styles from '../styles/Home.module.css'
import Featured from '../components/home/Featured'

const Dummy = [{ title: "Getting started with next js", image: "itachi.jpg", excert: "next js is the react feramework for production", date: "2020-12-01", slug: "getting-started-with-nectjs" },
{ title: "Getting started with next js2", image: "itachi.jpg", excert: "next js is the react feramework for production", date: "2020-12-01", slug: "getting-started-with-nectjs2" },
{ title: "Getting started with next js3", image: "itachi.jpg", excert: "next js is the react feramework for production", date: "2020-12-01", slug: "getting-started-with-nectjs3" }]

export default function Home() {
  return (
    <>
      <Hero />

      <Featured posts={Dummy} />

    </>

  )
}
