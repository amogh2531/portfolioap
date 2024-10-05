import { skills } from "../data/data";

export const Skills = () => {
  return (
    <div id="skills">
      <h4 className="text-center text-3xl font-semibold mb-12 pb-8 text-white" id="skills">
        Skills
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mb-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-4"
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
