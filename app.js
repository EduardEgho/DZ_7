function toggleAnswer(riddleId) {
    var answer = document.getElementById("answer-" + riddleId);
    var button = document.getElementById("button-" + riddleId);

    if (answer.style.display === "none") {
        answer.style.display = "block";
        button.textContent = "Скрыть ответ";
    } else {
        answer.style.display = "none";
        button.textContent = "Показать ответ";
    }
}