type Project = {
  number: number; // 프로젝트 번호 (예: 1, 2, 3, ...)
  category: string; // 프로젝트 카테고리 (예: "실무 프로젝트", "데브코스 파이널 프로젝트", "데브코스 FE 팀 프로젝트")
  slug: string; // 프로젝트 고유 ID (예: "freshjb", "pokemonstore")
  name: string; // 프로젝트 이름
  overview: string; // 한 줄 개요
  description: string[]; // 상세 설명 문단 목록
  startDate: string; // 프로젝트 시작 날짜 (예: "2023.10")
  endDate: string; // 프로젝트 종료 날짜 (예: "2024.06" 또는 "현재")
  link: string; // 배포 링크
  githubLink: string; // GitHub 링크
  thumbnail: string; // 썸네일 이미지 경로 또는 URL
  detailImages: string[]; // 상세 페이지에서 사용할 이미지 경로 또는 URL 목록
  skills: string[]; // 사용 기술 스택
  role: string[]; // 맡은 역할 및 주요 기여
  troubleshooting?: TroubleShooting[]; // 트러블슈팅 목록
  video?: {
    src: string; // 비디오 파일 경로 또는 URL
    type: string; // 비디오 MIME 타입 (예: "video/mp4")
  };
  videoThumbnail?: string; // 비디오 썸네일 이미지 경로 또는 URL
};

type TroubleShooting = {
  title: string; // 트러블슈팅 제목
  problem: string; // 문제 상황
  solution: string; // 해결 방법
  keywords?: string[]; // 핵심 키워드
  codeSnippet?: string; // 코드 스니펫
  images?: {
    before: string; // 문제 상황을 보여주는 이미지 경로 또는 URL
    after: string; // 해결된 상황을 보여주는 이미지 경로 또는 URL
  }[];
};
