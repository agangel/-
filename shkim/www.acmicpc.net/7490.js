
/* 
===========================문제===========================
1부터 N까지의 수를 오름차순으로 쓴 수열 1 2 3 ... N을 생각하자.

그리고 '+'나 '-', 또는 ' '(공백)을 숫자 사이에 삽입하자(+는 더하기, -는 빼기, 공백은 숫자를 이어 붙이는 것을 뜻한다).

이렇게 만든 수식의 값을 계산하고 그 결과가 0이 될 수 있는지를 살피자.

N이 주어졌을 때 수식의 결과가 0이 되는 모든 수식을 찾는 프로그램을 작성하라.

===========================입력===========================
첫 번째 줄에 테스트 케이스의 개수가 주어진다(<10).

각 테스트 케이스엔 자연수 N이 주어진다(3 <= N <= 9).

===========================출력===========================
각 테스트 케이스에 대해 ASCII 순서에 따라 결과가 0이 되는 모든 수식을 출력한다. 각 테스트 케이스의 결과는 한 줄을 띄워 구분한다. 
*/
const input = `2
3
7
`.toString().trim().split('\n');
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const calculArr = [' ','+','-'];
let sampleArr = [];
function sequence(num){
    let sapmple = [];
    for(let i = 2; i <= num; i++){
        let sap = [];
        if(i === 2){
            calculArr.forEach(d=>{
                sap.push('1'+d+i);    
            });
        }else {
            calculArr.forEach(d=>{
                sap.push(d+i);    
            });
        }
        sapmple.push(sap);
    }
    return sapmple;
}
let result = [];
input.splice(0,1);
input.forEach(d=>{
    let testArr = [];
    const seq =  sequence(d).reduce((ac,a,b,all)=>{
        let arr = [];
        ac.forEach(x=>{
            a.forEach(y=>arr.push(x+y));
        })
        return arr;
    });
    seq.forEach(z=>{
        if(eval(z.replaceAll(" ","")) === 0){
            testArr.push(z);
        }
    });
    if(result.length && testArr.length){
        result.push('');
    }
    result = result.concat(testArr);
});
result.forEach(d=>{
    console.log(d)
});


