function create(across, down){
    const sketch = document.querySelector('.sketch');

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

//////////////////////////////////////////////////////////

function setSize(){
    let down = prompt("Enter the number of columns from 10 - 60");
    let across = prompt("Enter the number of rows from 10 - 60");

    if(down > 60 || down < 10){
        alert('The input for columns is not correct');
        down = resize(down);
    }
    if(across > 60 || across < 10){
        alert('The input for rows is not correct');
        across = resize(across);
    }

    const clear = document.getElementById("draw");
    const body = document.getElementById("main");
    const sketch = document.createElement('div');

    clear.remove();
    sketch.classList.add('sketch');
    sketch.setAttribute('id', 'draw');
    body.append(sketch);    

    create(across, down);
    
}

function resize(num){
    num = prompt("Re-enter a number from 10 - 60");

    if(num > 60 || num < 10){
        num = resize(num);
    }

    return num;
}

create(16, 16);