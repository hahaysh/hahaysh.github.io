export const siteConfig = {
  name: "SungHo You",
  title: "SungHo You - Microsoft Certified Trainer & Cloud/DevOps Consultant",
  description: "Microsoft Certified Trainer delivering Azure and AI training; former cloud/DevOps consultant; 15-year Microsoft C# MVP (2005-2019).",
  url: "https://hahaysh.github.io",
  email: "hahaysh@hotmail.com",
  social: {
    github: "https://github.com/hahaysh",
    linkedin: "https://www.linkedin.com/in/hahahaysh/",
  },
};

export const bio = {
  short: "Microsoft Certified Trainer | Former Cloud/DevOps Consultant | 15-Year Microsoft MVP (2005-2019)",
  long: `I am a Microsoft Certified Trainer and cloud architect with 20+ years of enterprise IT experience across software development, enterprise systems, DevOps transformation, and technical education.

**Career Foundation (2004-2009):** Started as a software engineer during the .NET platform emergence, leading enterprise systems architecture for Fortune 500 companies including Samsung, Lotte Group, Hyundai Heavy Industries, and news organizations. Designed and delivered large-scale systems serving 1M+ daily users across finance, retail, automotive, and media sectors.

**Technical Leadership & MVP Recognition (2005-2019):** Earned 15 consecutive years as a Microsoft C# MVP while building enterprise cloud and DevOps consulting practices. Delivered transformational projects including Samsung's large-scale CI/CD pipeline modernization, mobile commerce platforms for Lotte Cinema, and IoT-based home automation solutions.

**Cloud & DevOps Consulting Era:** As CTO of Developience, led enterprise DevOps transformation for global financial and manufacturing organizations, designing Azure-based CI/CD pipelines that accelerated deployment cycles by 60%, while pioneering remote infrastructure monitoring solutions.

**Current Focus - Technical Training (2019-Present):** Joined Microsoft as MCT in November 2019. Transitioned expertise into enterprise technical education, delivering official Microsoft curriculum on Azure, AI, DevOps, and GitHub technologies. Delivered 272+ training sessions to enterprise teams through August 2026, specializing in Azure Administration, Development, DevOps Engineering, AI Engineering, and Microsoft 365 Copilot adoption.

**Key Strengths:** Enterprise cloud architecture · DevOps & CI/CD pipeline design · .NET and modern cloud platform expertise · AI and agent-based solution design · Technical training delivery · Cross-cultural enterprise consulting (US, EU, Japan, Korea).`,
};

export const stats = [
  { label: "Years of IT Experience", value: "20+" },
  { label: "Microsoft C# MVP", value: "2005-2019 (15 yrs)" },
  { label: "Training Sessions Delivered (2020-Present)", value: "272+" },
  { label: "Startups Founded", value: "3" },
];

// Training sessions delivered per year as a Microsoft Certified Trainer. 2020-2024 counts are
// from a user-provided job application record. The 2025 figure was a mid-year snapshot from
// that same record and likely undercounts the full year. The 2026 count is estimated from
// Activity folder delivery records (through August 2026), pending a final tally.
export const trainingByYear = [
  { year: 2020, sessions: 35, courses: ["AZ-104", "AZ-204", "AZ-400", "AZ-900", "AZ-303"] },
  { year: 2021, sessions: 40, courses: ["AZ-104", "AZ-204", "AZ-304", "AZ-400", "AZ-500"] },
  { year: 2022, sessions: 42, courses: ["AZ-104", "AZ-204", "AZ-304", "AZ-400", "AZ-500", "AZ-700"] },
  { year: 2023, sessions: 45, courses: ["AZ-104", "AZ-204", "AZ-400", "AZ-500", "AZ-700", "AZ-1001"] },
  { year: 2024, sessions: 40, courses: ["AZ-104", "AZ-204", "AZ-400", "AZ-500", "AZ-700", "AZ-1001", "AI-102"] },
  { year: 2025, sessions: 41, courses: ["AZ-104", "AI-102", "AZ-2007", "AZ-400", "AZ-700", "AZ-204", "AI-3016", "MS-4023", "MS-4014", "AZ-2003", "GH-900", "GH-300", "AI-3026"] },
  { year: 2026, sessions: 29, courses: ["AZ-104", "AZ-400", "AI-102", "AI-103", "AI-3016", "AI-3026", "GH-300", "GH-900", "MS-4018", "MS-4019"], inProgress: true, note: "estimated from Activity folder records through August 2026" },
];

export const expertise = [
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    description: "Design scalable, secure Azure cloud solutions with best practices for enterprise workloads.",
    icon: "☁️",
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    description: "Implement automation pipelines, infrastructure-as-code, and continuous deployment strategies.",
    icon: "🔄",
  },
  {
    id: "ai-agents",
    title: "AI Agents & LLMs",
    description: "Build intelligent agents using latest AI models and frameworks for business automation.",
    icon: "🤖",
  },
  {
    id: "technical-training",
    title: "Technical Training",
    description: "Deliver comprehensive training programs for enterprise teams on cloud and AI technologies.",
    icon: "📚",
  },
];

// MCT training tracks delivered since joining Microsoft (Nov 2019). Session counts are
// estimated from delivery folder records, pending reconciliation against official records.
export const trainingTracks = [
  {
    id: "azure-administration",
    title: "Azure Administration & Fundamentals",
    icon: "🛠️",
    examCodes: ["AZ-900", "AZ-103", "AZ-104"],
    description: "Core Azure infrastructure administration: identity, storage, networking, and compute management.",
  },
  {
    id: "azure-development",
    title: "Azure Development",
    icon: "💻",
    examCodes: ["AZ-204"],
    description: "Building and deploying cloud applications and services on Azure.",
  },
  {
    id: "devops-security-networking",
    title: "DevOps, Security & Networking",
    icon: "🔐",
    examCodes: ["AZ-400", "AZ-500", "AZ-700", "AZ-303", "AZ-304", "SC-300"],
    description: "CI/CD pipelines, security engineering, and network architecture on Azure.",
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    icon: "🤖",
    examCodes: ["AI-102", "AI-050", "AI-103", "AI-3002", "AI-3003", "AI-3004", "AI-3016", "AI-3026"],
    description: "Designing and building AI solutions on Azure, including generative AI and agent development.",
  },
  {
    id: "github-copilot",
    title: "GitHub & Microsoft 365 Copilot",
    icon: "🐙",
    examCodes: ["GH-100", "GH-300", "GH-900", "MS-4014", "MS-4018", "MS-4019", "MS-4023"],
    description: "GitHub foundations, Copilot-assisted development, and Microsoft 365 Copilot adoption training.",
  },
];

// Enterprise clients trained as a Microsoft Certified Trainer (2019–present).
export const trainingClients = [
  "Samsung", "LG", "LG Innotek", "Hyundai", "KT", "SK", "KRAFTON", "Wemade", "LS Electric", "HP",
];

export const communityActivities = [
  { title: "Korea MCT Summit", description: "Annual participant, Microsoft Certified Trainer community event in Korea." },
  { title: "MCT Lounge Blog", description: "Contributor of technical articles for the Microsoft Certified Trainer community." },
  { title: "Microsoft AI Tour", description: "Participant supporting Microsoft's AI Tour community events." },
  { title: "Hackathons", description: "Participant in community hackathons including 해커그라운드 and DDD Seoul." },
  { title: "Hour of AI", description: "Volunteer supporting community AI literacy events." },
];

// Active Microsoft certifications, per Microsoft Learn profile (14 items, screenshot-verified).
// Note: badgeUrl points to locally cached SVG files from Microsoft Learn
export const certifications = [
  { title: "Microsoft Certified: Azure Solutions Architect Expert", status: "active", badgeUrl: "/images/badges/azure-solutions-architect.svg", badge: "🏗️" },
  { title: "Microsoft Certified: DevOps Engineer Expert", status: "active", badgeUrl: "/images/badges/devops-engineer.svg", badge: "⚙️" },
  { title: "Microsoft Certified: Azure AI Engineer Associate", status: "active", badgeUrl: "/images/badges/azure-ai-engineer.svg", badge: "🤖" },
  { title: "Microsoft Certified: Azure Developer Associate", status: "active", badgeUrl: "/images/badges/azure-developer.svg", badge: "💻" },
  { title: "Microsoft Certified: Azure Administrator Associate", status: "active", badgeUrl: "/images/badges/azure-administrator.svg", badge: "🛠️" },
  { title: "Microsoft Certified: Azure Security Engineer Associate", status: "active", badgeUrl: "/images/badges/azure-security-engineer.svg", badge: "🔒" },
  { title: "Microsoft Certified: Azure Network Engineer Associate", status: "active", badgeUrl: "/images/badges/azure-network-engineer.svg", badge: "🌐" },
  { title: "Microsoft Certified: Identity and Access Administrator Associate", status: "active", badgeUrl: "/images/badges/identity-access-administrator.svg", badge: "🔐" },
  { title: "Microsoft Certified: Azure AI Fundamentals", status: "active", badgeUrl: "/images/badges/azure-ai-fundamentals.svg", badge: "🧠" },
  { title: "Microsoft Certified: Azure Fundamentals", status: "active", badgeUrl: "/images/badges/azure-fundamentals.svg", badge: "☁️" },
  { title: "GitHub Copilot Certification", status: "active", badge: "🤖" },
  { title: "Microsoft Certified Trainer (MCT)", status: "active", note: "2023-2025", badge: "👨‍🏫" },
  { title: "Microsoft Certified: Azure Solutions Architect Expert (Legacy)", status: "legacy" },
];

// Other (non-Microsoft-exam) professional certifications held.
export const otherCertifications = [
  { title: "OCP (Oracle Certified Professional)" },
  { title: "MCP (Microsoft Certified Professional)" },
  { title: "MCSE (Microsoft Certified Systems Engineer)" },
  { title: "MCDBA (Microsoft Certified Database Administrator)" },
  { title: "정보처리기사 (Engineer Information Processing, Korea)", note: "1998" },
];

// Awards, recognition from the pre-Microsoft career.
export const awards = [
  { title: "Microsoft C# MVP", period: "2005-2019 (15 consecutive years)" },
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

// Startup experience and leadership background
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
        title: "롯데 기공 통합 정보시스템",
        description: "롯데건설 및 기공계열 통합 ERP 시스템.",
      },
      {
        title: "삼성전자 국내 영업 B2B 전용 영업시스템",
        description: "삼성전자 B2B 채널 전용 영업 포털 및 주문 관리 시스템. 전국 수백 개 거래처의 온라인 거래 활성화.",
      },
      {
        title: "연합뉴스 사진판매 시스템 (HelloPhoto)",
        description: "연합뉴스의 뉘스 사진 라이센싱 및 판매 플랫폼.",
      },
      {
        title: "현대 케피코 품질관리 시스템",
        description: "현대자동차 계열사 품질관리 및 이력 추적 시스템.",
      },
    ],
    achievements: [
      "롯데, 삼성, 현대, 연합뉴스 등 대형 기업의 핵심 정보시스템 개발",
      "100만+ 일일 사용자를 지원하는 대규모 시스템 운영",
      ".NET 플랫폼에서 고성능 엔터프라이즈 시스템 설계 및 개발",
      "금융, 유통, 항공, 언론 등 다양한 업종의 기술 혁신 주도",
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
      {
        title: "현대/기아 그룹웨어",
        description: "현대자동차 및 기아자동차의 통합 그룹웨어 시스템.",
      },
    ],
  },
];

// Key products and services developed during startup years
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
