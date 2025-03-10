import Folder from "../anime/Folder";
import Features from "../chip/Features";
import TechStack from "../chip/TechStack";

type ProjectType = {
  id: number;
  url?: string;
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
      <h3 className="text-lg font-bold text-[#333]">{project.title}</h3>
    </div>
    <div className="flex flex-col items-start space-y-2">
      <p className="text-[#333] font-semibold">{project.description}</p>
      <Features features={project.features} />
      <TechStack techStack={project.techStack} />
      {project.url ? (
        <a href={project.url} target="_blank">
          <span className="text-[#007acc] hover:underline">{project.url}</span>
        </a>
      ) : (
        <p className="text-base mt-2 text-[#ff5722]">URL이 만료되었습니다.</p>
      )}
    </div>
  </div>
);

export default ProjectCard;
