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
