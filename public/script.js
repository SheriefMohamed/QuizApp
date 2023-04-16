const counter = document.getElementById('counter')
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
let result = [];
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    counter.innerText = `${currentQuiz+1}/${quizData.length}`
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
            score++
            result.push({
                question: currentQuiz+1,
                result: true
            })
       } else {
            result.push({
                question: currentQuiz+1,
                result: false
            })
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           let resultText = ``;
           result.map(r => {
            resultText+= `<span class="${r.result}">Q ${r.question}</span>`
           })
           quiz.innerHTML = `
           <h2>Score : ${score}/${quizData.length}</h2>
           <div class="result">${resultText}</div>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
