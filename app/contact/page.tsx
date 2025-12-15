import Form from 'next/form'

export default function contact() {
  return(
    <main>
      <section className="bg-[url('/surfing.jpg')] bg-cover bg-center h-50 flex justify-center items-center">
        <span className="text-white text-4xl font-medium drop-shadow-lg">Contact Us</span>
      </section>

      <section>
        <Form action="/details" className='flex'>
          <input id="name" type="text" placeholder='name'/>

          <input id="email" type="email"placeholder='E-Mail'/>

          <input id="phone" type="tel" inputMode='numeric' placeholder="0812 3456 7890"/>

          <textarea id="message" placeholder='Description'></textarea>

          <button type='submit'>Send</button>
        </Form>
      </section>
    </main>
  )
}