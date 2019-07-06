// Listen for a click on ANY bottle

// When clicked ask the user if they want to take it down and pass it arround 

// If they say yes ask a class of drank to the bottle 

// and decrement the count by 1

const bottles = document.querySelectorAll('.bottle')
const counter = document.querySelectorAll('.count')

function drink (){
    if (confirm("Take one down, pass it arround")){
    this.classList.add ('drank')
    CountQueuingStrategy.forEach(counter.textContent--)
    }
}


bottles.forEach( bottle => bottle.addEventListener ('click', drink))
