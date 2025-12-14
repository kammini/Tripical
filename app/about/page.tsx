export default function About() {
  return(
    <main>
      <section className="bg-[url('/bromo.jpg')] bg-cover bg-center h-120 flex justify-center items-center">
        <h1 className="text-white text-4xl font-medium drop-shadow-lg">About Tripical</h1>
      </section>

      <section className="flex justify-center items-center gap-20 p-10">
        <div className="w-md">
          <p className="mb-5">Tripical is an agency that runs in topical tourism with the purpose to make a warm, meaningful and unforgettable experiences. We are here to help you-especially small group and family-find a best way to enjoy the trip without any worries of the activities or the places.</p>

          <p>We offer travel consulting with curated tour packages and are custom-made for your needs</p>
        </div>
        <img src="bali.jpg" alt="mount Bromo" className="w-3xs"/>
      </section>

      <section className="text-center p-15">
        <span className="text-3xl">"Make your trip special and meaningful.."</span>
      </section>

      <section className='flex justify-center items-center gap-20 p-10'>
        <img src="home-img-2.jpg" alt="a couple under waterfall" className='w-sm'/>
        <div className="w-sm">
          <h2 className='text-center mb-5 text-3xl'>Unforgettable memories</h2>
          <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
        </div>
      </section>
    </main>
  )
}