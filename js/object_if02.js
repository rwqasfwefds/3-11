// 객체 선언
let object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛 미디어'
};

// 객체 속성 추가 + 내부에 속성이 있는지 확인
object.name = object.name === undefined ? '제목 미정' : object.name;
object.author = object.author === undefined ? '저자 미정' : object.author;

// 객체를 문자열로 변환해서 출력
console.log(JSON.stringify(object));