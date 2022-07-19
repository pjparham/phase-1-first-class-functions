// function performTrick() {
//     console.log("You get a treat!");
// }

// function receivesAFunction(whoIsAGoodBoy){
//     // performTrick();
//     whoIsAGoodBoy();
// } //literally just needs the ability to have a funtion passed through it and called
// // receivesAFunction(function(){
// //     console.log('His name is Teddy.');
// // })

// function returnsANamedFunction () {
//     return receivesAFunction;
// } //just needs to invoke another function that has been named somewhere else

// function returnsAnAnonymousFunction(){
//     return function () {
//         console.log('Hello world!');
//     };
// };
 //what it says, just make it return anon function

function receivesAFunction(fx) {
    fx();
}
function returnsANamedFunction() {
   return receivesAFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hi friend!");
    };
}