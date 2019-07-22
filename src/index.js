//challenge #1
const dogImageContainer = document.querySelector("#dog-image-container")

fetch('https://dog.ceo/api/breeds/image/random/4')

  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    (json.message).forEach(function(message){
      message
      const image = document.createElement("img")
      image.src = message
      dogImageContainer.appendChild(image)
    })
  })

//challenge #2

const dogBreeds = document.querySelector("#dog-breeds")


fetch('https://dog.ceo/api/breeds/list/all')

  .then(function(response){
    return response.json();
  })
  .then(function(json){
Object.keys(json.message).forEach(function(json){
  const breedsList = document.createElement("li")
  breedsList.innerHTML = json
  dogBreeds.appendChild(breedsList)


})

  })


  //challenge 3
// const breedDropdown = document.querySelector("#breed-dropdown")
//   //filter breeds by first letter
// function filterFirstLetter(e){
// breedDropdown.addEventListener("change", filterFirstLetter)
//
//   fetch('https://dog.ceo/api/breeds/list/all')
//
//     .then(function(response){
//       return response.json();
//         console.log(e)
//     })
//
//     .then(function(json){ //[ {breed: "whatever"} ]
//   Object.keys(json.message).filter(function(json){
//
//       const breedsList = document.createElement("li")
//       breedsList.innerHTML = json
//       breedsList.addEventListener("change", filterFirstLetter)
//
//       dogBreeds.appendChild(breedsList)
//
//       })
//     })
//   };

const breedDropdown = document.querySelector("#breed-dropdown")
console.log(breedDropdown.value)
function matchBreedFirstLetter(breedList){
  console.log("hi")
  breedDropdown.addEventListener("change", function(event){
    let letter = breedDropdown.options[breedDropdown.selectedIndex].value
    dogBreeds.innerHTML = "";

    fetch('https://dog.ceo/api/breeds/list/all')

      .then(function(response){
        return response.json();
      })
      .then(function(json){
        Object.keys(json.message).forEach(function(breed){
          const breedsList = document.createElement("li")
            if(breed.charAt(0) == letter){
                breedsList.innerHTML = breed
            dogBreeds.appendChild(breedsList)
          }





    })

      })




      // if (breedDropdown.options[breedDropdown.selectedIndex].value == "a" || "b" || "c" || "d")
      // return breedList[0]

  })

  // fetch('https://dog.ceo/api/breeds/list/all')

}
matchBreedFirstLetter()
    //
