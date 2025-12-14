import Form from 'next/form'

export default function details() {
  return(
    <main>
      <section className="bg-[url('/surfing.jpg')] bg-cover bg-center h-50 flex justify-center items-center">
        <span className="text-white text-4xl font-medium drop-shadow-lg">Contact</span>
      </section>

      <section>
        <Form action="/details">
          <label></label>
        </Form>
      </section>
    </main>
  )
}