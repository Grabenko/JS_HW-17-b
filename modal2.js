const refs1 = {
    openModalBtn: document.querySelector('[data-action="send-modal1"]'),
    closeModalBtn: document.querySelector('[data-action="close-modalS"]'),
    sendDataBtn1: document.querySelector('[data-action="send-modal1"]'),
    backdrop1: document.querySelector('.js-backdrop1'),
    login: document.querySelector('[type="text"]'),
    mail: document.querySelector('[type="email"]'),
    form: document.querySelector('.formBox1'),
}
refs1.openModalBtn.addEventListener('click', onOpenModal);
refs1.closeModalBtn.addEventListener('click', onCloseModal);
refs1.backdrop1.addEventListener('click', onBackDropModal);

function onOpenModal (event) {
    document.body.classList.add('show-modal1');

}

function onCloseModal (event) {
    window.addEventListener('keydown', onEscapeKeypress)
    document.body.classList.remove('show-modal1');

}

function onBackDropModal (event) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    if (event.currentTarget === event.target) {
        console.log(`клік по backdrop`);
        onCloseModal()
    }
}