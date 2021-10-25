const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const $IMG_URL = './rsp.png';
$computer.style.background = `url(${$IMG_URL}) 0 0`;  
/* background �Ӽ��� url(�ּ�) x��ǥ y��ǥ�� ������ */
$computer.style.backgroundSize = 'auto 200px';




const rspX = {
    scissors: '-0',  // ����
    rock: '-220px',  // ����
    paper: '-440px',  // ��
}




/* ���������� �׸� */
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
        $computer.style.backgroundSize = 'auto 200px';  // �ѹ� �� ���ִ� ����: ���µǱ� ����
}




/* Ÿ�̸� ����ٰ� �ٽ� �����ϱ� */
// 1. ����
//let intervalid = setInterval(computerHandImg, 50);

//const clickButton = () => {
//    clearInterval(intervalid);
//    // ���� ��� �� ȭ�� ǥ��
//    setTimeout(() => {
//        intervalid = setInterval(computerHandImg, 50);
//    }, 1000);

//}




// 2. (removeEventListener ���) �÷��� ����
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


