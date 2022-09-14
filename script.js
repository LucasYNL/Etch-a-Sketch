function create(num){ // creates the sketching pad with a defined size
    const sketch = document.querySelector('.sketch');

    for(let i = 0; i < num; i++){
        const row = document.createElement('div');
        row.classList.add('section');
        sketch.append(row);
        for(let x = 0; x < num; x++){
            const blocks = document.createElement('div');
            blocks.classList.add('part');
            row.append(blocks);
        }
    };

    const part = document.querySelectorAll('.part');

    part.forEach(function (i) {
        i.addEventListener('mouseover', () => {
            i.style.backgroundColor = 'red';
        });
    });
}


//////////////////////////////////////////////////////////

function setSize(){ // changes the size of the sketching pad
    let colRow = checkSize(prompt("Enter the number of squares per side from 10 - 60"));

    const clear = document.getElementById("draw");
    const body = document.getElementById("main");
    const sketch = document.createElement('div');

    clear.remove();
    sketch.classList.add('sketch');
    sketch.setAttribute('id', 'draw');
    body.append(sketch);    

    create(colRow);
    
}

function checkSize(num){ // make sure user input is integers and within the range of 10 - 60
    if(num > 60 || num < 10 || isNaN(num) === true){
        alert('The input for squares per side is not within range');
        num = prompt("Re-enter a number from 10 - 60");
        num = checkSize(num);
    }

    return num;
}

function createRGB(){ // creates an array of 3 random values from 1 to 265
    let storage = [3];
    storage[0] = Math.floor((Math.random() * 265) + 1);
    storage[1] = Math.floor((Math.random() * 265) + 1);
    storage[2] = Math.floor((Math.random() * 265) + 1);

    return storage;
}

function setRGB(){ // changes eventlistener for mouseover to rgb
    const partRGB = document.querySelectorAll('.part');

    partRGB.forEach(function (i) {
        i.addEventListener('mouseover', () => {
            let storage = createRGB();
            i.style.backgroundColor = 'rgb(' + storage[0] + ', ' + storage[1] + ', ' + storage[2] + ')';
        });
    });
}

create(16);