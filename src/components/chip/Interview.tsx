import { ABOUT } from "../../utils/projectDatas";

const Interview = () => {
  const InterviewArr = ABOUT.map((item) => {
    return (
      <div
        key={item.name}
        className="p-4 rounded-lg shadow-md bg-[#3A3A3A] border border-[#555]"
      >
        <h3 className="text-lg font-semibold mb-4 text-[#FCA311]">
          {item.name}
        </h3>
        <p className="text-base leading-relaxed text-gray-300">{item.value}</p>
      </div>
    );
  });

  return (
    <div className="h-full px-4 py-8">
      <div className="flex flex-col space-y-8">{InterviewArr}</div>
    </div>
  );
};

export default Interview;
