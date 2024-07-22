const $ = document

const formBox = $.querySelector('.formBox')

const nameInput = formBox.querySelector('.fullName-input input')
const phoneNumInput = formBox.querySelector('.phoneNum-input input')
const emailInput = formBox.querySelector('.email-input input')
const messagInput = formBox.querySelector('.message-input textarea')

nameInput.addEventListener('keyup' , nameValidation)
phoneNumInput.addEventListener('keyup' , phoneValidation)
emailInput.addEventListener('keyup' , emailValidation)
messagInput.addEventListener('keyup' , messageValidation)

function nameValidation(){
    const nameInputError = formBox.querySelector('.fullName-input span.error')
    
    if(nameInput.value.trim() === ''){
        nameInputError.innerHTML  = 'Name is required'
        return false
    } 
    if(!nameInput.value.match(/^[A-Za-z]{3,}\s{1}[A-Za-z]{3,}$/)){
        nameInputError.innerHTML  = 'Write full name'
        return false
    }

    nameInputError.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


function phoneValidation(){
    const phoneNumInputError = formBox.querySelector('.phoneNum-input span.error')

    if(phoneNumInput.value.trim() === ''){
        phoneNumInputError.innerHTML  = 'Phone number is required'
        return false
    } 
    if(phoneNumInput.value.length !== 11){
        phoneNumInputError.innerHTML  = 'Phone number should be 11 digits'
        return false
    }
    if(!phoneNumInput.value.match(/^[0-9]{11}$/)){
        phoneNumInputError.innerHTML  = 'Only digits please'
        return false
    }

    phoneNumInputError.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


function emailValidation(){
    const emailInputError = formBox.querySelector('.email-input span.error')

    if(emailInput.value.trim() === ''){
        emailInputError.innerHTML  = 'Email is required'
        return false
    } 
    if(!emailInput.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailInputError.innerHTML  = 'Email Invalid'
        return false
    }

    emailInputError.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


function messageValidation(){
    const messagInputError = formBox.querySelector('.message-input span.error')

    let leftOver = 30 - messagInput.value.length

    if(messagInput.value.trim() === ''){
        messagInputError.innerHTML  = 'Message is required'
        return false
    } 
    if(messagInput.value.length < 30){
        messagInputError.innerHTML  = leftOver + ' more characters required'
        return false
    }

    messagInputError.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

