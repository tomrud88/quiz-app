const quizData = [
    {
        question:'How old is Paul McCartney',
        a:'65',
        b:'78',
        c:'72',
        d:'82',
        correct:'b'
    },{
        question:'What was the most popular programing language in 2020?',
        a:'JavaScript',
        b:'Python',
        c:'C#',
        d:'PHP',
        correct:'a'
    },{
        question:'Who win Champions League in 2019?',
        a:'Real Madrid',
        b:'Manchester United',
        c:'Liverpool',
        d:'Juventus',
        correct:'c'
    },{
        question:'Who is the President of USA',
        a:'Donald Trump',
        b:'Joe Biden',
        c:'Bill Clinton',
        d:'Barack Obama',
        correct:'b'
    },{
        question:'What does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'Jason Object Notation',
        d:'Helicopter Terminal Motorboats Lamborginis',
        correct:'a'
    },{
        question:'What year was JavaScript lunched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'1998',
        correct:'b'
    }
]
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const quiz = document.getElementById('quiz')

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit')

let currentQuiz= 0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false
    })
}

    submitBtn.addEventListener('click',()=>{
        
         const answer = getSelected()

        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }

            currentQuiz++;
         if(currentQuiz < quizData.length){
         loadQuiz()
         }else{
            quiz.innerHTML = `<h2>You answer correctly at ${score}/${quizData.length} questions</h2>
            <button class='reload' onclick='location.reload()'>Reload</button>`
          }
          
        }
       })

