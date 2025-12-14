import Link from 'next/link'

export default function Navbar() {
  return(
    <header>
      <nav>
        <Link href="/">
          <img />
        </Link>
        <Link href="/details">Details</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}