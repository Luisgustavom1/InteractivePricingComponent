const input = document.querySelector('.slideBar');

input.addEventListener('input', () => {
    console.log(input.value);
    var color = `linear-gradient(90deg, rgb(165, 243, 235) ${input.value}%, rgb(234, 238, 251) ${input.value}%)`;
    input.style.background = color;
});