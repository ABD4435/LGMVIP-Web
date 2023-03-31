let input = '';

function addInput(value) {
  input += value;
  document.getElementById('display').value = input;
}

function clearInput() {
  input = '';
  document.getElementById('display').value = input;
}

function clearLastInput() {
  const regex = /\d+\.?\d*$/;
  const match = input.match(regex);
  if (match) {
    input = input.slice(0, match.index);
    document.getElementById('display').value = input;
  }
}


function calculate() {
  let result = eval(input.replace(/×/g, '*'));
  input = result.toString();
  document.getElementById('display').value = input;
}

function backspace() {
  input = input.slice(0, -1);
  document.getElementById('display').value = input;
}

function handleKeyDown(event) {
  switch (event.key) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      addInput(event.key);
      break;
    case '+':
    case '-':
      addInput(event.key);
      break;
    case '*':
      addInput('×');
      break;
    case '/':
      addInput(event.key);
      break;
    case '.':
      addInput(event.key);
      break;
    case 'Enter':
      calculate();
      break;
    case 'Escape':
      clearInput();
      break;
    case 'Backspace':
      backspace();
      break;
  }
}

document.addEventListener('keydown', handleKeyDown);



