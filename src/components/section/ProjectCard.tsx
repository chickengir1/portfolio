import Folder from "../anime/Folder";
import Features from "../chip/Features";
import TechStack from "../chip/TechStack";

type ProjectType = {
  id: string;
  url?: string;
  test?: string;
  github?: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
};

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="flex flex-col gap-4 p-8 bg-[#e5e3e3] border-2 rounded-lg w-full shadow-lg">
    <div className="flex flex-col items-center gap-2">
      <a href={project.github} target="_blank" className="inline-block">
        <Folder />
      </a>
      <h3 className="text-lg font-bold text-teal-700">{project.title}</h3>
    </div>
    <div className="flex flex-col items-start h-full space-y-2">
      <p className="font-semibold">{project.description}</p>
      {project.test && (
        <p className="text-red-700 font-semibold">{project.test}</p>
      )}
      <Features features={project.features} />
      <div className="flex flex-col items-start h-full justify-end">
        <TechStack techStack={project.techStack} />
        {project.url ? (
          <a href={project.url} target="_blank" className="mt-2">
            <span className="text-blue-700  hover:text-blue-800 hover:underline transition-colors">
              프로젝트 보러가기
            </span>
          </a>
        ) : (
          <p className="text-base mt-2 text-red-500">URL이 만료되었습니다.</p>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
