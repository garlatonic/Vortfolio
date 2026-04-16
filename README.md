# 박상아 | Frontend Developer Portfolio

프론트엔드 개발자 박상아의 포트폴리오 페이지입니다.

3년간의 웹 퍼블리싱 경험을 바탕으로, 이제는 React와 Next.js 중심의 프론트엔드 개발자로서 더 자연스럽고 직관적인 사용자 경험을 만드는 데 집중하고 있습니다. 이 프로젝트는 제가 참여한 실무 및 팀 프로젝트를 한 곳에 정리하고, 문제 해결 방식과 구현 역량을 보여주기 위해 제작한 개인 포트폴리오 사이트입니다.

- Live Site: https://garlatonic.github.io/
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS, GSAP
- Deploy: Static Export + GitHub Pages

## 소개

이 포트폴리오는 다음 내용을 명확하게 보여주는 데 초점을 맞춰 작업되었습니다.

- 어떤 프로젝트에 참여했는지
- 어떤 기술 스택으로 화면과 인터랙션을 설계했는지
- 각 프로젝트 내에서 어떤 역할을 맡았는지
- 기능 구현을 넘어 성능, 상태 관리, 협업까지 어떻게 다뤘는지

메인 화면에서는 자기소개, 기술 스택, 프로젝트 목록을 확인할 수 있고, 각 프로젝트 상세에서는 역할, 주요 구현 내용, 트러블슈팅 사례를 함께 볼 수 있습니다.


## 배포

이 프로젝트는 정적 사이트로 빌드해 GitHub Pages에 배포되어 있습니다. 배포 과정은 Github Actions를 활용해 자동화되어 있습니다.

## 프로젝트 구조

```text
src/
	app/
		(home)/
		projects/
	components/
	data/
	hooks/
	lib/
	utils/
```

- `src/app`: 라우팅과 페이지 구성
- `src/components`: 공통 UI, 섹션 컴포넌트, 인터랙션 컴포넌트
- `src/data/projects.ts`: 포트폴리오 프로젝트 데이터 관리
- `src/hooks`: 커서, 반응형, 마운트 상태 등 공통 훅

