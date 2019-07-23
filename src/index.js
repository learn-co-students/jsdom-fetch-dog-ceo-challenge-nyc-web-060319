console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const images = fetch(imgUrl)
images
.then(response => response.json())
.then(body => {
  const imageContainer = document.querySelector('#dog-image-container')
  body.message.forEach(function(image) {
    const newPic = document.createElement('img')
    newPic.setAttribute('src', image)
    imageContainer.appendChild(newPic)
  })
})

function listBreeds(body, breedSelected) {
  let breedList = document.querySelector('#dog-breeds')
  for (const breed in body.message) {
      const newListElement = document.createElement('li')
      newListElement.innerHTML = breed
      newListElement.addEventListener('click', function() {
        newListElement.style.color = 'red'
      })
      breedList.appendChild(newListElement)
}
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breeds = fetch(breedUrl)
breeds
.then(response => response.json())
.then(body => {
  const filter = document.querySelector('#breed-dropdown')
  listBreeds(body)
  filter.addEventListener('change', function(){
    const breedSelected = filter.value
    let breedList = document.querySelector('#dog-breeds').children

    for (const breed of breedList){
      console.log(breed.innerHTML)
      console.log(breedSelected)
      if (breed.innerHTML[0] != breedSelected) {
        breed.style.display = 'none'
      }else{
        breed.style.display = 'list-item'
      }
    }
  })
})
