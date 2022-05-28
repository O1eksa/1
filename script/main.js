const el = document.querySelector('input[name="in"]');
const el2 = document.querySelector('input[name="out"]');

el.addEventListener('change', (ev) => {
    const text = ev.target.value;

    console.log(text);
    el2.value = text

    let out = el2.innerHTML;

console.log(el2);
console.log(out);

});
