"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 bg-gray-100 dark:bg-gray-900 relative text-center md:text-left">
      <div className="max-w-lg">
        <h3 className="text-3xl text-gray-700 dark:text-white font-medium">
          Hello, I am
        </h3>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mt-2 leading-tight">
          Yung Arts
        </h1>
        <p className="mt-4 md:mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-md">
          I am a graphics designer who loves to create beautiful and functional designs.
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg max-w-md">
          I am a passionate Graphic Designer dedicated to crafting visually
          compelling and meaningful designs. With a keen eye for aesthetics and
          a love for creativity, I specialize in branding, digital illustrations,
          and user-friendly designs that leave a lasting impact.
        </p>
        <div className="flex gap-6 mt-6 justify-center md:justify-start">
          <a href="#" className="text-3xl md:text-4xl text-purple-500 hover:text-purple-700">
            <FaFacebook />
          </a>
          <a href="#" className="text-3xl md:text-4xl text-purple-500 hover:text-purple-700">
            <FaTwitter />
          </a>
          <a href="#" className="text-3xl md:text-4xl text-purple-500 hover:text-purple-700">
            <FaInstagram />
          </a>
          <a href="#" className="text-3xl md:text-4xl text-purple-500 hover:text-purple-700">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="relative flex justify-center md:justify-end">
        <div className="absolute -top-10 md:-top-10 -right-10 w-72 md:w-[500px] h-72 md:h-[500px] bg-purple-500 rounded-tr-[150px] md:rounded-tr-[250px] rounded-bl-[150px] md:rounded-bl-[250px]"></div>
        <Image
          src="/images/home.png"
          alt="Yung Arts"
          width={450}
          height={450}
          priority
          className="relative z-10 rounded-lg"
        />
      </div>
    </section>
  );
}
