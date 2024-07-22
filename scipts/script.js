const $ = document

const formBox = $.querySelector('.formBox')




function nameValidation(){
    if(nameInput.trim() === ''){
        errorElem.innerHTML  = 'Name is required'
        return false
    } 
    if(!nameInput.match(/^[A-Za-z]{3,}\s{1}[A-Za-z]{3,}$/)){
        errorElem.innerHTML  = 'Write full name'
        return false
    }

    errorElem.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


function phoneValidation(){

    if(phoneInput.trim() === ''){
        errorElem.innerHTML  = 'Phone number is required'
        return false
    } 
    if(phoneInput.length !== 11){
        errorElem.innerHTML  = 'Phone number should be 11 digits'
        return false
    }
    if(!phoneInput.match(/^[0-9]{11}$/)){
        errorElem.innerHTML  = 'Only digits please'
        return false
    }

    errorElem.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


function emailValidation(){

    if(emailInput.trim() === ''){
        errorElem.innerHTML  = 'Email is required'
        return false
    } 
    if(!emailInput.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorElem.innerHTML  = 'Email Invalid'
        return false
    }

    errorElem.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


function messageValidation(){

    let leftOver = 30 - messageInput.length

    if(messageInput.trim() === ''){
        errorElem.innerHTML  = 'Message is required'
        return false
    } 
    if(messageInput.length < 30){
        errorElem.innerHTML  = leftOver + ' more characters required'
        return false
    }

    errorElem.innerHTML  = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

