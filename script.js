const sketch = document.querySelector('.sketch');

for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('section');
    sketch.append(row);
    for(let x = 0; x < 16; x++){
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

//////////////////////////////////////////////////////////

function setSize(){
    let down = prompt("Enter the number of columns");
    let across = prompt("Enter the number of rows");
    const clear = document.getElementById("draw");
    const body = document.getElementById("main");
    const sketch = document.createElement('div');

    clear.remove();
    sketch.classList.add('sketch');
    sketch.setAttribute('id', 'draw');
    body.append(sketch);    

    for(let i = 0; i < across; i++){
        const row = document.createElement('div');
        row.classList.add('section');
        sketch.append(row);
        for(let x = 0; x < down; x++){
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


