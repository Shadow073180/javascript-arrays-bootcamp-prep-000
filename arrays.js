chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(array, element) {
  return array = [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift()
}
function addElementToEndOfArray(array, element) {
  return array = [array, ...element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  return array = array.push(element)
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift() 
}
function removeElementFromBeginningOfArray(array){
  return array = array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}
function removeElementFromEndOfArray(array) {
  return array = array.slice(0, array.length - 1)
}