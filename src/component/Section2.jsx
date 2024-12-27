import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// Import required modules
import { Grid } from "swiper"; // Explicitly import Grid module

const products = [
  { id: 1, image: "https://m.media-amazon.com/images/I/813yTDEat3L._AC_UL320_.jpg", title: "Boy's Shorts 1" },
  { id: 2, image: "https://m.media-amazon.com/images/I/81Ce-uO+DvL._AC_UL320_.jpg", title: "Boy's Shorts 2" },
  { id: 3, image: "https://m.media-amazon.com/images/I/91O2GmTRC1L._AC_UL320_.jpg", title: "Boy's Shirt 1" },
  { id: 4, image: "https://m.media-amazon.com/images/I/619JyLzseuL._AC_UL320_.jpg", title: "Boy's Shirt 2" },
  { id: 5, image: "https://m.media-amazon.com/images/I/71PhZc3J8WL._AC_UL320_.jpg", title: "Boy's Shirt 3" },
  { id: 6, image: "https://m.media-amazon.com/images/I/71AqWMkQrRL._AC_UL320_.jpg", title: "Boy's Shorts 3" },
  { id: 7, image: "https://m.media-amazon.com/images/I/813yTDEat3L._AC_UL320_.jpg", title: "Boy's Shorts 1" },
  { id: 8, image: "https://m.media-amazon.com/images/I/81Ce-uO+DvL._AC_UL320_.jpg", title: "Boy's Shorts 2" },
  { id: 9, image: "https://m.media-amazon.com/images/I/91O2GmTRC1L._AC_UL320_.jpg", title: "Boy's Shirt 1" },
  { id: 10, image: "https://m.media-amazon.com/images/I/619JyLzseuL._AC_UL320_.jpg", title: "Boy's Shirt 2" },
  { id: 11, image: "https://m.media-amazon.com/images/I/71PhZc3J8WL._AC_UL320_.jpg", title: "Boy's Shirt 3" },
  { id: 12, image: "https://m.media-amazon.com/images/I/71AqWMkQrRL._AC_UL320_.jpg", title: "Boy's Shorts 3" },
  { id: 13, image: "https://m.media-amazon.com/images/I/813yTDEat3L._AC_UL320_.jpg", title: "Boy's Shorts 4" },
  { id: 14, image: "https://m.media-amazon.com/images/I/81Ce-uO+DvL._AC_UL320_.jpg", title: "Boy's Shorts 5" },
  { id: 15, image: "https://m.media-amazon.com/images/I/91O2GmTRC1L._AC_UL320_.jpg", title: "Boy's Shirt 4" },
  { id: 16, image: "https://m.media-amazon.com/images/I/619JyLzseuL._AC_UL320_.jpg", title: "Boy's Shirt 5" },
  { id: 17, image: "https://m.media-amazon.com/images/I/71PhZc3J8WL._AC_UL320_.jpg", title: "Boy's Shirt 6" },
  { id: 18, image: "https://m.media-amazon.com/images/I/71AqWMkQrRL._AC_UL320_.jpg", title: "Boy's Shorts 6" },
  { id: 19, image: "https://m.media-amazon.com/images/I/813yTDEat3L._AC_UL320_.jpg", title: "Boy's Shorts 7" },
  { id: 20, image: "https://m.media-amazon.com/images/I/81Ce-uO+DvL._AC_UL320_.jpg", title: "Boy's Shorts 8" },
  { id: 21, image: "https://m.media-amazon.com/images/I/71PhZc3J8WL._AC_UL320_.jpg", title: "Boy's Shirt 6" },
  { id: 22, image: "https://m.media-amazon.com/images/I/71AqWMkQrRL._AC_UL320_.jpg", title: "Boy's Shorts 6" },
  { id: 23, image: "https://m.media-amazon.com/images/I/813yTDEat3L._AC_UL320_.jpg", title: "Boy's Shorts 7" },
  { id: 24, image: "https://m.media-amazon.com/images/I/81Ce-uO+DvL._AC_UL320_.jpg", title: "Boy's Shorts 8" },
];

const Section2 = () => {
  return (
    <div className="bg-black text-white py-8">
      <h2 className="container mx-auto pl-4 md:text-2xl mb-6 uppercase">
        Shop <br />
        <span className="font-bold">Winter Essentials</span>
      </h2>

      {/* Swiper for mobile/tablet views */}
      <div className="lg:hidden">
  <Swiper
    slidesPerView={4} // Set to 4 as per your earlier request
    spaceBetween={10}
    grid={{ rows: 2, fill: "row" }}
    modules={[Grid]}
    className="px-6 md:px-12 lg:px-36 ml-4" // Added margin-left for mobile
  >
    {products.map((product) => (
      <SwiperSlide key={product.id}>
        <div className="relative w-full h-[187px] overflow-hidden rounded-lg">
          {/* Plus sign positioned above the image */}
          <div className="absolute bottom-8 right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center shadow-md">
            +
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="w-[148px] h-[158px] object-cover rounded-lg"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* For desktop or large screen views */}
      <div className="hidden lg:block ml-44">
        <Swiper
          slidesPerView={10}
          spaceBetween={1}
          grid={{ rows: 2, fill: "row" }}
          modules={[Grid]}
          className="px-6 md:px-12 lg:px-36 ml-4" // Added margin-left for desktop
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative h-[187px] overflow-hidden rounded-lg">
              <div className="absolute bottom-8 right-8 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center shadow-md">
            +
          </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[148px] h-[158px] object-cover rounded-lg"
                />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section2;
