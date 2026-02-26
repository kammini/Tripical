import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body with Zod
    const validatedData = sendEmailSchema.parse(body);
    const { name, email, message } = validatedData;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'sfca@resend.dev',
      to: ['tripicaltripid@gmail.com'],
      subject: `New message from ${name}`,
      react: `<p>You received a new message from ${name} (${email}):</p><p>${message}</p>`,
    })

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 })
    }

    // Return a success response
    return new Response(JSON.stringify({ message: 'Email sent successfully!'}), { status: 200 })

  } catch (e) {
    // If Zod validation fails
    if (e instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: 'Validation failed'}), { status: 400 })
    }

    // Other potential errors
    console.error("Server error:", e);
    return new Response(JSON.stringify({ error: 'An internal error occurred.'}), { status: 500 })
  }
}
