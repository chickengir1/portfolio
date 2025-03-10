import { PROJECTS } from "../../utils/projectConstans";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-col sm:w-[80%] p-8">
      <h2 className="text-3xl text-center font-bold text-gray-900 my-8 sm:text-4xl md:text-5xl">
        My Projects
      </h2>
      <h3 className="text-base text-center font-semibold text-blue-500 mb-4 sm:text-lg md:text-xl">
        폴더를 클릭하면 깃허브로 이동 할 수 있어요
      </h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
