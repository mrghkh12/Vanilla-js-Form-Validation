const $ = document

const formBox = $.querySelector('.formBox')

formBox.addEventListener('click' , e => {
    let inputElem = e.target.tagName === 'INPUT' ? e.target : null
    let inputElemParent = e.target.parentElement
    
    if(inputElem && inputElemParent.classList.contains('fullName-input')){
        let errorElem = inputElemParent.querySelector('span.error')
        console.log(inputElem.tagName , inputElemParent , errorElem);
    }
    

})