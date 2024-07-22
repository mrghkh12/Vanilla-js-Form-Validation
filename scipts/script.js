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