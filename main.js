quizData = [
    {
        question: "Hangi ünlü, üniversite mezunudur?",
        a: "Tarkan Tevetoğlu",
        b: "Yılmaz Erdoğan",
        c: "Bülent Ecevit",
        d: "Kadir İnanır",
        correct: "d"
    }, {
        question: "Yedi renkten oluşan gökkuşağının ortasındaki renk hangisidir?",
        a: "Mavi",
        b: "Sarı",
        c: "Yeşil",
        d: "Kırmızı",
        correct: "c"
    }, {
        question: "Dede Korkut'un Türk Destanları'nın özgün kopyaları hangi iki kentte bulunmaktadır?",
        a: "Lizbon-Roma",
        b: "Dresten-Vatikan",
        c: "Londra-Budapeşte",
        d: "Paris-Varşova",
        correct: "b"
    }, {
        question: "Her 100 yılda 7 cm yere yaklaşan Pisa Kulesi hangi yöne doğru eğilmektedir?",
        a: "Batı",
        b: "Kuzey",
        c: "Güney",
        d: "Doğu",
        correct: "c"
    }, {
        question: "Türkiye'nin hapis cezası alan ilk bilgisayar korsanı kimdir?",
        a: "Burak Çağlar",
        b: "Mahir Arabul",
        c: "Tolga Bilge",
        d: "Tamer Şahin",
        correct: "d"
    }
]

const quiz = document.querySelector(".quiz")
const answers = document.querySelectorAll(".answer")
const question = document.querySelector(".question")
const a_text = document.querySelector("#a_text")
const b_text = document.querySelector("#b_text")
const c_text = document.querySelector("#c_text")
const d_text = document.querySelector("#d_text")
const submit = document.querySelector(".submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    question.textContent = quizData[currentQuiz].question;
    a_text.textContent = quizData[currentQuiz].a;
    b_text.textContent = quizData[currentQuiz].b;
    c_text.textContent = quizData[currentQuiz].c;
    d_text.textContent = quizData[currentQuiz].d;

    answers.forEach((ans) => {
        ans.removeAttribute("disabled");
        ans.checked = false;
    });
}

submit.addEventListener("click", () => {
    const selectedAnswer = getSelected();
    question.innerText = quizData[currentQuiz].question;

    if (selectedAnswer) {
        answers.forEach((ans) => {
            ans.setAttribute("disabled", true);
        });

        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h1>Congratulations, your score is ${score * 20}!</h1>
            <button class="submit" onClick="location.reload()">Repeat</button>`;
        }
    }
});

function getSelected() {
    let answer;

    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.id;
        }
    });
    return answer;
}