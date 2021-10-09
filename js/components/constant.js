import Api from "../Api"

const placeCardOtvet = document.querySelector('.otvet-variant');
const textVopros = document.querySelector('.vopros-text');
const buttonText1 = document.querySelector('.text4 ');
const buttonText2 = document.querySelector('.text5');
const buttonText3 = document.querySelector('.text6');
const text4 = document.querySelector('.text1');
const text5 = document.querySelector('.text2');
const text6 = document.querySelector('.text3');
const buttonProverka = document.querySelector('.proverka');
const testContainer = document.querySelector('.test-container');
const resultContainer = document.querySelector('.result-container');
const startOver = document.querySelector('.start-over');
const taskApi = new Api('http://english/api/tasks');

export {
    placeCardOtvet,
    textVopros,
    buttonText1,
    buttonText2,
    buttonText3,
    text4,
    text5,
    text6,
    buttonProverka,
    testContainer,
    resultContainer,
    startOver,
    taskApi
};
