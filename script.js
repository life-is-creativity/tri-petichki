"use strict";

// Постоянные идентификаторы и порядок вопросов Q1–Q36.
const questions = [
  {"id":"Q1","text":"Я перфекционист(ка)."},
  {"id":"Q2","text":"Вся моя жизнь строится на взаимоотношениях с другими людьми."},
  {"id":"Q3","text":"Я ставлю работу на первое место."},
  {"id":"Q4","text":"Я мечтаю о том, каково это — быть влюблённым человеком."},
  {"id":"Q5","text":"Мне сложно выражать эмоции."},
  {"id":"Q6","text":"Страх, что другие воспользуются мной в своих интересах, мешает мне больше доверять людям."},
  {"id":"Q7","text":"Мне постоянно нужно получать новый опыт."},
  {"id":"Q8","text":"Я естественным образом становлюсь лидером."},
  {"id":"Q9","text":"Когда другие спорят, я покидаю комнату."},
  {"id":"Q10","text":"Я стремлюсь к эффективности."},
  {"id":"Q11","text":"Мне трудно говорить «нет»."},
  {"id":"Q12","text":"Мне нравится выделяться."},
  {"id":"Q13","text":"Мне действительно нравится чувство, в котором радость смешивается с грустью."},
  {"id":"Q14","text":"Я провожу часы наедине со своими хобби."},
  {"id":"Q15","text":"Я спрашиваю мнения других, прежде чем принять решение."},
  {"id":"Q16","text":"Я могу поддержать разговор с кем угодно и о чем угодно."},
  {"id":"Q17","text":"Мне нравятся обсуждения, не приводящие к согласию."},
  {"id":"Q18","text":"Я держу свои мысли при себе, чтобы не нарваться на проблемы."},
  {"id":"Q19","text":"Мне часто приходится переделывать чужую работу."},
  {"id":"Q20","text":"Я получаю огромное удовольствие, помогая другим в достижении их целей."},
  {"id":"Q21","text":"Хорошо просыпаться, когда впереди целый день запланированных занятий."},
  {"id":"Q22","text":"Я пла́чу."},
  {"id":"Q23","text":"Я трачу большую часть времени, пытаясь понять разные вещи."},
  {"id":"Q24","text":"Я подстраиваюсь под общепринятые нормы и ожидания окружающих."},
  {"id":"Q25","text":"Я раскован(на)."},
  {"id":"Q26","text":"Я хочу, чтобы люди говорили мне правду, не щадя мои чувства."},
  {"id":"Q27","text":"Я принимаю других такими, какие они есть, и проявляю большую гибкость."},
  {"id":"Q28","text":"Я держу свои вещи в порядке."},
  {"id":"Q29","text":"Для меня семья на первом месте."},
  {"id":"Q30","text":"Деньги важны для моего счастья."},
  {"id":"Q31","text":"Я скорее приму сторону мятежников, чем власть имущих."},
  {"id":"Q32","text":"Мне нравятся задачи, требующие умственного напряжения."},
  {"id":"Q33","text":"Я преданный человек."},
  {"id":"Q34","text":"Я всегда пытаюсь снять напряжение хорошей шуткой."},
  {"id":"Q35","text":"Мне больше нравится, когда лидеры действуют решительно."},
  {"id":"Q36","text":"Я избегаю противостояний."},
];

// Числовой идентификатор и вопросы шкалы не зависят от её названия.
const scales = [
  {
    "id": 1,
    "name": "Способности рациональности и социальной ответственности",
    "questionIds": [
      "Q1",
      "Q10",
      "Q19",
      "Q28"
    ],
    "paragraphs": [
      "В потенциале – сдержанность, сознательность, зрелость, самодисциплина.",
      "Обратная сторона потенциала – жесткий самоконтроль, перфекционизм, критика и фиксация на собственной праведности."
    ]
  },
  {
    "id": 2,
    "name": "Способности эмпатии и альтруизма",
    "questionIds": [
      "Q2",
      "Q11",
      "Q20",
      "Q29"
    ],
    "paragraphs": [
      "В потенциале – ориентированность на других, забота об окружающих, способность принести себя в жертву, когда необходимо, щедрость и проявление заботы.",
      "Обратная сторона потенциала – навязчивость, собственничество, манипуляции и самообман."
    ]
  },
  {
    "id": 3,
    "name": "Способности самоуважения и саморазвития",
    "questionIds": [
      "Q3",
      "Q12",
      "Q21",
      "Q30"
    ],
    "paragraphs": [
      "В потенциале – амбициозность, самосовершенствование, личностное совершенство, уверенность в себе и социальное признание.",
      "Обратная сторона потенциала – прагматичный расчет, надменный нарциссизм, эксплуатация окружающих и враждебность."
    ]
  },
  {
    "id": 4,
    "name": "Способности самопознания и творчества",
    "questionIds": [
      "Q4",
      "Q13",
      "Q22",
      "Q31"
    ],
    "paragraphs": [
      "В потенциале – интуиция, чувствительность, индивидуальность, самовыражение, самораскрытие.",
      "Обратная сторона потенциала – чрезмерное копание в себе, погруженность в себя, потакание своим желаниям и слабостям, сомнения и депрессия."
    ]
  },
  {
    "id": 5,
    "name": "Способности абстрактного понимания и экспертного знания",
    "questionIds": [
      "Q5",
      "Q14",
      "Q23",
      "Q32"
    ],
    "paragraphs": [
      "В потенциале – любопытство, восприимчивость, приобретение знания, изобретательная оригинальность и техническая экспертиза.",
      "Обратная сторона потенциала – спекулятивная теоретизация, эмоциональная отстраненность, эксцентричность, социальная отчужденность, мысленное искажение."
    ]
  },
  {
    "id": 6,
    "name": "Способности доверия и социальной принадлежности",
    "questionIds": [
      "Q6",
      "Q15",
      "Q24",
      "Q33"
    ],
    "paragraphs": [
      "В потенциале – установление эмоциональной взаимосвязи с окружающими, отождествление себя с группой, общительность, трудолюбие, верность и желание приложить больше усилий.",
      "Обратная сторона потенциала – зависимость, метания, склонность сеять распри, бунтарство, тревожность и комплекс неполноценности."
    ]
  },
  {
    "id": 7,
    "name": "Способности активного состояния и удовлетворенности",
    "questionIds": [
      "Q7",
      "Q16",
      "Q25",
      "Q34"
    ],
    "paragraphs": [
      "В потенциале – энтузиазм, продуктивность, достижение поставленных целей, приобретение навыков, любопытство, полнота переживаний, желание изменений и разнообразия.",
      "Обратная сторона потенциала – гиперактивность, поверхностность, импульсивность, излишества и бегство от действительности."
    ]
  },
  {
    "id": 8,
    "name": "Способности лидерства и самоопределения",
    "questionIds": [
      "Q8",
      "Q17",
      "Q26",
      "Q35"
    ],
    "paragraphs": [
      "В потенциале – уверенность в себе, способность к самоопределению, способность полагаться на себя, великодушие и способность проявлять инициативу.",
      "Обратная сторона потенциала – склонность к доминированию над другими, жестокая нечувствительность, агрессивность и беспощадность."
    ]
  },
  {
    "id": 9,
    "name": "Способности восприимчивости и межличностного посредничества",
    "questionIds": [
      "Q9",
      "Q18",
      "Q27",
      "Q36"
    ],
    "paragraphs": [
      "В потенциале – эмоциональная стабильность, принятие, несфокусированность на собственных нуждах, эмоциональная и физическая выносливость, а также способность создания гармонии с окружающими.",
      "Обратная сторона потенциала – склонность к пассивности, разобщенность эмоций и внимания, небрежность и отчужденность."
    ]
  }
];
const MAX_SCORE = 20;

// Ответы существуют только в памяти открытой страницы.
let answers = Array(questions.length).fill(null);
let currentQuestion = 0;
let activeScreen = "intro";

const screens = {
  intro: document.getElementById("intro-screen"),
  question: document.getElementById("question-screen"),
  result: document.getElementById("result-screen"),
};
const questionTitle = document.getElementById("question-title");
const questionCounter = document.getElementById("question-counter");
const progress = document.getElementById("question-progress");
const answerButtons = document.querySelectorAll(".answer-button");
const backButton = document.getElementById("back-button");

function showScreen(name) {
  activeScreen = name;
  Object.entries(screens).forEach(([key, screen]) => {
    screen.hidden = key !== name;
  });
}

function focusHeading(heading) {
  // Фокус на новом вопросе помогает при управлении с клавиатуры и скринридером.
  heading.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showQuestion() {
  showScreen("question");
  questionTitle.textContent = questions[currentQuestion].text;
  questionTitle.dataset.questionId = questions[currentQuestion].id;
  questionCounter.textContent = `${currentQuestion + 1} из ${questions.length}`;
  progress.max = questions.length;
  progress.value = currentQuestion;
  progress.textContent = `${currentQuestion} из ${questions.length}`;
  progress.setAttribute("aria-valuetext", `Вопрос ${currentQuestion + 1} из ${questions.length}`);
  backButton.disabled = currentQuestion === 0;

  const previousAnswer = answers[currentQuestion];
  answerButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.value) === previousAnswer));
  });
  document.getElementById("previous-answer-note").hidden = previousAnswer === null;
  focusHeading(questionTitle);
}

function startTest() {
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  clearResults();
  showQuestion();
}

function isValidAnswer(value) {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

function submitAnswer(value) {
  if (activeScreen !== "question" || !isValidAnswer(value)) return;
  clearResults();
  answers[currentQuestion] = value;

  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    showQuestion();
  } else {
    showResults();
  }
}

function calculateScores(responses) {
  if (responses.length !== questions.length || !questions.every((_, index) => isValidAnswer(responses[index]))) {
    throw new Error("Для подсчёта нужны 36 целых ответов от 1 до 5.");
  }
  const responsesById = new Map(questions.map((question, index) => [question.id, responses[index]]));
  return scales.map((scale) => scale.questionIds.reduce((sum, id) => sum + responsesById.get(id), 0));
}

function getHighlightedScaleIds(scores) {
  // Повторы сохраняются: нужен второй результат, а не второй уникальный балл.
  const threshold = [...scores].sort((a, b) => b - a)[1];
  return new Set(scales.filter((scale) => scores[scale.id - 1] >= threshold).map((scale) => scale.id));
}

function clearResults() {
  ["leading-results", "scale-results", "scale-descriptions"].forEach((id) => {
    document.getElementById(id).replaceChildren();
  });
  document.getElementById("leading-results-label").textContent = "Два ведущих результата";
  const tieNote = document.getElementById("tie-note");
  tieNote.textContent = "";
  tieNote.hidden = true;
}

function showResults() {
  // Ни пропуски, ни некорректные значения не допускаются к подсчёту.
  const unansweredIndex = questions.findIndex((_, index) => !isValidAnswer(answers[index]));
  if (unansweredIndex !== -1) {
    clearResults();
    currentQuestion = unansweredIndex;
    showQuestion();
    return;
  }

  const scores = calculateScores(answers);
  const highlightedScaleIds = getHighlightedScaleIds(scores);
  const allEqual = scores.every((score) => score === scores[0]);
  clearResults();
  document.getElementById("leading-results-label").textContent = highlightedScaleIds.size > 2
    ? "Ведущие результаты: равенство баллов"
    : "Два ведущих результата";

  const leadingScales = scales.filter((scale) => highlightedScaleIds.has(scale.id))
    .sort((a, b) => scores[b.id - 1] - scores[a.id - 1] || a.id - b.id);
  const leadingResults = document.getElementById("leading-results");
  leadingScales.forEach((scale) => {
    const item = document.createElement("div");
    item.className = "leading-item";
    item.dataset.scaleId = scale.id;
    const name = document.createElement("p");
    name.className = "leading-name";
    name.textContent = `Направление ${scale.id}. ${scale.name}`;
    const score = document.createElement("p");
    score.className = "main-score";
    score.textContent = `${scores[scale.id - 1]} из ${MAX_SCORE} баллов`;
    item.append(name, score);
    leadingResults.append(item);
  });

  const tieNote = document.getElementById("tie-note");
  if (allEqual) {
    tieNote.textContent = "Все девять шкал набрали одинаковое количество баллов. Выделить два ведущих направления по этим ответам нельзя";
  } else if (highlightedScaleIds.size > 2) {
    tieNote.textContent = "На границе двух ведущих результатов есть равенство баллов, поэтому выделены все соответствующие направления";
  } else if (scores[leadingScales[0].id - 1] === scores[leadingScales[1].id - 1]) {
    tieNote.textContent = "Две ведущие шкалы набрали одинаковый максимальный балл и разделяют первое место.";
  }
  tieNote.hidden = tieNote.textContent === "";

  // Один набор идентификаторов управляет итогом, числовыми шкалами и карточками.
  const scaleResults = document.getElementById("scale-results");
  const descriptions = document.getElementById("scale-descriptions");
  scales.forEach((scale) => {
    const score = scores[scale.id - 1];
    const isLeading = highlightedScaleIds.has(scale.id);
    const row = document.createElement("li");
    row.className = `scale-row${isLeading ? " is-leading" : ""}`;
    row.dataset.scaleId = scale.id;

    const label = document.createElement("span");
    label.className = "scale-label";
    label.textContent = `Шкала ${scale.id}`;

    const track = document.createElement("span");
    track.className = "scale-track";
    track.setAttribute("aria-hidden", "true");
    const fill = document.createElement("span");
    fill.className = "scale-fill";
    fill.style.width = `${score / MAX_SCORE * 100}%`;
    track.append(fill);

    const value = document.createElement("span");
    value.className = "scale-score";
    value.textContent = `${score} / ${MAX_SCORE}`;
    value.setAttribute("aria-label", `${score} из ${MAX_SCORE} баллов`);

    row.append(label, track, value);
    scaleResults.append(row);

    const card = document.createElement("article");
    card.className = `description-card${isLeading ? " is-leading" : ""}`;
    card.dataset.scaleId = scale.id;
    const heading = document.createElement("h3");
    heading.id = `scale-description-${scale.id}`;
    heading.textContent = `Направление ${scale.id}. ${scale.name}`;
    card.setAttribute("aria-labelledby", heading.id);
    card.append(heading);
    if (isLeading) {
      const badge = document.createElement("p");
      badge.className = "main-score";
      badge.textContent = "Один из ведущих результатов";
      card.append(badge);
    }
    scale.paragraphs.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.className = "description-text";
      paragraph.textContent = text;
      card.append(paragraph);
    });
    descriptions.append(card);
  });

  showScreen("result");
  focusHeading(document.getElementById("result-title"));
}

document.getElementById("start-button").addEventListener("click", startTest);
document.getElementById("restart-button").addEventListener("click", startTest);
answerButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Повторный click при двойном щелчке не должен отвечать на следующий вопрос.
    if (event.detail > 1) return;
    submitAnswer(Number(button.dataset.value));
  });
});
backButton.addEventListener("click", () => {
  if (activeScreen === "question" && currentQuestion > 0) {
    currentQuestion -= 1;
    showQuestion();
  }
});
document.getElementById("edit-button").addEventListener("click", () => {
  currentQuestion = questions.length - 1;
  clearResults();
  showQuestion();
});
