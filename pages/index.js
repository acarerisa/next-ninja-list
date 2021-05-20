import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
          <title>Ninja List | Home</title>
          <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        
        <h1 className={styles.title} >HomePage</h1>
        <p className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et enim, praesentium similique officiis quis obcaecati ipsum at facilis aspernatur? Voluptatibus aliquid cum consequatur quis consectetur quas nulla dolores illum?</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis molestiae amet atque. Expedita autem totam illum earum repellendus animi sed ducimus dolore aut repudiandae tempora laboriosam, voluptatem aliquid quaerat.</p>
        <Link href="/ninjas" >
          <a className={styles.btn}>See Ninja List</a>
        </Link>
        
      </div>
    </>
  )
}
