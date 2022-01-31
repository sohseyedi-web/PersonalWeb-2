const items = document.querySelectorAll('.navbars-list__item');
const content = document.querySelectorAll('.items-content');
items.forEach((item, index) => {
    item.addEventListener('click', () => {

        items.forEach((i) => i.classList.remove('active-item'))
        item.classList.add('active-item')

        content.forEach((l) => l.classList.remove('active-box'))
        content[index].classList.add('active-box')

    })
})

const navbars = document.querySelector('.navbars-icons');
const navbarList = document.querySelector('.navbars-list');

navbars.addEventListener('click', (e) => {
    e.preventDefault();
    navbarList.classList.toggle('active-list');
})

// end navbar active & navbar toggle

const formBox = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputMsg = document.getElementById('inputMsg');
const inputBtn = document.getElementById('btn');


inputBtn.disabled;

formBox.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputNameValue = inputName.value;
    let inputEmailValue = inputEmail.value;
    let inputMsgValue = inputMsg.value;

    if (inputName.value.trim() === '' || inputEmail.value.trim() === '' || inputMsg.value.trim() === '') {
        inputBtn.disabled;

    } else {
        inputBtn.removeAttribute('disabled');

        const message = {
            inputNameValue, inputEmailValue, inputMsgValue
        }
        console.log(message);
        formBox.innerText = "Thank You For Send Message"
    }
})


// end form 
