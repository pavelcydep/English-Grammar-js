
import {
    testContainer,
    resultContainer,
} from "../components/constant"


const addClicks = () => {
    let currentValue = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
    let newValue = currentValue + 1;
    let result = document.querySelector('.result');
    result.textContent = 'Ваш результат:' + newValue + ' правильных ответа';
    localStorage.setItem('myClicks', newValue);
}

const removeClics = () => {
    let currentValue = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
    let newValue = currentValue - 1;
    let result = document.querySelector('.result');
    result.textContent = 'Ваш результат:' + newValue + 'балла';
    localStorage.setItem('myClicks', newValue);
}
const stepClicks = () => {
    let currentValue = localStorage.getItem('test') ? parseInt(localStorage.getItem('test')) : 0;
    let newValue = currentValue + 1;
    console.log(currentValue);
    localStorage.setItem('test', newValue);
    if (newValue >= 10) {
        testContainer.classList.add('display-none');
        resultContainer.classList.remove('display-none');
    } else {
        setTimeout(function () {
            location.reload();
        }, 2000)
    }
}

const checkAnswers = (a, b) => {
    return a.map((item, idx) => item === b[idx]);
}

const clearedStorage = () => {
    localStorage.clear();
    location.reload();
}


export {
    addClicks,
    removeClics,
    stepClicks,
    checkAnswers,
    clearedStorage
};
