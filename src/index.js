window.addEventListener("DOMContentLoaded", () => {
 
    console.log('%c HI', 'color: firebrick')
    

    //////// API URLS ////////////
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    ///////////////////////
    
    const breedList = document.querySelector("#dog-breeds")
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => json.message)
	.then(imgArray => imgArray.forEach( (image) => {
        let newImage = document.createElement("img")
        newImage.src = `${image}`
        document.getElementById("dog-image-container").appendChild(newImage)
        }  ) 
        )

        ////Challenge 2 ///////////
        // - on page load, fetch all the dog breeds using the url above ⬆️
        // - add the breeds to the page in an `<ul>` (take a look at the included `index.html`)


        function changeTextToGreen(event) {
            // alert(event.target.innerText)
            event.target.style = "color: #33FFBD"
        }

        fetch(breedUrl)
        .then(res => res.json())
        .then(json => json.message)
        .then(message => Object.keys(message)) 
        .then(dogBreeds => dogBreeds.forEach ( (breed) => {
            let newBreedListItem = document.createElement("li")
            newBreedListItem.innerText = breed
            newBreedListItem.addEventListener("click", changeTextToGreen)
            breedList.appendChild(newBreedListItem) 
            } )
        )

        // Challenge 3 (see changeTexttoGreen for code)
        // Once all of the breeds are rendered in the `<ul>`, add JavaScript so that the
        // font color of a particular `<li>` changes _on click_. This can be a color of
        // your choosing.

        // When the user clicks any of the dog breed list items, the color the text should
        // change.



        // Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
        // so that the user can filter breeds that start with a particular letter using a
        // dropdown.

        // For example, if the user selects 'a' in the dropdown, only show the breeds with
        // names that start with the letter a. For simplicity, the dropdown only includes
        // the letters a-d. However, we can imagine expanding this to include the entire
        // alphabet

        
        function showBreedsThatBeginWithLetter() { 
            // alert(event.target.value)
            let selectedLetter= event.target.value //This is a string!
            
            breedList.innerHTML = ""
            
            fetch(breedUrl)
            .then(res => res.json())
            .then(json => json.message)
            .then(message => Object.keys(message)) 
            .then(dogBreeds => dogBreeds.filter ( (breed) => {
                return breed[0] == selectedLetter
            })
            )
            .then(breedsFilteredByLetter => {
                breedsFilteredByLetter.forEach( breed => {
                let filteredBreedItem = document.createElement("li")
                filteredBreedItem.innerText = breed
                breedList.appendChild(filteredBreedItem)
                } )
            } )
        }

        document.querySelector("#breed-dropdown").onchange = showBreedsThatBeginWithLetter










})

