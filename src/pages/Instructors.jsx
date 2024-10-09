import React from 'react';
import { motion } from 'framer-motion';

const instructors = [
  {
    name: 'Dr. Alice Johnson',
    expertise: 'Data Science',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'John Smith',
    expertise: 'Full Stack Development',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Sarah Lee',
    expertise: 'Cyber Security',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Instructors = () => {
  return (
    <section className="w-full p-8 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">Meet Our Instructors</h2>
        <p className="text-gray-600 mt-2">Learn from the best in the industry</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        {instructors.map((instructor, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 p-4 m-2 bg-gray-100 shadow-lg rounded-lg text-center"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{instructor.name}</h3>
            <p className="text-gray-500 mt-2">{instructor.expertise}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
