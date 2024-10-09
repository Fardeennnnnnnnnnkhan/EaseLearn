import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      company: "Google",
      message:
        "This platform helped me land my dream job at Google. The courses and support were exceptional!",
      image: "https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg?auto=compress&cs=tinysrgb&w=600",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/225px-Google_%22G%22_logo.svg.png"
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "Data Scientist",
      company: "Facebook",
      message:
        "The learning experience was fantastic. It provided me with the skills to succeed at Facebook.",
      image: "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
    },
    {
      id: 4,
      name: "Bob Brown",
      position: "Cloud Engineer",
      company: "Amazon",
      message:
        "Thanks to the platform, I now work as a Cloud Engineer at Amazon, doing what I love.",
      image: "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
    },
    {
      id: 5,
      name: "Sarah Evans",
      position: "UI/UX Designer",
      company: "Microsoft",
      message:
        "The skills I gained here directly contributed to my role at Microsoft. I couldn't be happier.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png"
    },
   
    {
  id: 6,
  name: "James Wilson",
  position: "DevOps Engineer",
  company: "Netflix",
  message:
    "The platform's in-depth courses gave me an edge when applying for my current job at Netflix.",
  image: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAllBMVEUQEBCwBg/lCRMAEBCBCw+nBxCzBg+EChBUDhCzBhGtBg7MChMAEBIAERDnCROrBg4JEBCeBQ/sCBSTBA6jBQ+aBQ8RDxCOAw6JAw3fCBOcBQ+ADRTSChO2DBZADhCHCg8sEBNMDg1gDhC/BhJvDBMkEBCGDRYyDRNoDhUPEg15DxHICRRPDg9HDhDbCRVYDhE2Dg4cDxLdNmpQAAAE1klEQVR4nO2dy1bqShRFK6k8riGVSlIJKSKKAnoURTn//3M3DxKyN3DGadw7bLBmw4ZlgzHHXrseKaIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4L9GcqaD6Z8Gbw55v5wRHuLTYPq4Cgn3Ny1L7RKCmz+l46D83gQEX/3gR/1x1P0ycafk1al25D+BQ7hxV94mJ66SZTwfBs9d3XYGQ3/BCut5FAJXBOnpmUtk5eUYNLgiSC/waV25i3EmhCtC46pcUFf5eigsuCI0rooNLaxED4UFV4TGVZTRukrcYSKEK0LjyjFf0+7eLEe3x8KCK0Lrqg5YCDdHJXBFaFwFvmEzYfLS73PgitDWla74Pue1dwJXhNaVU2oWwg8p2v4OV4TOVVHRDLr5ry6EcEXoXGk7YyE03UwIV4TelSnYYcNXJwWuCJ2rKLN8n7Nv9zlwRehcOb7dJCSFSWcFrgi9K21qGkLXRV2dcXSVhTyEb2oOV5TelVPYB9bdH+R76yqCq5HeVVQYm9OGlTSLUfnpoK5OHOtKl94XW2Lt4tYV6urE0VWzavBZd/9QjatIw9XI4KqobMI2hYdUPmu4OjG48k3I9zlWyk/tR3A1cHTl6Nqy5znJTMlnnxYWXHWuChO6rLD2al/4cDUyuIqK0vtgy9Fa7rNCR3B1ZHTll7Y+O2zY17Sw4KpzpbPK4/uc78cyg6uRwVXXsM4OGw6mJiGEq95VE0LDlljuwZQZXA1MXDUh5Puc0Jrah6sjoytHZyYMaHfPZ15FQghXQ8MqreUPVa0lIYQrZ1g1VN6SHcxEKzOdCeHKGVYNZsXvrX15VVnAVc/UVVFWIdsTJsaWk4YFV0PD8kvjscOGJGhDCFcdxFVmbMZO/NoQwlXPxFUXQo+qcpPSThoWXPUEkfZr8/rBr8yE5rRqgKujqz6EITtscMNJCOHqFMKsrNa8uxcrM66w4GrasMy6YoU1a0MIV4K6apbuWfn2K2frUVvBVQdzVWRbNWPLUb0aGxZcTUPYuHplS6xlaIZVA1xNXPnFVr0k/EGhLVBXgrlytPZ3seLfzwnsEEK4mhaW3ql4e7bPgauWc1cyFex5TmKGmRCuJq6iaCeFjJirzQquBHfVyPKkUGsWwsUQQriaunIaV3PFn+dkVQFX3JXTuhJxSQorcWc2g6szV0HrKt2zy6PuqtRwxV3dtRkUMfuSXOJXPlyd1VXY6JjLirlargq4uuhKpC9sJkyqOoKri66E5EfJjtFwxfvV0dWOHzZYH64uu0oFv8FtMri67GoeP/D3EJgIri67Um98n2M1XF10JYRa8Oc5hRPA1UVXkn81YGNQV1dcxZ9sT+ga1NUVV0LxfY724eqyq3ls+EPVDK6u1FX6SFw1rb5Gv7riSqize2sarq64kvzKzNKHq8v9SqRPLruVDFfX6kqoDa2rZFPc9Dt+/+RKbtmVmUV2067U/Z3jBMHd3fAq7ddJzNTCTfKW4SXc+rYzGG6a6a2uvN32+3l/OLz8Po29z38/Hfaf6+1rWQSzr4Wbf8j3n/uoP076uD/8ljLu3vqfpqlIJ4PzNFXNr5XsforD5/qmMyhaP3/7pzf+PxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+V/4Fj49Vp7Kf0yIAAAAASUVORK5CYII="
},
{
  id: 7,
  name: "Laura Davis",
  position: "Machine Learning Engineer",
  company: "Tesla",
  message:
    "The real-world projects helped me build a portfolio that impressed Tesla recruiters.",
  image: "https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-tesla.png"
},
{
  id: 8,
  name: "David Parker",
  position: "Backend Developer",
  company: "Spotify",
  message:
    "I gained hands-on experience and practical knowledge that prepared me perfectly for my role at Spotify.",
  image: "https://images.pexels.com/photos/1111111/pexels-photo-1111111.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-spotify.png"
},
{
  id: 9,
  name: "Megan Turner",
  position: "Full Stack Developer",
  company: "Uber",
  message:
    "The platform transformed my career and gave me the confidence to excel at Uber.",
  image: "https://images.pexels.com/photos/123987/pexels-photo-123987.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-uber.png"
},
{
  id: 10,
  name: "Lucas Hill",
  position: "Cybersecurity Analyst",
  company: "Cisco",
  message:
    "I owe my success at Cisco to the amazing mentors and well-structured courses.",
  image: "https://images.pexels.com/photos/998899/pexels-photo-998899.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-cisco.png"
},
{
  id: 11,
  name: "Sophia Bennett",
  position: "AI Specialist",
  company: "IBM",
  message:
    "The platform gave me an unbeatable foundation in AI, which led me to my current role at IBM.",
  image: "https://images.pexels.com/photos/443322/pexels-photo-443322.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-ibm.png"
},
{
  id: 12,
  name: "Daniel Carter",
  position: "Blockchain Developer",
  company: "Coinbase",
  message:
    "Learning on this platform gave me the expertise to land a position as a Blockchain Developer at Coinbase.",
  image: "https://images.pexels.com/photos/1112333/pexels-photo-1112333.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-coinbase.png"
},
{
  id: 13,
  name: "Olivia Adams",
  position: "Data Engineer",
  company: "LinkedIn",
  message:
    "The personalized guidance helped me achieve a career at LinkedIn, working as a Data Engineer.",
  image: "https://images.pexels.com/photos/543210/pexels-photo-543210.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-linkedin.png"
},
{
  id: 14,
  name: "Ethan Cooper",
  position: "Frontend Developer",
  company: "Twitter",
  message:
    "Thanks to the platform, I now develop user interfaces for millions at Twitter.",
  image: "https://images.pexels.com/photos/654321/pexels-photo-654321.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-twitter.png"
},
{
  id: 15,
  name: "Isabella Scott",
  position: "Mobile App Developer",
  company: "Instagram",
  message:
    "I built a mobile app portfolio here that directly contributed to landing my job at Instagram.",
  image: "https://images.pexels.com/photos/123876/pexels-photo-123876.jpeg?auto=compress&cs=tinysrgb&w=600",
  companyLogo: "https://example.com/company-logo-instagram.png"
}
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='testimonial w-full min-h-auto py-16 flex flex-col items-center'>
      <h1 className='text-3xl md:text-4xl font-bold mb-10 text-gray-900'>
        What Our Students Say
      </h1>
      <div className='w-full max-w-6xl flex justify-between items-center relative px-4'>
        <button
          className='absolute left-[-2rem] md:left-[-4rem] text-gray-500 hover:text-gray-800 transition-all z-10'
          onClick={handlePrev}
        >
          <FaArrowLeft className='w-8 h-8 md:w-10 md:h-10' />
        </button>

        <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden'>
          {/* Only display testimonials based on the screen size */}
          {testimonialsData
            .slice(currentIndex, currentIndex + (window.innerWidth < 768 ? 1 : 3))
            .map((testimonial, index) => (
              <motion.div
                className='card bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl'
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className='student-image mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-24 h-24 rounded-full object-cover shadow-md ring-4 ring-blue-400'
                  />
                </div>
                <p className='message text-gray-700 mb-4 font-semibold'>
                  "{testimonial.message}"
                </p>
                <div className='info mb-2'>
                  <p className='font-bold text-xl text-gray-800'>{testimonial.name}</p>
                  <p className='text-sm text-gray-500'>{testimonial.position}</p>
                </div>
                <div className='company flex items-center gap-2'>
                  <img
                    src={testimonial.companyLogo}
                    className='w-12 h-8'
                  />
                  <p className='text-sm text-gray-500'>{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
        </div>

        <button
          className='absolute right-[-2rem] md:right-[-4rem] text-gray-500 hover:text-gray-800 transition-all z-10'
          onClick={handleNext}
        >
          <FaArrowRight className='w-8 h-8 md:w-10 md:h-10' />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;


















