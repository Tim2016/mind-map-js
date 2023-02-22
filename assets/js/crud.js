/*
* Creating an item 
* - by pressing the button
* - by double click
*/
function createNewElement(parentId){
	if (!parentId && parentId != 0) {
		parentId = getCountParent();
	} else {
		console.log('set parentId: '+ parentId);
	}
	let childCount = document.getElementsByClassName('box').length + 1 ;
	setInObj({
		'id': 'element-' + parentId + '-' + childCount,
		'parent': parseInt(parentId),
		'child' : parseInt(childCount)
	});
	createElement(parentId, childCount);
	inputs = document.querySelectorAll('input');
	inputs.forEach(input => {
		input.addEventListener('input', setFiledsData);		
	})
}

/**
 * Create and add an element in the DOM
 */
function createElement(parentId, childCount, posX = '0px', posY = '45px', title = '', description = '') {
	let el = document.createElement("div");
	el.setAttribute('id', 'element-' + parentId + '-'+ childCount);
	el.setAttribute('parent-id', parentId);
	el.style.top = posY;
	el.style.left = posX;
	el.classList.add('box');
	el.innerHTML = `
	<span class="title"><input type="text" name="title" value="${title}" placeholder="title"></span>
	<span class="description"><input type="text" name="description" value="${description}" placeholder="description"></span>`;
	document.getElementById('pad').appendChild(el);
}

/**
 * The input field event handler
 */ 
const setFiledsData = (e) => {
	let inputType = e.target.getAttribute('name');
	setCurrentContent(activeElementId, e.target.value, inputType);
}

/**
 * Returns the number of original parents
 */ 
function getCountParent(){
	let parentList = document.querySelectorAll(`[parent-id]`);
	let list = [];

	parentList.forEach((element) => {
		list.push(element.getAttribute('parent-id'));
	});

	return parseInt((new Set(list)).size);
}