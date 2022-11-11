// function fireLasers(){    
//     if (Math.round(Math.random()) >= 1){
//     //attack successful
//         spaceShip.attackEnemy();
//         enemyFleet[0].enemyHull -= 5;

//         console.log(`ENEMY HP STATUS = ${enemyFleet[0].enemyHull} || SPACESHIP HP STATUS = ${spaceShip.hull}`)
//      } else {
//     //attack misses
//         console.log('Your attack missed.')
//         };
// };


// let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
// if(fire === 'FIRE' || fire === 'fire'){
//     fireLasers();
//  };




//     if(Math.random() >= 0.7){
//         //attack successful
//         spaceShip.attackEnemy();
//     } else {
//         //attack misses
//         console.log('Your attack missed.')
//     };

//     checkEnemyHull();
// };

// function checkEnemyHull(){
//     //if enemy is still alive
//     if(currentEnemyHull > 0){
//         //enemy attacks if accuracy is more or between 0.6-0.8
//         if(Math.random() >= enemyAcc){
//             alienShip1.attackSpaceShip();
//             gameRound();
//         } else {
//             console.log("Enemy Attack Missed")
//             gameRound();
//         };
//     //if enemy is dead
//     } else {
//         console.log('Enemy Defeated');
//     };
// };


// ///////

// // //ROUND 1
// // console.log("ROUND 1")

// // function round1(){
// // //Spaceship attacks first, attack is successful the accuracy is greater than or equal to 0.7
// //     let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);

// //     if(fire === 'FIRE' || fire === 'fire' && Math.random() >= 0.7){
// //         spaceShip.attackEnemy();
// //     } else {
// //         console.log(`Your attack missed. Now it is the enemy's turn to attack!`);
// //     };
// // /////

// // //if the enemy is not yet defeated, they have a chance to retaliate
// // //their retaliation is successful if their accuracy is better or equal to 0.6-0.8
// //     //if their retaliation attack misses, the spaceship fights back

// //     if(currentEnemyHull > 0){
// //         const hitOrMiss = Math.random();

// //         if(hitOrMiss >= enemyAcc){
// //             console.log(`${alienShip1.name} is retaliating...`)
// //             alienShip1.attackSpaceShip();
// //         } else {
// //             console.log(`${alienShip1.name} is retaliating...`)
// //             console.log("The Enemy has attempted to attack your ship, but your ship was successful in dodging the attack! Now it's your turn to attack!");
            
// //             let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);

// //             if(fire === 'FIRE' || fire === 'fire' && Math.random() >= 0.7){
// //                 spaceShip.attackEnemy();
// //             } else {
// //                 console.log(`Your attack missed. Now it is the enemy's turn to attack!`);
// //             };
// //         };
// //     } else {
// //         console.log(`${alienShip1.name} has been defeated, but ${alienShip2.name} is rapidly approaching! Prepare for ROUND 2`)
// //     };

// // //checks if enemy ship has been defeated, if it hasn't the round repeats
// // if(currentEnemyHull > 0){
// //     round1();
// // } else {
// //     console.log('Prepare for ROUND 2');
// // };

// /////
    
//     // const hitOrMiss = Math.random();

//     // if (hitOrMiss >= enemyAcc){
//     //     console.log(`${alienShip1.name} is retaliating...`)
//     //     alienShip1.attackSpaceShip();
//     // } else {
//     //     console.log(`${alienShip1.name} is retaliating...`)
//     //     console.log("The Enemy has attempted to attack your ship, but your ship was successful in dodging the attack! Now it's your turn to attack!");
//     //     spaceShip.attackBack();
//     //     };


//     // if(currentEnemyHull > 0){
//     //     console.log(`${alienShip1.name} fights back!`);
//     //     alienShip1.attackSpaceShip();
//     //     console.log("You fought back...")
//     //     spaceShip.attackBack();
//     // } else {
//     //     console.log(`${alienShip1.name} has been defeated, but ${alienShip2.name} is rapidly approaching! Prepare for ROUND 2`)
//     // }
// // };

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
        };
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

//DEDUCTION OF HP FOR HERO & RETREAT CONDITION
function deductFromHeroHp(){
    spaceShip.hull -= enemyFleet[0].enemyFp;
    console.log(`Your current hull capacity has been reduced to ${spaceShip.hull}`);

    if (spaceShip.hull = 10){
        console.log(`Your ship has been damaged by 50%! You have an option to retreat now.`);

        let optionToRetreat = prompt("RETREAT?", `Type "Y" for YES or "N" for NO.`);

        if (optionToRetreat === "Y" || optionToRetreat === "y"){
            spaceShip.retreat();
        } else if (optionToRetreat === "N" || optionToRetreat === "n"){
            console.log("You've chose to keep fighting!");
        }
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
        gameRound();
    }

};

startGame.addEventListener('click', Start);

function fireLasers(){
    if (Math.round(Math.random()) >= 1){
    //spaceship attack successful
        spaceShip.attackEnemy();
        enemyFleet[0].enemyHull -= 5;

        checkEnemyHull();
     } else {
    //spaceship attack misses
        console.log('Your attack missed.');
        checkEnemyHull();
   };
};

function checkEnemyHull(){
    //if enemy is still alive
    if(enemyFleet[0].enemyHull > 0 && enemyFleet.length > 0){
        
        console.log(`${enemyFleet[0].name} is retaliating...`)
        
        //enemy attacks if its accuracy is greater than or equal to 0.6-0.8
        if(Math.random() >= enemyAcc){
            enemyFleet[0].attackSpaceShip();

            console.log("Ready your lasers! It's your turn to fight back!");

            let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);

            if(fire === 'FIRE' || fire === 'fire'){
                fireLasers();
            };
            
        } else {
            console.log("Enemy Attack Missed. It's your turn to fight back!");

            let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
            if(fire === 'FIRE' || fire === 'fire'){
                fireLasers();
            };
        };
    //if enemy is dead
    } else if (enemyFleet[0].enemyHull <= 0 && enemyFleet.length > 0) {
        console.log(`${enemyFleet[0].name} has been defeated, but ${enemyFleet[1].name} is rapidly approaching!`);

        enemyFleet.shift();

        console.log(enemyFleet);

        let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
        if(fire === 'FIRE' || fire === 'fire'){
            fireLasers();
        };
    };
};

//GAME ROUND
function gameRound(){
    let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
    if(fire === 'FIRE' || fire === 'fire'){
        fireLasers();
        checkEnemyHull();
    };

    //GAME OVER & RESTART OPTION
    if(spaceShip.hull <= 0){
        let restart = prompt("GAME OVER - Your spaceship has been destroyed.", "Type 'R' to restart.")
        if(restart === 'R' || restart === 'r'){
        gameRound();
        };  
    };
    //IF ALL ENEMYS WERE DEFEATED
    if (enemyFleet.length = 0){
    alert("CONGRATULATIONS YOU WERE SUCCESSFUL IN DEFEATING THE ENEMY FLEET.")
    };
};