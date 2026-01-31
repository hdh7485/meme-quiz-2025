// 2025 Meme Quiz Questions
const questions = [
    {
        question: "What viral meme became Dictionary.com's 'word of the year' despite having no real meaning?",
        options: ["5-6", "6-7", "7-8", "8-9"],
        correct: 1,
        explanation: "6-7 became one of 2025's biggest memes - it means absolutely nothing, but kids found it hilarious and it spread everywhere!"
    },
    {
        question: "Which animal was at the center of a massive internet debate about whether 100 men could defeat it?",
        options: ["Lion", "Gorilla", "Bear", "Tiger"],
        correct: 1,
        explanation: "The '100 men vs 1 gorilla' debate took over the internet in 2025. Scientists even weighed in!"
    },
    {
        question: "What did TikTokers joke that Anthropologie was selling for $150?",
        options: ["A plant", "A rock", "A candle", "A book"],
        correct: 1,
        explanation: "The Anthropologie rock meme started as a prank video and grew so big that the brand itself joined in on the joke!"
    },
    {
        question: "Which musician inspired the meme 'Get me to God's country' after storming off SNL?",
        options: ["Luke Combs", "Morgan Wallen", "Kane Brown", "Blake Shelton"],
        correct: 1,
        explanation: "Morgan Wallen posted a photo of a private jet with the caption 'Get me to God's country' after his SNL appearance."
    },
    {
        question: "What was the name of the little French fish that dominated TikTok FYPs in 2025?",
        options: ["Pierre", "Jacques", "Steve", "Marcel"],
        correct: 2,
        explanation: "Le poisson Steve - just a little orange fish named Steve. Simple, random, and it ruled the For You Page."
    },
    {
        question: "What major religious event became unexpectedly memeable in 2025 with fancams and Brat edits?",
        options: ["Easter Sunday", "The Papal Conclave", "Christmas Mass", "Vatican Anniversary"],
        correct: 1,
        explanation: "The conclave to elect a new pope became a massive internet moment with countless memes, fancams, and breathless online coverage!"
    },
    {
        question: "What phrase from King of the Hill became a TikTok trend about embracing imperfection?",
        options: ["Propane and propane accessories", "That boy ain't right", "Wabi-sabi", "Yep"],
        correct: 2,
        explanation: "Bobby Hill's explanation of wabi-sabi (the beauty of imperfection) became a viral sound for showing off life's imperfect moments."
    },
    {
        question: "Which university's March Madness loss coincided perfectly with The White Lotus character wearing their merch?",
        options: ["UNC", "Duke", "Kentucky", "Kansas"],
        correct: 1,
        explanation: "Duke crashed out of March Madness just as The White Lotus featured a character spiraling in a Duke t-shirt. Perfect meme material!"
    },
    {
        question: "What TikTok phrase involving basketball became popular for subverting expectations in 2025?",
        options: ["Nothing but net", "Holy f-ing airball", "Swish city", "Brick house"],
        correct: 1,
        explanation: "'Holy f-ing airball' became a trend where people used the phrase to subvert expectations, often in a braggy way."
    },
    {
        question: "What absurd Trump meme involved a breakfast staple?",
        options: ["Trump take bacon", "Trump take egg", "Trump take toast", "Trump take coffee"],
        correct: 1,
        explanation: "Before tariffs sent the economy spinning, the internet had jokes about people voting for Trump for lower egg prices... as egg prices skyrocketed."
    },
    {
        question: "What running style from a 2025 movie became an IRL meme?",
        options: ["The Dune shuffle", "The Weapons run", "The Avatar sprint", "The Oppenheimer walk"],
        correct: 1,
        explanation: "A specific running scene from the movie 'Weapons' went viral, with people copying it IRL and using stills with funny captions."
    },
    {
        question: "Sophia James accidentally created which viral trend while trying to promote her song 'So Unfair'?",
        options: ["Team 3", "Squad 5", "Group 7", "Crew 9"],
        correct: 2,
        explanation: "Sophia James posted 7 promotional videos and Group 7 randomly went viral, with people claiming that group was the most elite!"
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    showScreen('quiz-screen');
    loadQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function loadQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Load options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(selectedIndex) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    options.forEach(opt => opt.classList.add('disabled'));
    
    // Mark selected
    options[selectedIndex].classList.add('selected');
    
    // Show correct/incorrect
    const isCorrect = selectedIndex === question.correct;
    if (isCorrect) {
        options[selectedIndex].classList.add('correct');
        score++;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    // Store user answer
    userAnswers.push({
        question: question.question,
        selected: question.options[selectedIndex],
        correct: question.options[question.correct],
        isCorrect: isCorrect,
        explanation: question.explanation
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

function showResults() {
    showScreen('result-screen');
    
    const percentage = (score / questions.length) * 100;
    document.getElementById('score-display').textContent = `${score}/${questions.length}`;
    
    // Result message
    let message = '';
    if (percentage === 100) {
        message = "🔥 PERFECT SCORE! You're a true meme lord! 🔥";
    } else if (percentage >= 80) {
        message = "🎉 Excellent! You really know your 2025 memes!";
    } else if (percentage >= 60) {
        message = "👍 Pretty good! You're keeping up with internet culture!";
    } else if (percentage >= 40) {
        message = "📱 Not bad! Time to spend more time online?";
    } else {
        message = "😅 Looks like you missed some memes this year!";
    }
    document.getElementById('result-message').textContent = message;
    
    // Breakdown
    const breakdownDiv = document.getElementById('result-breakdown');
    breakdownDiv.innerHTML = '<h3>Review Your Answers:</h3>';
    
    userAnswers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.style.marginBottom = '20px';
        answerDiv.innerHTML = `
            <p style="font-weight: bold; color: #2c2c54;">Q${index + 1}: ${answer.question}</p>
            <p style="color: ${answer.isCorrect ? '#10ac84' : '#ee5a6f'};">
                ${answer.isCorrect ? '✓' : '✗'} Your answer: ${answer.selected}
            </p>
            ${!answer.isCorrect ? `<p style="color: #10ac84;">✓ Correct answer: ${answer.correct}</p>` : ''}
            <p style="font-size: 0.9em; color: #666; margin-top: 5px;">${answer.explanation}</p>
        `;
        breakdownDiv.appendChild(answerDiv);
    });
}

function shareTwitter() {
    const percentage = (score / questions.length) * 100;
    const text = `I just scored ${score}/${questions.length} on the 2025 Meme Quiz! 🔥 Can you beat my score?`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    });
}

function restartQuiz() {
    startQuiz();
}

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
    // Add Google Analytics or other tracking here
    console.log(`Event: ${category} - ${action} - ${label}`);
}
