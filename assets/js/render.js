let elements = {
	list: [],
	countBranch : 0
}

/**
* adding an element to the elements set
*/
function setInObj(elementAttr){
	elements.list.push(elementAttr);
	elements.countBranch++;
	console.log(elements);
}

/**
* set the current position after the button is released
* search by array of objects
*/
function setCurrentPosition(e){
	// console.log(e);
	elements.list.find( (x,i) => { 
		if(x.id === e.getAttribute('id')){
			x.x = e.style.left
			x.y = e.style.top
		}
	});
}

/**
* set the content of the input fields
*/ 
function setCurrentContent(id, content, type){
	elements.list.find( (x,i) => {
		if(x.id === id){
			x[type] = content
		}
	});
}

/**
* get items from localStorage
* set the global object
*/ 
function getElements() {
	 elements = JSON.parse(localStorage.elements);	
	 return elements;
}

/**
* draw elements
*/ 
function showElements() {
	getElements().list.forEach( i => {
		createElement(i.parent, i.child, i.x, i.y, i.title, i.description);
		console.log(i);
	})	
}

/**
* save a set of elements
*/ 
function saveElements() {
	localStorage.clear();
	localStorage.elements = JSON.stringify(elements);
	// console.log(localStorage);
}

