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
            deductFromHeroHp();
        }
};

//ENEMY STATS
let enemyHull = (Math.floor(Math.random() * 4) + 3);
let enemyFp = (Math.floor(Math.random() * 3) + 2); 
let enemyAcc = ((Math.random() * (0.8 - 0.6) + 0.6));

//INDIVIDUAL ENEMY SHIPS
let enemyFleet = [];

const alienShip1 = new Enemy("ES 0001", enemyHull, enemyFp, enemyAcc);
const alienShip2 = new Enemy("ES 0002", enemyHull, enemyFp, enemyAcc);
const alienShip3 = new Enemy("ES 0003", enemyHull, enemyFp, enemyAcc);
const alienShip4 = new Enemy("ES 0004", enemyHull, enemyFp, enemyAcc);
const alienShip5 = new Enemy("ES 0005", enemyHull, enemyFp, enemyAcc);
const alienShip6 = new Enemy("ES 0006", enemyHull, enemyFp, enemyAcc);

enemyFleet.unshift(alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6);


//THE HERO SPACESHIP
const spaceShip = {
    name: "USS HelloWorld",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attackEnemy(){
            console.log("The Enemy has been hit!");
        },
    retreat(){
       if (Math.random() > 0.5){
            console.log("Retreat Successful! Enemy evaded!")
        } else {
        console.log("The enemy blocked your escape! Keep fighting.")
        }
    }
};

//DEDUCTION OF HP FOR BOTH ENEMY AND HERO

function deductFromHeroHp(){
    spaceShip.hull -= enemyFleet[0].enemyFp;
    console.log(`Your current hull capacity has been reduced to ${spaceShip.hull}`);

    if (spaceShip.hull <= 10){
        console.log(`Your ship has been damaged by 50%! You have an option to retreat now.`);

        let optionToRetreat = prompt("RETREAT?", `Type "Y" for YES or "N" for NO.`);

        if (optionToRetreat === "Y" || optionToRetreat === "y"){
            spaceShip.retreat();
        } else if (optionToRetreat === "N" || optionToRetreat === "n"){
            console.log("You've chose to keep fighting!");
        }
    }
};
// function deductFromEnemyHp(){};


//INTRO - ROUND 0
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
    }

};

startGame.addEventListener('click', Start);

//Game Round
function gameRound(){
    if(Math.round(Math.random()) >= 1){
    //attack successful
        spaceShip.attackEnemy();
        enemyFleet[0].enemyHull -= 5;

        console.log(`ENEMY HP STATUS = ${enemyFleet[0].enemyHull} || SPACESHIP HP STATUS = ${spaceShip.hull}`)
     } else {
    //attack misses
        console.log('Your attack missed.')
        };
    

    checkEnemyHull();

    function checkEnemyHull(){
        //if enemy is still alive
        if(enemyFleet[0].enemyHull > 0){
            //enemy attacks if accuracy is more or between 0.6-0.8
            console.log(`${enemyFleet[0].name} is retaliating...`)

            if(Math.random() >= enemyAcc){
                enemyFleet[0].attackSpaceShip();
            } else {
                console.log("Enemy Attack Missed")
            };
        //if enemy is dead
        } else if (enemyFleet[0].enemyHull <= 0) {
            console.log(`${enemyFleet[0].name} has been defeated, but ${enemyFleet[1].name} is rapidly approaching!`);
            enemyFleet.shift();
            console.log(enemyFleet);
        };
    };
};

// if(enemyFleet.length == 5){
//     gameRound();
// };

// if(enemyFleet.length == 4){
//     gameRound();
// };

// if(enemyFleet.length == 3){
//     gameRound();
// };

// if(enemyFleet.length == 2){
//     gameRound();
// };

// if(enemyFleet.length == 1){
//     gameRound();
// };

// if(enemyFleet.length = 0){
//     console.log('CONGRATULATIONS. YOU HAVE SUCCESSFULLY DEFEATED THE ENEMY FLEET. THE EXTRATERRESTRIALS OF THE GALAXY OF JAVAEOUS SCRIPTIUS THANK YOU.')
// };

