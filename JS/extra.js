//THE SPACESHIP
const spaceShip = {
    name: "USS HelloWorld",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attackEnemy(){
        if (Math.random() > 0.7){
            console.log("The Enemy has been hit!")
            deductEnemyHealthPoints();
        } else {
            console.log(`Your attack missed. Now it is the enemy's turn to attack!`);
            alienShip.attackSpaceShip();
            
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
        if (randomAccuracyRange < 0.6){
            console.log("The enemy attack was unsuccessful!")

        } else if (randomAccuracyRange >= 0.6 && randomAccuracyRange <= 0.8){
            console.log("The enemy is attacking your ship!");
            deductSpaceShipHealthPoints();
        }
    }
};

//Function that reduces Enemy HP
function deductEnemyHealthPoints(){
    let newAlienShipHp = alienShip.randomHullRange(3, 6) - 5
    if (newAlienShipHp < 0){
        console.log("Enemy Defeated!")
    } else {
        console.log(`You weakened the Enemy Ship down to a hull capacity of ${newAlienShipHp}`)
    }
};

//Function that reduces Spaceship HP
function deductSpaceShipHealthPoints(){
    let currentSpaceShipHull = spaceShip.hull - alienShip.randomFirePowerRange;
    console.log(`The Enemy ship has attacked! Your hull capacity has been reduced to ${currentSpaceShipHull}`)

    if (currentSpaceShipHull < 10){
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