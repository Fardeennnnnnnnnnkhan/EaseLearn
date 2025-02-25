import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const instructors = [
  {
    name: 'Dr. Alice Johnson',
    expertise: 'Data Science',
    description: 'Dr. Alice has over 15 years of experience in Data Science, specializing in machine learning and AI.',
    qualifications: 'PhD in Computer Science',
    experience: '15+ years',
    fields: ['Machine Learning', 'AI', 'Data Analytics'],
    image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Dr. Alice has been a leader in research, development, and teaching in the field of data science. Her work focuses on creating AI models for real-world applications.'
  },
  {
    name: 'John Smith',
    expertise: 'Full Stack Development',
    description: 'John is a seasoned developer with extensive knowledge in both front-end and back-end technologies.',
    qualifications: 'M.Sc in Computer Science',
    experience: '10+ years',
    fields: ['React', 'Node.js', 'SQL', 'NoSQL'],
    image: 'https://images.pexels.com/photos/8472880/pexels-photo-8472880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'John has developed scalable web applications using modern technologies and frameworks, providing seamless user experiences.'
  },
  {
    name: 'Sarah Lee',
    expertise: 'Cyber Security',
    description: 'Sarah provides robust security solutions with a deep understanding of network security and threat management.',
    qualifications: 'B.Tech in Cyber Security',
    experience: '8+ years',
    fields: ['Network Security', 'Penetration Testing', 'Ethical Hacking'],
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Sarah is skilled in identifying vulnerabilities and implementing secure systems, ensuring the highest level of cybersecurity.'
  },
];

const Instructors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [instructors.length]);

  return (
    <section className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Instructors</h2>
      <div className="w-full max-w-screen-lg flex">
        <motion.div
          className="w-1/2 h-full flex justify-center items-center"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={instructors[currentIndex].image}
            alt={instructors[currentIndex].name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="w-1/2 h-full flex flex-col justify-center items-start p-8 bg-gray-100 rounded-lg shadow-lg"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">{instructors[currentIndex].name}</h3>
          <p className="text-gray-500 mt-2">{instructors[currentIndex].expertise}</p>
          <p className="text-gray-600 mt-2">{instructors[currentIndex].description}</p>
          <p className="text-gray-600 mt-1">Qualifications: {instructors[currentIndex].qualifications}</p>
          <p className="text-gray-600 mt-1">Experience: {instructors[currentIndex].experience}</p>
          <p className="text-gray-600 mt-1">Fields: {instructors[currentIndex].fields.join(', ')}</p>
          <p className="text-gray-600 mt-2">{instructors[currentIndex].bio}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;
