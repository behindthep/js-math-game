const template = document.querySelector('.template')
const input = document.querySelector('.input')
const check = document.querySelector('.check')

const getRandomInRange = (min = 0, max = 9) => {
  return Math.floor(min + Math.random() * (max - min + 1))
}
let firstNumber;
let secondNumber;
const generateExample = () => {
  firstNumber = getRandomInRange()
  secondNumber = getRandomInRange()
  template.textContent = `${firstNumber} * ${secondNumber}`
}

generateExample()

check.addEventListener('click', () => {
  if (firstNumber * secondNumber === Number(input.value)) {
    alert('Поздравляю, это верный ответ')
    generateExample()
  } else {
    alert('Извините, ответ неверный, попробуйте еще раз')
  }
  input.value = ''
  input.focus()
})
