// 2025-2026 한국 밈 퀴즈
const questions = [
    {
        question: "인도네시아 스트리머 알딘 테가르가 방송 중 말해서 유행한 한국어 밈은?",
        options: ["괜찮아 딩딩딩", "난리자베스", "좋🤙다👍", "윤정아 왜요쌤"],
        correct: 0,
        explanation: "'괜찮아 딩딩딩'은 한국 문화에 관심 많은 인도네시아 게임 스트리머가 방송 중 무심코 내뱉은 말에서 시작되어 2025년 초대형 밈이 되었습니다!"
    },
    {
        question: "크리에이터 퐁귀가 만든, AOA '짧은 치마' 음악과 함께 골반을 흔드는 밈은?",
        options: ["골반통신", "매끈매끈하다", "나니가 스키", "첫번째 레슨"],
        correct: 0,
        explanation: "'골반통신' 밈은 '골반이 안 멈추는데 어떡해'로 시작해 '불안감 감지! 초조모드 전환' 등의 자막과 함께 엄청난 챌린지 열풍을 일으켰습니다!"
    },
    {
        question: "AI가 만든 기괴한 캐릭터들(봄바르디로 크로코딜로 등)이 등장하는 2025년 대표 밈은?",
        options: ["햄부기온", "이탈리안 브레인롯", "케데헌", "Chill 가이"],
        correct: 1,
        explanation: "'이탈리안 브레인롯'은 조잡한 AI 합성 캐릭터와 뜬금없는 이름이 합쳐져 10-25세대를 강타했습니다. 이해하려 하지 말고 즐기는 게 포인트!"
    },
    {
        question: "호르몬 이름에서 따온, 털털하고 직설적인 성향을 뜻하는 2025년 신조어는?",
        options: ["에겐남/녀", "테토남/녀", "칠 가이", "브레인롯"],
        correct: 1,
        explanation: "'테토남/녀'는 테스토스테론에서 따온 말로 리더십이 강하고 직설적인 사람을 의미합니다. 반대는 다정한 '에겐남/녀'!"
    },
    {
        question: "동방신기 유노윤호의 곡에서 나온, 자기계발이나 훈계를 과장할 때 쓰는 밈은?",
        options: ["첫번째 레슨", "두번째 챌린지", "세번째 미션", "네번째 스텝"],
        correct: 0,
        explanation: "'이건 첫 번째 레슨/좋은 건 너만 알기'에서 시작된 밈! 사소한 결심을 과장되게 선언할 때 쓰이며 주식 송으로도 유행했습니다."
    },
    {
        question: "힙합 가수 노아주다의 곡으로, 2025년 연말 차트 10위권에 오른 밈 역주행 곡은?",
        options: ["내가 그걸 모를까", "힙사사돈", "골든", "소다팝"],
        correct: 1,
        explanation: "'힙합보다 사랑, 사랑보다 돈(힙사사돈)'은 재치있는 가사와 중독성 있는 멜로디로 챌린지 댄스까지 만들어지며 알고리즘을 점령했습니다!"
    },
    {
        question: "2026년 초 초등학생 릴스에서 시작되어 고윤정 배우까지 참여한 챌린지는?",
        options: ["윤정아 왜요쌤", "매끈매끈하다", "좋🤙다👍", "놀기 신청"],
        correct: 0,
        explanation: "'윤정아 윤정아 / 왜요 쌤 왜요 쌤 / 피아노방에서 뭐 먹지 말랬지' 중독성 있는 멜로디와 귀여운 춤으로 2026년 초를 강타했습니다!"
    },
    {
        question: "2026년 유행한, 2026년 강타할 유행어라며 제안된 '난리 났다'의 재치있는 변형은?",
        options: ["난리마리우스", "난리자베스", "난리베이터", "난리사우루스"],
        correct: 1,
        explanation: "'난리자베스'는 긍정적/부정적 상황 모두에 쓸 수 있는 2026년 신조어! 투썸플레이스, 아도르 등 여러 브랜드가 활용 중입니다."
    },
    {
        question: "새끼손가락과 엄지를 왔다 갔다 하며 '좋다'를 표현하는 2026년 손동작 밈은?",
        options: ["짱👍이야", "좋🤙다👍", "최고✌️", "완벽🤞"],
        correct: 1,
        explanation: "유튜브 '낭만부부' 인터뷰 중 중년 시민의 유쾌한 손동작에서 시작! 🤙👍 이모지와 함께 '좋다'를 표현할 때 사용합니다."
    },
    {
        question: "전 UFC 파이터 김동현 선수의 긍정적 화법에서 나온 2026년 밈은?",
        options: ["힘내 이거", "운동 많이 된다", "화이팅 해", "잘할 수 있어"],
        correct: 1,
        explanation: "'운동 많이 된다 스트레스 많이 받을 거야'는 지옥 훈련 중에도 담담하게 격려하는 김동현 선수의 화법이 '가장 건강한 밈'으로 사랑받고 있습니다!"
    },
    {
        question: "엑스(X)에서 유행한, 기억하고 싶은 표현을 저장한다는 의미의 2026년 밈은?",
        options: ["저장하는 용사", "단어 습득하는 몬스터", "문장 수집하는 영웅", "밈 저장하는 기사"],
        correct: 1,
        explanation: "#단어습득하는몬스터는 눈에 띄는 표현을 다시 언급하며 기억하겠다는 의미로 사용! '독서하는 몬스터' 등으로도 응용됩니다."
    },
    {
        question: "고양이 '김냄비' 채널에서 나온, 애정을 표현할 때 쓰는 2026년 밈은?",
        options: ["놀기 신청하러 온 거야", "간식 받으러 온 거야", "사랑하러 온 거야", "인사하러 온 거야"],
        correct: 0,
        explanation: "'냄비! 놀기 신청하러 온 거야? 따지러 온 거야?'는 다정한 목소리와 귀여운 표현으로 최애나 반려동물에게 주접 멘트로 활용됩니다!"
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
    document.getElementById('question-number').textContent = `질문 ${currentQuestion + 1} / ${questions.length}`;
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
        message = "🔥 완벽한 점수! 당신은 진정한 밈 마스터! 🔥";
    } else if (percentage >= 80) {
        message = "🎉 훌륭해요! 2025-2026 밈을 완벽하게 알고 계시네요!";
    } else if (percentage >= 60) {
        message = "👍 좋아요! 밈 트렌드를 잘 따라가고 계시네요!";
    } else if (percentage >= 40) {
        message = "📱 나쁘지 않아요! 조금만 더 공부하면 밈 고수!";
    } else {
        message = "😅 아직 많은 밈을 놓치셨네요! 다시 도전해보세요!";
    }
    document.getElementById('result-message').textContent = message;
    
    // Breakdown
    const breakdownDiv = document.getElementById('result-breakdown');
    breakdownDiv.innerHTML = '<h3>정답 확인하기:</h3>';
    
    userAnswers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.style.marginBottom = '20px';
        answerDiv.innerHTML = `
            <p style="font-weight: bold; color: #2c2c54;">Q${index + 1}: ${answer.question}</p>
            <p style="color: ${answer.isCorrect ? '#10ac84' : '#ee5a6f'};">
                ${answer.isCorrect ? '✓' : '✗'} 내 답변: ${answer.selected}
            </p>
            ${!answer.isCorrect ? `<p style="color: #10ac84;">✓ 정답: ${answer.correct}</p>` : ''}
            <p style="font-size: 0.9em; color: #666; margin-top: 5px;">${answer.explanation}</p>
        `;
        breakdownDiv.appendChild(answerDiv);
    });
}

function shareTwitter() {
    const percentage = (score / questions.length) * 100;
    const text = `나는 2025-2026 한국 밈 퀴즈에서 ${score}/${questions.length}점! 🔥 너는 몇 점?`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('링크가 복사되었습니다!');
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
