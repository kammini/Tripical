import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-end items-center pb-20 bg-[url('/home-img.jpg')] bg-cover bg-center h-screen">
        <h1 className="text-[4em] text-white font-bold">let's get lost...</h1>
        <Link href="/destinations" className="flex justify-center items-center text-[4em] text-white font-light gap-4">
          plan your journey
          <img src="arrow.png" className='w-8 h-12'/>
        </Link>
      </section>

      <section className='flex gap-5 p-10'>
        <img src="home-img-2.jpg" className='w-100'/>
        <div>
          <h2 className='text-center mb-5 text-3xl'>Unforgettable memories</h2>
          <p className='text-start mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
        </div>
      </section>
    </main>
  )
}