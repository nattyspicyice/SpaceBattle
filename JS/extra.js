//THE STORY
let plot = [
    `You are the captain of USS HelloWorld, traveling the beautiful galaxy of Javaeous Scriptius, when suddenly, you spot an enemy alien ship rapidly approaching!`,
    `Your ship’s hull is equipped with intergalactic armor made of strong moon rock, giving you a starting health status of 20 points.`,
    `Your ship also has powerful lasers made of stardust, damaging your enemies by 5 points with each hit.`,
    `However, the spaceship’s mechanic has been on sabbatical for the last light-year and the ship’s lasers can be unreliable, only hitting the enemy ship 70% of the time.`,
    `......`,
    `......`,
    `The Enemy is approaching!!! You have the advantage of attacking first - ready your aim and fire! Open your console to keep track of your stats!`
];

//THE SPACESHIP
const spaceShip = {
    name: "USS HelloWorld",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attackEnemy(){
        if (Math.random() >= 0.7){
            console.log("The Enemy has been hit!")
            deductEnemyHealthPoints();
        } else {
            console.log(`Your attack missed. Now it is the enemy's turn to attack!`);
            alienShip.attackSpaceShip();
            deductSpaceShipHealthPoints() == spaceShip.hull;
        }
    },
    retreat(){
        if (Math.random() > 0.5){
            console.log("Retreat Successful! Enemy evaded!")
        } else {
            console.log("The enemy blocked your escape! Keep fighting.")
        }
    }
};

//THE ENEMY SHIP
const alienShip = {
    name: "Enemy Ship",
    randomHullRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomFirePowerRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomAccuracyRange(){
        return (Math.random() * 0.8)
    },
    attackSpaceShip(){
        if (alienShip.randomAccuracyRange < 0.6){
            console.log("The enemy attack was unsuccessful!")
        } else if (alienShip.randomAccuracyRange >= 0.6 && randomAccuracyRange <= 0.8){
            console.log("The enemy is attacking your ship!");
            deductSpaceShipHealthPoints() == spaceShip.hull;
            console.log(`The Enemy has attacked! Your ship's hull is now at a capacity of ${newAlienShipHp}`)
        }
    }
};

//Function that reduces Enemy HP
function deductEnemyHealthPoints(){
    let currentAlienHp = alienShip.randomHullRange(3, 6) - 5
    if (currentAlienHp <= 0){
        console.log("Enemy Defeated!")
    } else if (currentAlienHp > 0){
        console.log(`You weakened the Enemy Ship down to a hull capacity of ${currentAlienHp}.... The Enemy continues its attack!`)
        alienShip.attackSpaceShip();
        deductSpaceShipHealthPoints() == spaceShip.hull;
    }
};

//Function that reduces Spaceship HP
function deductSpaceShipHealthPoints(){
    spaceShip.hull -= alienShip.randomFirePowerRange(2,4);
    console.log(`The Enemy ship has attacked! Your hull capacity has been reduced to ${spaceShip.hull}`)

    if (spaceShip.hull <= 10){
        console.log(`Your ship has been damaged by 50%! You have an option to retreat now.`);
        let optionToRetreat = prompt("RETREAT?", `Type "Y" for YES or "N" for NO.`)

        if (optionToRetreat === "Y" || optionToRetreat === "y"){
            spaceShip.retreat();
        } else if (optionToRetreat === "N" || optionToRetreat === "n"){
            console.log("You've chose to keep fighting!")
        }
    }
};

//START THE GAME
let startGame = document.getElementById('start-btn');

function Start(){
    for(let i = 0; i < plot.length; i++){
    alert(plot[i]);
}
    alert(`The USS HelloWorld comes equipped with the latest technology, allowing you to accurately calculate the stats of your opponent. This enemy ship has a hull strength of ${alienShip.randomHullRange(3,6)}, an laser accuracy of ${alienShip.randomAccuracyRange(0.6, 0.8)}, and a firepower capacity of ${alienShip.randomFirePowerRange(2, 4)}`);

    firstAttack();
};

startGame.addEventListener('click', Start);

//THE FIRST ATTACK
function firstAttack(){
    let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE.', `Type 'FIRE' to initiate attack.`)
    if(fire === 'FIRE' || fire === 'fire'){
        console.log(spaceShip.attackEnemy());
}};


class Enemy {
    constructor(name, hull){
       this.name = name;
       this.hull = hull;
    }
    let hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    randomFirePowerRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    randomAccuracyRange(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    };
    attackSpaceShip(){
        if (randomAccuracyRange() < 0.6){
            console.log("The enemy attack was unsuccessful!")
        } else if (randomAccuracyRange() >= 0.6 && randomAccuracyRange() <= 0.8){
            console.log("The enemy is attacking your ship!");
            //deductSpaceShipHealthPoints() == spaceShip.hull;
            //console.log(`The Enemy has attacked! Your ship's hull is now at a capacity of ${newAlienShipHp}`)
        }
};