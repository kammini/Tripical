"use server"

import { Resend } from "resend"
import { contactSchema } from "./validation"

const resend = new Resend('');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'mrx@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});