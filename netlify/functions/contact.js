// File: netlify/functions/contact.js

import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, context) => {
  try {
    // Get the data from the form submission
    const { name, email, subject, message } = await req.json();

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This MUST be 'onboarding@resend.dev' for the free plan
      to: ['your-personal-email@example.com'], // <<< CHANGE THIS to your email address
      subject: `New Message from ${name}: ${subject}`,
      html: `<p>You received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    // Handle potential errors from Resend
    if (error) {
      console.error({ error });
      return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }

    // Return a success response
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });

  } catch (error) {
    // Handle other errors (e.g., failed to parse request)
    console.error({ error });
    return new Response(JSON.stringify({ message: 'An error occurred.' }), { status: 500 });
  }
};