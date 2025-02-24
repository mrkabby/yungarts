export default function Contact() {
    return (
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    );
  }