## NPM Package QA 방법

1. pintalk-npm-package 레포지토리 클론
   - npm install 실행
2. PintalkTestPage 레포지토리 클론
   - npm install 실행
3. 클론한 두 폴더를 같은 폴더 내에 위치 시킨다.
4. pintalk-npm-package 프로젝트에서 ```npm link``` 실행
5. PintalkTestPage 프로젝트에서 ```npm link pintalk-npm-package``` 실행
6. pintalk-npm-package 프로젝트에서 ```npm link ../PintalkTestPage/node_modules/react``` 실행
7. PintalkTestPage 프로젝트에서 ```npm link pintalk-npm-package``` 실행
8. PintalkTestPage 프로젝트 ```npm start``` 실행