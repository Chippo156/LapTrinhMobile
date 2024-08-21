function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}

function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    console.log(`Dolphins average score: ${dolphinsAverage.toFixed(2)}`);
    console.log(`Koalas average score: ${koalasAverage.toFixed(2)}`);

    const dolphinsMinScore = dolphinsScores.every(score => score >= 100);
    const koalasMinScore = koalasScores.every(score => score >= 100);

    if (dolphinsAverage > koalasAverage) {
        if (dolphinsAverage >= 100) {
            console.log('Dolphins win the trophy!');
        } else {
            console.log('Koalas win the trophy!');
        }
    } else if (koalasAverage > dolphinsAverage) {
        if (koalasAverage >= 100) {
            console.log('Koalas win the trophy!');
        } else {
            console.log('Dolphins win the trophy!');
        }
    } else {
        if (dolphinsMinScore && koalasMinScore) {
            console.log('It\'s a draw!');
        } else {
            console.log('No team wins the trophy.');
        }
    }
}

const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];


console.log('Test Data 1:');
determineWinner(dolphinsScores1, koalasScores1);

console.log('\nBonus Data 1:');
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);

console.log('\nBonus Data 2:');
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);