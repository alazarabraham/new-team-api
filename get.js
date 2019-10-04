function get(url) {


fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=chicken&p=3")
.then(result => {
    console.log(result);
    return result.json();
})
.then(data =>{
  const chicken = data.results[2];
  console.log(chicken)
})
.catch(error => console.log(error));
}