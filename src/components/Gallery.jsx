import React from 'react';
import G1 from '../assets/g1.jpg';
import G2 from '../assets/g2.jpg';
import G3 from '../assets/g3.jpg';
import G4 from '../assets/g4.jpg';
import G5 from '../assets/g5.jpg';
import G6 from '../assets/g6.jpg';

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
        <h1 className='text-4xl font-bold text-center text-black'>Gallery</h1>
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Life at the Military Academy
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Experience a life of discipline, camaraderie, and leadership training. At our academy, cadets learn to push their limits and develop skills that prepare them for the challenges ahead. From tactical training to building strong bonds with fellow cadets, every moment is a step towards excellence.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="cadet training"
                className="w-full object-cover h-full object-center block"
                src={G1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="drill practice"
                className="w-full object-cover h-full object-center block"
                src={G2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="cadet ceremony"
                className="w-full h-full object-cover object-center block"
                src={G3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="field training"
                className="w-full h-full object-cover object-center block"
                src={G4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="team building exercises"
                className="w-full object-cover h-full object-center block"
                src={G5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="leadership training"
                className="w-full object-cover h-full object-center block"
                src={G6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
