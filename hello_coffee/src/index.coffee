import coffee from './assets/img/coffee.svg'
import './index.styl'

app = document.querySelector('.app')

img = document.createElement('img')
app.appendChild(img)
img.classList.add('img_coffee')
img.src = coffee

createButton = ->
    img.remove()
    text = document.createElement('p')
    app.appendChild(text)
    text.textContent = 'Привет, кофе!'


img.addEventListener "click", (e) => createButton(e)