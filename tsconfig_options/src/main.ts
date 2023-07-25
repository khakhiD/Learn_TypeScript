console.log('src/main.ts');

// "compilerOptions" 알아보기

// ✨ "strict" 모드
// 엄격한 타입 검사를 활성화하며, 아래의 옵션을 자동으로 활성화 (default 값은 false)
// "noImplicitAny": 암시적 any 타입 불가
// "noImplicitThis": 암시적 this 타입 불가
// "strictNullChecks": 엄격한 null, undefined 타입 검사
// "strictFunctionTypes": 엄격한 함수의 매개변수 타입 검사
// "strictPropertyInitialization": 엄격한 클래스의 속성 초기화 검사
// "strictBindCallApply": 엄격한 bind, call, apply 메소드의 인수 검사

// ✨ "target" 옵션
// 컴파일될 ES(JS) 버전 명시
// 권장: "ES2015" 이상
// 선택: "ES5", "ES6"/"ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ESNext" - 최신 버전

// ✨ "lib" 옵션
// 컴파일에서 사용할 라이브러리 지정
// 'target' 옵션에 따라 자동으로 지정
// 추천: "["ESNext", "DOM", "DOM.Iterable"]

// 예를 들어 배열 메서드 includes는 ES2016부터 제공했다.
// target이 ES2015라면 해당 라이브러리를 사용하기 위해서 lib 옵션을 주어야 한다.
// DOM과 DOM.Iterable 옵션으로 document를 제어할 수 있다.
// TS를 Node.js에서 사용한다면 DOM과 DOM.Iterable은 필요하지 않을 수도 있다.
// 모든 버전에 대응할 수 있도록 "ESNext" 옵션을 lib에 주면 편리하다.

// ✨ "module" 옵션
// 사용할 모듈 방식을 지정한다.
// 선택: "CommonJS", "ES6"/"ES2015", "ES2020", "ESNext" 등
// "ES2020": import(), import.meta.url 등 사용
// "ESNext": 가장 최신의 모듈 방식 사용

// CommonJS를 사용하면 required, module.exports 등을 사용한다.
// 프론트엔드 개발은 대부분 ESM 방식을 사용한다.

// ✨ "moduleResolution" 옵션
// 컴파일러가 사용할 모듈의 해석 방식 지정
// 추천: "node" / "bundler"
// 선택: "classic", "node", "nodenext", "bundler" 등

// "nodenext": Node.js의 ES 모듈 지원
// "bundler": Vite, esbuild, Webpack, Parcel 등 최신 번들러를 사용하는 경우 (>=5.0)
// TS 5.0 버전 이상인 경우에만 bunlder 값도 추천이 된다.
// "classic": index 파일을 찾지 못함 node나 bundler 사용을 추천

// ✨ "paths" 옵션
// 경로 별칭을 지정
// 모듈 경로를 사용할 때 특정 경로를 별칭으로 지정하여 사용할 수 있다.

// ✨ "jsx" 옵션
// JSX 출력 방식 제어
// "react-jsx": JSX 변경, '.js' 파일로 출력('_jsx' 사용), React@17 이상
// "react-jsxdev": JSX 변경, '.js' 파일로 출력('_jsxDEV' 사용), React@17 이상
// "react": JSX 변경, '.js'파일로 출력 ('React.createElement' 사용)
// "react-native": JSX 변경 없이, '.js'파일로 출력
// "preserve": JSX 변경 없이, '.jsx' 파일로 출력

// ✨ "outDir" 옵션
// 변환 결과물을 내부 디렉터리가 아닌 외부 디렉터리에 저장하는 옵션
// example) "outDir": "원하는 폴더명"
