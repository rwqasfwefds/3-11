// 객체 선언
let books = [{
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛 미디어'
},{
    name : 'HTML5 웹 프로그래밍 입문',
    price : 26000,
    publisher : '한빛 아카데미'
},{
    name : '머신러닝 딥러닝 실전 개발 입문',
    price : 30000,
    publisher : '위키 북스'
},{
    name : '딥러닝을 위한 수학',
    price : 25000,
    publisher : '위키 북스'
}];

// 가격별로 정렬한 뒤 출력
// lodash는 _. 으로 접근

// let output = _.sortBy(books, function(book){
//     return book.price
// });
let output = _.sortBy(books, (book) => book.price);

// 객체[배열]를 문자열로 바꿔서 화면 출력 
console.log(JSON.stringify(output));