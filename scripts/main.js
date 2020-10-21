var elements = document.querySelectorAll('input, textarea');
const form = document.getElementById('form');
const groupName = document.getElementById('groupname');
const aliasName = document.getElementById('alias');
const emailBox = document.getElementById('email');
const phoneBox = document.getElementById('phone');
const fioBox = document.getElementById('FIO');
const postBox = document.getElementById('post');
const innerDesc = document.getElementById('inner-description');
const publicDesc = document.getElementById('public-description');
const alert = document.getElementById('alert');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
    alert.classList.remove('alert--show');
});

function checkInputs(){
    const groupNameValue = groupName.value.trim();
    const aliasValue = aliasName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phoneBox.value.trim();
    const fioValue = fioBox.value.trim();
    const postValue = postBox.value.trim();
    const innerDescValue = innerDesc.value.trim();
    const publicDescValue = publicDesc.value.trim();


    if(groupNameValue === ''){
        setErrorFor(groupName, 'Заполните поле');
    } else{
        setSuccessFor(groupName);
    }

    if(aliasValue === ''){
        setErrorFor(aliasName, 'Заполните поле');
    } else if (!isAlias(aliasValue)) {
        setErrorFor(aliasName, 'Алиас не может содержать русские буквы и пробелы');
    } else {
        setSuccessFor(aliasName);
    }

    if(emailValue === ''){
        setErrorFor(emailBox, 'Заполните поле');
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailBox, 'Электронный адрес введен не корректно');
    } else {
        setSuccessFor(emailBox);
    }

    if(phoneValue === ''){
        setErrorFor(phoneBox, 'Заполните поле');
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phoneBox, 'Номер введен не полностью');
    } else{
        setSuccessFor(phoneBox);
    }

    if(fioValue === ''){
        setErrorFor(fioBox, 'Заполните поле');
    } else{
        setSuccessFor(fioBox);
    }

    if(postValue === ''){
        setErrorFor(postBox, 'Заполните поле');
    } else{
        setSuccessFor(postBox);
    }

    if(innerDescValue === ''){
        setErrorFor(innerDesc, 'Заполните поле');
    } else{
        setSuccessFor(innerDesc);
    }

    if(publicDescValue === ''){
        setErrorFor(publicDesc, 'Заполните поле');
    } else{
        setSuccessFor(publicDesc);
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const errorField = formControl.querySelector('.form__error--text');
    const errorBox = errorField.parentElement.classList.add('show');
    const boxTitle = formControl.querySelector('.form__block-title').style.color="#F64C4C";
    errorField.innerText = message;
    input.classList.add('error');
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    const boxTitle = formControl.querySelector('.form__block-title').style.color="#7C7B7D";
    const errorField = formControl.querySelector('.form__error--text');
    const errorBox = errorField.parentElement.classList.remove('show');
    input.classList.remove('error');
}

function isEmail(email) {
	return /^(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(email);
}



function isAlias(alias) {
	return /^([0-9A-Za-z]{1}([-\+=();:@\.]?[0-9A-z]?){1,}[0-9A-Za-z]{1})$/.test(alias);
}
function isPhone(phoneNumber) {
	return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,}(\s*)?$/.test(phoneNumber);
}

var phoneMask = IMask(
    document.getElementById('phone'), {
      mask: '+{7} (000) 000-00-00'
    });

for (i=0; i<elements.length; i++) {
 (function(element) {
   var id = element.getAttribute('id');
   element.value = sessionStorage.getItem(id);
   element.oninput = function(e) {
     sessionStorage.setItem(id, element.value); 
   };
   if (element.value != ''){
    alert.classList.add('alert--show');
    }
 })
 (elements[i]);
}