import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

// Array with event details
const events = [
  {
    image: image1,
    title: "Parade Ceremony",
    location: "Central Park, New York, USA",
    time: "Monday, 10:00 am",
    dateDay: "05",
    dateMonth: "Nov",
  },
  {
    image: image2,
    title: "Annual Drill Competition",
    location: "Lincoln Memorial, Washington, D.C., USA",
    time: "Saturday, 04:00 pm",
    dateDay: "15",
    dateMonth: "Dec",
  },
  {
    image: image3,
    title: "Flag Raising Ceremony",
    location: "Independence Square, Lahore, Pakistan",
    time: "Thursday, 09:00 am",
    dateDay: "23",
    dateMonth: "Jan",
  },
];

const Events = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows for better mobile experience
  };

  return (
    <div className='px-4 sm:px-6 md:px-14 mx-auto my-12'>
      <h1 className='text-3xl sm:text-4xl text-center font-bold mb-6'>Events</h1>
      <Slider {...settings} className="relative">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <img src={event.image} className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" alt={event.title} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
              <div className="flex flex-col gap-4 items-center justify-center text-center">
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold underline decoration-orange-500'>
                  {event.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg">{event.location}</p>
                <p className="text-sm sm:text-base md:text-lg">{event.time}</p>
              </div>
              <div className="date absolute top-0 left-0 bg-orange-500 py-2 px-4 sm:py-4 sm:px-6 text-center">
                <p className="text-lg sm:text-2xl font-bold">{event.dateDay}</p>
                <p className="text-sm sm:text-base">{event.dateMonth}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Events;
