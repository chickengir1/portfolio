import { FaUser, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const profileArr = [
  { id: "이름", value: "이강호", icon: <FaUser /> },
  { id: "이메일", value: "rkdgh1198@gmail.com", icon: <FaEnvelope /> },
  {
    id: "링크드인",
    value: "profile",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/%EA%B0%95%ED%98%B8-%EC%9D%B4-5b38b9317/",
  },
  {
    id: "깃허브",
    value: "chickengir1",
    icon: <FaGithub />,
    url: "https://github.com/chickengir1",
  },
];

const Profile = () => {
  const profile = profileArr.map((item) => {
    if (item.id === "깃허브" || item.id === "링크드인") {
      return (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 flex items-center space-x-4 bg-[#3A3A3A] border border-[#555] rounded-lg"
        >
          <div className="flex items-center justify-center text-4xl text-[#ccc] transition-transform hover:text-[#00ADB5] hover:scale-105">
            {item.icon}
          </div>
          <div>
            <div className="font-bold text-lg text-white">{item.id}</div>
            <div className="text-sm text-gray-300">{item.value}</div>
          </div>
        </a>
      );
    }

    return (
      <div
        key={item.id}
        className="p-4 flex items-center space-x-4 bg-[#3A3A3A] border border-[#555] rounded-lg"
      >
        <div className="flex items-center justify-center text-4xl text-[#ccc]">
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
