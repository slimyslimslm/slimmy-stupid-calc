
function clearScreen() {
    document.getElementById("userInputField").value = "";
}

function operatorButtons(op) {
    let userInputField = document.getElementById("userInputField");
    switch (op) {
        case '+':
            userInputField.value += '+';
            break;
        case '-':
            userInputField.value += '-';
            break;
        case '*':
            userInputField.value += '*';
            break;
        case '/':
            userInputField.value += '/';
            break;
        case '^':
            userInputField.value += '^';
            break;
        case 'par':
            userInputField.value += '()';
    }
}

/*****************************************************************************************************/

function randInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function longNumberSameDigit() {
    let n = String(randInt(1, 10));
    for (let i = 0; n < 200; i++) {
        n += n;
    }
    return n;
}

function makeBigNum(answer) {
    let maxNum;

    for (let i = 0; i < answer; i++) {
        answer *= 10;
        if (randInt(0, 1)) {
            answer *= -1;
        }
    }
    let number = randInt(1, answer + 1);
    if (randInt(0, 1)) {
        number *= -1;
    }
    return number;
}

function randomWord(){
    const words = ['Cancel Culture', 'Stan', 'Put the phones in the pockets like limes in the coconuts', 
                        'Kevin', 'sdfbsdjfbsdjhsbfhjsdfbsdjhfb', 'Several', 'Negative 0', 'help im trapped, free me!', 'capybara',
                    'join math team!', 
            'My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane Albuquerque New Mexico 87104. This is my confession'];
    let index = randInt(0, words.length);
    return words[index];
}

function alterAnswer(answer, max) {
    //input: answer, max value
    //returned value: altered answer
    //purpose: to change the answer by between 1 or maxc=
    let posChange = randInt(0, 2);
    let changeAnswer = randInt(1, max + 1);
    if (posChange) {
        return answer + changeAnswer;
    } else {
        return answer - changeAnswer;
    }
}

function randomizeAnswer(answer) {
    let choice = randInt(1, 11);
    switch (choice) {
        case 1:
            answer = String(alterSlightly(answer, 2));
            break;
        case 2:
            answer = String(Infinity);
            break;
        case 3:
            answer = 'South Africa';
            break;
        case 4:
            answer = randomWord();
            break;
        case 5:
            answer = String(answer * 2);
            break;
        case 6:
            if (answer == 1){
                answer = String(makeBigNum(answer));
            } else {
                answer = '1';
            }
            break;
        case 7:
            answer = String(Math.PI);
            break;
        case 8:
            answer = randomWord();
            break;
        case 8:
            answer = alterMax(answer, 10);
            break;
        case 9:
            answer = String(longNumberSameDigit());
            break;
        case 10:
            answer = String((randInt(1, 10) / (0.00000001 * randInt(1, 10))));
            break;
    }
    return answer;
}

function randomizeOrNot(answer) {
    if (randInt(1, 11) >= 5) {
        answer = randomizeAnswer(answer);
    }
    return answer;
}
