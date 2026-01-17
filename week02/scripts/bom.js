//declare the variables//
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//Event for the Add chapter button//
button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Please enter a chapter name');
        input.focus() //comeback to this//
        return;
    }
    //create a li element and a button//
    const titleHolder = document.createElement('li');
    const deleteButton = document.createElement('button')

    //append info to the new li element//
    titleHolder.textContent = input.value;
    deleteButton.textContent = '❌';
    //append delete button to li 
    titleHolder.append(deleteButton);
    list.append(titleHolder);
    //delete button to remove the li elements when clicked 
    deleteButton.addEventListener('click',() => {
        list.removeChild(titleHolder); 
        input.focus();
    });
//clean up the interface
input.value = '';
//cursor back to the input field 
input.focus();
});