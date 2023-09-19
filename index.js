// code your solution here

function saturdayFun(target = 'roller-skate'){


    return `This Saturday, I want to ${target}!`;
   

}
saturdayFun();

function mondayWork(target = 'go to the office'){

    return `This Monday, I will ${target}.`

}
mondayWork();

function wrapAdjective(string = "*"){

    return function(parameter = "special"){
        return `You are ${string}${parameter}${string}!`
    }
}

