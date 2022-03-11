// 변수 선언
let pet = {
    name : '구름',
    eat : function(food){
        alert(this.name + '은/는 ' + food + ' 을/를 먹습니다.')
    }
}
// 객체의 함수를 호출
pet.eat('밥')