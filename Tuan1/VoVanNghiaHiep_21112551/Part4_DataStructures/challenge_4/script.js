
document.body.innerHTML = `
  <textarea id="inputText" rows="10" cols="30"></textarea>
  <button id="convertButton">Convert</button>
`;

document.getElementById('convertButton').addEventListener('click', function() {

  const text = document.getElementById('inputText').value;
  

  const lines = text.split('\n');
  

  const camelCaseLines = lines.map((line, index) => {
    const words = line.trim().toLowerCase().split('_');
    const camelCase = words.map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    
    console.log(`${camelCase} ${'✅'.repeat(index + 1)}`);
  });
});