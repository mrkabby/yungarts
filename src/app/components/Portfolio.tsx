"use client";
import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio py-16 px-6 text-center" id="portfolio">
      <h2 className="text-3xl font-bold mb-6">Latest <span className="text-purple-500">Projects</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { src: "/images/portfolio1.jpg", title: "Web Design" },
          { src: "/images/portfolio2.jpg", title: "Web Development" },
          { src: "/images/portfolio3.jpg", title: "Graphic Design" },
          { src: "/images/portfolio4.jpg", title: "Branding" },
          { src: "/images/portfolio5.jpg", title: "UI/UX" },
          { src: "/images/portfolio6.jpg", title: "Photography" },
        ].map((project, index) => (
          <div key={index} className="portfolio-box bg-white shadow-lg rounded-lg p-4">
            <Image
              src={project.src}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h4 className="mt-4 text-lg font-semibold">{project.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
