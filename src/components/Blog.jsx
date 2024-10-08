import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

const blogs = [
  {
    id: 1,
    title: 'The Catalyzer',
    category: 'MILITARY ACADEMY',
    description: 'Learn about the discipline, rigor, and training that transform individuals into leaders at the Military Academy.',
    image: image1,
  },
  {
    id: 2,
    title: 'The 400 Blows',
    category: 'MILITARY ACADEMY',
    description: 'Explore the challenges and victories of cadets as they navigate through the demands of military training.',
    image: image2,
  },
  {
    id: 3,
    title: 'Shooting Stars',
    category: 'MILITARY ACADEMY',
    description: 'A deep dive into the history and achievements of our top cadets, making a mark in the military world.',
    image: image3,
  },
];

// Function to handle the "Read More" action, which can be customized
const handleReadMore = (blogId) => {
  console.log(`Read more about blog with ID: ${blogId}`);
  // You can navigate to another page or perform an action here.
  // For example, if using React Router, you can do:
  // navigate(`/blog/${blogId}`);
};

const Blog = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className='text-4xl font-bold text-center text-black'>Our Blog</h1>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {blog.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {blog.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{blog.description}</p>
                  <div className="flex items-center flex-wrap">
                    <button
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      onClick={() => handleReadMore(blog.id)}
                    >
                      Read More
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
