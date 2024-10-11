import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-6 mt-3">
  
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-lg mt-4">
            Learn more about me and the journey that led me here.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-12">
          
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <img
              src="/images/amogh.png"
              alt="Profile"
              className="rounded-full shadow-lg mx-auto lg:mx-0 w-72 h-72 object-cover border-4 border-gray-300"
            />
          </div>

    
          <div className="w-full lg:w-2/3">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I’m a passionate web developer with a love for creating intuitive and engaging user experiences. 
              I specialize in front-end development, working with technologies like React, Tailwind CSS, and JavaScript. 
              I also work with backend technologies like Node.js, Express.js, and MongoDB. 
              My goal is to build websites and applications that are not only functional but also delightful to use.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In my spare time, I enjoy exploring new web development trends, contributing to open-source projects, and learning new
              technologies that help me grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
