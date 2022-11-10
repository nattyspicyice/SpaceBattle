//THE ENEMY CLASS
class Enemy {
    constructor(name){
       this.name = name;
    };
    attackSpaceShip(){
            console.log("The enemy is attacking your ship!");
            deductFromHeroHp();
        }
};

//INDIVIDUAL ENEMY SHIPS
let enemyFleet = [];

const alienShip1 = new Enemy("ES 0001");
const alienShip2 = new Enemy("ES 0002");
const alienShip3 = new Enemy("ES 0003");
const alienShip4 = new Enemy("ES 0004");
const alienShip5 = new Enemy("ES 0005");
const alienShip6 = new Enemy("ES 0006");

enemyFleet.unshift(alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6);

//ENEMY STATS
let enemyHull = Math.floor(Math.random() * 4) + 3;
let enemyFp = Math.floor(Math.random() * 3) + 2;
let enemyAcc = (Math.floor(Math.random() * 3) + 6) / 10;

//THE HERO SPACESHIP
const spaceShip = {
    name: "USS HelloWorld",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attackEnemy(){
            console.log("The Enemy has been hit!")
            deductFromEnemyHp();
        },
    attackBack(){
            console.log("You fought back...")
            attackEnemy();
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
    let currentHeroHp = (spaceShip.hull - enemyFp);
    console.log(`Your current hull capacity has been reduced to ${currentHeroHp}`);

    if (currentHeroHp <= 10){
        console.log(`Your ship has been damaged by 50%! You have an option to retreat now.`);

        let optionToRetreat = prompt("RETREAT?", `Type "Y" for YES or "N" for NO.`);

        if (optionToRetreat === "Y" || optionToRetreat === "y"){
            spaceShip.retreat();
        } else if (optionToRetreat === "N" || optionToRetreat === "n"){
            console.log("You've chose to keep fighting!");
        }
    }
};
let currentEnemyHull = (enemyHull - 5);

function deductFromEnemyHp(){
    if (currentEnemyHull <= 0){
        console.log("Enemy Defeated!")
    }
};

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
        round1();
    }

};

startGame.addEventListener('click', Start);

//ROUND 1
console.log("ROUND 1")

function round1(){
    let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
    if(fire === 'FIRE' || fire === 'fire'){
        if (Math.random() >= 0.7){
            spaceShip.attackEnemy();
        } else {
            console.log(`Your attack missed. Now it is the enemy's turn to attack!`);

            const hitOrMiss = Math.random();

            if (hitOrMiss >= enemyAcc){
                console.log(`${alienShip1.name} is retaliating...`)
                alienShip1.attackSpaceShip();

                ////
            } else {
                console.log(`${alienShip1.name} is retaliating...`)
                console.log("The Enemy has attempted to attack your ship, but your ship was successful in dodging the attack! Now it's your turn to attack!");
                ///
            };
        };
    };

    if(currentEnemyHull > 0){
        console.log(`${alienShip1.name} fights back!`);
        alienShip1.attackSpaceShip();
        console.log("You fought back...")
        spaceShip.attackEnemy();
    } else {
        console.log(`${alienShip1.name} has been defeated, but ${alienShip2.name} is rapidly approaching! Prepare for ROUND 2`)
    }
};


//ROUND 2 

// function round2(){
//     let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
//     if(fire === 'FIRE' || fire === 'fire'){
//         spaceShip.attackEnemy();
//     };

//     if(currentEnemyHull > 0){
//         console.log('Your enemy is weakened... but not dead... it is their turn to attack.');

//         alienShip2.attackSpaceShip();

//         if(hitOrMiss >= enemyAcc){
//             console.log(`${alienShip2} is retaliating...`)
//         } else {
//             spaceShip.attackEnemy();
//             console.log(`${alienShip2} has been defeated, but ${alienShip3} is rapidly approaching! Prepare for ROUND 2`)
//         }

//     } else {
//         console.log(`${alienShip2} has been defeated, but ${alienShip3} is rapidly approaching! Prepare for ROUND 2`)
//     }
// };

// round2();

// //ROUND 3

// function round3(){
//     let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
//     if(fire === 'FIRE' || fire === 'fire'){
//         spaceShip.attackEnemy();
//     };

//     if(currentEnemyHull > 0){
//         console.log('Your enemy is weakened... but not dead... it is their turn to attack.');

//         alienShip3.attackSpaceShip();

//         if(hitOrMiss >= enemyAcc){
//             console.log(`${alienShip3} is retaliating...`)
//         } else {
//             spaceShip.attackEnemy();
//             console.log(`${alienShip3} has been defeated, but ${alienShip4} is rapidly approaching! Prepare for ROUND 2`)
//         }

//     } else {
//         console.log(`${alienShip3} has been defeated, but ${alienShip4} is rapidly approaching! Prepare for ROUND 2`)
//     }
// };

// round3();

// //ROUND 4

// function round4(){
//     let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
//     if(fire === 'FIRE' || fire === 'fire'){
//         spaceShip.attackEnemy();
//     };

//     if(currentEnemyHull > 0){
//         console.log('Your enemy is weakened... but not dead... it is their turn to attack.');

//         alienShip4.attackSpaceShip();

//         if(hitOrMiss >= enemyAcc){
//             console.log(`${alienShip4} is retaliating...`)
//         } else {
//             spaceShip.attackEnemy();
//             console.log(`${alienShip4} has been defeated, but ${alienShip5} is rapidly approaching! Prepare for ROUND 2`)
//         }

//     } else {
//         console.log(`${alienShip4} has been defeated, but ${alienShip5} is rapidly approaching! Prepare for ROUND 2`)
//     }
// };

// round4();

// //ROUND 5

// function round5(){
//     let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
//     if(fire === 'FIRE' || fire === 'fire'){
//         spaceShip.attackEnemy();
//     };

//     if(currentEnemyHull > 0){
//         console.log('Your enemy is weakened... but not dead... it is their turn to attack.');

//         alienShip5.attackSpaceShip();

//         if(hitOrMiss >= enemyAcc){
//             console.log(`${alienShip5} is retaliating...`)
//         } else {
//             spaceShip.attackEnemy();
//             console.log(`${alienShip5} has been defeated, but ${alienShip6} is rapidly approaching! Prepare for ROUND 2`)
//         }

//     } else {
//         console.log(`${alienShip5} has been defeated, but ${alienShip6} is rapidly approaching! Prepare for ROUND 2`)
//     }
// };

// round5();

// //ROUND 6

// function round6(){
//     let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
//     if(fire === 'FIRE' || fire === 'fire'){
//         spaceShip.attackEnemy();
//     };

//     if(currentEnemyHull > 0){
//         console.log('Your enemy is weakened... but not dead... it is their turn to attack.');

//         alienShip6.attackSpaceShip();

//         if(hitOrMiss >= enemyAcc){
//             console.log(`${alienShip6} is retaliating...`)
//         } else {
//             spaceShip.attackEnemy();
//             console.log(`${alienShip6} has been defeated!!!`)
//         }

//     } else {
//         console.log(`${alienShip6} has been defeated!!!`)
//     }
// };

// round6();

// //FINALE

// function finale(){
//     alert('CONGRATULATIONS. YOU HAVE SUCCESSFULLY DEFEATED THE ENEMY FLEET. THE EXTRATERRESTRIALS OF THE GALAXY OF JAVAEOUS SCRIPTIUS THANK YOU.')
// };

// finale();

