export const SECTIONS = [
  {
    name: "사용자를 위한 프론트엔드",
    value:
      "React, TypeScript, Tailwind CSS를 사용해 사용자 친화적이고 반응형 UI를 설계합니다. 단순한 화면을 넘어, 기능적이고 유용한 인터페이스를 제공하는 데 집중하고 있습니다.",
  },
  {
    name: "성장을 향한 즐거움",
    value:
      "에러 수정과 트러블슈팅에 몰입하는 과정을 즐깁니다. 문제의 원인을 찾아 해결하며 더 나은 코드와 안정적인 결과물을 만드는 데 집중합니다. 이런 과정에서 성장과 자신감을 얻습니다.",
  },
];

export const skills = [
  {
    name: "HTML",
    desc: "웹 페이지의 구조를 설계하고 시맨틱 마크업을 작성할 수 있습니다.",
    color: "#E34F26",
  },
  {
    name: "CSS",
    desc: "웹 페이지를 디자인하고 레이아웃과 애니메이션을 구현할 수 있습니다.",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    desc: "동적인 웹 애플리케이션의 로직을 작성하고 기능을 구현할 수 있습니다.",
    color: "#F7DF1E",
  },

  {
    name: "TypeScript",
    desc: "타입 안정성을 통해 유지보수성이 높은 코드를 작성할 수 있습니다.",
    color: "#3178C6",
  },
  {
    name: "React",
    desc: "컴포넌트를 설계하고 상태 관리를 통해 동적이고 효율적인 UI를 구현할 수 있습니다.",
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    desc: "유틸리티 클래스를 사용해 빠르게 스타일링을 반응형 디자인을 구현할 수 있습니다.",
    color: "#38B2AC",
  },

  {
    name: "REST API",
    desc: "클라이언트와 서버 간 데이터를 주고받는 API를 설계하고 연동할 수 있습니다.",
    color: "#FF6F61",
  },
  {
    name: "Redux",
    desc: "전역 상태 관리를 통해 애플리케이션의 상태를 체계적으로 관리할 수 있습니다.",
    color: "#764ABC",
  },

  {
    name: "React Query",
    desc: "비동기 데이터 관리를 효율적으로 처리하고 서버 상태를 관리할 수 있습니다.",
    color: "#FF4154",
  },
];

export const projects = [
  {
    id: 1,
    title: "IoT 스마트팜",
    description: "엘리스 Iot트랙 3차 프로젝트 스마트팜 웹 애플리케이션입니다.",
    features: [
      "위치 기반으로 날씨 가져오기",
      "뉴스레터 구독",
      "대시보드 스마트팜 기기 조작",
    ],
    url: "",
    github: "https://github.com/chickengir1/Iot-Dashboard",
    techStack: ["Vite", "JavaScript", "Redux", "MUI"],
  },
  {
    id: 2,
    title: "엘리스 스토어",
    description: "엘리스 Iot트랙 2차 프로젝트 e-commerce 쇼핑몰 입니다.",
    features: ["배송 수정, 상품 수정", "상품 검색 기능", "카테고리 별 정렬"],
    url: "",
    github: "https://github.com/chickengir1/e-commerce",
    techStack: ["Styled-components", "JavaScript", "Vite"],
  },
  {
    id: 3,
    title: "포트폴리오 프로젝트",
    description: "프론트엔드 포트폴리오 웹 사이트입니다.",
    features: ["Three.js를 이용한 워드 클라우드", "SVG Path Animation"],
    url: "https://chickengir1.github.io/portfolio/",
    github: "https://github.com/chickengir1/portfolio",
    techStack: ["TypeScript", "Three.js", "Vite", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "디스코드봇 대시보드",
    description: "Friendly AI 해커톤에서 개발한 디스코드 봇 생성기입니다.",
    features: ["디스코드 봇 커스텀 UI", "대시보드로 봇 전체 관리"],
    url: "https://chickengir1.github.io/LLMfront/",
    github: "https://github.com/chickengir1/LLMfront",
    techStack: ["React", "OAuth2.0"],
  },
  {
    id: 5,
    title: "AI 이미지 생성기",
    description: "프롬프트 기반 이미지 생성 애플리케이션입니다.",
    features: ["프롬프트 기반 이미지 생성", "생성된 이미지를 URL로 변환"],
    url: "https://aimg-15ctjutvs-lees-projects-1cb4a49b.vercel.app/",
    github: "https://github.com/chickengir1/aimg",
    techStack: ["JavaScript", "OpenAI DALL·E"],
  },
];
