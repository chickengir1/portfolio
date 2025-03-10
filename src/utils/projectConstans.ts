export const PROJECTS = [
  {
    id: "Ai-zy",
    title: "Ai-zy",
    description:
      "모두를 위한 인공지능 비서 Ai-zy 프로젝트 입니다. 테스트를 원하신다면 아래 계정을 프로젝트 생성하실때 추가해주세요",
    test: "eetd100@naver.com",
    features: [
      "Auth0를 활용한 소셜 로그인",
      "OpenAI Api를 활용한 Nomal 채팅 기능",
      "OpenAI Api를 활용한 문서 요약 기능 및 일정 생성 기능",
      "React-Query를 활용한 데이터 패칭",
      "Zustand를 활용한 상태 관리",
      "Storybook과 Chromatic을 통한 Storybook 테스트 및 문서 배포",
      "Gitlab CI/CD를 활용한 배포 자동화",
    ],
    url: "https://kdt-pt-1-pj-2-team02.elicecoding.com/",
    github: "https://github.com/chickengir1/ai-zy-front",
    techStack: ["Auth0", "OpenAI", "React-Query", "Zustand", "Gitlab CI/CD"],
  },
  {
    id: "vite-plugin-pages-router",
    title: "vite-plugin-pages-router",
    description:
      "vite 환경에서도 next.js의 pages-router처럼 사용할 수 있는 플러그인 입니다.",
    features: [
      "Suspense를 활용한 Lazy Loading 최적화",
      "슬러그 기반 동적 라우팅 지원",
      "Error Boundary를 활용한 404 페이지 지원",
      "next.js pages-router같은 파일 기반 라우팅 지원",
      "vite glob Api를 활용한 파일 자동 인식",
    ],
    url: "https://www.npmjs.com/package/vite-plugin-pages-router",
    github: "https://github.com/chickengir1/vite-plugin-pages-router",
    techStack: ["Vite", "Vitest", "Rollup"],
  },
  {
    id: "모두를 위한 채팅 에플리케이션",
    title: "모두를 위한 채팅 에플리케이션 ",
    description:
      "친구들과 실시간 채팅을 하며 단체 대화 및 개인 대화를 할 수 있는 채팅 애플리케이션 입니다. 테스트를 원하신다면 아래 계정으로 로그인 해주세요",
    test: "ID: tester1000@example.com, PW: example",
    features: [
      "WebSocket을 활용한 실시간 채팅",
      "Zustand를 활용한 상태 관리",
      "Storybook을 활용한 인터렉션 테스트 및 UI 테스트",
      "TailwindCSS를 활용한 스타일링",
      "GitlabRunner를 활용한 CI/CD 구축",
    ],
    url: "https://kdt-pt-1-pj-1-team01.elicecoding.com/",
    github:
      "https://github.com/chickengir1/Chat-application-for-daily-communication",
    techStack: [
      "WebSocket",
      "Zustand",
      "Storybook",
      "TailwindCSS",
      "Gitlab CI/CD",
    ],
  },
  {
    id: "IoT 스마트팜",
    title: "Elice Iot track 스마트팜 웹 애플리케이션",
    description:
      "집에서 화분을 키우면서 센서 정보를 바탕으로 IoT 기기들을 제어할 수 있는 웹 애플리케이션 및 디바이스를 만드는 프로젝트입니다. 사용자들은 스마트폰을 통해 화분의 상태를 실시간으로 모니터링하고, 원격으로 물을 주거나 조명을 조절할 수 있습니다.",
    features: [
      "geolocation API를 활용한 위치 기반 날씨 정보 가져오기",
      "openAPI를 활용한 뉴스레터 구독",
      "d3.js를 활용한 데이터 시각화",
      "MUI를 활용한 컴포넌트 디자인",
      "polling을 활용한 주기적 데이터 업데이트",
      "Redux를 활용한 상태 관리",
    ],
    url: "",
    github: "https://github.com/chickengir1/Iot-Dashboard",
    techStack: ["Vite", "JavaScript", "Redux", "MUI"],
  },
  {
    id: "엘리스 스토어",
    title: "엘리스 스토어 E-commerce 쇼핑몰",
    description:
      "다양한 카테고리의 제품을 판매하고 사용자에게 편리하고 안전한 쇼핑 경험을 제공하는 플랫폼입니다. 제품 검색 및 필터링과 관리자 대시보드를 통한 상품 관리를 할 수 있습니다.",
    features: [
      "React-hook-form을 활용한 폼 유효성 검사",
      "Styled-components를 활용한 스타일링",
    ],
    url: "",
    github: "https://github.com/chickengir1/e-commerce",
    techStack: ["Styled-components", "JavaScript", "Vite"],
  },
  {
    id: "자동차 동아리",
    title: "기계공학과 자동차 동아리 Super beetle",
    description:
      "대진대학교 기계공학과 자동차 동아리 Super beetle의 홈페이지 입니다.",
    features: [
      "HTML, CSS, JavaScript를 활용한 프로젝트",
      "기존 보일러 플레이트를 직접 커스텀",
    ],
    url: "https://land-bk4ytdel7-lees-projects-1cb4a49b.vercel.app/?vercelToolbarCode=keN0TNo8hSUYmhg",
    github: "https://github.com/chickengir1/land",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "디스코드 봇",
    title: "사용자와 친구가 되어주는 디스코드 봇",
    description:
      "이 프로젝트는 딱딱한 관리자 역할을 벗어나, 감성 있고 재치 있는 친구 같은 Discord Bot을 제공합니다. 이를 통해 Discord 서버의 특색에 맞춘 자아와 기능을 가진 봇과 이를 설정할 수 있는 대시보드 웹 인터페이스를 구현합니다.",
    features: [
      "OAuth2.0를 활용한 디스코드 로그인",
      "허깅페이스를 활용한 모델 설정",
    ],
    url: "https://chickengir1.github.io/LLMfront/",
    github: "https://github.com/chickengir1/LLMfront",
    techStack: ["React", "OAuth2.0"],
  },
  {
    id: "AI 이미지 생성기",
    title: "OpenAI API를 활용한 AI 이미지 생성기",
    description:
      "Aimg는 사용자가 입력한 프롬프트를 바탕으로 AI 기반 이미지를 생성하는 웹 애플리케이션입니다. OpenAI API를 활용하여 사용자에게 독창적이고 맞춤화된 AI 생성 이미지를 제공합니다.",
    features: [
      "DALL·E 2 API를 활용한 이미지 생성",
      "프롬프트 엔지니어링을 통한 이미지 생성",
    ],
    url: "https://aimg-15ctjutvs-lees-projects-1cb4a49b.vercel.app/",
    github: "https://github.com/chickengir1/aimg",
    techStack: ["JavaScript", "OpenAI DALL·E"],
  },
];
