// 객체 선언
let student = {};
student.이름 = '윤인성';
student.취미 = '악기';
student.장래희망 = '생명공학자';

// 객체 출력
// JSON이 객체 그 자체임(객체를 문자열로 바꿔서 출력하는 함수)
console.log(JSON.stringify(student, null, 2)); // 문자열
console.log(student); // 객체