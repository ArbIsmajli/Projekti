const button = document.getElementById("buttonIg");
const login = document.querySelector(".login");
const main = document.querySelector(".main");
const loginMessage = document.getElementById('loginmessage')

function test(){
    console.log("test");

    login.style.display = 'none';
    input.style.display = 'block';
    
}

button.addEventListener('click', function() {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username, password);

    if ((username === 'arb' && password === '1234') || (username === 'Arb' && password === '4321')) {
        loginMessage.textContent = '';
        login.style.display = 'none';
        main.style.display = 'block';
    } else {
        loginMessage.textContent = 'perdoruesi ose fjalkalimi jane te pasakta';
    }
});
