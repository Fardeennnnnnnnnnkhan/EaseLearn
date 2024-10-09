import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-gray-100 text-gray-900  px-4 py-28">
      <div className="container mx-auto">
        {/* Hero Section with Animated Background */}
        <div className="mb-16 relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-lg"></div>
          <motion.h1
            className="relative text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Welcome to EaseLearn
          </motion.h1>
          <p className="relative text-gray-200 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Our platform provides high-quality, accessible education for learners worldwide. From beginner to expert, EaseLearn offers a wide range of courses to help you achieve your learning goals.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className="mb-12 bg-gradient-to-r from-green-500 to-blue-500 p-10 rounded-lg shadow-lg text-white text-center">
          <h2 className="text-4xl font-semibold mb-4">Our Vision & Mission</h2>
          <p className="leading-relaxed max-w-3xl mx-auto">
            We envision a world where education is accessible to all. Our mission is to provide flexible, engaging, and effective learning solutions that cater to the needs of learners of all ages.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-8">Why EaseLearn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Interactive Learning', description: 'Hands-on learning experiences with real-world applications.' },
              { title: 'Expert Instructors', description: 'Learn from industry leaders and skilled professionals.' },
              { title: 'Global Community', description: 'Join a supportive community of learners from around the world.' },
              { title: 'Certification Programs', description: 'Earn certificates to boost your resume and career prospects.' },
              { title: 'Anytime, Anywhere', description: 'Access your courses from any device, anytime.' },
              { title: 'Affordable Education', description: 'High-quality education at an affordable price.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Fardeen Khan',
                role: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
                description:
                  'Fardeen is passionate about providing accessible education to everyone and has built EaseLearn from the ground up.',
              },
              {
                name: 'Sarah Lee',
                role: 'Lead Instructor',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
                description:
                  'Sarah has over 10 years of experience in education and is committed to helping learners achieve their goals.',
              },
              {
                name: 'John Doe',
                role: 'Technical Advisor',
                image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
                description:
                  'John is responsible for ensuring the platform’s technological excellence and scalability.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white shadow-lg rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.7 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Impact</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { label: 'Courses Available', value: '300+' },
              { label: 'Students Enrolled', value: '10,000+' },
              { label: 'Instructors', value: '150+' },
              { label: 'Graduation Rate', value: '98%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="w-1/2 md:w-1/4 p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-5xl font-bold text-green-600">{stat.value}</h3>
                <p className="text-gray-700 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-green-400 to-blue-600 py-12 rounded-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Start Learning Today</h2>
          <p className="text-gray-200 max-w-xl mx-auto mb-6">
            Join our growing community of learners and get access to high-quality courses designed to help you succeed in your career.
          </p>
          <motion.a
            href="/courses"
            className="inline-block bg-white text-green-600 py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default About;

