//THE ENEMY CLASS
class Enemy {
    constructor(name, enemyHull, enemyFp, enemyAcc){
       this.name = name;
       this.enemyHull = enemyHull;
       this.enemyFp = enemyFp;
       this.enemyAcc = enemyAcc;
    };
    attackSpaceShip(){
            console.log("The enemy is attacking your ship!");
        };
};

//ENEMY STATS -  RANDOMLY GENERATED HULL, FIREPOWER, & ACCURACY
let enemyHull = (Math.floor(Math.random() * 4) + 3);
let enemyFp = (Math.floor(Math.random() * 3) + 2); 
let enemyAcc = ((Math.random() * (0.8 - 0.6) + 0.6));

//INDIVIDUAL ENEMY SHIPS
const alienShip1 = new Enemy("ES 0001", enemyHull, enemyFp, enemyAcc);
const alienShip2 = new Enemy("ES 0002", enemyHull, enemyFp, enemyAcc);
const alienShip3 = new Enemy("ES 0003", enemyHull, enemyFp, enemyAcc);
const alienShip4 = new Enemy("ES 0004", enemyHull, enemyFp, enemyAcc);
const alienShip5 = new Enemy("ES 0005", enemyHull, enemyFp, enemyAcc);
const alienShip6 = new Enemy("ES 0006", enemyHull, enemyFp, enemyAcc);

//THE ENEMY FLEET
let enemyFleet = [];

enemyFleet.unshift(alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6);

//THE SPACE SHIP
const spaceShip = {
    name: "USS HelloWorld",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attackEnemy(){ //this is a successful attack
            console.log("The Enemy has been hit!");
        },
    retreat(){ //can only retreat is hull is at 10
       if (Math.random() > 0.5){
            console.log("Retreat Successful! Enemy evaded!")
        } else {
        console.log("The enemy blocked your escape! Keep fighting.")
        };
    }
};

//DEDUCT SPACESHIP HULL
//this function is deployed only if the the attack is successful
function deductSpaceShipHull(){
    if(spaceShip.hull > 0){
        spaceShip.hull -= enemyFleet[0].enemyFp;
        console.log(`Your hull capacity has been reduced to ${spaceShip.hull}`);
    } else {
        alert(`GAME OVER. The enemy fleet has destroyed your ship. Refresh your browser to start over.`);
    }
};

//DEDUCT CURRENT ALIEN SHIP HULL
//this function is deployed only if the the attack is successful
function deductEnemyShipHull(){
    enemyFleet[0].enemyHull -= 5;
    console.log(`${enemyFleet[0].name}'s hull capacity has been reduced to ${enemyFleet[0].enemyHull}`);
};

//SPACESHIP ATTACK CHANCE
function spaceShipAttackChance(){
    if (Math.round(Math.random()) >= 1){
        //spaceship attack successful
        spaceShip.attackEnemy();

        //enemy hull points are deducted
        deductEnemyShipHull();
    } else {
        //spaceship attack misses
        console.log('Your attack missed.');

        // //enemy retaliates
        // enemyShipAttackChance();

    };
};

//ENEMY SHIP ATTACK CHANCE
function enemyShipAttackChance(){
    if(Math.random() >= enemyFleet[0].enemyAcc){
        //Enemy attack successful
        enemyFleet[0].attackSpaceShip();

        //spaceship hull pts are reduced
        deductSpaceShipHull();

    } else {
        //Enemy attack missed
        console.log("Enemy Attack Missed. Now it's your turn to attack!");

        // //spaceship retaliates
        // let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
        // if(fire === 'FIRE' || fire === 'fire'){
        //     spaceShipAttackChance();
        // }
    };
};

//INTRO
let plot = [
    `You are the captain of USS HelloWorld, traveling the beautiful galaxy of Javaeous Scriptius, when suddenly, you spot an enemy alien ship rapidly approaching!`,
    // `Your ship’s hull is equipped with intergalactic armor made of strong moon rock, giving you a starting health status of 20 points.`,
    // `Your ship also has powerful lasers made of stardust, damaging your enemies by 5 points with each hit.`,
    // `However, the spaceship’s mechanic has been on sabbatical for the last light-year and the ship’s lasers can be unreliable, only hitting the enemy ship 70% of the time.`,
    // `......`,
    // `......`,
    // `The Enemy is approaching!!! You have the advantage of attacking first - ready your aim and fire! Open your console to keep track of your stats!`
];

let startGame = document.getElementById('start-btn');

function Start(){
    for(let i=0; i<plot.length; i++){
        alert(plot[i]);
    }

    let begin = prompt("Ready?", "Type 'B' for begin.");
    if (begin === 'b' || begin === 'B'){
        gameRound();
    };
};

startGame.addEventListener('click', Start);

//THE GAME ROUND
function gameRound(){
    let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
    if(fire === 'FIRE' || fire === 'fire'){
        spaceShipAttackChance();

        //AFTER SPACESHIP ATTACKS...
        if (enemyFleet[0].enemyHull > 0){
            console.log(`${enemyFleet[0].name} is retaliating...`)
            enemyShipAttackChance();

        } else if (enemyFleet[0].enemyHull <= 0){
            console.log(`${enemyFleet[0].name} has been defeated.`);
            
            //this removes defeated enemy from enemy fleet array
            enemyFleet.shift();
        
            if (enemyFleet.length > 0){
            //if there are still enemies to battle, the next enemy ship approaches
            console.log(`${enemyFleet[0].name} is rapidly approaching.`);

            //if all enemies have been defeated
            } else if (enemyFleet.length = 0){
                console.log("CONGRATS ALL ENEMIES DEFEATED")
            };
        };
    };
};