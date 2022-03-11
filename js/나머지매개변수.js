function sumAll(...args){ //args는 배열의 이름
    let sum = 0;

    // for(let arg of args){
    //     sum += arg;
    // };

    for(let arg of args) sum += arg;
    
    return sum;
};
alert(sumAll(1));
alert(sumAll(1, 2));
alert(sumAll(1, 2, 3));