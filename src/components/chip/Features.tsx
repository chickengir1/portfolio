type ProjectProps = {
  features: string[];
};

const Features = ({ features }: ProjectProps) => {
  return (
    <>
      <h3 className="text-base font-bold text-blue-500 pt-2">주요 기능</h3>
      <ul className="list-disc list-inside text-gray-700">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 before:content-['✔'] before:text-blue-500"
          >
            {feature}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Features;
