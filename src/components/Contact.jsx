import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ success: true, message: 'Message sent successfully!' });
          form.current.reset();
        },
        () => {
          setStatus({ success: false, message: 'Failed to send message.' });
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-8 max-w-4xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors pt-6"
      aria-label="Contact section with form and social links"
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-400 text-center">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-800 p-8 rounded-lg shadow-md max-w-xl mx-auto flex flex-col space-y-6"
        aria-describedby="form-status"
      >
        <label htmlFor="name" className="block text-gray-300 font-semibold mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          className="w-full px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <label htmlFor="email" className="block text-gray-300 font-semibold mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          className="w-full px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <label htmlFor="message" className="block text-gray-300 font-semibold mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded bg-gray-900 text-white resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded transition focus:outline-none focus:ring-4 focus:ring-cyan-400"
        >
          Send Message
        </button>

        {status && (
          <p
            id="form-status"
            className={`mt-2 text-center ${status.success ? 'text-green-400' : 'text-red-500'}`}
            role="alert"
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
