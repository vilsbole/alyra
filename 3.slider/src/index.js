import './styles.css'

let IMAGES = []
let CURRENT_INDEX = 0;
let CURRENT_QUERY = ''


function getImage(query = '') {
  const BASE_URL = 'https://source.unsplash.com/random/1600x900';
  const URL = `${BASE_URL}/?${query}`
  return fetch(URL)
    .then(img => img.url)
    .then(url => {
      IMAGES = [...IMAGES, url]
      return IMAGES[IMAGES.length - 1]
    })
}

function setImage(imageSrc) {
  const imgTag = document.querySelector('#slider')
  imgTag.src = imageSrc
}

function getNext(event) {
  if (CURRENT_INDEX === IMAGES.length - 1) {
    getImage(CURRENT_QUERY)
      .then(setImage)
      .then(() => CURRENT_INDEX++)
  } else {
    const url = IMAGES[CURRENT_INDEX + 1]
    setImage(url)
    CURRENT_INDEX++
  }
}

function getPrevious(event) {
  if (CURRENT_INDEX !== 0) {
    const url = IMAGES[CURRENT_INDEX - 1]
    setImage(url)
    CURRENT_INDEX--
  }
}

function searchImages(event) {
  CURRENT_QUERY = document.querySelector('#query').value
  getImage(CURRENT_QUERY).then(setImage)
}

document.addEventListener("DOMContentLoaded", function() {
  // Load first image
  getImage(CURRENT_QUERY).then(setImage)

  // Set handlers
  const search = document.querySelector('#search')
  const next = document.querySelector('#next')
  const prev = document.querySelector('#prev')

  search.onclick = searchImages
  next.onclick = getNext
  prev.onclick = getPrevious

});
