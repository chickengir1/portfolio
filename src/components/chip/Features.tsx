type ProjectProps = {
  features: string[] | null;
};

const Features: React.FC<ProjectProps> = ({ features }) => {
  if (!features || features.length === 0) {
    return <p className="text-gray-500">기능 정보가 없습니다.</p>;
  }

  return (
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <h3 className="text-base font-bold text-blue-500 mb-2">주요 기능</h3>
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-center gap-2 before:content-['✔'] before:text-blue-500"
        >
          {feature}
        </li>
      ))}
    </ul>
  );
};
export default Features;
