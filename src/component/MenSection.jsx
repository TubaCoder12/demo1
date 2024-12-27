import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const categories = [
  {
    title: "SHIRT",
    image: "https://alphalete.uk/cdn/shop/files/M_Shirts_4x5_df7ff1b6-e85b-4eed-898f-ba1881e86b2e.jpg?crop=center&v=1734284771&width=960",
    link: "#",
  },
  {
    title: "SHORTS",
    image: "https://alphalete.uk/cdn/shop/files/M_Shorts_v2_4x5_03c1b6a8-d9f8-4eba-9d23-3c7b2161e360.jpg?crop=center&v=1734284770&width=960",
    link: "#",
  },
  {
    title: "TANKS",
    image: "https://alphalete.uk/cdn/shop/files/M_BiB_4x5_33167ea1-262c-4ed1-9b9c-aee087c3e22f.jpg?crop=center&v=1734284771&width=960",
    link: "#",
  },
  {
    title: "PANTS",
    image: "https://alphalete.uk/cdn/shop/files/M_Joggers_4x5_6f816efb-539b-4099-b698-d2fd80b6ea96.jpg?crop=center&v=1734284769&width=960",
    link: "#",
  },
  {
    title: "WORKOUT",
    image: "https://alphalete.uk/cdn/shop/files/M_Workout_v2_4x5_0273efa8-adbf-488d-bb8f-0160d80f5988.jpg?crop=center&v=1734284771&width=960",
    link: "#",
  },
];

const MenSection = () => {
  return (
    <div className="bg-black text-white pt-8 pb-3">
      <div className="container mx-auto px-4">
        <h2 className="md:text-2xl mb-6 uppercase">
          MAN's <br />
          <span className="font-bold">TRENDING Now</span>
        </h2>
        <Swiper
          slidesPerView={4} // Default to 4 slides visible
          spaceBetween={30} // Space between slides
          breakpoints={{
            320: {
              slidesPerView: 1, // On small screens, show 1 slide
              spaceBetween: 10, // Smaller space between slides
            },
            480: {
              slidesPerView: 2, // Show 2 slides for medium screens
              spaceBetween: 15, // Space between slides
            },
            768: {
              slidesPerView: 3, // Show 3 slides on tablets
              spaceBetween: 20, // Space between slides
            },
            1024: {
              slidesPerView: 4, // Show 4 slides on desktops
              spaceBetween: 30, // Space between slides
            },
          }}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden cursor-pointer">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="p-4 w-full text-center">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <a
                      href={category.link}
                      className="inline-block bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MenSection;
