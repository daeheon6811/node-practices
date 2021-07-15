 ## 1. package(패키지)
- 완전한 애플케이션 ex)devtools(nodeamon , bable , webpack ...)
- 코드 샘플 , 프로젝트에서 사용하는 모듈 (라이브러리)

## 2. 의존성(Dependency)

  ##### **개발하고 있는 프로젝트(패키지 , 애플리케이션)에서 설치하고 사용하고 다른 패키지**


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

1. 프로젝트 디렉토리를 생성(mkdir)
2. 프로젝트 디렉토리로 이동(cd)
3. [project-ex01] $ npm init (프로젝트 매니페스트 파일(package.json) 생성)


- - -

## 모듈  
1. **코어모듈:** (fs , os  ... node에서 제공 해주는 모듈
1. **파일모듈:** 파일의 경로를 불러와서 모듈안의 객체 , 함수 , 클래스 들의 함수를 사용한다.
1. **npm모듈 :** npm을 통해서 node_modules에 설치해서 사용하는 모듈

## 패키지 설치방법
- 로컬 뱊
- 원격 배포 
- - -

## npmjs.com npm registry에 패키지 배포 하기 


1. 사용자 등록
- ```npm adduser ```  입력 
- ```UserName :  아이디 입력 ```
- ```Password :  비밀번호  입력 ```
-  ```Email :  이메일  입력 ```


2.  업로드
   - ```npm publish```

- - - 

# 맨바닥에서 웹 애플리케이션 만들어보기

1.``` based on http core module```
2.``` based on (http, fs) core module```
3.``` based on (connect, serve-static ,  connect-route) npm package(module)```
4.``` based on express npm package```


- [helloweb-ex02] npm init -y
- [helloweb-ex02] npm i express
- [helloweb-ex02] npm i ejs
- [helloweb-ex02] npm i -D nodemon

## package.json  수정


```javascript
"scripts": {
    "start": "node index.js",
    "debug" : "nodemon index.js"
  },
```
- [helloweb-ex02] ```npm start (운용시...)```
- [helloweb-ex02] ```npm run debug (개발시 ... Live Update)```


- [helloweb-ex02] ```mkdir public```
- [helloweb-ex02] ```mkdir views```
- [helloweb-ex02] ``` mkdir routes```
- [helloweb-ex02] ``` mkdir controllers```
- [helloweb-ex02] ``` mkdir models```
  

- - -

  ### emaillist01 (model based mysql) - 기본 sql 기반

- [emaillist01] npm i express
- [emaillist01] npm i mysql
- [emaillist01] npm i ejs
- [emaillist01] npm i -D nodemon

## package.json  수정


```javascript
"scripts": {
    "start": "node index.js",
    "debug" : "nodemon index.js"
  },
```
- [emaillist01] ```npm start (운용시...)```
- [emaillist01] ```npm run debug (개발시 ... Live Update)```


- [emaillist01] ```mkdir public```
- [emaillist01] ```mkdir views```
- [emaillist01] ``` mkdir routes```
- [emaillist01] ``` mkdir controllers```
- [emaillist01] ``` mkdir models```
  


  ### emaillist02 (model based Sequelize) - ORM]


- [mysite] npm i express
- [mysite] npm i express-session
- [mysite] npm i ejs
- [mysite] npm i -D nodemon
- [mysite] npm i dotenv port 설정 관련
- [mysite] npm i sequelize
- [mysite] npm i mysql2
- [mysite] npm i moment
- 
```json
{
"scripts" : "node.index.js",
"debug" : "nodemon index.js"
}
```


## project structure
<pre>
/mysite
   |--- index.js
   |--- package.json
   |--- package-lock.json
   |--- /node-modules
   |--- /config
   |--- /logging
   |--- /logs
   |--- /public
   |--- /routes
   |--- /controllers
   |--- /models
   |--- /views
          |-- /main
          |-- /user
          |-- /guestbook
          |-- /board
          |-- /gallery
          |-- /admin    

</pre>