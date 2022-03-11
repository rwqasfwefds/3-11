// // 객체 선언
// let data = [{
//     name : '혼자 공부하는 파이썬',
//     price : 18000,
//     publisher : '한빛 미디어'
// },{
//     name : 'HTML5 웹 프로그래밍 입문',
//     price : 26000,
//     publisher : '한빛 아카데미'
// }];

// // 문자열로 변환된 객체 출력
// console.log(JSON.stringify(data));
// // 객체(노멀) 출력
// console.log(data);

// 객체 선언
let data = [{
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛 미디어'
},{
    name : 'HTML5 웹 프로그래밍 입문',
    price : 26000,
    publisher : '한빛 아카데미'
}];

// 문자열로 변환된 객체 출력
let js = JSON.stringify(data);
console.log(js);

// 문자열 -> 객체
console.log(JSON.parse(js));