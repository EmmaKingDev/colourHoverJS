

// THIS CODE IS BASED ON A TUTORIAL BY TRAVERSY MEDIA

const container = document.getElementById('container')
const colours = ['#A653F5', '#8F8CF2', '#65B8BF', '#F96CFF', '#FA92FB', '#5bd389']
const circles = 441

for(let i = 0; i < circles; i++) {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  circle.addEventListener('mouseover', () =>  setColour(circle))
  circle.addEventListener('mouseout', () =>  removeColour(circle))
  container.appendChild(circle)
}

function setColour(ele) {
    const colour = getRandomColour()
    ele.style.backgroundColor = colour
    ele.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`
}

function removeColour(ele) {
    ele.style.backgroundColor = 'rgb(61, 48, 76)'
    ele.style.boxShadow = '0 0 2px rgb(82, 82, 82)'
}

function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)]
}
