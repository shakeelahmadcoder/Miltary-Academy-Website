import React from "react";
import { FaBook, FaStar, FaTrophy } from "react-icons/fa";

// Array of features with icon, title, and description
const features = [
  {
    icon: <FaBook className="" />,
    title: "Excellence in Academics",
    description: "92% of Military School graduates will go on to attend higher education.",
  },
  {
    icon: <FaStar className="" />,
    title: "Focus on Leadership",
    description: "At Military School, it is our goal to develop our students’ personal skills.",
  },
  {
    icon: <FaTrophy className="" />,
    title: "Strength in Athletics",
    description: "Each student is required to participate in physical fitness.",
  },
];

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center flex flex-col justify-center items-center">
      <div className="text-orange-500 mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <div className="w-12 h-1 bg-orange-500 mb-4"></div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="mx-auto px-4 sm:px-14 my-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default Features;
