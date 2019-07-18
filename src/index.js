// console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
const imgContainer = document.getElementById("dog-image-container");
const imgUrls = "https://dog.ceo/api/breeds/image/random/4";

// dog pictures
fetch(imgUrls)
  .then(function(response) {
    const parsedJson =  response.json();
    return parsedJson;
  })
  .then(function(parsedJson){
    // debugger
    const urlArray = parsedJson.message;
    urlArray.forEach(function(url){
      const newImg = document.createElement("img");
      newImg.src = url;
      imgContainer.appendChild(newImg);
    })
    
  })

// dog breeds
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedList = document.getElementById('dog-breeds');
fetch(breedUrl)
.then(function(response){
  const parsedJson =  response.json();
  return parsedJson;
})
.then(function(parsedJson){
  const breedObj = parsedJson.message;
  const breeds = Object.keys(breedObj);
  // debugger
  breeds.forEach(breed => {
   const newLi = document.createElement('li');
    newLi.innerText = breed;
    newLi.classList.add("breed");
    breedList.appendChild(newLi);
    newLi.addEventListener('click', function(){
      newLi.classList.add('orchid');
    })
    searchBreed()
  })
  
})
})
function searchBreed(){
  const drop = document.getElementById('breed-dropdown');
  const allBreeds = document.querySelectorAll('.breed');

  drop.addEventListener('change', function(){
    document.querySelectorAll('.breed').forEach(function(breed){
      if (breed.innerHTML.charAt(0) !== drop.value){
        breed.classList.add("hidden");
      }else{
        breed.classList.remove("hidden");
      }
    })
// debugger
  }
  )}
