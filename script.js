const part = document.querySelectorAll('.part');

part.forEach(function (i) {
    i.addEventListener('mouseover', () => {
        i.style.backgroundColor = 'red';
    });
});