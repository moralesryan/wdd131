//declare the variables//
const input = DocumentquerySelector('#favchav');
const button = DocumentquerySelector('button');
const list = DocumentquerySelector('____');
//create a li element and a button//
const titleHolder = document.createElement('li');
const deleteButton = document.createElement('button')
//append info to the new li element//
list.textContent = input.value;
deleteButton.textContent = '❌';
titleHolder.append(deleteButton);
list.append(titleHolder);