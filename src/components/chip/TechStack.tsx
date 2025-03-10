type ProjectProps = {
  techStack: string[];
};

const TechStack = ({ techStack }: ProjectProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-start sm:justify-center">
      {techStack.map((tech, index) => (
        <p
          key={`${tech}-${index}`}
          className="border-2 px-2 py-1 rounded-lg bg-[#333] text-gray-300 text-sm sm:text-base"
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

export default TechStack;
