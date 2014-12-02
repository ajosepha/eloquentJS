var minNum = function(a, b){
  if(a > b){
    console.log(b);
  }
  else if(a < b){
    console.log(a);
  }
  else{
    console.log(a);
  };
};

var countsB = function(string){
  var counter = 0
  for(var i=0; i < string.length; i++){
    if(string[i]=='B'){
      counter += 1
    }
  }
  return counter
}