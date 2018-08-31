// Exercise: Create a to do list application

// todoList function used on button click to get user input and 
function todoList() {
	// store user value
	var item    = document.getElementById('todoInput').value
	var item1    = document.getElementById('todoInput1').value
	// create a text node from the user input
	var text    = document.createTextNode(item)
	var text1    = document.createTextNode(item1)
	// create a li tag
	var newItem = document.createElement('li')
	var newItem1 = document.createElement('li')
	// add the user input to the li tag
	newItem.appendChild(text)
	newItem1.appendChild(text1)
	// append the li to the html todoList id tag
	document.getElementById('todoList').appendChild(newItem)
	document.getElementById('todoList').appendChild(newItem1)
}