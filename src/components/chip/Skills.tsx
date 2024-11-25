import { skills } from "../../utils/constans/constants";

const Skills = () => {
  const skillList = skills.map((item) => {
    return (
      <div
        key={item.name}
        className="flex flex-col space-y-2 items-start p-4 rounded-lg shadow-md"
        style={{
          border: `2px solid`,
        }}
      >
        <h3
          className="font-bold text-lg sm:text-xl md:text-2xl"
          style={{
            color: "#000",
            border: `2px solid #ccc`,
            borderRadius: 4,
            background: `${item.color}`,
            padding: "0 20px",
          }}
        >
          {item.name}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          {item.desc}
        </p>
      </div>
    );
  });

  return (
    <div className="w-[80%] mx-auto p-8">
      <h2 className="text-3xl pb-4 text-center font-bold text-gray-300 mb-6 sm:text-4xl md:text-5xl">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillList}
      </div>
    </div>
  );
};

export default Skills;
