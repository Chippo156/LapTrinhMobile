const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer(){
      const anwser = Number(
      prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
    
      if(typeof anwser === 'number' && anwser >= 0 && anwser <= 3){
        this.answers[anwser]++;
      }
      else{
        alert('Invalid anwser')
      }
      this.displayResults('string');
      this.displayResults('array');

        

    
    },
    displayResults(type = 'array'){
        if(type === 'array')
        {
            console.log(this.answers);
        }else if(type==='string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
    
};

document.body.innerHTML += '<button id="pollButton">Answer poll</button>';
document.getElementById('pollButton').addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: testData1 }, 'array');
poll.displayResults.call({ answers: testData1 }, 'string');
poll.displayResults.call({ answers: testData2 }, 'array');
poll.displayResults.call({ answers: testData2 }, 'string');



