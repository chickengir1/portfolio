import Folder from "../chip/Folder";
import { projects } from "../../utils/constans/constants";
import TechStack from "../chip/TechStack";
import Features from "../chip/Features";

type ProjectType = {
  id: number;
  url?: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
};

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="flex flex-col gap-4 p-8 bg-[#e5e3e3] border-2 rounded-lg w-full shadow-lg">
    <div className="flex flex-col items-center gap-2">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Folder />
      </a>
      <h3 className="text-lg font-bold text-[#333]">{project.title}</h3>
    </div>
    <div className="flex flex-col items-start space-y-2">
      <p className="text-[#333] font-semibold">{project.description}</p>
      <Features features={project.features} />
      <TechStack techStack={project.techStack} />
      {project.url ? (
        <p className="text-base mt-2 truncate w-full">
          <a
            href={project.url}
            className="text-[#007acc] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.url}
          </a>
        </p>
      ) : (
        <p className="text-base mt-2 text-[#ff5722]">URL이 만료되었습니다.</p>
      )}
    </div>
  </div>
);

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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
