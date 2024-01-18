// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) {
      anotherFunction();
      let stranger = true; // O(n)
      a++;
    }
    return a;
  }