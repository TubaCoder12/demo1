import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Removed unnecessary imports for Navigation and Pagination modules

const categories = [
  {
    title: "BRAS",
    image: "https://alphalete.uk/cdn/shop/files/W_Bras_4x5_d6711cf5-f77c-4f11-88a5-a5a39af53071.jpg?crop=center&v=1734284772&width=960",
    link: "#",
  },
  {
    title: "SHORTS",
    image: "https://alphalete.uk/cdn/shop/files/W_Shorts_4x5_8d0a09e4-9594-4578-a019-90ce68767e0c.jpg?crop=center&v=1734284770&width=960",
    link: "#",
  },
  {
    title: "LEGGINGS",
    image: "https://alphalete.uk/cdn/shop/files/W_Leggings_4x5_659e2341-6185-498b-9465-c171c4951d58.jpg?crop=center&v=1734284770&width=960",
    link: "#",
  },
  {
    title: "HOODIES",
    image: "https://alphalete.uk/cdn/shop/files/W_Hoodies_v3_4x5_8b663125-e64a-407f-a66c-33267005730d.jpg?crop=center&v=1734288883&width=960",
    link: "#",
  },
  {
    title: "SHIRTS",
    image: "https://alphalete.uk/cdn/shop/files/W_Shirts_v2_4x5_d0b45715-2752-4577-9ca8-1d542c044339.jpg?crop=center&v=1734288883&width=960",
    link: "#",
  },
];

const PopularSection = () => {
  return (
    <div className="bg-black text-white py-8 w-full">
      <div className="container mx-auto pl-4">
        <h2 className="md:text-2xl mb-6 uppercase">
          Women's <br />
          <span className="font-bold">Popular Right Now</span>
        </h2>
        <Swiper
          initialSlide={1} // Starts from the second slide (index 1)
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
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

export default PopularSection;
