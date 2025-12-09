// function testqcm() {
//     let score = 0;

//     if (document.getElementById('q1_c').checked) {
//         score++;
//     }

//     if (document.getElementById('q2_c').checked) {
//         score++;
//     }

//     if (document.getElementById('q3_b').checked && document.getElementById('q3_d').checked) { score++; }

//     if (document.getElementById('q4_d').checked) { score++; }

//     if (document.getElementById('q5_b').checked && document.getElementById('q5_c').checked) {  score++; }

//     if (document.getElementById('q6_c').checked) { score++; }

//     if (document.getElementById('q7_b').checked) { score++; }

//     if (document.getElementById('q8_a').checked) { score++; }

//     if (document.getElementById('q9_a').checked) { score++; }

//     if (document.getElementById('q10_c').checked) { score++; }

//     alert("Votre score est de : " + score + " bonnes réponses.");
// }

function effacer() {
    const cases = document.querySelectorAll('input[type="checkbox"]');
    cases.forEach(c => c.checked = false);
}

function corrige() {
    const bonnesReponses = ["q1", "q2", "q3", "q4", "q5", "q6", "q7","q8", "q9", "q10"];

    bonnesResponses.forEach(id => {
        const caseCorrecte = document.getElementById(id);
        if (caseCorrecte) {
            caseCorrecte.checked = true;
        }
    })
}

