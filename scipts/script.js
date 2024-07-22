const $ = document

const formBox = $.querySelector('.formBox')

formBox.addEventListener('click' , e => {
    let inputElem = e.target.tagName === 'INPUT' ? e.target : null
    let inputElemParent = e.target.parentElement
    
    if(inputElem && inputElemParent.classList.contains('fullName-input')){
        let errorElem = inputElemParent.querySelector('span.error')
        
        inputElem.addEventListener('keyup' , () =>{
            nameValidation(inputElem.value , errorElem)
        })  
    }
    else if(inputElem && inputElemParent.classList.contains('phoneNum-input')){
        let errorElem = inputElemParent.querySelector('span.error')
        
        inputElem.addEventListener('keyup' , () =>{
            phoneValidation(inputElem.value , errorElem)
        })  
    }
    else if(inputElem && inputElemParent.classList.contains('email-input')){
        let errorElem = inputElemParent.querySelector('span.error')
        
        inputElem.addEventListener('keyup' , () =>{
            emailValidation(inputElem.value , errorElem)
        })  
    }
    

})


function nameValidation(nameInput , errorElem){
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


function phoneValidation(phoneInput , errorElem){

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


function emailValidation(emailInput , errorElem){

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