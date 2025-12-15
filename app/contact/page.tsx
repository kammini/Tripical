import Form from 'next/form'

export default function contact() {
  return(
    <main>
      <section className="bg-[url('/surfing.jpg')] bg-cover bg-center h-50 flex justify-center items-center">
        <span className="text-white text-4xl font-medium drop-shadow-lg">Contact Us</span>
      </section>

      <section>
        <Form action="/details" className='flex flex-row m-5 gap-10'>
          <div className='flex flex-col gap-10'>
            <input id="name" 
            type="text" 
            placeholder='name' 
            className='border border-stone-500 rounded-xs py-2 px-2'/>

            <input id="email" 
            type="email"
            placeholder='E-Mail'
            className='border border-stone-500 rounded-xs py-2 px-2'/>

            <input id="phone" 
            type="tel" 
            inputMode='numeric' 
            placeholder="0812 3456 7890"
            className='border border-stone-500 rounded-xs py-2 px-2'/>
          </div>

          <textarea id="message" 
          placeholder='Share with us your question or your plan'
          className='resize-none border border-stone-500 rounded-xs py-2 px-2 w-11/12'></textarea>

          <button type='submit'
          className='border rounded-sm bg-green-400 text-white py-1 px-3 drop-shadow-sm'
          >Send</button>
        </Form>
      </section>
    </main>
  )
}