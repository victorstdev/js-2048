function random_num() {
  let chance = Math.floor(Math.random() * 100);
  chance < 5 ? number = 4 : chance < 25 ? number = 2: number = '';
  return number;
}

const centerboard = (board) => {
  for (let r = 0; r < 4; r++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let col = 0; col < 4; col++) {
      let column = document.createElement('div');
      let number = document.createTextNode(random_num())
      column.className = 'column'
      column.appendChild(number);
      row.appendChild(column);
    }
    board.appendChild(row);
  }
}


window.onload = () => {
  let board = document.getElementById('game');
  centerboard(board);
  document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;
    console.log(name, code);
  });
}