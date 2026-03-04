import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default async (request: Request) => {
  console.log("Function received request:", request.method);
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const body = await request.json();
    console.log("Request body:", body);
    
    // Validate the request body with Zod
    const validatedData = sendEmailSchema.parse(body);
    const { name, email, message } = validatedData;

    console.log("Using API Key starting with:", process.env.RESEND_API_KEY?.substring(0, 7));

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['tripicaltripid@gmail.com'],
      subject: `New message from ${name}`,
      html: `<p>You received a new message from ${name} (${email}):</p><p>${message}</p>`,
    })

    if (error) {
      console.error("Resend API error detail:", JSON.stringify(error, null, 2));
      return new Response(JSON.stringify({ error: 'Failed to send email.', details: error }), { status: 500 })
    }

    console.log("Resend success:", data);
    // Return a success response
    return new Response(JSON.stringify({ message: 'Email sent successfully!', id: data?.id }), { status: 200 })

  } catch (e) {
    // If Zod validation fails
    if (e instanceof z.ZodError) {
      console.error("Zod validation error:", e.errors);
      return new Response(JSON.stringify({ error: 'Validation failed', details: e.errors }), { status: 400 })
    }

    // Other potential errors
    console.error("Server exception:", e);
    return new Response(JSON.stringify({ error: 'An internal error occurred.', message: (e as Error).message }), { status: 500 })
  }
}
