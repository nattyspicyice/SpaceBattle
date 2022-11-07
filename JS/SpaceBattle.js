//Need to create USS HelloWorld
//lasers
//you get to attack first
//you can only attack aliens in order
//after destroying a ship you have the option to make a hasty retreat
//hull is hitpoints (20)
//firepower is damage done to the hull (5)
//accuracy is the chance between 0 and 1 that the ship will hit the target (0.7)
//actions - attack, retreat

//////////////////////////////////

//Need to create alien ship
// first, make 1 ship then make 6
// they attack one ship at a time
//they wait for the outcome of the battle before attacking another ship
//Hull (between 3 and 6)
//firepower  (between 2 and 4)
//accuracy (between 0.6 and 0.8)
//actions - attack

//////////////////////////////////
// need a way to start the game - a function that runs the game?

//need a way to stop the game - give the user an option to stop the game (if/else)


//creating the spaceship
const spaceShip = {
    name: "USS HelloWorld",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,

    //actions
    attackAlienShip(){
        //cause damage to alien ship
    },
    retreat(){
        //attempt retreat
        //if retreat successful, spaceship has successful evaded enemy
        //else retreat unsuccessful, alien ship can strike spaceship
    }
};

//creating alien ship
const alienShip = {
    name: "Enemy Ship 1",
    randomHullRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomFirePowerRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomAccuracyRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    attackSpaceShip(){
        //cause damage to space ship
    }
};

alienShip.randomHullRange(3, 6);
alienShip.randomFirePowerRange(2,4);
alienShip.randomAccuracyRange(0.6, 0.8);

console.log(alienShip.randomAccuracyRange(0.6, 0.8));

