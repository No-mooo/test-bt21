const form = document.querySelector('.modal__form'); 
const modal = document.querySelector('.modal');

document.querySelector('.start__btn').addEventListener('click', () => {
    modal.classList.add('modal--active'); // Показываем модальное окно при клике на элемент с классом 'start__btn'
});

modal.addEventListener('click', event => {
    if (!event.target.closest('.modal__form')) {
        modal.classList.remove('modal--active'); // Скрываем модальное окно, если клик был вне формы с классом 'modal__form'
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const allInput = new FormData(event.target); // Получаем все значения полей формы
    const targetPush = document.querySelector('.start__list-fields ul'); // Выбираем элемент ul, куда будут добавляться данные
    const list = Array.from(allInput.entries());
    const createLi = document.createElement('li');
    console.log(list);
    createLi.textContent = JSON.stringify(list); // Преобразуем массив данных в строку JSON и добавляем ее как текст в элемент li
    targetPush.append(createLi); // Добавляем элемент li в целевой элемент ul

    modal.classList.remove('modal--active');
    form.reset(); // Очищаем значения полей формы
});