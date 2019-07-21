console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(res => {
        res.message.forEach(element => {
            let reqDiv = document.querySelector('#dog-image-container');
            let reqImage = document.createElement('img')
            reqImage.src = element;
            reqDiv.appendChild(reqImage);
        });
    });

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(res => {
        for (var breed in res.message) {
            const breeds = document.querySelector('#dog-breeds');
            let breedFromAPI = document.createElement('li');
            breedFromAPI.addEventListener('click', function(){
                breedFromAPI.style.color = 'red';
                breedFromAPI.style.cursor = 'pointer';
            })
            breedFromAPI.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);
            breeds.appendChild(breedFromAPI);
          }
    });

    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function(){
        const breeds = document.querySelector('#dog-breeds');
        breeds.innerHTML = "";
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(res => {
            for (var breed in res.message) {
                const breeds = document.querySelector('#dog-breeds');
                if(breed .charAt(0) === breedDropdown.value){
                    let breedFromAPI = document.createElement('li');
                    breedFromAPI.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);
                    breeds.appendChild(breedFromAPI);
                }
                
            }
        });
    })
});


