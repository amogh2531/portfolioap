

const projects = [
  {
    id: 1,
    title: "SaideepArt",
    description: "A description of Project One. A short summary of what the project is about.",
    imageUrl: "https://via.placeholder.com/400",
    projectUrl: "https://saideepart.onrender.com/",
  },
  {
    id: 2,
    title: "Wanderlust",
    description: "A description of Project Two. A short summary of what the project is about.",
    imageUrl: "https://via.placeholder.com/400",
    projectUrl: "https://github.com/amogh2531/wanderlust",
  },
  {
    id: 3,
    title: "Fashion Store",
    description: "A description of Project Three. A short summary of what the project is about.",
    imageUrl: "https://via.placeholder.com/400",
    projectUrl: "https://github.com/amogh2531/fashion-store",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description: "A description of Project Four. A short summary of what the project is about.",
    imageUrl: "https://via.placeholder.com/400",
    projectUrl: "https://github.com/amogh2531/simon-says-",
  },
  {
    id: 5,
    title: "E-commerce Store",
    description: "A description of Project Four. A short summary of what the project is about.",
    imageUrl: "https://via.placeholder.com/400",
    projectUrl: "https://example.com/project-four",
  },
  {
    id: 6,
    title: "Simon Says",
    description: "A description of Project Four. A short summary of what the project is about.",
    imageUrl: "https://via.placeholder.com/400",
    projectUrl: "https://example.com/project-four",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-6 mt-3">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">My Projects</h2>
          <p className="text-lg  mt-2">Check out some of the projects I have worked on.</p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold ">{project.title}</h3>
                <p className="text-sm  mt-2">{project.description}</p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-white-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
