import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating API request delay
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="contact py-16 px-6 text-center" id="contact">
      <h2 className="text-3xl font-bold mb-6">
        Contact <span className="text-purple-500">Me!</span>
      </h2>

      {submitted ? (
        <p className="text-green-500 font-semibold">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <label className="block text-left text-gray-700 dark:text-white font-semibold">
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full p-3 mt-1 border rounded-lg"
            />
          </label>

          <label className="block text-left text-gray-700 dark:text-white font-semibold">
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full p-3 mt-1 border rounded-lg"
            />
          </label>

          <label className="block text-left text-gray-700 dark:text-white font-semibold">
            Your Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
              className="w-full p-3 mt-1 border rounded-lg h-32"
            ></textarea>
          </label>

          <button
            type="submit"
            className="btn bg-purple-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-all disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}
