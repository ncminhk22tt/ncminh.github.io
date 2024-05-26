const quizData = [
    {
        question : "What is the most used programming language in 2019?",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascipt',
        correct: 'd'
    },
    {
        question: 'Who is the President of US ?',
        a: 'Florin Pop',
        b: 'Joe Biden',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for ?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Natation',
        d: 'Helicopters Terminal Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched ?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
]

let currentQuiz = 0
let score = 0

function loadQuiz(){
    allAnswer.forEach((answerEl) => {
        answerEl.checked = false
    })
    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    result_a.innerText = currentQuizData.a
    result_b.innerText = currentQuizData.b
    result_c.innerText = currentQuizData.c
    result_d.innerText = currentQuizData.d
}


const question = document.querySelector('.question')
const result_a = document.querySelector('.result_a')
const result_b = document.querySelector('.result_b')
const result_c = document.querySelector('.result_c')
const result_d = document.querySelector('.result_d')
const allAnswer = document.querySelectorAll('input')
const btn_submit = document.querySelector('.submit')
const quiz = document.querySelector('.quiz-header')

loadQuiz()
btn_submit.addEventListener('click' , () => {
    let answerId = undefined
    allAnswer.forEach((answer) => {
        if(answer.checked){
            answerId = answer.id
        }
    })
    if(answerId === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
    if(currentQuiz < quizData.length){
        loadQuiz()
    }else {
        result = document.createElement('h2')
        result.innerText = `You answered correctly at ${score} / ${quizData.length} question`
        btn_reload = document.createElement('button')
        btn_reload.innerText = 'Reaload'
        btn_reload.onclick = () => location.reload()
        quiz.innerHTML = ''
        quiz.append(result)
        quiz.append(btn_reload)
    }
})
