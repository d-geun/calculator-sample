const btnEl = document.querySelectorAll('button');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.result');
const numBtn = document.querySelectorAll('.n-btn');
const calcDisplay = document.querySelector('.display');
const initBtn = document.querySelector('.init-btn');

// 연산자, 첫 번째 숫자, 두 번째 숫자에 대한 초기값 빈 문자 ''로 지정한다.
let operatorOn = '';
let prevNum = '';
let nextNum = '';



// forEach()를 쓴 이유? 각각 클래스명을 가진 버튼 요소들을 나열한다. 나열된 요소들에 대해 이벤트 처리를 하기 위함.
// 단일요소면 forEach()를 쓰지 않고 직접 이벤트 처리를 해도 되지만, 요소가 2개 이상일 때는 일반적으로 forEach()구문을 사용한다.

numBtn.forEach(e => {
    e.addEventListener('click', () => {
        calcDisplay.textContent += e.textContent;
    });
});
operatorBtn.forEach(e => {
    e.addEventListener('click', () => {
        operatorOn = e.textContent;
        prevNum = calcDisplay.textContent;
        calcDisplay.textContent = '';
    });
});

equalBtn.addEventListener('click', () => {
    nextNum = calcDisplay.textContent;
    let result = 0;
    switch (operatorOn) {
        case '+':
            result = prevNum + nextNum;
            break;
        case '-':
            result = prevNum - nextNum;
            break;
        case 'X':
            result = prevNum * nextNum;
            break;
        case '/':
            result = prevNum / nextNum;
            break;
        default:
            return;
    }
    calcDisplay.textContent = result;
});

initBtn.addEventListener('click', () => {
    calcDisplay.textContent = '';
    prevNum = '';
    nextNum = '';
    operatorOn = '';
});


