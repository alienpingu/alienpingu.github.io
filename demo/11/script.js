let form = document.getElementById('login-form');
let inputs = form.querySelectorAll('input');
let loginContainer = document.getElementById('login-container');
let privateContainer = document.getElementById('private-area');
let alertDanger = document.getElementsByClassName('alert');
let dataForm = [undefined,undefined,undefined];

let x = ['user', 'pass', 'on']

let loginHandler = () => {
    loginContainer.style.display = 'none';
    privateContainer.style.display = 'flex';
}

privateContainer.style.display = 'none';
alertDanger[0].style.display = 'none';


inputs.forEach((e,i) => e.addEventListener('change', (e) => dataForm[i] = e.target.value));

form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    (dataForm[0] === x[0] && dataForm[1] === x[1] && dataForm[2] === x[2]) ? loginHandler() : alertDanger[0].style.display = 'block'

})