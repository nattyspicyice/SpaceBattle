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