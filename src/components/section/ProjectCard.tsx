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
      <h3 className="text-lg font-bold">{project.title}</h3>
    </div>
    {project.url ? (
      <a href={project.url} target="_blank" className="mt-2 font-semibold">
        <span className="text-blue-700 underline underline-offset-4 hover:text-blue-500 transition-colors">
          배포 사이트로 이동하기
        </span>
      </a>
    ) : (
      <p className="mt-2 font-semibold text-red-500 cursor-not-allowed">
        URL이 만료되었습니다.
      </p>
    )}
    <div className="flex flex-col items-start h-full space-y-2">
      <p className="font-semibold tracking-wide">{project.description}</p>
      {project.test && (
        <span className="text-red-700 font-semibold">
          <span className="text-black">테스트 계정 : </span>
          {project.test}
        </span>
      )}
      <Features features={project.features} />
      <div className="flex flex-col items-start h-full justify-end">
        <TechStack techStack={project.techStack} />
      </div>
    </div>
  </div>
);

export default ProjectCard;
