function fakepidgin(strings)  {
  return _.map(strings, function(ele)  {return 'Eh brah ' + ele;});
}

const temp = ['do you wanna eat', 'you like eat'];
console.log(fakepidgin(temp));