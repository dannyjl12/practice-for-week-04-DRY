const findBig = (num1, num2) => {
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }
  return bigNum;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigger = findBig(num1, num2);
  return bigger * 2;
}

// find biggest number
// multiply it by 2

function divideBiggerNumByThree(num1, num2) {
  let bigger = findBig(num1, num2);
  return bigger / 3;
}

// find biggest number
// divide it by 3

function eatMostTacos(sum1, sum2) {

  let bigNum = findBig(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

// find biggest number
// add it into the sentence

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (weight1 === findBig(weight1, weight2)) {
    smallDog = weight2;
  } else {
    smallDog = weight1;
  }
return `I adopted a dog that weighs ${smallDog} pounds.`;
}

// find smallest number
// add it into the sentence

// create a helper function
// function that takes in 2 numbers and finds the biggest


/***************************************          HELPER FUNCTION          ***************************************/



/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
