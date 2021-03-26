
//I declared my item variable but did not assign it
let item;
//my myFavoriteFood array declared and iniatlly empty
let myFavoriteFood = []

//I created a food function that lets me enter an item  to put in the myFavoriteFood array using the push instance method
const food = (item) =>{
  //If the item already exists in the array, it will not duplicate the item in the array
  (myFavoriteFood.includes(item) === false) ? myFavoriteFood.push(item) :  console.log('This already exists in this collection')

  return `My Food Array ---> ${myFavoriteFood}`
}

//I created a function that checks to see if a third item exist in the array and returns its intended value. 
const thirdItem = () =>{
  myFavoriteFood[2] ? console.log(myFavoriteFood[2]) : console.log('There is no third item in collection')

  return myFavoriteFood[2] || 'Not present'
}

//Just for kicks this function allows me to change the third item and returns the modified array only if the third item exist otherwise there is nothing to change as I purposely designed this function to not modify the third item unless it already exists prior to running thhis function
const changeThirdItem = (item) =>{
  myFavoriteFood[2] ? myFavoriteFood[2] = item : console.log('Add a third item first since the index is empty')
  return myFavoriteFood
}
