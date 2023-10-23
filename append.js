const list = document.getElementById('special-list');

const li = document.createElement('li');
li.innerText = 'Resume';

list.appendChild(li);

//--------------------------- 

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'This is Dynamic Box'

section.appendChild(h1); 

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Dynamic List 1';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Dynamic List 2';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Dynamic List 3';
ul.appendChild(li3);

section.appendChild(ul);
 
mainContainer.appendChild(section);

//----------------------------------

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>Dynamic Dress Box</h1>
    <ul>
        <li>T-shirt</li>
        <li>Lungi</li>
        <li>Pant</li>
        <li>Hat</li>
    </ul>

`
mainContainer.appendChild(sectionDress);


