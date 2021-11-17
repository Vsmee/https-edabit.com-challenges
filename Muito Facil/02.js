/*
    https://edabit.com/challenge/Q3n42rEWanZSTmsJm
    Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function calcAge(age){
    dias = 0
    for (let index = 0; index < age; index++) {
        if(age % 4 === 0){
            dias += 365
        }else{
            dias += 365
        }
    }
    return dias
}

console.log(calcAge(65))
