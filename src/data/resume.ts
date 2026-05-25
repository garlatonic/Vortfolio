import GithubIcon from "@/components/common/github-icon";
import LinkedinIcon from "@/components/common/linkedin-icon";
import VelogIcon from "@/components/common/velog-icon";
import { ExternalLinkIcon } from "lucide-react";
import { projects } from "./projects";

const portfolio = projects;

export const resumeData: ResumeData = {
  name: "박상아",
  slogan:
    "사용자가 기능을 학습하지 않아도, <b>자연스럽게 사용할 수 있는 경험</b>을 만드는 개발자",
  jobTitle: "Frontend Developer",
  meta: {
    common: [
      {
        label: "주소",
        value: "인천 부평구",
      },
      {
        label: "생년월일",
        value: "1996.03.07",
      },
      {
        label: "이메일",
        value: "sangapark34@naver.com",
      },
    ],
    links: [
      {
        label: "GitHub",
        value: "https://github.com/garlatonic",
        icon: GithubIcon,
      },
      {
        label: "블로그",
        value: "https://velog.io/@garlatonic",
        icon: VelogIcon,
      },
      {
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/garlatonic",
        icon: LinkedinIcon,
      },
    ],
  },
  simpleIntroduction: [
    // "안녕하세요. 사용자가 기능을 학습하지 않아도 자연스럽게 사용할 수 있는 경험을 만드는 프론트엔드 개발자 박상아입니다.",
    "3년간 커머스 플랫폼 퍼블리셔로 일하며 단순한 화면 구현을 넘어, <b>사용자가 쉽게 이해하고 사용할 수 있는 기능 설계</b>의 중요성을 체감했습니다.",
    "이 경험은 사용자 문제를 <b>로직과 상태 흐름까지 포함해 해결</b>해야 한다는 문제의식으로 이어졌고, 이후 React/Next.js 기반 프로젝트에서 사용자 흐름 개선과 데이터 구조 설계를 중심으로 프론트엔드 역량을 확장해 왔습니다.",
  ],
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "TanStack Query",
    "Zustand",
  ],
  coreCompetencies: [
    "사용자 입력 흐름 단순화·UX 개선",
    "React / Next.js 상태 및 데이터 흐름 설계",
    "플랫폼 제약 환경 기능 확장·구현",
    "웹 접근성·반응형 실제 서비스 운영",
    "Wiki·컨벤션·Git 전략 기반 협업 개선",
  ],
  education: [
    {
      title: "프로그래머스 데브코스",
      subtitle: "클라우드 기반 프론트엔드",
      period: "2025.07 – 2026.01",
    },
    {
      title: "조선대학교",
      subtitle: "기계공학과·정보통신공학과",
      period: "2015.03 – 2020.02",
    },
  ],
  certifications: [
    {
      title: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2021.06",
    },
  ],
  portfolio: [
    {
      title: "GitHub·garlatonic",
      description: "개인 포트폴리오 사이트",
      link: "https://garlatonic.github.io",
      icon: GithubIcon,
      isLink: true,
    },
    {
      title: portfolio[0].name,
      description: portfolio[0].overview,
      link: portfolio[0].link,
      icon: ExternalLinkIcon,
      isLink: true,
    },
    {
      title: portfolio[1].name,
      description: portfolio[1].overview,
      link: portfolio[1].link,
      icon: ExternalLinkIcon,
      isLink: true,
    },
    {
      title: portfolio[2].name,
      description: portfolio[2].overview,
      link: portfolio[2].link,
      icon: ExternalLinkIcon,
      isLink: true,
    },
  ],
  career: [
    {
      company: "케이에이치이노베이션",
      position: {
        team: "기술개발팀",
        grade: "사원",
        term: "정규직",
      },
      period: "2022.05 – 2025.04",
      responsibilities: [
        {
          label: "담당 업무",
          details: [
            "작업안내서와 디자인 시안을 기반으로 한 프론트엔드 개발 및 웹 퍼블리싱",
            "기획·디자인 단계에서 기능 동작 검수 및 UI 구현 가능 여부 검토",
            "카페24, NHN Shopby 기반 쇼핑몰 PC/Mobile UI 퍼블리싱 및 반응형 웹 구축",
            "다양한 디바이스·브라우저 환경을 고려한 웹 접근성·웹 표준 기반 UI 구현",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "내 콘서트를 부탁해",
      affiliation: "프로그래머스 데브코스·프론트엔드/백엔드 협업 팀 프로젝트",
      period: "2025.12 – 2026.01",
      description:
        "공연 예매부터 뒤풀이까지 일정을 통합 관리하는 올인원 공연 일정 관리 플랫폼. 프론트엔드·백엔드 협업 프로젝트로, 사용자 흐름 개선과 일정 관리 UX 최적화에 집중",
      role: [
        "FE 팀장 — GitHub 브랜치 전략, 배포 플로우, 프로젝트 문서 관리",
        "공통 컴포넌트·디자인 시스템 기준 정리 / 코드 리뷰·협업 프로세스 운영",
        "메인·공연 상세·외출 플래너·검색·마이페이지 등 핵심 화면 구현 전담",
        "플랫폼 전 페이지 레이아웃·반응형·다크모드 UI 구현",
        "UX 개선 및 성능 최적화",
      ],
    },
    {
      title: "전북생생장터",
      affiliation: "케이에이치이노베이션",
      period: "2023.10 – 2024.04",
      description:
        "전라북도 중소기업·농가 생산품을 판매하는 커머스 플랫폼. NHN Shopby 기반 환경에서 플랫폼 기본 기능만으로 해결되지 않는 요구사항을 분석하고 기능 확장",
      role: [
        "쇼핑몰 전체 페이지(PC/Mobile) UI 구현 및 React 컴포넌트 개발",
        "플랫폼 미지원 기능(복수 배송지·댓글) 설계·구현",
        "배송지 단위 상품 그룹화 구조 설계 → 주문서·주문완료·주문상세 데이터 흐름 연동",
        "체험단 게시판 댓글 CRUD 및 수정 모달 기반 인터랙션 구현",
      ],
    },
    {
      title: "포켓몬 스토어 온라인",
      affiliation: "케이에이치이노베이션",
      period: "2023.09 – 2023.10",
      description:
        "포켓몬 코리아의 공식 커머스 플랫폼. NHN Shopby 기반 환경에서 PC/Mobile 전체 UI 퍼블리싱 및 운영 요구사항에 맞춘 기능 구현",
      role: [
        "쇼핑몰 전체 페이지(PC/Mobile) UI 퍼블리싱 및 반응형 웹 구축",
        "웹 접근성·웹 표준 기반 UI 마크업 및 스타일링",
        "운영 요구사항에 맞춘 상품·이벤트 콘텐츠 UI 구성",
        "Vanilla JS 기반 갤러리형 게시판·카드형 레이아웃·인터랙션 구현",
      ],
    },
  ],
  introductionDetails: [
    {
      title: "사용자 편의를 설계하는 개발자",
      detail: [
        {
          detail:
            "안녕하세요. 사용자가 서비스를 사용하는 과정에서 어디서 혼란을 느끼고 어떤 흐름에서 불편함이 발생하는지 고민하는 프론트엔드 개발자 박상아입니다.<br /><b>3년간 커머스 플랫폼 퍼블리셔</b>로 근무하며 다양한 쇼핑몰 구축과 운영 업무를 경험하며, 단순히 화면을 구현하는 것을 넘어 <b>사용자가 더 자연스럽게 서비스를 사용할 수 있는 흐름</b>을 만드는 것에 관심을 가지게 되었습니다. 특히 플랫폼 제약으로 인해 사용자 경험 측면에서 아쉬움이 있어도 구조적으로 해결하기 어려운 상황을 반복해서 경험하게 되면서, <b>사용자 문제를 직접 설계와 로직 단위에서 해결할 수 있는 개발자</b>가 되고 싶다고 생각했습니다.",
        },
        {
          title: "사용자 흐름과 데이터 구조를 함께 고려한 개발",
          detail:
            "이후 React와 Next.js 기반 프로젝트를 진행하며 <b>상태 관리와 데이터 흐름 설계 역량</b>을 집중적으로 키웠습니다. 공연 일정 관리 프로젝트에서는 사용자가 이동 일정을 직접 생성해야 하는 복잡한 입력 구조를 개선하기 위해 장소 기반 자동 생성 로직을 설계했고, 사용자는 교통수단만 선택할 수 있도록 UX를 단순화했습니다. 그 결과 <b>사용자 입력 단계를 약 24% 줄이고 API 호출을 약 83% 절감</b>할 수 있었습니다. 또한 재직 당시에는 플랫폼 내에서 기본 제공되지 않는 <b>복수 배송지 기능을 직접 설계·구현</b>하며 배송지 단위의 상태 구조를 설계했고, 주문서부터 주문상세와 마이페이지까지 데이터 흐름 전체를 연결하며 실제 서비스 운영 관점에서 기능을 확장한 경험이 있습니다.",
        },
        {
          title: "협업과 유지보수를 고려하는 개발 방식",
          detail:
            "개인의 역량보다 <b>팀의 협업</b>이 더 큰 가치를 만든다고 믿습니다. 이를 위해 사용자 흐름뿐 아니라 상태 구조와 유지보수 방식까지 함께 고려하며 개발하고 있습니다. 재직 당시에는 <b>Wiki 기반 온보딩 문서와 코드 컨벤션</b>을 정리하며 협업 환경 개선에도 참여했습니다. HTML/CSS/JavaScript 작성 기준과 자주 사용하는 기능들을 공통 구조로 정리해 팀원 간 코드 스타일 편차를 줄였고, 담당자가 변경되어도 쉽게 유지보수할 수 있는 환경을 만드는 데 기여했습니다. 이 과정에서 좋은 서비스는 개인의 구현 능력만이 아니라 <b>협업 가능한 구조와 공통된 기준</b> 위에서 만들어진다는 점을 깊이 경험할 수 있었습니다.",
        },
        {
          title: "앞으로의 목표",
          detail:
            "앞으로도 사용자 경험을 세심하게 관찰하고, <b>실제 서비스 문제를 구조적으로 해결할 수 있는 프론트엔드 개발자</b>로 성장하고 싶습니다. 단순히 화면을 구현하는 개발자가 아니라 <b>사용자 흐름과 데이터 구조, 협업 방식까지 함께 고민하며 서비스의 완성도</b>를 높일 수 있는 개발자가 되기 위해 꾸준히 고민하고 성장해나가겠습니다.",
        },
      ],
    },
  ],
};
