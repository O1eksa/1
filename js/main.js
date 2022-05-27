let el = document.querySelector('input[name="in"]');

el.addEventListener('change', (ev) => {
    const text = ev.target.value;

    console.log(text);
     
let el2 = document.querySelector('input[name="out"]');
el2.innerHTML = text;

console.log(el2);

});