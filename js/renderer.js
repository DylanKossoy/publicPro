import { getProjects } from './dataLoader.js'
import { createCard } from './components.js'


export async function initializeCards() {
    let projectContainer = document.querySelector('.main-body-container')
    let searchInput = document.querySelector('.search-input');


    
    
    let projects = await getProjects()
    
    projectContainer.textContent = ''
    searchInput.addEventListener('keyup', (e) => {
        let userInput = e.target.value.toLowerCase()
        let filteredProjects = projects.filter(project => {
            return project.name.toLowerCase().includes(userInput)
        })

        projectContainer.textContent = ''

        Object.keys(filteredProjects).forEach(project => {
            let card = createCard(filteredProjects[project])
            card.addEventListener('click', () => {
                showProject(filteredProjects[project])
            })
            projectContainer.appendChild(card)
        })
        
        
        
    })
    
    
    Object.keys(projects).forEach(project => {
        let card = createCard(projects[project])
        card.addEventListener('click', () => {
            showProject(projects[project])
        })
        projectContainer.appendChild(card)
    })
}



export function showProject(project) {
    let projectContainer = document.querySelector('.project-container');
    let projectName = document.querySelector('.project-box-name')
    let projectVid = document.querySelector('.project-box-vid')
    let projectDescription = document.querySelector('.project-box-description')
    let projectX = document.querySelector('.project-box-exit')

    projectContainer.style.display = 'flex'
    projectName.textContent = project.name

    projectVid.src = project.video
    projectVid.controls = true;

    projectDescription.textContent = project.description

    projectX.addEventListener('click', () => {
        projectContainer.style.display = 'none'
    })



    
}