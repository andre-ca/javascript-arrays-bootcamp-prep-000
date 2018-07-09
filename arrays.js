var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;

}

function destructivelyAddElementToBeginningOfArray(array, element){
  if(array !== 'undefined'){
    array.unshift(element);
  }
  else{
   //  const array = [element, ...array]
  }
  
  // if(array === 'undefined'){
  //   var arr = [];
  //   arr.unshift("element");
  // }
  // else {array.unshift(element);}
}

