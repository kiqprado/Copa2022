function createGame(player1, id1, hour, player2, id2) {
  return `
  <ul>  
    <li>
      <img src="./assets/icon-${player1}.svg " alt=" Bandeira do ${player1}" />
      <h3> ${id1} </h3>
    </li>
    

    <strong> ${hour} </strong>

    <li>
      <img src="./assets/icon-${player2}.svg " alt=" Bandeira do ${player2}" />
      <h3> ${id2} </h3>
    </li>
  </ul>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class= "card" style= "animation-delay: ${delay}s" >
      <h2> ${date} <span> ${day} </span></h2>
        ${games}
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard(
    '17/12',
    'Sábado',
    createGame('croatia', 'CRO', '12:00', 'morocco', 'MAR')
  ) +
  createCard(
    '18/12',
    'Domingo',
    createGame('argentina', 'ARG', '12:00', 'france', 'FRA')
  )