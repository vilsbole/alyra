import './styles.css'

console.log('Hello from ./src/index.js');

const BASE_URL = 'https://source.unsplash.com/random'

const getImage = () => {
  console.log('Begin fetch')
  return fetch(BASE_URL)
    .then(data => data.url)
}

getImage()
  .then(url => {
    const imgElem = document.querySelector('img')
    imgElem.src = url
  })


// 2. setImage(imageUrl)
