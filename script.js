const form = document.getElementById('form');
const emailInput = document.getElementById('email')
const DivBox = document.querySelectorAll('.mb-3')
const UserNameBox = document.getElementById('uname');
const PassBox = document.getElementById('password');


function showError(index, msg){
    let box = DivBox[index]
    let HelpBox = document.createElement('div')
    HelpBox.classList.add('form-text')
    HelpBox.id = 'Help'
    HelpBox.style.color = 'red'
    HelpBox.innerText = msg
    box.appendChild(HelpBox)
}

function showSuccess(index, msg){
    let box = DivBox[index]
    const HelpBox = document.createElement('div')
    HelpBox.classList.add('form-text')
    HelpBox.id = 'Help'
    HelpBox.style.color = 'green'
    HelpBox.innerText = msg
    box.appendChild(HelpBox)
}


function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(0, 'Email patter Accurate !')
    }
    else{
        showError(0, "Email Patter doesn't match !")
    }

}

function checkUsername(input){
if(input.value.length < 8){
    showError(1, 'Username must be atleast 8 digits')  // Checks the lenght
}
else{
    showSuccess(1, 'Username Fiedl')
}

}

function checkPassword(input){
    let isValid = true

    if(input.value.length < 8){
        showError(2, 'Password must be of minimum length 8')
        isValid = false
    }
    if(!/[A-Z]/.test(input.value)){
        showError(2, 'Password must contain atleast one Uppercase Letter')
        isValid = false
    }
    if (!/[a-z]/.test(input.value)) {
        showError(2, 'Password must contain atleast one Lowercase Letter')
        isValid = false
    }
    if (!/\d/.test(password)) {
        showError(2, 'Password must contain atleast a digit')
        isValid = false
    }
    if(isValid){
        showSuccess(2, 'Password is strong and secured')
    }
}









form.addEventListener('submit', (e) => {

    e.preventDefault();
    let HelpBar = document.querySelectorAll('#help')
    HelpBar.forEach((bar) =>{
        bar.parentNode.removeChild(bar)
    })

    

     checkEmail(emailInput)
     checkUsername(UserNameBox)
     checkPassword(PassBox)

})