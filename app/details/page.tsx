export default function details() {
  return(
    <main>
      <section className="bg-[url('/ijen.jpg')] bg-cover bg-center h-50 flex justify-center items-center">
        <span className="text-white text-3xl font-medium drop-shadow-lg">Details</span>
      </section>

      <section className="text-center p-10">
        <span className="text-3xl">Our services</span>
      </section>

      <section className="grid grid-cols-3 text-center p-5 gap-20">
        <div>
          <h2 className="text-lg font-medium mb-2">Travel Consulting</h2>
          <p>TRIPICAL membantu pelanggan merancang perjalanan terbaik sesuai kebutuhan, mulai dari pemilihan destinasi, aktivitas, akomodasi, hingga manajemen itinerary</p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">Small Group Trip</h2>
          <p>Dirancang untuk 4–12 orang, cocok untuk teman, komunitas kecil, atau pertemuan privat yang mengutamakan kenyamanan dan interaksi</p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">Family Trip</h2>
          <p>Fokus pada keamanan, kenyamanan, serta kegiatan yang ramah untuk semua usia, memastikan setiap anggota keluarga mendapat pengalaman menyenangkan</p>
        </div>
      </section>
    </main>
  )
}