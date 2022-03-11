// 객체 선언
let student = [];
student.push({
    이름 : '구름',
    국어 : 87,
    영어 : 98,
    수학 : 88,
    과학 : 90
});
student.push({
    이름 : '별이',
    국어 : 92,
    영어 : 98,
    수학 : 96,
    과학 : 88
});
student.push({
    이름 : '겨울이',
    국어 : 76,
    영어 : 96,
    수학 : 84,
    과학 : 86
});
student.push({
    이름 : '바다',
    국어 : 98,
    영어 : 52,
    수학 : 98,
    과학 : 92
});

// console.log(JSON.stringify(student));

let output = '';

for(let s of student){
    let sum = s.국어 + s.영어 + s.수학 + s.과학;
    let average = sum / 4;
    output += `${s.이름} : ${sum} ${average}`;
};
console.log(output);