import { SKILLS } from "../../utils/projectDatas";

const Skills = () => {
  return (
    <div className="w-[80%] mx-auto p-8">
      <h2 className="text-3xl pb-4 text-center font-bold text-gray-300 mb-6 sm:text-4xl md:text-5xl">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SKILLS.map((item) => (
          <div
            key={item.name}
            className="flex flex-col space-y-2 items-start p-4  border-2 rounded-lg shadow-md"
          >
            <h3
              className={`font-bold text-lg sm:text-xl md:text-2xl border-2 rounded-md border-gray-300 px-5`}
              style={{
                backgroundColor: item.color,
              }}
            >
              {item.name}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
