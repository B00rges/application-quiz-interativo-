
const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['B','C','B','A','C','B']

let score = 0
time = null

const getAnswers = () => {
   let userAnswers = []

   correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
   })
    
   return userAnswers
}

const calculateUserScore = userAnswers => {
    
    userAnswers.filter((userAnswer, index) => {
        const userIAnswerScore = userAnswer === correctAnswers[index]
        
        if(userIAnswerScore) {
          score += 16
         
        }
 
        if(score === 96) {
         score += 4
        }
    
     })
}

const showFinalScore = () => {
    scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const resetUserScore = () => {
    score = 0
}

const animateFinalScore = () => {   
    let counter = 0
     timer = setInterval(() => {
        if(counter === score) {
        clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter++}%`
    },10)
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getAnswers()
    
    resetUserScore()
    calculateUserScore(userAnswers)
    animateFinalScore()
    showFinalScore()
    
})

