import Link from "next/link"


function Footer() {
  return (
    <footer className=" bg-black text-gray-400 py-12">
        <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div className="">
                <h1 className="text-3xl">About Us</h1>
                <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
            </div>
            <div className="">
                <h1 className="text-3xl ">Quick Links</h1>
                <Link href="/">
                    <h1 className="hover:text-white">Home</h1>
                </Link>
                <Link href="/About">
                    <h1 className="hover:text-white">About</h1>
                </Link>
                <Link href="/Facilities">
                    <h1 className="hover:text-white">Services</h1>
                </Link>
                <Link href="/Contact">
                    <h1 className="hover:text-white">Contact</h1>
                </Link>
            </div>
            <div className="">
                <h1 className="text-3xl">Follow Us</h1>
                <Link href="/">
                    <h1 className="hover:text-white">Facebook</h1>
                </Link>
                <Link href="/">
                    <h1 className="hover:text-white">Instagram</h1>
                </Link>
                <Link href="/">
                    <h1 className="hover:text-white">Twitter</h1>
                </Link>
            </div>
            <div className="">
                <h1 className="text-3xl">Contact Us</h1>
                <Link href="/">
                    <h1 className="hover:text-white">Email</h1>
                </Link>
                <Link href="/">
                    <h1 className="hover:text-white">Phone</h1>
                </Link>
                <Link href="/">
                    <h1 className="hover:text-white">Address</h1>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer