



const question={answers:[]}

const test = [{
    "id": 1,
    "questionsRus": "Я программист",
    "questionsEng": ["I'm", "a", "programmer"],
    "buttonTextVariant": ["I'm", "programmer", "a"],
    "imageLink": "https://avatars.mds.yandex.net/get-zen_doc/1582174/pub_5cd9dbe10de4a600b3dadd7e_5cd9de795a6e0400b34f7538/scale_1200"
    
},

{
    "id": 2,
    "questionsRus": "привлекательные, но чаще всего ненужные настройки",
    "questionsEng": ["bells", "and", "whistles"],
    "buttonTextVariant": ["bells", "and", "whistles"],
    "imageLink": 'https://vseobovsem.su/wp-content/uploads/2020/09/007667-5.jpg'
},
{
    "id": 3,
    "questionsRus": "Стремись вдохновлять",
    "questionsEng": ["Aspire", "to", "inspire"],
    "buttonTextVariant": ["to ", "inspire", "Aspire"],
    "imageLink": 'https://funik.ru/wp-content/uploads/2020/02/bcb36cd7ee5e11e2248b-2.jpg'
},
{
    "id": 4,
    "questionsRus": "Любовь и надежда",
    "questionsEng": ["Love", "and", "hope"],
    "buttonTextVariant": ["Love", "hope", "and"],
    "imageLink": 'http://almode.ru/uploads/posts/2021-02/1613716477_50-p-tatu-s-nadpisyu-vera-nadezhda-lyubov-52.jpg'
},
{
    "id": 5,
    "questionsRus": "Понемногу",
    "questionsEng": ["Little", "by", "little"],
    "buttonTextVariant": ["by", "Little", "little"],
    "imageLink": "https://funik.ru/wp-content/uploads/2018/11/3ed7c1b247377796869e.jpg"
},

{
    "id": 6,
    "questionsRus": "Живи для себя",
    "questionsEng": ["live", "for", "yourself"],
    "buttonTextVariant": ["for", "yourself", "live"],
    "imageLink": "http://almode.ru/uploads/posts/2021-04/1618327098_50-p-muzhskie-prikolnie-tatuirovki-54.jpg"
}
,
{
    "id": 7,
    "questionsRus": "Стремись к величию",
    "questionsEng": ["strive", "for", "greatness"],
    "buttonTextVariant": ["greatness", "strive", "for"],
    "imageLink": "https://st.depositphotos.com/1000423/5019/i/950/depositphotos_50193321-stock-photo-knowledge-and-education.jpg"
},
{
    "id": 8,
    "questionsRus": "Берегите моменты",
    "questionsEng": ["cherish", "the", "moments"],
    "buttonTextVariant": ["the", "cherish", "moments"],
    "imageLink": "https://sun1-47.userapi.com/impf/as2Y2StfOBAZM-gKC_dK2td9abhzaMeH-uHbZg/iZWUNsC8HSI.jpg?size=564x564&quality=96&sign=b9a5afdcf5aba68b71a3e9ae5b928c40&type=album"
},
{
    "id": 9,
    "questionsRus": "Наслаждайся каждым моментом",
    "questionsEng": ["enjoy", "every", "moment"],
    "buttonTextVariant": ["every", "moment", "enjoy"],
    "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5abbwDD1I1__GJwphLyJXIFCDSrRVioqjmA&usqp=CAU"
},
{
    "id": 10,
    "questionsRus": "Живи без сожалений",
    "questionsEng": ["live", "without", "regrets"],
    "buttonTextVariant": ["without", "regrets", "live"],
    "imageLink": "https://funik.ru/wp-content/uploads/2020/02/bcb36cd7ee5e11e2248b-2.jpg"
}

]
const questions = test[Math.floor(Math.random() * test.length)];

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
const image=document.querySelector(".image");



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
        image.classList.add('display-none');
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







const renderCard = () => {
    



                textVopros.textContent = questions.questionsRus;
                buttonText1.textContent =questions.buttonTextVariant[0];
                buttonText2.textContent = questions.buttonTextVariant[1];
                buttonText3.textContent = questions.buttonTextVariant[2];

                const pushed1 = () => {
                    let res = question.answers.push(questions.buttonTextVariant[0]);
                    text4.textContent = questions.buttonTextVariant[0];
                    buttonText1.classList.add("display-none")
                    text4.classList.remove("display-none");
                    placeCardOtvet.appendChild(text4);
                    return res;
                }
                const pushed2 = () => {
                    let res = question.answers.push(questions.buttonTextVariant[1]);
                    text5.textContent = questions.buttonTextVariant[1];
                    buttonText2.classList.add("display-none");
                    text5.classList.remove("display-none");
                    placeCardOtvet.appendChild(text5);
                    return res;
                }

                const pushed3 = () => {
                    let res = question.answers.push(questions.buttonTextVariant[2]);
                    text6.textContent = questions.buttonTextVariant[2];
                    buttonText3.classList.add("display-none");
                    text6.classList.remove("display-none");
                    placeCardOtvet.appendChild(text6);
                    return res;
                }



                buttonText1.addEventListener("click", pushed1);
                buttonText2.addEventListener("click", pushed2);
                buttonText3.addEventListener("click", pushed3);

                const proverka = () => {
                    let res = checkAnswers(question.answers, questions.questionsEng);

                    if (question.answers.length !== 3) {
                        buttonProverka.setAttribute("disabled", "disabled");
                        alert('Составьте предложение полностью')
                    }
                    if (question.answers.length === 3) {
                        if ((res[0] && res[1] && res[2]) === false) {
                            removeClics();
                        } else {
                            addClicks();
                        }
                        if (res[0] === false) {

                            text4.classList.add('btn-danger');
                        } else {

                            text4.classList.add('btn-success');
                        };

                        if (res[1] === false) {
                            text5.classList.add('btn-danger');
                        } else {
                            text5.classList.add('btn-success')
                        };
                        if (res[2] === false) {
                            text6.classList.add('btn-danger')
                        } else {
                            text6.classList.add('btn-success')
                        };
                        text4.classList.remove('btn-warning');
                        text5.classList.remove('btn-warning');
                        text6.classList.remove('btn-warning');

                        stepClicks();
                    }

                }

                buttonProverka.addEventListener("click", proverka);

            }

        

renderCard();
startOver.addEventListener("click", clearedStorage);
const url='https://vseobovsem.su/wp-content/uploads/2020/09/007667-5.jpg'

image.setAttribute('style', `background-image:url(${questions.imageLink})`);