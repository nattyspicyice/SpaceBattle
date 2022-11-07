//The Spaceship
const spaceShip = {
    name: "USS HelloWorld",
    startingHull: 20,
    firePower: 5,
    randomAccuracyRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    attackEnemy(){
        if (randomAccuracyRange === 0){
            console.log("Your attack missed!")
        } else {
            console.log("The Enemy has been hit!")
        };
    },
    retreat(){
        const randomBool = Math.random() > 0.5 ? "Retreat Successful! Enemy evaded!" : "The enemy blocked your escape! Keep fighting.";
        console.log(randomBool);
    }
};

//creating enemy ship
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

    setTimeout(function(){
        alert("You are the captain of USS HelloWorld, traveling the beautiful galaxy of Javaeous Scriptius, when suddenly, you spot an enemy alien ship rapidly approaching!");
    }, 5000);

    setTimeout(function(){
        alert("Your ship’s hull is equipped with intergalactic armor made of strong moon rock, giving you a starting health status of 20 points.");
    }, 5000);

    setTimeout(function(){
        alert("Your ship also has powerful lasers made of stardust, damaging your enemies by 5 points with each hit.")
    }, 5000);

    setTimeout(function(){
        alert("However, the spaceship’s mechanic has been on sabbatical for the last light-year and the ship’s lasers can be unreliable, only hitting the enemy ship 50% of the time.")
    }, 5000);

    setTimeout(function(){
        alert("...... The Enemy is approaching!!! Ready your aim and fire!")
    }, 5000);



