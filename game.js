
var nombre = prompt ('¡Bienvenido al Memotest Bajonero! ¿Cómo te llamás?');

alert(nombre+', la cosa es así: llegó la hora del bajón y saliste sorteado para hacer las compras 💔 Tenés que conseguir todo antes que tus amigos se queden dormidos 😴, ok? ¡Empecemos el Juego!');

document.addEventListener('DOMContentLoaded', () => {

    //cartas
    const cardArray = [
      {
        name: 'papas',
        img: 'cartas/papas.jpg'
      },
      {
        name: 'burger',
        img: 'cartas/burger.jpg'
      },

      {
        name: 'chambuchito',
        img: 'cartas/chambuchito.jpg'
      }, 
      {
        name: 'dona',
        img: 'cartas/dona.jpg'
      },
      {
        name: 'pancho',
        img: 'cartas/pancho.jpg'
      },
      {
        name: 'pollito',
        img: 'cartas/pollito.jpg'
      },
      {
        name: 'tarta',
        img: 'cartas/tarta.jpg'
      },
      {
        name: 'waffle',
        img: 'cartas/waffle.jpg'
      },
      {
        name: 'papas',
        img: 'cartas/papas.jpg'
      },
      {
        name: 'burger',
        img: 'cartas/burger.jpg'
      },
      {
        name: 'chambuchito',
        img: 'cartas/chambuchito.jpg'
      }, 
      {
        name: 'dona',
        img: 'cartas/dona.jpg'
      },
      {
        name: 'pancho',
        img: 'cartas/pancho.jpg'
      },
      {
        name: 'pollito',
        img: 'cartas/pollito.jpg'
      },
      {
        name: 'tarta',
        img: 'cartas/tarta.jpg'
      },
      {
        name: 'waffle',
        img: 'cartas/waffle.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#resultado')
    
    let cardsElegidas = []
    let cardsElegidasId = []
    let cardsWon = []


    function tablero() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'cartas/dorso.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  

    function confirmarElMatch() {
      const cards = document.querySelectorAll('img')
      const opcionUnoId = cardsElegidasId[0]
      const opcionDosId = cardsElegidasId[1]
      
      if(opcionUnoId == opcionDosId) {
        cards[opcionUnoId].setAttribute('src', 'cartas/dorso.jpg')
        cards[opcionDosId].setAttribute('src', 'cartas/dorso.jpg')
        alert('Jajajaj clickeaste en la misma imagen, no te duermas vos también!🧟‍♂️🧟‍♀️')
      }
      else if (cardsElegidas[0] === cardsElegidas[1]) {
        alert('¡Encontraste un Match!')
        cards[opcionUnoId].setAttribute('src', 'cartas/vacio.jpg')
        cards[opcionDosId].setAttribute('src', 'cartas/vacio.jpg')
        cards[opcionUnoId].removeEventListener('click', flipCard)
        cards[opcionDosId].removeEventListener('click', flipCard)
        cardsWon.push(cardsElegidas)
      } 
      else {
        cards[opcionUnoId].setAttribute('src', 'cartas/dorso.jpg')
        cards[opcionDosId].setAttribute('src', 'cartas/dorso.jpg')
        alert('Intentá de nuevo, vos podés💪')
      }
      cardsElegidas = []
      cardsElegidasId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Lo hiciste, G E N I O! Ahora un merecidísimo bajón 🍕🍔🍟🌭🥞🍗🍩🥪💖👽'
      }
      
    }
    
    
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsElegidas.push(cardArray[cardId].name)
      cardsElegidasId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsElegidas.length ===2) {
        setTimeout(confirmarElMatch, 500)
      }
    }
  
    
    tablero()
  })