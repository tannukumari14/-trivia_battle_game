// get data from input 
function myFunction() {
    const player1 = document.getElementById("player1").value;
    const player2 = document.getElementById("player2").value;

    if (player1 && player2) {
        document.getElementById("demo").textContent = `${player1}    ${player2}`;
    } else {
        document.getElementById("demo").textContent = "Please enter names for both players.";
    }
}


// cateogry
fetch('https://the-trivia-api.com/v2/questions')
    .then(response => response.json())
    .then(data => {
        document.getElementById('tableRows').innerHTML = data
          .map(question => `<tr><td>${question.category}</td></tr>`)
          .join('');
    })
    .catch(console.error);
