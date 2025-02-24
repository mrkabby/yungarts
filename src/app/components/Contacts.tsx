import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <section className="contact py-16 px-6 text-center" id="contact">
      <h2 className="text-3xl font-bold mb-6">Contact <span className="text-purple-500">Me!</span></h2>
      {submitted ? (
        <p className="text-green-500 font-semibold">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full p-3 border rounded-lg" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full p-3 border rounded-lg" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="w-full p-3 border rounded-lg h-32"></textarea>
          <button type="submit" className="btn bg-purple-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700">Send Message</button>
        </form>
      )}
    </section>
  );
}