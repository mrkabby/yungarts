
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-800 px-10">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12">Valuable <span className="text-purple-500">Testimonial</span></h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="w-full"
        >
          <SwiperSlide>
            <div className="p-10 bg-white dark:bg-gray-700 rounded-lg shadow-xl text-center max-w-4xl mx-auto border-4 border-purple-500">
              <Image src="/images/testimonial1.jpg" alt="Jackson Levi" width={150} height={150} className="rounded-full mx-auto mb-6 border-4 border-purple-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Jackson Levi</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-10 bg-white dark:bg-gray-700 rounded-lg shadow-xl text-center max-w-4xl mx-auto border-4 border-purple-500">
              <Image src="/images/testimonial2.jpg" alt="Flora Ocean" width={150} height={150} className="rounded-full mx-auto mb-6 border-4 border-purple-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Flora Ocean</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-10 bg-white dark:bg-gray-700 rounded-lg shadow-xl text-center max-w-4xl mx-auto border-4 border-purple-500">
              <Image src="/images/testimonial3.jpg" alt="Julian Grayson" width={150} height={150} className="rounded-full mx-auto mb-6 border-4 border-purple-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Julian Grayson</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}