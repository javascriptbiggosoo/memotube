# Memotube

Memotube는 YouTube 비디오에 대한 메모를 작성하고 관리할 수 있는 웹 애플리케이션입니다. 프론트엔드는 React와 TypeScript를 사용하여 개발되었으며, 사용자 인증과 메모 관리 기능을 포함하고 있습니다. 보다 페이지를 쉽게 이해하실 수 있도록 더미 데이터를 포함하고 있습니다.

배포 링크: [Memotube](https://javascriptbiggosoo.github.io/memotube)

백엔드 코드: https://github.com/javascriptbiggosoo/memotube-BE

## 주요 기능

- **사용자 인증**: JWT를 사용한 로그인 및 회원가입 기능
- **메모 관리**: YouTube 비디오에 대한 메모 추가, 수정, 삭제
- **리스트 관리**: 메모 리스트를 생성하고, 해당 리스트를 게시판에 등록
- **좋아요 기능**: 게시글에 대한 좋아요 및 좋아요 취소 기능

## 사용된 기술 스택

- **React**: 사용자 인터페이스를 구성하기 위한 라이브러리
- **TypeScript**: 정적 타입을 통한 코드의 안정성 향상
- **Recoil**: 전역 상태 관리를 위한 라이브러리
- **React Query**: 서버 상태 관리를 위한 라이브러리
- **React Hook Form**: 폼 관리를 위한 라이브러리
- **Styled Components**: 스타일링을 위한 CSS-in-JS 라이브러리
- **MUI**: Material-UI, React 컴포넌트 라이브러리
- **Axios**: HTTP 클라이언트
- **React Router DOM**: 클라이언트 사이드 라우팅 라이브러리
- **Vite**: 빠르고 가벼운 개발 환경을 위한 빌드 도구

## 세부 구현 기능

### 최적화

- 유튜브 플레이어 로딩 동안 레이아웃 변화를 막기 위해 크기 고정
- 페이지별 코드 분할, 지연 로딩 적용

### UX

- 영상을 멈추면 해당 시간에 메모 입력창에 해당 시간이 동기화
- 페이지 리다이렉트 시 토큰이 유효하면 자동 로그인
- 로딩 컴포넌트 사용
- 메모 중 영상 URL 변경, 게시글 삭제 시 유저의 확인을 받은 후 진행

### 코드 스타일

- 비즈니스 로직, UI 로직 분리를 위해 커스텀 훅 활용

## 추가 구현 예정 기능

- 일관된 UI 구성
- 디폴트 테마 세분화
- 서브셋 폰트
- 게시판 댓글 기능
- 마이리스트 수정 기능
- 비밀번호 수정 기능
- 카테고리 분류 및 추천수 상위 게시글 표시
