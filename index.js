console.log('prvni funkce')
const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(number).padStart(2, '0');
};
console.log('vlozili tlacitka do promene')
let value = 0;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

console.log('prvni udalost na tlacitko')
btnUp.addEventListener('click', () => {
  if (value < 99) {
    value = value + 1;
    updateCounter(value);
  }
});
console.log('druha udalost na tlacitko')
btnDown.addEventListener('click', () => {
  if (value > 0) {
    value = value - 1;
    updateCounter(value);
  }
});

updateCounter(value);