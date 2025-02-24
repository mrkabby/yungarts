import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <Image
          src="/images/about.png"
          alt="About Image"
          width={400}
          height={400}
        />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <p>
          Hi there, welcome to my website! I am Prince,I am a passionate Graphic
          Designer dedicated to crafting visually compelling and meaningful
          designs. With a keen eye for aesthetics and a love for creativity, I
          specialize in branding, digital illustrations, and user-friendly
          designs that leave a lasting impact. My goal is to bring ideas to life
          through thoughtful composition, color, and typography.
        </p>
       
      </div>
    </section>
  );
}
