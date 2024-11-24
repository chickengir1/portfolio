import { FaUser, FaBirthdayCake, FaPhone, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  const profileArr = [
    { id: "이름", value: "이강호", icon: <FaUser /> },
    { id: "생년월일", value: "00.09.02", icon: <FaBirthdayCake /> },
    { id: "전화번호", value: "010-5497-0058", icon: <FaPhone /> },
    { id: "이메일", value: "rkdgh1198@gmail.com", icon: <FaEnvelope /> },
  ];

  const profile = profileArr.map((item) => {
    return (
      <div
        key={item.id}
        className="p-4 flex items-center space-x-4 bg-[#3A3A3A] border border-[#555] rounded-lg"
      >
        <div className="flex items-center justify-center text-4xl text-[#00ADB5]">
          {item.icon}
        </div>
        <div>
          <div className="font-bold text-lg text-white">{item.id}</div>
          <div className="text-sm text-gray-300">{item.value}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="px-4 py-8">
      <h1 className="text-center mb-12 font-bold text-4xl text-gray-300">
        ABOUT ME
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{profile}</div>
    </div>
  );
};

export default Profile;
