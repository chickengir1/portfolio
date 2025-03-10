import { FaUser, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const PROFILE = [
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
