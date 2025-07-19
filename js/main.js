// Terminal welcome animation for portfolio
const message = `
Initializing Portfolio v0.1
    Copyright (c) 2025 Artem Hrabovskyi <grabartem1@gmail.com>
    .............................................................................

    Type 'help' for a list of available commands.

    .............................................................................
`;
const output = document.getElementById('terminal-welcome');
const input = document.getElementById('terminal-input');
let i = 0;
let typing = true;

function typeWriter() {
  if (i < message.length) {
    output.innerHTML += message.charAt(i) === '\n' ? '<br>' : message.charAt(i);
    i++;
    setTimeout(typeWriter, 10);
  } else {
    typing = false;
    showPrompt();
  }
}

function showPrompt() {
  input.innerHTML = '';
  input.focus();
}

function printToTerminal(text) {
  output.innerHTML += `<br>${text}`;
  output.scrollTop = output.scrollHeight;
}

function handleCommand(cmd) {
  const command = cmd.trim().toLowerCase();
  switch (command) {
    case 'help':
      printToTerminal("<span style=\"color:#39ff14; text-shadow:0 0 8px #39ff14,0 0 2px #fff;\">Available commands:</span><br>about - Info about me<br>contact - My contacts<br>help - Show this help");
      break;
    case 'about':
      printToTerminal("I'm Artem Hrabovskyi");
      break;
    case 'contact':
      printToTerminal("Email: grabartem1@gmail.com<br>GitHub: <a href='https://github.com/artemgrab' target='_blank'>artemgrab</a>");
      break;
    case '':
      break;
    default:
      printToTerminal(`<span style="color:#ff3333; text-shadow:0 0 8px #ff3333,0 0 2px #fff;">Unknown command:</span> ${cmd}`);
  }
}


// No need for updateCursor or placeCaretAtEnd anymore



input.addEventListener('keydown', function(e) {
  if (typing) return;
  if (e.key === 'Enter') {
    e.preventDefault();
    const cmd = input.innerText;
    printToTerminal(`<span style='color:#FFA128;'>&gt; ${cmd}</span>`);
    handleCommand(cmd);
    input.innerHTML = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  input.setAttribute('spellcheck', 'false');
  input.focus();
});
