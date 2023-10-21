// <-- The Function

function FindLargestNumber(list){
  // <-- Check if the list is empty
  if(list.length === 0 || list.length === null){
    return `The ${list} is empty😕`;
  }

  // <-- Variables 
  let largest = list[0];

  // <-- Main Proccess
  for(let i = 0; i < list.length; i++){
    if(list[i] > largest){
       largest = list[i]
    }
  };
  return `LargestNum: ${largest}`
}
