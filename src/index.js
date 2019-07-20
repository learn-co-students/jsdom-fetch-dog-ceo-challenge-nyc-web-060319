console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImages(){
    fetch(imgUrl).then(
        response => response.json()
    ).then(
        json => renderImages(json)
    );
}

function renderImages(json){
    const imageContainer = document.querySelector('#dog-image-container');
    const imageURL = json.message;
    imageURL.forEach(image => {
        const imageTag = document.createElement('img');
        imageTag.src = image;
        imageContainer.appendChild(imageTag); 
    });
}

function fetchBreeds(){
    fetch(breedUrl).then(
        response => response.json()
    ).then (
        json => renderBreeds(json)
    );
}
    
function renderBreeds(json){
    const breedContainer = document.querySelector('#dog-breeds');
    const dogBreed = json.message;
    for(breed in dogBreed){
    const li = document.createElement('li');
    li.innerText = breed;
    li.addEventListener('click', ()=>{
        li.style.color = 'blue';
    });
    breedContainer.appendChild(li);
    }
}

function checkDropDown(){
    const dropDownBox = document.querySelector('#breed-dropdown');
    dropDownBox.addEventListener('change', function(e){
        const letter = e.target.value;
        const breedList = document.querySelectorAll('li');
        for (let i = 0; i < breedList.length; i++){
            if(breedList[i].innerText.charAt(0) == letter){
                breedList[i].hidden = false;
            } else {
                breedList[i].hidden = true;
            }
        }
    })

}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    checkDropDown();
  });