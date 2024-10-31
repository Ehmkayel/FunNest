import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { images } from '../Data/Data'
import Button from '../Reusable/Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'



const Gallery = () => {
  const swiperRef = useRef(null);

  return (
    <div className="px-4 lg:px-[3rem] xl:px-[5rem] pt-[5rem] md:pt-0">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary heading">Our Gallery</h2>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        speed={600} 
        modules={[Autoplay, Pagination]} 
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Gallery ${index}`} className="w-full h-[200px] object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="flex justify-center mt-4 gap-10">
        <Button
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaArrowLeft/>
        </Button>
        <Button
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaArrowRight/>
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
