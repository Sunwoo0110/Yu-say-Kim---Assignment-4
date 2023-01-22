# Final Project Idea

## Express + MySQL Setup

### 제출 형식
- Github Action

### 설명
- node.js 기반 서버 프레임워크인 express 의 기본 세팅을 도와주는 깃허브 액션
- mysql 데이터베이스와의 연결을 도와주는 깃허브 액션

### 필요한 테크 스택
- node.js 와 mysql 에 대한 기본 지식
- javascript 
- docker container

### 사용 깃허브 액션
- node.js setup 깃허브 액션 사용 [actions/setup-node@v3](https://github.com/marketplace/actions/setup-node-js-environment)
- repo checkout 깃허브 액션 사용 [actions/checkout@v3](https://github.com/marketplace/actions/checkout)

### 개발 방향
- express 파일 구조 및 기본 코드 구현
- input 으로 mysql host, user, password, database, port 등의 정보 입력 받고 DB 연결
- server.js, app.js. routes 등의 파일 생성 및 기본 예시 코드 작성

---

## Vim Editor Custom

### 제출 형식
- Github Action

### 설명
- 리눅스에서 자주 사용하는 vim 에디터의 커스텀을 도와주는 깃허브 액션

### 필요한 테크 스택
- shell scripting 에 대한 기본 지식
- docker container

### 개발 방향
- vim editor 커스텀 방법과 종류 조사
- options 로 syntax highlighting, auto indent 등의 기능 추가를 설정함
- .vimrc 파일 설정을 통해 에디터 커스텀

---

## Docker Container Auto Release to GitHub Package for Nodejs

### 제출 형식
- Github Action

### 설명
- Nodejs 프로젝트를 도커 컨테이너로 만들고, 해당 repo의 Github Package로 자동 배포하는 액션

### 필요한 테크 스택
- Docker container
- Nodejs

### 사용 깃허브 액션
- Setup Node.js environment [actions/setup-node@v3](https://github.com/marketplace/actions/setup-node-js-environment)
- Checkout [actions/checkout@v3](https://github.com/marketplace/actions/checkout)
- Build and push Docker images [docker/build-push-action@v3](https://github.com/marketplace/actions/build-and-push-docker-images)

### 개발 방향
- Nodejs setup & docker image push는 위의 깃허브 액션을 사용해서 해결
- docker container를 upload하고 Github repo의 Package로 release하는 부분을 추가로 개발

---


