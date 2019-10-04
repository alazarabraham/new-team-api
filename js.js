"use strict"
var counter = 0;

document.querySelector("#submitform").addEventListener("submit", getrecipe);
function getrecipe(e){
  const submit = document.querySelector(".submit").value;
  fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=${submit}&p=3`)
  .then(response =>{
    if(response.status != 200){
      document.querySelector("#recipeList").innerHTML = 
      console.log("Error");
      throw error(response.statusText);
    }else{
      return response.json();
    }
  })
    .then(data=>{
    console.log(data);
  })
  .catch(err=> console.log(err));

  e.preventDefault();
}