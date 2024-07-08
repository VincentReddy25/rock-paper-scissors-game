function playGame(playerChoice) {

    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result;
    if (playerChoice === computerChoice) {
        result = "No One!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
                (playerChoice === 'paper' && computerChoice === 'rock') || 
                (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "HUMAN WINS!";
    } else {
        result = "COMPUTER WINS!";
    }

    
    document.getElementById("vers").innerHTML = `Human: ${playerChoice} v/s Computer: ${computerChoice}`
    document.getElementById('result').innerText = `The Winner is: ${result}`;

}

document.querySelector(".choices").addEventListener('click', () => {
    let screen = document.getElementById('screen')

    screen.classList.add("animation")

    setTimeout(function() {
        screen.classList.remove('animation');
      }, 1000)
})