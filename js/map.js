// map는 주어진 값들을 오름차순으로 접근해서 새로운 값을 만들고 반환(return)시키기 위해서 쓰임
// 반환값이 있으면 변수에 넣을 수 있음
// 리턴값이 있음

// map #1
// let numbers = [1, 2, 3, 4, 5];

// 전통적인 방법
// let result = [];
// for(let i = 0; i < numbers.length; i++){
//     result[i] = numbers[i] * numbers[i];
// };

// let result = numbers.map(number => number * number);


// console.log(numbers);
// console.log(result);

// map #2
// 매개변수를 자바스크립트 내장함수로 넘겨서 새로운 배열 구하기

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(Math.sqrt);

// console.log(squares);

// map #3
// 객체 조작

// let users = [{
//     name : 'YD',
//     age : 22
// },{
//     name : 'Bill',
//     age : 32
// },{
//     name : 'Andy',
//     age : 21
// },{
//     name : 'Roky',
//     age : 35
// }];

// let ages = [];
// ages = users.map(function(user){
//     return user.age
// });

// ages = users.map((user) => user.age);

// 객체 속성 중에서 나이만 뽑은 새로운 배열을 만들어 출력
// console.log(ages);

// 연습 문제 #1
// 아래 형태를 map을 사용하는 형태로 출력하세요

// let numbers = [1, 2, 3];
// let result = [];

// for(let i = 0; i< numbers.length; i++){
//     result.push(numbers[i] + numbers[i]);
// }
// console.log(result);

let numbers = [1, 2, 3];
let result = [];

result = numbers.map((number) => number + number);
console.log(result);