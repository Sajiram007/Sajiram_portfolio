function effacer() {
    const cases = document.querySelectorAll('input[type="checkbox"]');
    cases.forEach(c => c.checked = false);
}

function corrige() {
    document.write('<a href="corrige.html">Réponses QCM</a>');
}
function correction() {
    const bonnesReponses = ["q1","q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
    let score = 0;

    bonnesResponses.forEach(id => {
        const caseCorrecte = document.getElementById(id);
        if (caseCorrecte && caseCorrecte.checked) {
            score++;
        }
    })
    document.getElementById("score").textContent = "Tu as " + score + " / 7";
}