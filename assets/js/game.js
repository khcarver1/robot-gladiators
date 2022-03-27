var playerName = window.prompt("What is your robot's name?");

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
//variable for how much money the player starts with
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        //fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
                } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                playerHealth = playerHealth - enemyAttack;
                console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            
                // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
                } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
                }
        }  

        else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            startGame();
            }        
                
        else {
            window.alert("dude you gotta enter something right, learn how to type bro")
        }
    }
}

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
    window.alert("You've lost your robot in battle.");
    var playAgainConfirm = window.confirm("Would you like to play again?");
    }
    if (playAgainConfirm) {
    // restart the game
    startGame();  
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
        } else {
        window.alert("You have lost your robot in battle! Game Over!");
        
        }
    }
endGame();
};
startGame();