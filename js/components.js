


export function createCard(project) {

    
    let card = document.createElement('div')
    let cardName = document.createElement('span')
    let cardImg = document.createElement('img')
    let cardYear = document.createElement('span')
    let cardDescription = document.createElement('span')


    card.className = 'card'
    card.tabIndex = 0

    cardName.className = 'card-name'
    cardName.textContent = project.name

    cardImg.className = 'card-img'
    cardImg.src = project.image

    cardYear.className = 'card-year'
    cardYear.textContent = project.year


    cardDescription.className = 'card-description'
    cardDescription.textContent = project.description

    
    card.appendChild(cardName)
    card.appendChild(cardImg)
    card.appendChild(cardYear)
    card.appendChild(cardDescription)
    

    return card;
}





