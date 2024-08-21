const calcAverage = (scores) => {
    const total = scores.reduce((odd, score) => odd + score, 0);
    return total / scores.length;
};

function checkWinner(dolphinScore, koalasScore) {
    const avgDolhins = calcAverage(dolphinScore);
    const avgKoalas = calcAverage(koalasScore);
    if (avgDolhins < avgKoalas) {
        console.log(`Koalas win ( ${avgKoalas } vs. ${avgDolhins})`);
    } else {
        console.log(`Dolphin win ( ${avgDolhins } vs. ${avgKoalas})`);
    }
}

//data 1 
dolphinScore1 = [44, 23, 71]
koalasScore1 = [65, 54, 49]

//data 2

dolphinScore2 = [85, 54, 41]
koalasScore2 = [23, 34, 27]


checkWinner(dolphinScore1, koalasScore1);
checkWinner(dolphinScore2, koalasScore2);