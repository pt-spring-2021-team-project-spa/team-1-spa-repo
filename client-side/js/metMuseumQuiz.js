const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice_text'))
const progressText = document.querySelector('#progress_text')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progress_bar_full')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What year did Picasso publish 'Head of a Woman'?",
        choice1: "1927",
        choice2: "1935",
        choice3: "1908",
        choice4: "1996",
        answer: 1,
    },
    {
        question: "Which decade was 'Mummy with a Painted Face' painted?",
        choice1: "1970-1980",
        choice2: "A.D. 270-280",
        choice3: "B.C. 320-330",
        choice4: "2010-2020",
        answer: 2,
    },
    {
        question: "Betwen what years was 'the Book of Painted Flowers' created?",
        choice1: "1010-1015",
        choice2: "1510-1515",
        choice3: "A.D. 430-435",
        choice4: "1987-1992",
        answer: 2,
    },
    {
        question: "What year was 'Interior with Paintings and a Pheasant' painted?",
        choice1: "1928",
        choice2: "1935",
        choice3: "1905",
        choice4: "1911",
        answer: 1,
    },    
    {
        question: "What year was 'A Forest at Dawn with a Deer Hunt' painted?",
        choice1: "1928",
        choice2: "1635",
        choice3: "1505",
        choice4: "1211",
        answer: 2,
    },    
    {
        question: "What year was 'Saint Catherine of Alexandria' painted?",
        choice1: "1111",
        choice2: "1639",
        choice3: "1999",
        choice4: "1620",
        answer: 4,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()