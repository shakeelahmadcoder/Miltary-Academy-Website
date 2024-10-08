import React, { useState } from 'react';
import { FaShieldAlt, FaUsers, FaGraduationCap, FaStar } from 'react-icons/fa';
import mission from '../assets/mission.jpg'
import Cles from '../assets/class.jpg'
import education from '../assets/education.jpg'
import leadership from '../assets/leadership.jpg'

const features = [
  {
    img: mission,
    title: "OUR MISSION",
    about: "Strength & Character Are Only the Beginning",
    icon: <FaShieldAlt className="text-orange-500 text-6xl" />,
    description: 'Military School provides young boys with an exemplary academic platform that acknowledges the differences regarding how each individual learns while also eliminating distractions.',
  },
  {
    title: "CLASSES",
    about: "We prepare boys for life and beyond!",
    img: Cles,
    icon: <FaUsers className="text-orange-500 text-6xl" />,
    description: 'Our classes are designed to cater to individual learning needs and foster a sense of community.',
  },
  {
    img: education,
    about: "Looking forward with confidence!",
    title: "EDUCATION",
    icon: <FaGraduationCap className="text-orange-500 text-6xl" />,
    description: 'We focus on a well-rounded education that emphasizes both academics and character development.',
  },
  {
    img: leadership,
    about: "A bright future for your son ahead!",
    title: "LEADERSHIP",
    icon: <FaStar className="text-orange-500 text-6xl" />,
    description: 'Our leadership program aims to develop strong, confident individuals who can thrive in any environment.',
  },
];

const FeatureCards = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleFeatureClick = (index) => {
    setSelectedFeature(index);
  };

  return (
    <div className="px-4 sm:px-14 mx-auto my-12">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center bg-gray-300 py-5 cursor-pointer text-navy hover:bg-navy hover:text-white" 
            onClick={() => handleFeatureClick(index)}
          >
            {feature.icon}
            <p className='font-bold text-xl py-5'>{feature.title}</p>
          </div>
        ))}
      </div>

      {selectedFeature !== null && (
        <div className="mt-6 sm:flex  items-center  p-5 sm:p-0  gap-8 bg-gray-200 rounded">
          <img src={features[selectedFeature].img } className=''  alt="" />
          <div className='flex flex-col gap-4 px-9'>
          <h2 className="font-bold text-xl sm:text-4xl my-2">{features[selectedFeature].about}</h2>
          <p>{features[selectedFeature].description}</p>
          <div><button className='bg-orange-500 my-4  px-6 md:px-12 py-2 md:py-4 uppercase text-black'>
              JOIN NOW
            </button></div>
          </div>
        </div>
      )}
<iframe 
  className="my-5 w-full h-64"
  src="https://www.youtube.com/embed/L5NTi3BSzys?si=Et6991kFD0OhuTbi"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
{/* <iframe className='w-full h-full'  src="https://www.youtube.com/embed/L5NTi3BSzys?si=Et6991kFD0OhuTbi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  );
};

export default FeatureCards;
