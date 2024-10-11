import React, { useState, useEffect } from "react";

export const Home = () => {
  const [text, setText] = useState(""); 
  const [isTyping, setIsTyping] = useState(false); 

  
  const headings = [
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack Enthusiast",
    "Passionate about Coding"
  ];

  const [currentHeading, setCurrentHeading] = useState(headings[0]);
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    
    if (index < currentHeading.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentHeading[index]);
        setIndex(index + 1);
      }, 100); 
      return () => clearTimeout(timeout);
    } else {
     
      const pauseTimeout = setTimeout(() => {
        setIndex(0);
        const nextIndex = (headings.indexOf(currentHeading) + 1) % headings.length;
        setCurrentHeading(headings[nextIndex]);
        setText(""); 
      }, 2000); 
      return () => clearTimeout(pauseTimeout);
    }
  }, [index, currentHeading, headings]);

  return (
    <div id="home" className="p-4 mx-10 mt-5 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center h-[90vh]">
      
        <div className="font-bold flex flex-col mt-20 lg:mt-0 text-center lg:text-left text-3xl p-3 lg:ml-10">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl m-2 mt-2">
            Hello, <br />I'm Amogh Phadke <br />
            <span className="text-gray-600">{text}</span>
          </h1>
          <p className="text-lg m-2">
            I am a passionate web developer, <br />
            building modern and responsive websites
          </p>
        </div>

       
        <div className="flex justify-center items-center lg:mr-20 mt-8 lg:mt-0">
          <div className="p-10 m-5 flex justify-center items-center">
            <img
              src="/images/amogh.png"
              alt="Amogh"
              className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
