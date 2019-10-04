"use strict"

var counter = 0;
document.querySelector("#submitform").addEventListener("submit", getrecipe);
function getrecipe(e) {
  const submit = document.querySelector(".submit").value;
  fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=${submit}&p=3`)
    .then(response => {
      if (response.status != 200) {
        document.querySelector("#recipeList").innerHTML =
          console.log("Error");
        throw error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then(data => {
      createRecipeCard(data);
      console.log(data);
    })
    .catch(err => console.log(err));
  e.preventDefault();
}
function createRecipeCard(data) {
  //manipulate data
  let recipes = data.results;
  //loop through recipes
  const recipeList = document.getElementById("recipelist");
  recipeList.innerHTML = "";
  for (let index = 0; index < recipes.length; index++) {
    //create outer div to house all elements
    const cardDiv = document.createElement("div");
    //const warningDiv
    //create title  
    // const title = document.createElement("h1");
    // title.innerHTML = recipes[index].title;
    //create anchor tag for link
    const link = document.createElement("a");
    link.href = recipes[index].href;
    link.innerHTML = recipes[index].title;
    //get ingredients as string
    const ingredientsString = recipes[index].ingredients;
    //split ingredients string by ', ' into array
    const ingredientsArray = ingredientsString.split(', ');
    //create div to hold ingredients
    const ingredientsDiv = document.createElement("div");
    //create list for ingredients
    const ingredientsList = document.createElement("ol");
    //loop through ingredients array
    for (let j = 0; j < ingredientsArray.length; j++) {
      // if(ingredientsArray[j].toUpperCase() == "BREAD"){
      //   //tell people not to eat it
      // }
      // if(ingredientsArray[j].toUpperCase() == "RED CHILLIES" || ingredientsArray[j].toUpperCase() == "JALAPENOS"){
      //   //show a red pepper for hot
      // }
      switch (ingredientsArray[j].toUpperCase()) {
        case "BREAD":
          //tell people its not good
          //create h
          break;
        case "RED CHILLIES":
          //tell people its spicy
          break;
        case "JALAPENOS":
          //tell people its spicy
          break;
      }
      //create ingredient to add to list
      const ingredient = document.createElement("li");
      ingredient.innerHTML = ingredientsArray[j];
      ingredientsList.appendChild(ingredient);
    }
    ingredientsDiv.appendChild(ingredientsList);
    //cardDiv.appendChild(title);
    cardDiv.appendChild(link);
    cardDiv.appendChild(ingredientsDiv);
    recipeList.appendChild(cardDiv);
  }

}