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

//ENEMY STATS - HULL, FIREPOWER, & ACCURACY
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
//this function is deployed when the attack is successful
function deductSpaceShipHull(){
    spaceShip.hull -= enemyFleet[0].enemyFp;
    console.log(spaceShip.hull);
};

//DEDUCT CURRENT ALIEN SHIP HULL
//this function is deployed when the attack is successful
function deductEnemyShipHull(){
    enemyFleet[0].enemyHull -= 5;
    console.log(enemyFleet[0].enemyHull);
};

function gameRound(){
    let fire = prompt('THE ENEMY SHIP IS WITHIN RANGE', `Type "FIRE" to initiate attack.`);
    if(fire === 'FIRE' || fire === 'fire'){
        if (Math.round(Math.random()) >= 1){
            //spaceship attack successful
            spaceShip.attackEnemy();

            //enemy hull points are deducted
            deductEnemyShipHull();
        } else {
            //spaceship attack misses
            console.log('Your attack missed.');
        };
    };
};

//testing: everything works up to this point

//in order for there to be another round, you have to check the enemy status, if the first ship was defeated, then the next one enters 

