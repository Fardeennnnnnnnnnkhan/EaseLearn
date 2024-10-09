import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Flexible Learning',
    description: 'Learn at your own pace with access to materials anytime, anywhere.',
    icon: '📚',
  },
  {
    title: 'Expert Instructors',
    description: 'Get guidance from industry experts with years of experience.',
    icon: '👨‍🏫',
  },
  {
    title: 'Comprehensive Resources',
    description: 'Access a wide range of study materials and assignments.',
    icon: '📝',
  },
];

const Features = () => {
  return (
    <section className="w-full p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">Key Features</h2>
        <p className="text-gray-600 mt-2">Unlock the full potential of learning with EaseLearn</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 p-4 m-2 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <div className="text-6xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
