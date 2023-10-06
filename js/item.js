const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const countitem = document.querySelector('#countitem');



add.addEventListener('click', () =>  countitem.value = Number(countitem.value) + 1);

subtract.addEventListener('click', () => {
if (Number(countitem.value) > 0 ) { countitem.value = Number(countitem.value) - 1 ; }
});

