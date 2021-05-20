import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/benimLogo.jpeg" width={100} height={100} />
                {/* <img src="benimLogo.jpeg"/> */}
                {/* <h1>Ninja List</h1> */}
            </div>
            <Link href="/" ><a>Home</a></Link>
            <Link href="/about" ><a>About</a></Link>
            <Link href="/ninjas" ><a>Ninja Listing</a></Link>
            
        </nav>
     );
}
 
export default Navbar;