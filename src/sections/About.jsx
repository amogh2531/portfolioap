import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">About Me</h2>
          <p className="text-lg mt-2">
            Learn more about me and the journey that led me here.
          </p>
        </div>

        <div className="flex justify-center lg:justify-between items-center gap-12">
          {/* About Content (Bio) */}
          <div className="w-full lg:w-2/3">
            <p className="text-lg  leading-relaxed mb-6">
              Hello! I’m a passionate web developer with a love for creating intuitive and engaging user experiences. 
              I specialize in front-end development, working with technologies like React, Tailwind CSS, and JavaScript also backend technologies like NodeJs ExpressJs and mongoDB. 
              My goal is to build websites and applications that are not only functional but also delightful to use.
            </p>
            <p className="text-lg  leading-relaxed mb-6">
              In my spare time, I enjoy exploring new web development trends, contributing to open-source projects, and learning new
              technologies that help me grow as a developer.
            </p>
          </div>

          
          <div className="w-full lg:w-1/3">
            <img
              src="https://via.placeholder.com/400"
              alt="Profile"
              className="rounded-full shadow-lg mx-auto lg:mx-0 lg:ml-0 lg:mr-0 w-72 h-72 object-cover border-4 border-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
