import { skills } from "../data/data";

export const Skills = () => {
  return (
    <div id="skills" className="bg-gradient-to-r from-purple-500 to-pink-500">
      <h2 className="text-center text-3xl font-bold mb-8 mt-4 pb-8 py-16 text-white " >
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mb-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-full  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-4  hover:bg-gradient-to-r from-fuchsia-500 to-voilet-500"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={skill.img}
                alt={skill.name}
                className="object-contain h-32 w-32 rounded-full border-4 border-white shadow-md transition-transform transform hover:scale-110"
              />
            </div>
            <div className="font-bold text-lg mb-2">{skill.name}</div>
            <div className="text-sm text-gray-400">{skill.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
