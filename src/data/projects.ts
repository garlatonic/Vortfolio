export const projects: Project[] = [
  {
    number: 1,
    category: "DevCourse FE×BE Project",
    slug: "naeconcertbutakhae",
    name: "내 콘서트를 부탁해",
    overview:
      "공연 예매부터 공연 당일 계획 세우기까지, 모든 과정을 관리할 수 있는 올인원 매니지먼트 플랫폼",
    description: [
      "내 콘서트를 부탁해는 <b>공연 일정 관리, 장소 탐색, 이동 동선 계획까지 하나의 흐름으로 연결한 공연 올인원 매니지먼트 플랫폼</b>입니다. 공연 하나를 보기 위해 여러 앱과 메모를 오가야 하는 불편함을 해소하고, 사용자가 더 자연스럽게 일정을 계획할 수 있도록 만드는 것을 목표로 했습니다.",
      "저는 <b>FE 팀장, Git 총괄, 디자인 리드 역할</b>을 맡아 화면 설계부터 구현, 협업 흐름까지 폭넓게 주도했습니다. 기능을 단순히 구현하는 데 그치지 않고, <b>사용자가 입력 과정에서 느끼는 피로를 줄이고 필요한 정보에 더 빠르게 도달할 수 있는 UX</b>를 만드는 데 집중했습니다.",
      "<b>외출플래너 입력 흐름 재설계, Debounce 기반 검색 최적화, TanStack Query 캐싱 전략 적용</b>을 통해 사용자 경험과 기술적 안정성을 함께 끌어올렸습니다. 프론트엔드·백엔드 협업으로 진행된 데브코스 최종 프로젝트로, 초기 렌더링 성능과 SEO 대응까지 고려하며 제품 완성도를 높인 결과 <b>총 8팀 중 2등</b>을 차지했습니다.",
    ],
    startDate: "2025.12",
    endDate: "2026.01",
    link: "https://www.naeconcertbutakhae.shop",
    githubLink:
      "https://github.com/prgrms-web-devcourse-final-project/WEB6_7_codecrete_FE",
    thumbnail: "/img/img_naeconbu_thumbnail.png",
    detailImages: [
      "/img/img_naeconbu_detail_01.png",
      "/img/img_naeconbu_detail_02.png",
      "/img/img_naeconbu_detail_03.png",
      "/img/img_naeconbu_detail_04.png",
    ],
    video: {
      src: "/video/video_naeconbu.mp4",
      type: "video/mp4",
    },
    videoThumbnail: "/img/img_naeconbu_video.png",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "TanStack Query",
      "Kakao Map API",
    ],
    role: [
      "FE 팀장 (9명 중 FE 3명)",
      "Git 총괄 / 디자인 총괄",
      "공연 상세 페이지 및 외출플래너, 검색, 마이페이지 설계 및 구현",
      "UX 개선 및 검색 최적화 주도",
      "Tanstack Query 캐싱 전략 적용 및 Lighthouse 성능 개선",
      "백엔드 협업 경험",
    ],
    troubleshooting: [
      {
        title: "외출플래너 입력 과정 단순화",
        problem:
          "외출플래너 기능의 초기 작업 당시 사용자가 <b>식사·이동·대기·기타 타입의 모든 일정을 여러 단계에 걸쳐 반복 입력</b>해야 해 피로도가 높았습니다. 물론 일정의 등록이나 수정, 삭제와 같은 기본적인 기능은 동작했지만 <b>실제 사용 흐름에서는 입력 횟수가 많아 이탈 가능성이 큰 구조</b>였습니다.",
        solution:
          "각 목적지가 있는 일정의 경우 <b>이동 항목이 자동으로 생성되는 방식으로 UX를 재설계</b>해 사용자 입력 횟수를 최소화했습니다. 복잡하게 모든 일정 타입을 등록하는 기존 방식에서 <b>입력 흐름 자체를 다시 설계</b>함으로써 사용자가 더 적은 행동으로 같은 목표를 달성할 수 있도록 개선했습니다.",
        keywords: ["UX 개선", "폼 설계", "사용자 입력 최적화"],
        images: [
          {
            before: "/img/img_naeconbu_troubleshooting_planner_before_01.png",
            after: "/img/img_naeconbu_troubleshooting_planner_after_01.png",
          },
          {
            before: "/img/img_naeconbu_troubleshooting_planner_before_02.png",
            after: "/img/img_naeconbu_troubleshooting_planner_after_02.png",
          },
        ],
        codeSnippet: "/img/img_naeconbu_troubleshooting_planner_code.svg",
      },
      {
        title: "검색 API 과호출 최적화",
        problem:
          "기존 작업 방식은 검색 입력 시 <b>사용자의 타이핑마다 API 요청이 발생</b>하는 방식이었습니다. 이는 <b>불필요한 API 요청으로 서버 리소스를 낭비</b>하고, 네트워크 상황에 따라 <b>응답이 지연되거나 사용자 경험이 떨어질 가능성</b>이 있었습니다.",
        solution:
          "연속된 입력값에 <b>Debounce 기법을 적용해 검색 요청을 제어</b>했고, <b>평균 API 호출 횟수를 6회에서 1회로 줄여 서버 리소스를 83% 절감</b>했습니다. 이를 통해 사용자는 더 안정적인 검색 경험을 얻고, 서비스는 불필요한 요청을 줄일 수 있었습니다.",
        keywords: ["Debounce", "성능 최적화", "API 요청 제어"],
        codeSnippet: "/img/img_naeconbu_troubleshooting_debounce_code.svg",
      },
      {
        title: "Tanstack Query 캐싱 전략 적용",
        problem:
          "기존 메인 페이지에서 <b>공연 목록 조회 → 공연 ID별 티켓팅 플랫폼 정보 조회 → 슬라이드 렌더링</b> 순으로 진행되어 초기 렌더링 시 로딩이 길어졌습니다. 최악의 경우 <b>서버 렌더링이 지연되어 메인 페이지 접근까지 수초가 소요</b>되는 문제가 발생했습니다.",
        solution:
          "자주 변경되지 않는 공연·아티스트 목록에 <b>1시간 캐싱 전략</b>을 적용하고, 메인 페이지 진입 시 가장 먼저 노출되는 공연 목록에는 <b>prefetch 전략</b>을 추가 적용했습니다. 그 결과 <b>FCP가 2.1초 → 1.2초, LCP가 28.9초 → 16.2초로 개선</b>되어 사용자 경험과 SEO 모두 향상되었습니다.",
        keywords: ["Tanstack Query", "캐싱 전략", "성능 최적화", "SEO 개선"],
        images: [
          {
            before: "/img/img_naeconbu_troubleshooting_cache_before.png",
            after: "/img/img_naeconbu_troubleshooting_cache_after.png",
          },
        ],
        codeSnippet: "/img/img_naeconbu_troubleshooting_cache_code.svg",
      },
    ],
  },
  {
    number: 2,
    category: "DevCourse FE Project",
    slug: "updown",
    name: "업다운",
    overview:
      "일상의 감정을 시장 지수처럼 기록·시각화하고, 공감 기반 커뮤니티에서 함께 나누는 감정 기록 서비스",
    description: [
      "업다운 감정시장은 흩어지고 사라지는 일상의 감정을 한 화면에 모아 보여주는 <b>감정 기록 커뮤니티 서비스</b>입니다. 사용자가 하루의 기분을 간단히 기록하면, 이를 <b>차트와 지수로 시각화</b>해 오늘과 최근의 감정 흐름을 한눈에 파악할 수 있도록 설계했습니다.",
      "<b>프로젝트 리더이자 디자인 총괄</b>로 참여해 전체 컨셉과 UI 톤을 정립하고, <b>커뮤니티·게시글 상세·감정 그래프 등 핵심 화면의 기능 구현</b>을 주도했습니다. 게시글, 댓글, 좋아요 같은 커뮤니티 핵심 기능을 안정적으로 구현하면서도, 감정이라는 추상적인 주제를 사용자가 가볍고 자연스럽게 기록할 수 있도록 흐름과 인터랙션을 세심하게 다듬었습니다.",
      "<b>무한스크롤, 실시간 감정 집계, 태그 클라우드 기반 시각화, 반응형 및 다크모드 대응, 공통 컴포넌트 설계</b>를 통해 서비스의 전반적인 완성도를 높였습니다. 짧은 기간 안에 팀의 개발 생산성과 사용자 경험을 함께 끌어올리며, <b>프론트엔드 4팀 중 1등</b>을 차지한 프로젝트입니다.",
    ],
    startDate: "2025.11",
    endDate: "2025.11",
    link: "https://fe-7-project-3-team-1.vercel.app",
    githubLink: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT3-TEAM-1",
    thumbnail: "/img/img_updown_thumbnail.png",
    detailImages: [
      "/img/img_updown_detail_01.png",
      "/img/img_updown_detail_02.png",
    ],
    video: {
      src: "/video/video_updown.mp4",
      type: "video/mp4",
    },
    videoThumbnail: "/img/img_updown_video.png",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    role: [
      "프로젝트 리더 / 디자인 총괄",
      "커뮤니티·게시글 상세·마이페이지 등 핵심 화면 설계 및 구현",
      "무한스크롤 피드, 감정 지수·트렌드 시각화, 다크모드·반응형 UI 구현",
      "공통 컴포넌트 설계 및 Loading/Empty/Error 상태 UI 구현",
    ],
    troubleshooting: [
      {
        title: "감정 트렌드 시각화 로직 설계",
        problem:
          "감정 데이터는 <b>단순한 숫자나 텍스트 목록만으로는 커뮤니티의 분위기와 흐름을 빠르게 이해하기 어려웠습니다.</b> 특히 <b>'지금 어떤 감정이 많이 공유되는지', '어제 대비 감정 변화는 어떤지'</b>를 직관적으로 전달할 방법이 필요했습니다.",
        solution:
          "<b>오늘과 어제의 해시태그 데이터를 날짜 범위 기준으로 각각 조회</b>한 뒤, <b>태그별 랭킹과 증감률을 계산해 시각화용 데이터로 가공</b>했습니다. 이를 통해 <b>실시간 TOP 3 감정과 트렌드 태그</b>를 한눈에 보여줄 수 있었고, 사용자는 커뮤니티 분위기와 감정 흐름 변화를 더 직관적으로 파악할 수 있었습니다.",
        keywords: ["데이터 시각화", "트렌드 태그", "증감률 계산", "Supabase"],
        codeSnippet: "/img/img_updown_troubleshooting_visualization_code.svg",
      },
    ],
  },
  {
    number: 3,
    category: "DevCourse FE Project",
    slug: "chickengalaxy",
    name: "치킨갤럭시",
    overview:
      "치킨을 사랑하는, 치킨에 진심인 한국인들을 위한 우주 테마 커뮤니티 서비스",
    description: [
      "치킨갤럭시는 한국인의 소울푸드인 치킨을 중심으로 취향과 의견, 각자의 치킨 철학을 마음껏 나눌 수 있는 <b>우주 테마 커뮤니티 서비스</b>입니다. 짧은 기간 안에 <b>검색, 탐색, 반응형 UI까지 갖춘 완성도 높은 서비스</b>를 구현하는 것을 목표로 프로젝트를 진행했습니다.",
      "<b>팀장으로서 프로젝트의 전반적인 방향을 조율하고 Git과 디자인을 총괄</b>하며, 핵심 기능 구현에도 직접 참여했습니다. 사용자가 원하는 글과 정보를 빠르게 찾을 수 있도록 <b>검색 경험을 설계</b>하고, 다양한 데이터·상태 변화 속에서도 서비스가 안정적으로 보이도록 UI를 구성하는 데 집중했습니다.",
      "<b>React Compiler를 선제적으로 도입해 렌더링 성능을 개선</b>하고, <b>검색 시스템과 상태별 UI 처리를 정교하게 구현</b>했으며, 배포 단계에서 발생한 빌드·환경 오류도 직접 해결했습니다. 기능 구현부터 성능 최적화, 배포 안정성 확보까지 프론트엔드 전반을 폭넓게 경험할 수 있었던 프로젝트로, 팀원들과 함께 문제를 해결해 나가는 과정에서 협업의 가치를 깊이 체감하며 <b>프론트엔드 5팀 중 1등 프로젝트</b>로 선정되는 성과를 거두었습니다.",
    ],
    startDate: "2025.10",
    endDate: "2025.11",
    link: "https://fe-7-project-2-team-3.vercel.app",
    githubLink: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT2-TEAM-3",
    thumbnail: "/img/img_chickengalaxy_thumbnail.png",
    detailImages: [
      "/img/img_chickengalaxy_detail_01.png",
      "/img/img_chickengalaxy_detail_02.png",
      "/img/img_chickengalaxy_detail_03.png",
      "/img/img_chickengalaxy_detail_04.png",
    ],
    video: {
      src: "/video/video_chickengalaxy.mp4",
      type: "video/mp4",
    },
    videoThumbnail: "/img/img_chickengalaxy_video.png",
    skills: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    role: [
      "프론트엔드 팀장",
      "Git 총괄 / 디자인 총괄",
      "프로젝트 전반 방향 조율 및 기반 레이아웃 구현",
      "검색 시스템 설계 전체 구현",
      "성능 최적화 및 상태별 UI 안정성 개선",
    ],
    troubleshooting: [
      {
        title: "React Compiler 도입으로 렌더링 성능 개선",
        problem:
          "검색 결과 페이지에서 검색어 입력 시 <b>상태가 변경될 때마다, 하위의 모든 게시글 컴포넌트가 불필요하게 리렌더링되는 문제가 있었습니다.</b> useMemo/useCallback을 수동으로 관리하기에는 컴포넌트 수가 많아 일관된 최적화 적용이 어려웠습니다.",
        solution:
          "<b>React Compiler를 도입해 컴파일 단계에서 자동 메모이제이션을 적용</b>했습니다. 수동으로 useMemo/useCallback을 작성하지 않아도 컴포넌트별 불필요한 리렌더링이 방지되어 검색 결과 목록의 반응 속도가 개선되었습니다.",
        keywords: ["React Compiler", "렌더링 최적화", "성능 개선"],
        codeSnippet: "/img/img_chickengalaxy_troubleshooting_reactcompiler_code.svg",
      },
    ],
  },
  {
    number: 4,
    category: "Practical Project",
    slug: "freshjb",
    name: "전북생생장터",
    overview:
      "전북특별자치도 경제통상진흥원에서 운영하는 지역 농가 특산물 온라인 쇼핑몰",
    description: [
      "전북생생장터는 전라북도의 지역 특산물을 온라인으로 판매하는 <b>커머스 플랫폼</b>입니다. 지역 농가와 소비자를 직접 연결하는 서비스인 만큼, <b>상품 탐색부터 주문·결제까지의 흐름이 자연스럽고 신뢰감 있게 이어지는 사용자 경험</b>이 중요했습니다.",
      "저는 <b>React와 @shopby/react-components를 활용해 쇼핑몰 전반의 사용자 화면을 구현</b>하고, <b>PC와 모바일 환경을 모두 고려한 UI 개발</b>을 담당했습니다. 단순한 퍼블리싱을 넘어, 실제 사용 흐름 속에서 불편함이 생기지 않도록 화면 구조와 상호작용을 세심하게 다듬는 데 집중했습니다.",
      "특히 고객사의 요구사항 중 <b>NHN Shopby 플랫폼이 기본적으로 지원하지 않는 기능</b>이 많아, 이를 직접 보완해야 하는 상황이 발생했습니다. <b>복수 배송지 기능, 체험단 게시판 댓글 기능, 장바구니 수량 동기화 문제</b> 등을 해결하며, <b>플랫폼의 한계를 넘어서는 커스텀 프론트엔드 개발 역량</b>을 키울 수 있었던 프로젝트입니다.",
    ],
    startDate: "2023.10",
    endDate: "2024.04",
    link: "https://www.freshjb.com",
    githubLink: "",
    thumbnail: "/img/img_freshjb_thumbnail.png",
    detailImages: [],
    skills: ["React", "@shopby/react-components", "NHN Shopby"],
    role: [
      "쇼핑몰 전체 페이지(PC/Mobile) UI 구현 및 React 컴포넌트 개발 전담",
      "플랫폼 미지원 기능을 사용자 흐름에 맞게 커스텀 개발하여 고객사 요구사항 충족",
      "주문·게시판·장바구니 영역의 UX 개선 및 기능 안정화",
    ],
    troubleshooting: [
      {
        title: "복수 배송지 기능 커스텀 구현",
        problem:
          "기존 Shopby 플랫폼은 <b>단일 배송지만 지원</b>해 여러 주소로 상품을 보내고 싶은 사용자 요구를 충족하기 어려웠습니다. <b>주문서, 주문완료, 주문상세까지 주문 플로우 전반</b>에서 배송지 정보가 일관되게 이어져야 했기 때문에 <b>단순 UI 추가만으로는 해결할 수 없는 문제</b>였습니다.",
        solution:
          "<b>주문 흐름 전체를 기준으로 배송지 데이터를 나누고 연결하는 구조를 직접 설계</b>해 복수 배송지 기능을 커스텀 구현했습니다. 주문서, 주문완료, 주문상세 페이지 전반에서 정보가 자연스럽게 이어지도록 <b>화면과 데이터 흐름을 함께 맞추며</b> 사용자 입장에서 복잡함이 느껴지지 않도록 구성했습니다.",
        keywords: ["React", "NHN Shopby", "주문 플로우", "커스텀 기능 개발"],
      },
      {
        title: "헤더 미니카트와 장바구니 수량 불일치 해결",
        problem:
          "<b>헤더의 미니카트에 표시되는 수량과 실제 장바구니 페이지의 수량이 일치하지 않는 문제</b>가 있었습니다. 이 문제는 사용자의 신뢰를 떨어뜨릴 수 있고, 특히 <b>주문 직전 단계에서 혼란을 유발</b>할 수 있다는 점에서 빠른 대응이 필요했습니다.",
        solution:
          "<b>플랫폼 내부 상태에 의존하던 방식 대신, 장바구니 API를 직접 호출해 수량 데이터를 동기화</b>함으로써 불일치 문제를 해결했습니다. 이를 통해 사용자가 <b>어느 화면에서든 동일한 장바구니 상태를 확인</b>할 수 있도록 안정성을 높였습니다.",
        keywords: ["React", "API 연동", "상태 동기화", "UX 안정성"],
      },
    ],
  },
  {
    number: 5,
    category: "Practical Project",
    slug: "pokemonstore",
    name: "포켓몬스토어 온라인",
    overview: "포켓몬 공식 굿즈를 판매하는 온라인 쇼핑몰",
    description: [
      "포켓몬 스토어 온라인은 포켓몬 공식 굿즈를 판매하는 온라인 쇼핑몰로, <b>브랜드 경험과 상품 탐색의 즐거움이 함께 중요한 서비스</b>였습니다. 저는 <b>초기 구축 단계의 퍼블리싱을 전담</b>하며 서비스 전반의 사용자 화면을 설계하고 구현했습니다.",
      "저는 <b>HTML, CSS, JavaScript, jQuery, Handlebars.js 기반의 Shopby SDK 환경</b>에서 전체 페이지의 구조와 스타일을 구성하고, 다양한 운영 요구사항을 실제 화면에 반영했습니다. <b>PC와 모바일을 모두 고려한 퍼블리싱</b>과 함께, 브랜드 톤을 해치지 않으면서도 사용성이 자연스럽게 유지되도록 디테일을 다듬는 데 집중했습니다.",
      "NHN Shopby 서비스가 런칭된 지 얼마 되지 않은 시기에 진행된 프로젝트인 만큼, <b>플랫폼이 기본적으로 제공하지 않는 갤러리형 게시판 UI를 Vanilla JavaScript로 직접 구현</b>해야 했습니다. 단순한 리스트 구조로는 브랜드 특성을 살리기 어려웠던 게시판 영역에 <b>카드 형태의 갤러리 UI를 설계하고 적용</b>하면서, 콘텐츠의 시각적 매력과 탐색성을 함께 높인 것은 물론 <b>프론트엔드 개발자로서 첫 발걸음을 내디딘 의미 있는 프로젝트</b>였습니다.",
    ],
    startDate: "2023.09",
    endDate: "2023.10",
    link: "https://www.pokemonstore.co.kr",
    githubLink: "",
    thumbnail: "/img/img_pokemonstore_thumbnail.png",
    detailImages: [],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Handlebars.js",
      "Shopby SDK",
    ],
    role: [
      "쇼핑몰 전체 페이지(PC/Mobile) 퍼블리싱 초기 구축",
      "브랜드 경험을 유지한 커스텀 게시판 UI 구현",
    ],
    troubleshooting: [
      {
        title: "플랫폼 미지원 갤러리형 게시판 UI 구현",
        problem:
          "<b>기본 게시판 UI만으로는 이벤트 콘텐츠를 브랜드에 맞는 방식으로 보여주기 어려웠습니다.</b> 단순 리스트 구조로는 <b>시각적 매력이 부족</b>했고, 사용자 입장에서도 <b>콘텐츠를 직관적으로 탐색하기 어려웠습니다.</b>",
        solution:
          "<b>Vanilla JavaScript로 갤러리형 게시판 UI를 직접 구현</b>해 상품과 이벤트 이미지를 카드 형태로 노출하도록 구성했습니다. 이를 통해 <b>콘텐츠 가독성과 탐색성을 높이고</b>, 브랜드 특성에 맞는 시각적 경험을 강화했습니다.",
        keywords: ["JavaScript", "Vanilla JS", "게시판 UI", "커스텀 인터랙션"],
      },
    ],
  },
];
