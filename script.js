function create(num){
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

function setSize(){
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

function checkSize(num){
    if(num > 60 || num < 10 || isNaN(num) === true){
        alert('The input for squares per side is not within range');
        num = prompt("Re-enter a number from 10 - 60");
        num = checkSize(num);
    }

    return num;
}

create(16, 16);