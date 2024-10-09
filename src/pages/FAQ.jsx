import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What is EaseLearn?',
    answer: 'EaseLearn is an e-learning platform that offers a wide range of courses across various subjects to help learners advance their careers.',
  },
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply navigate to the Courses page, choose the course you want, and click the enroll button.',
  },
  {
    question: 'Are the courses self-paced?',
    answer: 'Yes, you can learn at your own pace and access the material anytime.',
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="w-full p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">Frequently Asked Questions</h2>
      </div>

      <div className="w-full md:w-2/3 mx-auto">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-4 bg-white shadow-lg rounded-lg p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span>{selected === index ? '-' : '+'}</span>
            </div>
            {selected === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-gray-600"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
