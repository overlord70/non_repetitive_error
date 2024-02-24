let email = localStorage.getItem('email')
let password = localStorage.getItem('password')
let form_2 = document.forms.enter
form_2.onsubmit = (e) => {
    e.preventDefault()
    if(new FormData(form_2).get('email') === email && new FormData(form_2).get('password') === password){
        alert('Success')
    } else {
        alert('Try Again')
    }
}