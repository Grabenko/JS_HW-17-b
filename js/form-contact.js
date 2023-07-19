const form = document.querySelector('form');
form.addEventListener('submit', onSendBtnClick)
function onSendBtnClick (event) {
    event.preventDefault();


    //Отримуємо посилання на input
    const userNameInput = document.getElementById('Name-input')
    const NumberInput = document.getElementById('Number-input')
    const PostalCodeInput = document.getElementById('PostalCode-input')
    const ExpirationInput = document.getElementById('Expiration-input')
    const CVVInput = document.getElementById('CVV-input')

    //Отримали значення полів (input)
    const userNameValue = userNameInput.value.trim() // результат в полі value
    const NumberValue = NumberInput.value.trim() // trim() - забирає не потрібні пробели, в input які міг ввести user 
    const PostalCodeValue = PostalCodeInput.value.trim() // trim() - забирає не потрібні пробели, в input які міг ввести user 
    const ExpirationValue = ExpirationInput.value.trim() // trim() - забирає не потрібні пробели, в input які міг ввести user 
    const CVVValue = CVVInput.value.trim() // trim() - забирає не потрібні пробели, в input які міг ввести user 

    //Перевірка полів
    if (userNameValue === "") {
        showError(userNameInput, "ти рукожоп")
    } else if (!/^[a-zA-Z]+$/.test(userNameValue)) {  // метод test() використовується тільки з регулярними виразами
        showError(userNameInput, "знову рукожоп")
    } else if (NumberValue === "") {
        showError(NumberInput, "ти рукожопіна")
    } else if (!/^\d+$/.test(NumberValue)) {
        showError(NumberInput, "і знову ти рукожоп")
    } else if (PostalCodeValue === "") {
        showError(PostalCodeInput, "ти рукожопіна")
    } else if (!/^\d+$/.test(PostalCodeValue)) {
        showError(PostalCodeInput, "і знову ти рукожоп")
    } else if (ExpirationValue === "") {
        showError(ExpirationInput, "ти рукожопіна")
    } else if (!/^\d+$/.test(ExpirationValue)) {
        showError(ExpirationInput, "і знову ти рукожоп")
    } else if (CVVValue === "") {
        showError(CVVInput, "ти рукожопіна")
    } else if (!/^\d+$/.test(CVVValue)) {
        showError(CVVInput, "і знову ти рукожоп")
    } else {
        form.submit()
    }
}
function showError (input, message) {
    //Отлримали посилання на контейнер в який будемо виводити повідомлення про помилку
    const errorContainer = input.parentNode.querySelector('.error-message')

    if (errorContainer) {
        errorContainer.textContent = message
    } else {
        
        // Створили новий контейнер, якщо попередньо не був створений
        const newErrorContainer = document.createElement("div")
        newErrorContainer.classList.add("error-message")
        newErrorContainer.textContent = message
        input.parentNode.insertBefore(newErrorContainer, input)
    }

    // Вішаємо рамку
    input.classList.add("error")
}
form.addEventListener("input", function(event) {
    const input = event.target
    const errorContainer = input.parentNode.querySelector(".error-message");
    if(errorContainer){
        //видаляємо повідомлення про помилку
        errorContainer.remove()
        // видаляємо клас помилки
        input.classList.remove("error")
    }
})