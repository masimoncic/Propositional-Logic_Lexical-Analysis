const lexer = new PropositionalLogicLexer();

function makeList() {
  let input = document.getElementById('input');
  const list = document.getElementById('list');
  let tokens = lexer.tokenAll(input.value);
  list.innerHTML = '';
  for(let i = 0; i < tokens.length; i++) {
    let li = document.createElement('li');
    let temp = tokens[i];
    li.innerText = `name: ${temp.name}, value: ${temp.value}, pos: ${temp.pos}`
    list.appendChild(li);
  }
}

const button = document.getElementById('lexButton');
button.addEventListener('click', makeList);