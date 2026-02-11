import { projects } from "../../../backend/assets/data/Data.js";

function ProjectsCard() {
  return (
    <div className="flex flex-wrap -m-4">
      {projects.map((project) => (
        <a
          href={project.href}
          key={project.key}
          className="sm:w-1/2 w-5 p-6 flex flex-wrap -m-4 border-3 border-indigo-600 rounded-full"
        >
          <div className="flex-auto relative ">
            <img
              alt="gallery"
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={project.image}
            />
            <div className="px-10 py-10 relative z-10 border-4 border-indigo-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {project.subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed">{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ProjectsCard;
