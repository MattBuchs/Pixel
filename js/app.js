// Etape 1
function loop(pixelSize) {
    const invader = document.querySelector('#invader');
    invader.innerHTML = '';

    for (let i = 0; i < pixelSize.value; i++)
    {  
        const boxContainer = document.createElement('div');
        boxContainer.classList.add('box-container');

        invader.appendChild(boxContainer);
    
        for (let j = 0; j < pixelSize.value; j++) 
        {
            const boxLine = document.createElement('div');
            boxLine.classList.add('box');
            boxContainer.appendChild(boxLine);
        }
    }

    // Etape 2
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            /*if(box.style.backgroundColor === 'rgb(72, 84, 96)') {
                box.style.backgroundColor = 'rgb(202, 201, 201)';
                box.style.borderColor = '#96989b';
            }
            else {
                box.style.backgroundColor = '#485460';
                box.style.borderColor = 'rgb(38, 45, 51)';
            }*/
            box.style.backgroundColor = '#' + color;
            box.style.borderColor = borderColor;
        });
    });
}

// Etape 3
const configuration = document.querySelector('.configuration');

function generatedInput(placeholder, id, min) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = placeholder;
    input.id = id;
    input.min = min;

    configuration.appendChild(input);
}

generatedInput('Taille de la grille (min: 20)', 'gridSize', 20);
generatedInput('Taille des pixels (min: 4)', 'pixelSize', 4);

const button = document.createElement ("button");
button.textContent = "Valider";
configuration.appendChild(button);

button.addEventListener("click", function(event) 
{
    event.preventDefault();

    const pixelSize = document.querySelector('#pixelSize');
    const gridSize = document.querySelector('#gridSize');

    if(gridSize.value < 20 || pixelSize.value < 4) {
        alert('trop petit !');
    }
    else {
        loop(pixelSize);
        
        const boxes = document.querySelectorAll('.box');
    
        boxes.forEach(box => {
            box.style.width = gridSize.value + "px";
            box.style.height = gridSize.value + "px";
        });
    }
});

// Super Bonus
const circles = document.querySelectorAll('.circle');
let color = '';
let borderColor = '';

circles.forEach(circle => {
    circle.addEventListener('click', (e) => {
        for(let i = 0; i < circles.length; i++) {
            circles[i].style.transform = 'scale(1)';
        }
        circle.style.transform = 'scale(1.3)';

        if(circle.id === 'lightGray') {
            color = 'd2dae2';
            borderColor = "rgb(173, 174, 176)";
        }
        else if(circle.id === 'darkGray') {
            color = '485460';
            borderColor = ' rgb(38, 45, 51)';
        }
        else if(circle.id === 'yellow') {
            color = 'fbc048';
            borderColor = 'rgb(224, 155, 15)';
        }
        else if(circle.id === 'green') {
            color = '79ea83';
            borderColor = 'rgb(47, 194, 59)';
        }
    });
});