type ProjectProps = {
  techStack: string[] | null;
};

const TechStack: React.FC<ProjectProps> = ({ techStack }) => {
  if (!techStack || techStack.length === 0) {
    return <p className="text-gray-500">기술 스택 정보가 없습니다.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2 justify-start sm:justify-center">
      {techStack.map((tech, index) => (
        <p
          key={index}
          className="border-2 px-2 py-1 rounded-lg bg-[#333] text-gray-300 text-sm sm:text-base"
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

export default TechStack;
