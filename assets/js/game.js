var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

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
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");
        }

        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
        break;
        } else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
        }
        
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
        }
    }
}
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robo