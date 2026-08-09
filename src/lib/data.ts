/**
 * data.ts - Korean (한국어) Content - PRIMARY Language
 * 
 * Rules for Multilingual Management:
 * 1. Korean version (data.ts) is the primary source
 * 2. Always update Korean version first
 * 3. English version (data.en.ts) syncs with Korean version
 * 4. Keep keys identical between languages
 */

export const siteConfig = {
  name: "유승호",
  title: "유승호 - Microsoft 인증 교육자 & 클라우드/DevOps 전문가",
  description: "20년 이상의 경험을 가진 클라우드 아키텍트이자 마이크로소프트 인증 교육자. Azure, AI, DevOps 분야의 엔터프라이즈 솔루션 전문가. 15년 Microsoft MVP 경력 보유.",
  url: "https://hahaysh.github.io",
  email: "hahaysh@hotmail.com",
  social: {
    github: "https://github.com/hahaysh",
    linkedin: "https://www.linkedin.com/in/hahahaysh/",
  },
};

export const bio = {
  short: "Microsoft 인증 트레이너 | Azure·AI·DevOps 전문가 | 20년 넘게 현장에서 엔터프라이즈 시스템을 만들어 왔습니다",
  long: `저는 Microsoft 인증 트레이너이자 클라우드 아키텍트로 일하고 있습니다. 지난 20년 넘게 스타트업부터 포춘 500대 기업까지 다양한 조직의 기술 과제를 함께 해결해 왔습니다.

금융, 유통, 자동차, 미디어 등 여러 산업에서 소프트웨어 엔지니어로 시작해 엔터프라이즈 아키텍처와 기술 조직 리더 역할까지 경험했습니다. 기업의 인프라를 현대화하고 클라우드 중심으로 전환하는 프로젝트를 직접 설계하고 이끌어 왔습니다.

2005년부터 2019년까지 15년 연속 Microsoft C# MVP로 활동했고, 2019년 Microsoft에 합류한 뒤에는 인증 트레이너로서 기업 팀의 Azure, AI, 현대적인 개발 방식 도입을 돕고 있습니다. 기술을 설명하는 데서 그치지 않고, 실제 업무에 적용해 결과를 확인하는 과정을 중요하게 생각합니다.

교육에서 가장 보람을 느끼는 순간은 팀이 새로운 기술을 이해하고, 자신 있게 업무에 적용하기 시작할 때입니다. 지금까지 엔터프라이즈 팀을 대상으로 270회 이상의 교육을 진행했으며, 매번 현장의 질문과 피드백을 통해 저도 함께 배우고 있습니다.

최근에는 AI와 지능형 에이전트가 소프트웨어를 만드는 방식을 어떻게 바꿀지 집중해서 살펴보고 있습니다. 기술은 결국 사람과 조직을 위한 것이므로, 복잡한 내용을 이해하기 쉬운 언어로 전달하고 실제 변화로 이어지게 하는 일을 계속해 나가고 있습니다.`,
};

export const stats = [
  { label: "IT 경험", value: "20년 이상" },
  { label: "Microsoft C# MVP", value: "2005-2019" },
  { label: "진행한 교육 세션", value: "270회 이상" },
  { label: "교육받은 팀", value: "글로벌" },
];

export const trainingByYear = [
  { year: 2020, sessions: 35, courses: ["AZ-104", "AZ-204", "AZ-400", "AZ-900", "AZ-303"] },
  { year: 2021, sessions: 40, courses: ["AZ-104", "AZ-204", "AZ-304", "AZ-400", "AZ-500"] },
  { year: 2022, sessions: 42, courses: ["AZ-104", "AZ-204", "AZ-304", "AZ-400", "AZ-500", "AZ-700"] },
  { year: 2023, sessions: 45, courses: ["AZ-104", "AZ-204", "AZ-400", "AZ-500", "AZ-700", "AZ-1001"] },
  { year: 2024, sessions: 40, courses: ["AZ-104", "AZ-204", "AZ-400", "AZ-500", "AZ-700", "AZ-1001", "AI-102"] },
  { year: 2025, sessions: 41, courses: ["AZ-104", "AI-102", "AZ-2007", "AZ-400", "AZ-700", "AZ-204", "AI-3016", "MS-4023", "MS-4014", "AZ-2003", "GH-900", "GH-300", "AI-3026"] },
  { year: 2026, sessions: 29, courses: ["AZ-104", "AZ-400", "AI-102", "AI-103", "AI-3016", "AI-3026", "GH-300", "GH-900", "MS-4018", "MS-4019"], inProgress: true, note: "2026년 8월까지의 Activity 폴더 기록 기반 추정" },
];

export const expertise = [
  {
    id: "cloud-architecture",
    title: "클라우드 아키텍처",
    description: "엔터프라이즈 워크로드에 대한 확장성 있고 안전한 Azure 클라우드 솔루션 설계.",
    icon: "☁️",
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    description: "자동화 파이프라인, Infrastructure-as-Code, 지속적 배포 전략 구현.",
    icon: "🔄",
  },
  {
    id: "ai-agents",
    title: "AI 에이전트 & LLM",
    description: "최신 AI 모델 및 프레임워크를 사용한 지능형 에이전트 구축.",
    icon: "🤖",
  },
  {
    id: "technical-training",
    title: "기술 교육",
    description: "클라우드 및 AI 기술에 대한 엔터프라이즈 팀을 위한 포괄적인 교육 프로그램 제공.",
    icon: "📚",
  },
];

export const trainingTracks = [
  {
    id: "azure-administration",
    title: "Azure 관리 & 기초",
    icon: "🛠️",
    examCodes: ["AZ-900", "AZ-103", "AZ-104"],
    description: "핵심 Azure 인프라 관리: ID, 스토리지, 네트워킹, 컴퓨팅 관리.",
  },
  {
    id: "azure-development",
    title: "Azure 개발",
    icon: "💻",
    examCodes: ["AZ-204"],
    description: "Azure에서 클라우드 애플리케이션 및 서비스 구축 및 배포.",
  },
  {
    id: "devops-security-networking",
    title: "DevOps, 보안 & 네트워킹",
    icon: "🔐",
    examCodes: ["AZ-400", "AZ-500", "AZ-700", "AZ-303", "AZ-304", "SC-300"],
    description: "Azure에서의 CI/CD 파이프라인, 보안 엔지니어링, 네트워크 아키텍처.",
  },
  {
    id: "ai-engineering",
    title: "AI 엔지니어링",
    icon: "🤖",
    examCodes: ["AI-102", "AI-050", "AI-103", "AI-3002", "AI-3003", "AI-3004", "AI-3016", "AI-3026"],
    description: "생성형 AI 및 에이전트 개발을 포함한 Azure AI 솔루션 설계 및 구축.",
  },
  {
    id: "github-copilot",
    title: "GitHub & Microsoft 365 Copilot",
    icon: "🐙",
    examCodes: ["GH-100", "GH-300", "GH-900", "MS-4014", "MS-4018", "MS-4019", "MS-4023"],
    description: "GitHub 기초, Copilot 기반 개발, Microsoft 365 Copilot 도입 교육.",
  },
];

export const trainingClients = [
  "Samsung", "LG", "LG Innotek", "Hyundai", "KT", "SK", "KRAFTON", "Wemade", "LS Electric", "HP",
];

export const communityActivities = [
  { title: "Korea MCT Summit", description: "Microsoft 인증 교육자 커뮤니티 연례 행사 참석자." },
  { title: "MCT Lounge Blog", description: "Microsoft 인증 교육자 커뮤니티를 위한 기술 문서 기고자." },
  { title: "Microsoft AI Tour", description: "Microsoft AI Tour 커뮤니티 이벤트 지원 참석자." },
  { title: "해커톤", description: "해커그라운드 및 DDD Seoul 등 커뮤니티 해커톤 참가자." },
  { title: "Hour of AI", description: "커뮤니티 AI 문해력 교육 이벤트 자원봉사자." },
];

export const certifications = [
  { title: "Microsoft Certified: Azure Solutions Architect Expert", status: "active", badgeUrl: "/images/badges/Azure Solutions Architect.png", badge: "🏗️" },
  { title: "Microsoft Certified: DevOps Engineer Expert", status: "active", badgeUrl: "/images/badges/DevOps Engineer.png", badge: "⚙️" },
  { title: "Microsoft Certified: Azure AI Engineer Associate", status: "active", badgeUrl: "/images/badges/Azure AI Engineer.png", badge: "🤖" },
  { title: "Microsoft Certified: Azure Developer Associate", status: "active", badgeUrl: "/images/badges/Azure Developer.png", badge: "💻" },
  { title: "Microsoft Certified: Azure Administrator Associate", status: "active", badgeUrl: "/images/badges/Azure Administrator.png", badge: "🛠️" },
  { title: "Microsoft Certified: Azure Security Engineer Associate", status: "active", badgeUrl: "/images/badges/Azure Security Engineer.png", badge: "🔒" },
  { title: "Microsoft Certified: Azure Network Engineer Associate", status: "active", badgeUrl: "/images/badges/Azure Network Engineer.png", badge: "🌐" },
  { title: "Microsoft Certified: Identity and Access Administrator Associate", status: "active", badgeUrl: "/images/badges/Identity and Access Administrator.png", badge: "🔐" },
  { title: "Microsoft Certified: Azure AI Fundamentals", status: "active", badgeUrl: "/images/badges/Azure AI Fundamentals.png", badge: "🧠" },
  { title: "Microsoft Certified: Azure Fundamentals", status: "active", badgeUrl: "/images/badges/Azure Fundamentals.png", badge: "☁️" },
  { title: "GitHub Copilot Certification", status: "active", badgeUrl: "/images/badges/GitHub Copilot.png", badge: "🤖" },
  { title: "Microsoft Certified Trainer (MCT)", status: "active", badgeUrl: "/images/badges/MCT.png", note: "2019-2026", badge: "👨‍🏫" },
  { title: "Microsoft Certified: Azure Solutions Architect Expert (Legacy)", status: "legacy" },
];

export const otherCertifications = [
  { title: "OCP (Oracle Certified Professional)" },
  { title: "MCP (Microsoft Certified Professional)" },
  { title: "MCSE (Microsoft Certified Systems Engineer)" },
  { title: "MCDBA (Microsoft Certified Database Administrator)" },
  { title: "정보처리기사 (정보기술 엔지니어, 한국)", note: "1998" },
];

export const awards = [
  { title: "Microsoft C# MVP", period: "2005-2019 (15년 연속)" },
  { title: "제9회 전자·IT의 날 산업통상자원부장관상", period: "2014" },
  { title: "한국전자정보통신산업진흥회 전자IoT협업센터 기술전문위원(C-구루)", period: "2016-2019" },
  { title: "한국전자정보통신산업진흥회 국가인적자원개발컨소시엄 운영위원", period: "2016-2019" },
  { title: "한국전자정보통신산업진흥회 중소기업인력양성 자문위원", period: "2014-2019" },
  { title: "세종대학교 전자정보대학 교과과정개편자문위원", period: "2014" },
  { title: "연세대학교 빅데이터이노베이션 대회 멘토", period: "2018" },
  { title: "경북대학교 멘토링 프로그램 멘토", period: "2020" },
];

export const publications = [
  { title: "Windows 2008 실전가이드 (번역)", year: 2009, publisher: "정보문화사" },
  { title: "ASP.NET MVC Framework Unleashed (번역)", year: 2010, publisher: "웰북" },
  { title: "ZDNet Korea 기고 - Visual Studio Team System 2008 TIP", year: 2009, publisher: "ZDNet Korea" },
];

export const startupExperience = [
  {
    id: "developience",
    company: "디벨로피언스 (Developience)",
    position: "Chief Technology Officer (CTO)",
    period: "~2019",
    description: "엔터프라이즈급 DevOps 컨설팅 및 클라우드 시스템 개발을 담당하는 기술 조직 리더십. Azure 클라우드 기반 CI/CD 파이프라인 설계 및 구축으로 글로벌 금융/제조 기업의 디지털 전환 주도.",
    keyProjects: [
      {
        title: "롯데시네마 모바일 예매 시스템",
        description: "롯데정보통신과 협력하여 구축한 고성능 모바일 영화 예매 플랫폼. 대용량 동시접속 처리 및 결제 시스템 통합.",
        impact: "롯데시네마 전체 영점의 온라인 매표 담당",
      },
      {
        title: "WatchDoing - 원격 스크린 모니터링 시스템",
        description: "기술 지원 및 원격 모니터링을 위한 실시간 스크린 캡처 및 전송 솔루션. 분산된 IT 인프라 원격 관리 자동화.",
        impact: "엔터프라이즈 IT 운영 효율성 30% 개선",
        patent: "원격스크린 모니터링을 이용한 광고 제공 방법 특허 출원",
      },
      {
        title: "삼성 S1 DevOps CI/CD 파이프라인 설계 (2019)",
        description: "삼성전자 S1 조직의 대규모 DevOps 변환 프로젝트. Team Foundation Server에서 Azure DevOps로의 마이그레이션 및 자동화 파이프라인 구축.",
      },
      {
        title: "OB맥주 DevOps 파이프라인 설계 (2019)",
        description: "OB Beer 제조 시스템의 지속적 통합/배포 파이프라인 현대화.",
      },
      {
        title: "미즈호 은행 DevOps 마이그레이션",
        description: "일본 대형 금융기관의 DevOps 기술 도입 및 인프라 최적화.",
      },
      {
        title: "현대중공업 DevOps 마이그레이션",
        description: "조선 업계 선도기업의 엔터프라이즈 DevOps 체계 구축.",
      },
      {
        title: "창업성장기술과제개발 - 홈오토메이션",
        description: "정부 지원 창업 R&D 과제. IoT 기반 스마트홈 자동화 솔루션 개발.",
      },
    ],
    achievements: [
      "삼성, OB맥주, 미즈호은행, 현대중공업 등 글로벌 기업의 디지털 혁신 선도",
      "DevOps 문화 도입 및 CI/CD 자동화로 배포 주기 60% 단축",
      "원격 모니터링 솔루션 특허 출원",
      "Microsoft와의 전략적 파트너십을 통한 Azure 기반 클라우드 전환",
    ],
  },
  {
    id: "xdnsoft",
    company: "XDNSoft (엑스디엔소프트)",
    position: "Chief Technology Officer (CTO)",
    period: "2005.10 ~ 2009.12",
    description: "금융, 유통, 항공업계를 위한 엔터프라이즈급 정보시스템 개발 및 기술 혁신을 담당. .NET 플랫폼 기반 대규모 시스템 아키텍처 설계 및 구축.",
    keyProjects: [
      {
        title: "롯데시네마 홈페이지 예매 시스템",
        description: "롯데시네마의 웹 기반 영화 예매 포털. 초기 온라인 예매 시스템 개발 및 운영.",
      },
      {
        title: "롯데 통합 모인 시스템 (LotteMoin)",
        description: "롯데정보통신의 통합 모바일 커넥터 및 정보시스템. m.Moin 모바일 커넥터 및 로톱 3.0 시스템 개발.",
        impact: "롯데 그룹사 50개 이상 계열사 정보시스템 통합",
      },
      {
        title: "삼성전자 국내 영업 B2B 전용 영업시스템",
        description: "삼성전자 B2B 채널 전용 영업 포털 및 주문 관리 시스템.",
      },
      {
        title: "연합뉴스 사진판매 시스템 (HelloPhoto)",
        description: "연합뉴스의 뉘스 사진 라이센싱 및 판매 플랫폼.",
      },
    ],
    achievements: [
      "롯데, 삼성, 현대, 연합뉴스 등 대형 기업의 핵심 정보시스템 개발",
      "100만+ 일일 사용자를 지원하는 대규모 시스템 운영",
      ".NET 플랫폼에서 고성능 엔터프라이즈 시스템 설계 및 개발",
    ],
  },
  {
    id: "dotnetsoft",
    company: "닷넷소프트",
    position: "과장",
    period: "2004.08 ~ 2004.12",
    description: ".NET 기반 엔터프라이즈 시스템 개발. ASP.NET 웹 애플리케이션 및 통합 시스템 구축.",
    keyProjects: [
      {
        title: "연합뉴스 인터넷 서비스 고도화",
        description: "연합뉴스의 웹 서비스 품질 개선 및 기술 현대화.",
      },
    ],
  },
];

export const startupProducts = [
  {
    name: "WatchDoing",
    subtitle: "원격 스크린 모니터링 시스템",
    period: "~2019",
    company: "디벨로피언스",
    description: "실시간 원격 스크린 캡처 및 모니터링 솔루션. IT 헬프데스크, 기술 지원, 원격 관리자 감시 용도로 사용되었습니다. 특허 출원: '원격스크린 모니터링을 이용한 광고 제공 방법'",
    technologies: ["C#", ".NET", "Windows", "Real-time Streaming"],
  },
  {
    name: "롯데시네마 모바일 예매 시스템",
    subtitle: "Mobile Reservation Platform for Lotte Cinema",
    period: "2010s",
    company: "디벨로피언스",
    description: "롯데정보통신과 협력하여 개발한 고성능 모바일 영화 예매 플랫폼. 대용량 동시접속 처리 및 결제 시스템 통합으로 롯데시네마 전체 영점의 온라인 매표 담당.",
    technologies: ["ASP.NET", "SQL Server", "Payment Gateway", "High-Performance"],
  },
  {
    name: "롯데시네마 웹 예매 시스템",
    subtitle: "Web-based Cinema Ticket Reservation",
    period: "2006~2009",
    company: "XDNSoft",
    description: "롯데시네마의 초기 웹 기반 영화 예매 포털. 온라인 티켓팅 시스템의 기초를 마련했습니다.",
    technologies: ["ASP.NET", "SQL Server", ".NET"],
  },
  {
    name: "LotteMoin 통합 시스템",
    subtitle: "Integrated Mobile Connector & ERP",
    period: "2007~2009",
    company: "XDNSoft",
    description: "롯데정보통신의 m.Moin 모바일 커넥터 및 롯데모인 3.0 통합 시스템. 롯데 그룹사 50개 이상 계열사의 정보시스템을 통합.",
    technologies: ["ASP.NET", "SQL Server", "Mobile", "ERP"],
  },
];
