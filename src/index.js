
function loadDogPics(event) {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl).then(
        resp => resp.json()
    ).then(
        json => displayDogPics(json)
    )
}

function loadBreeds(event) {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl).then(
        resp => resp.json()
    ).then(
        json => displayBreeds(json)
    ).then(
        () => addDropDownListener()
    )
}

function addDropDownListener() {
    const dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', changeDropDown)
    console.log('finished offloaded code')
}

function changeDropDown(event) {
    const filter = event.target.value
    const breedContainer = document.querySelector('#dog-breeds')
    for (breedListItem of breedContainer.children) {
        if (breedListItem.textContent[0] === filter) {
            breedListItem.style.visibility = 'visible'
        }
        else {
            breedListItem.style.visibility = 'hidden'
        }
    }
}

function displayBreeds(json) {
    const breedContainer = document.querySelector('#dog-breeds')
    const breeds = json.message
    for (const breed in breeds) {
        const breedLi = document.createElement('li')
        breedLi.innerText = breed
        breedLi.addEventListener('click', function () {
            breedLi.style = 'color: blue;'
        })
        breedContainer.appendChild(breedLi)
    }
}

function displayDogPics(json) {
    const contain = document.querySelector('#dog-image-container')
    const imgArray = json.message
    imgArray.forEach(pic => {
        imgEle = document.createElement('img')
        imgEle.src = pic
        contain.appendChild(imgEle)
    });
}

document.addEventListener('DOMContentLoaded', function (e) {
    loadDogPics(e);
    loadBreeds(e);
    let i = 0
    while (i < 12 ** 20) {
        i++
    }
    console.log('finished while loop')
})


