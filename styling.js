const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid red'
    section.style.padding = '10px'
    section.style.borderRadius = '5px'
    section.style.marginTop = '10px'
    section.style.backgroundColor = 'lightgreen'
}

const placesContainer = document.getElementById('places-container');

placesContainer.style.backgroundColor = 'orange';

const styless = document.getElementById('title');
styless.classList.add('text-center');