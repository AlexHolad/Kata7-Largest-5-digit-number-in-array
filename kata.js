function solution(digits){
    const digitsStr = digits.toString()
    let biggestArr = [0,0,0,0,0];
    for(let i = 0; i < digits.toString().length-4; i++){
      let arrA = [parseInt(digitsStr[i]), parseInt(digitsStr[i+1]), parseInt(digitsStr[i+2]), parseInt(digitsStr[i+3]), parseInt(digitsStr[i+4])]
      if(parseInt(arrA.join('')) > parseInt(biggestArr.join(''))){
        biggestArr = arrA
      }
    }
    return biggestArr.join('')
  }


  console.log(solution(731671765313))