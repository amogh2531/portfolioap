

const experiences = [
  {
    title: "Frontend Developer",
    company: "freelance",
    location: "Ratnagiri",
    date: "Sep-2024 - Oct-2024",
    description: "Developed and art website for client Saideep Phadke which shows artworks.",
  },
  {
    title: "React Developer Intern",
    company: "Maxgen Technologies Pvt Ltd",
    location: "Remote",
    date: "May 2024 - Sep-2024",
    description: "Assisted in the development of a client dashboard using React. Contributed to database management and API integration.",
  },
 ,
];

export const Experience = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 mt-3 " id="experience">
      <div className="container mx-auto px-4 text-white ">
        <h2 className="text-3xl font-bold text-center mt-5 mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white p-7 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-110"
            >
              <h3 className="text-xl font-bold mb-3 ">{experience.title}</h3>
              <p className="text-sm mb-2 ">{experience.company} - {experience.location}</p>
              <p className="text-xs  mb-4">{experience.date}</p>
              <p >{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


