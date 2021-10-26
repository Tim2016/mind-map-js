function createNewElement(parentId){
	let newElement = document.createElement("div");
	
	// parent - составляем в строку идентификатор предка и наследника

	if (!parentId) {
		console.log('newElement');
		parentId = getCountParent();

	} else {console.log('set parentId: '+ parentId);}

	let childCount = document.getElementsByClassName('box').length + 1 ;

	setInObj(
		{
			'id': 'element-' + parentId + '-' + childCount,
			'parent': parseInt(parentId),
			'child' : parseInt(childCount)
		}
	);

	newElement.setAttribute('id', 'element-' + parentId + '-'+ childCount);
	newElement.setAttribute('parent-id', parentId);
	newElement.classList.add('box');
	newElement.innerHTML = `
		<span class="title"><input type="text" name="title"></span>
		<span class="description"><input type="text" name="description"></span>`;

	document.getElementById('pad').appendChild(newElement);

}






// let childCount = getElementByParent(parentId).length + 1 ;
function getElementByParent(parentId){
	return document.querySelectorAll(`[parent-id = "${parentId}"]`);
}

// возвращяет кол-во исходных родителей
function getCountParent(){
	let parentList = document.querySelectorAll(`[parent-id]`);

	let list = [];

	parentList.forEach((element) => {
		list.push(element.getAttribute('parent-id'));
	});

	console.log(parseInt((new Set(list)).size));

	return parseInt((new Set(list)).size);
}

function updateElement(){
	
}