let el = document.querySelector('input[name="in"]');

el.addEventListener('change', (ev) => {
    const text = ev.target.value;

    console.log(text);
});

