"use client";
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import Contact from '@/app/components/Contacts';
import Footer from '@/app/components/Footer';
import Testimonials from '@/app/components/Testimonials'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>YungArts - Graphic Designer</title>
        <meta name="description" content="Portfolio of YungArts, a creative graphic designer." />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}