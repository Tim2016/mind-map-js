let cursor = { positionX : 0, positionY : 0} 
let activeElementId = '';
let mainBox = '';
let dX = 0;
let dY = 0;

/*
* define cursor position
* determine the click position relative to the element
* set the end position equal to the relative position subtracted from the cursor position
*/
document.addEventListener('mousemove', function(e) {
	cursor.positionX = e.clientX;
	cursor.positionY = e.clientY;
	if (mainBox.offsetY && dX == 0) dX = cursor.positionX - mainBox.offsetX;
	if (mainBox.offsetY && dY == 0) dY = cursor.positionY - mainBox.offsetY;
	if (mainBox) {
		mainBox.style.left =  cursor.positionX - dX + 'px';
		mainBox.style.top =  cursor.positionY - dY + 'px';
		mainBox.style.backgroundColor = '#5e6fff'
	}
});

/*
* mouse down
* check for parent 'box'
* setting found parent as active element in hasParentClass()
* setting current coordinates
*/ 
document.addEventListener('mousedown', function(e) {
	if (hasParentClass(e.target, 'box')){
		mainBox = document.getElementById(activeElementId);
		mainBox.offsetX = mainBox.offsetLeft;
		mainBox.offsetY = mainBox.offsetTop;
	}
})

/*
* mouse up
* saving data to a shared elements object
*/ 
document.addEventListener('mouseup', function(e) {
	if (mainBox) setCurrentPosition(mainBox);
	mainBox = '';
	dX = 0;
	dY = 0;
})	

/**
* create a child by double clicking
* check among 'box' elements
*/ 
document.addEventListener('dblclick', function(e) {
	if (hasParentClass(e.target, 'box')) {
		let mainBox = document.getElementById(activeElementId);
		let parentId = getParentIndex(activeElementId)
		createNewElement(parentId);
		return;
	}
});

/*
* recursive class check
* if the element does not contain a className, the search continues in the parent elements
*/ 
function hasParentClass(element, className) {
	// если добирается до главного элемента выкидывает ошибку split
	if (element !== document && element.className.split(' ').indexOf(className) >= 0) {
		activeElementId = element.id;
		return true;
	}
	try{
		return element.parentNode && hasParentClass(element.parentNode, className);
	}catch(TypeError){
		return false;
	}
}

/*
* Get the child index of the current element from id="element-<parent>-<childCount>",
* Used to set the parent index for descendant elements.
*/ 
function getParentIndex(id){
	return activeElementId.split('-').at(-1);
}