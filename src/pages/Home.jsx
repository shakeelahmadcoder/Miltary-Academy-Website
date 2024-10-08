import React from 'react';
import Slider from 'react-slick';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import FeatureCards from '../components/FeatureCards';
import Events from '../components/Events';
import Testimonials from '../assets/Testimonials';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import Subscription from '../components/Subscription';
import Blog from '../components/Blog';


const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute hidden sm:block left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2 shadow-lg hover:bg-orange-500 transition-colors z-10"
      onClick={onClick}
    >
      <MdOutlineChevronLeft className='text-7xl' />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute hidden sm:block right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white  rounded-full p-2 shadow-lg hover:bg-orange-500 transition-colors z-10"
      onClick={onClick}
    >
      <MdOutlineChevronRight className='text-7xl' />
      
    </button>
  );
};


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    {
      title: 'Success',
      subtitle: 'begins',
      caption: 'Create an Opportunity of a lifetime for your son',
      buttonText: 'Apply Now',
      image: image1,
    },
    {
      title: 'Achieve',
      subtitle: 'your dreams',
      caption: 'Shape your future with our expert guidance',
      buttonText: 'Join Today',
      image: image2,
    },
    {
      title: 'Inspire',
      subtitle: 'the world',
      caption: 'Empower yourself to lead and innovate',
      buttonText: 'Get Started',
      image: image3,
    },
  ];

  return (
    <>
    <Slider {...settings} className="h-screen">
      {slides.map((slide, index) => (
        <div key={index} className="relative h-screen">
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
            <div className='flex  items-center'>
              <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold underline decoration-orange-500'>{slide.title}</h1>
              <div className='px-2 md:px-4 my-4 md:my-10 text-center md:text-left'>
                <p className='text-lg md:text-2xl lg:text-3xl italic font-bold'>{slide.subtitle}</p>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>HERE</h1>
              </div>
            </div>
            <p className='text-sm md:text-2xl lg:text-4xl font-bold text-center'>{slide.caption}</p>
            <button className='bg-orange-500 my-4 md:my-9 px-6 md:px-12 py-2 md:py-4 uppercase text-black'>
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </Slider>
    <FeatureCards/>
    <Events/>
    <Testimonials/>
    <Gallery/>
    <Features/>
    <Blog/>
    <Subscription/>
    </>
  );
};

export default Home;
