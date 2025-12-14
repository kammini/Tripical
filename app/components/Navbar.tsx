import Link from 'next/link'

export default function Navbar() {
  return(
    <header className="shadow-md px-8">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <img src="logo.png" alt="Tripical Logo" className="w-24 h-auto" />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/details" className="text-gray-600 hover:text-gray-900">Details</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
        </div>
      </nav>
    </header>
  )
}