console.log('%c HI', 'color: firebrick')


fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
        const parsedJSON = response.json();
        return parsedJSON
    })
    .then(function(prevResponse) {
        prevResponse.message.forEach(function(element) { 
            const img = document.createElement('img')
            const imgContainer = document.getElementById("dog-image-container")    
            img.src = element
            imgContainer.appendChild(img);
        })
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        const parsedJSON = response.json();
        return parsedJSON
    })
    .then(function(prevResponse) {
        const breeds = prevResponse.message
        for (const breed in breeds) {
            const breedContainer = document.getElementById("dog-breeds")
            const breedItem = document.createElement('li')
            breedItem.innerText = breed
            breedItem.addEventListener('click', function () {
                breedItem.style = 'color: lavender;'
            })
            breedContainer.appendChild(breedItem)
        }
    })


console.log('we did it fam')