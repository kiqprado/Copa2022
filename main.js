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
    '03/12',
    'Sábado',
    createGame('netherlands', 'HOL', '12:00', 'united-states', 'EUA')
  ) +
  createCard(
    '03/12',
    'Sábado',
    createGame('argentina', 'ARG', '16:00', 'australia', 'AUS')
  ) +
  createCard(
    '04/12',
    'Domingo',
    createGame('france', 'FRA', '12:00', 'poland', 'POL')
  ) +
  createCard(
    '04/12',
    'Domingo',
    createGame('england', 'ING', '16:00', 'senegal', 'SEN')
  ) +
  createCard(
    '05/12',
    'Segunda',
    createGame('japan', 'JAP', '12:00', 'croatia', 'CRO')
  ) +
  createCard(
    '05/12',
    'Segunda',
    createGame('brazil', 'BRA', '16:00', 'south-korea', 'COR')
  ) +
  createCard(
    '06/12',
    'Terça',
    createGame('morocco', 'MAR', '12:00', 'spain', 'ESP')
  ) +
  createCard(
    '06/12',
    'Terça',
    createGame('portugal', 'POR', '16:00', 'switzerland', 'SUI')
  )
