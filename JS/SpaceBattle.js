//THE SPACESHIP
const spaceShip = {
    name: "USS HelloWorld",
    startingHull: 20,
    firePower: 5,
    accuracy: 0.7,
    attackEnemy(){
        const attackOutcome = Math.random() > 0.7 ? "The Enemy has been hit!" : "Your attack missed!";
        console.log(attackOutcome);
    },
    retreat(){
        const randomBool = Math.random() > 0.5 ? "Retreat Successful! Enemy evaded!" : "The enemy blocked your escape! Keep fighting.";
        console.log(randomBool);
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
            }
        }
    };
//alienShip.randomHullRange();

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


//IF THE ATTACK WAS A MISS - OPTION TO RETREAT
function optionToRetreatIfMiss(){
    if (spaceShip.attackEnemy.attackOutcome < 0.7) {
    let attackOrRetreat = prompt("Would you like to retreat?", `Type 'A' for ATTACK or 'R' for RETREAT.`)

    if(attackOrRetreat === "A" || attackOrRetreat === 'a'){
        confirm('You have chosen to ATTACK!')
    } else if (attackOrRetreat === "R"){
        confirm('You have chosen to RETREAT - check the console to see if your retreat was successful.')
        console.log(spaceShip.retreat())
    }
    } 
};
