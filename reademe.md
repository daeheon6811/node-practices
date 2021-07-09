 ## 1. package(패키지)
- 완전한 애플케이션 ex)devtools(nodeamon , bable , webpack ...)
- 코드 샘플 , 프로젝트에서 사용하는 모듈 (라이브러리)

## 2. 의존성(Dependency)

-   **개발하고 있는 프로젝트(패키지 , 애플리케이션)에서 설치하고 사용하고 다른 패키지**


- 1. 일반 의존성: 개발하고 있는 애플리케이션에서 사용하는 패키지로 배포에 꼭 포함.

- 2. 개발 의존성: 개발에 필요하거나 도움이 되는 패키지(dev tool)에 포함 안되어 된다.

##  3. 패키지 설치 방식

- 1. 전역(global) 설치 : 여러 프로젝트에서 공통으로 사용되는 도구들 설치] npm -i g ...
- 2. 지역(project local) 설치 : 특정 프로젝트에만 종속 적인 도구나  npm i ...


> ###  패키지 설치 

```javascript
npm i ejs // 응답해야하는 HTML local install
npm i -D nodeamon  // local install , developement Dependcny
npm i -g gulp  // local install
```

```javascript
## 패키지 삭제
npm un ejs  // (local isntasll 삭제)
npm un -g gulp // (global install 삭제)
```

## Node(JavaScript) Project (Application , Package) 생성

- 1. 프로젝트 디렉토리를 생성(mkdir)
- 2. 프로젝트 디렉토리로 이동(cd)
- 3. [project-ex01] $ npm init (프로젝트 매니페스트 파일(package.json) 생성)


