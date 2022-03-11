// 객체 선언
let student = {};
student.이름 = '윤인성';
student.취미 = '악기';
student.장래희망 = '생명공학자';

delete student.장래희망;
// 객체 출력
console.log(JSON.stringify(student, null, 2));
console.log(student);