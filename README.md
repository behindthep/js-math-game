# js-simple-game

*на основании этого приложения допилить тренажёр англ слов. вместо примера - заранее сохраненное английское слово и проверка на равенство этого слова и с его переводом.*

В начале проекта в переменные выносить все участки с которыми я планирую работать: блок с примером (1*8), поле ввода, кнопка.

Механизм поиска по вёрстке, как в css по имени класса:

``` js
const template = document.querySelector(.template)
```

- template - элемент вёрстки (блок с примером)
- документ относится к браузеру
- поиск по признаку (классу)

---

JS видит tag как "таблицу", в которой лежат пары: настройка и её значение:

```
p

textContent  1*8
class        template
```

JS может изменять значение этих настроеек:

``` js
template.textContent = `${firstNumber} * ${secondNumber}`
```

---

JS работает по событийной модели - действие пользователя в приложении фиксирует и может на него как-то отреагировать. 
При нажатии на кнопку (class = "check"): добавляем отслеживание события нажатия по кнопке с классом check

``` js
check.addEventListener(‘click’, () => {
	if (firstNumber * secondNumber === Number(input.value)) {
	alert(‘correct answer’)
	firstNumber = getRandomInRange()
	secondNumber = getRandomInRange()
	template.textContent = `${firstNumber} * ${secondNumber}`
} else {
	alert(‘incorrect answer’)
}
input.value = ‘’
input.focus()
})
```

Такая же таблица настроек, одна из которых value (то что введено в инпуте). После каждого вычисления делать строку ввода пустой и помещать в неё курсор.
