export let email  = JSON.stringify(localStorage.getItem('email'))
export let password = JSON.stringify(localStorage.getItem('password'))
let name  = JSON.stringify(localStorage.getItem('name'))
let surname = JSON.stringify(localStorage.getItem('surname'))
let form = document.forms.sign_up
console.log(form);
form.onsubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('email', new FormData(form).get('email'))
    localStorage.setItem('name', new FormData(form).get('name'))
    localStorage.setItem('surname', new FormData(form).get('surname'))
    localStorage.setItem('password', new FormData(form).get('password'))
}

console.log(email, name, surname, password);