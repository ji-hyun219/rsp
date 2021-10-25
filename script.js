const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const $IMG_URL = './rsp.png';
$computer.style.background = `url(${$IMG_URL}) 0 0`;  
/* background 속성은 url(주소) x좌표 y좌표로 구성됨 */
$computer.style.backgroundSize = 'auto 200px';




const rspX = {
    scissors: '-0',  // 가위
    rock: '-220px',  // 바위
    paper: '-440px',  // 보
}




/* 가위바위보 그림 */
let computerChoice = rspX.scissors;
const computerHandImg = () => {
        if (computerChoice === rspX.scissors) {
            computerChoice = rspX.rock;
        }
        else if (computerChoice === rspX.rock) {
            computerChoice = rspX.paper;
        }
        else if (computerChoice === rspX.paper) {
            computerChoice = rspX.scissors;
        }
        $computer.style.background = `url(${$IMG_URL}) ${computerChoice} 0`;
        $computer.style.backgroundSize = 'auto 200px';  // 한번 더 써주는 이유: 리셋되기 때문
}




/* 타이머 멈췄다가 다시 실행하기 */
// 1. 버그
//let intervalid = setInterval(computerHandImg, 50);

//const clickButton = () => {
//    clearInterval(intervalid);
//    // 점수 계산 및 화면 표시
//    setTimeout(() => {
//        intervalid = setInterval(computerHandImg, 50);
//    }, 1000);

//}




// 2. (removeEventListener 대신) 플래그 변수
let intervalid = setInterval(computerHandImg, 50);
let score = 0;


let clickable = true;
const clickButton = () => {
    if (clickable) {
        clearInterval(intervalid);
        clickable = false;
        const myChoice = event.target.id;
        let result = '';

        if (myChoice === 'scissors') {
            if (computerChoice === rspX.scissors) { result = 'Draw'; score += 0;}
            else if (computerChoice === rspX.rock) { result = 'Defeat'; score += -1; }
            else if (computerChoice === rspX.paper) { result = 'win'; score += 1;}
        }
        if (myChoice === 'rock') {
            if (computerChoice === rspX.rock) { result = 'Draw'; score += 0; }
            else if (computerChoice === rspX.scissors) { result = 'win'; score += 1;}
            else if (computerChoice === rspX.paper) { result = 'Defeat'; score += -1}
        }
        if (myChoice === 'paper') {
            if (computerChoice === rspX.paper) { result = 'Draw'; score += 0;  }
            else if (computerChoice === rspX.scissors) { result = 'Defeat'; score += -1 }
            else if (computerChoice === rspX.rock) { result = 'win'; score += 1; }
        }

        
        $score.textContent = `${result}, score: ${score}`;

        setTimeout(() => {
            clickable = true;
            intervalid = setInterval(computerHandImg, 50);
        }, 1000);
    }
}

$scissors.addEventListener('click', clickButton);
$rock.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);


