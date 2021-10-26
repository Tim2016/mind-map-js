console.log('render');
console.log('получить данные по api');
console.log('получить набор классов с параметрами');
// позиция 
// id
// x,y
// background
// title
// description


// contain all elemetns, parent and child
let elements = {
	list: [],
	countBranch : 0
}

console.log('pad start');


function setInObj(elementAttr){
	elements.list.push(elementAttr);
	elements.countBranch++;
	console.log(elements);
}

// устанавливаем текущую позицию после отпускания кнопки
// поиск по массиву объектов
function setCurrentPosition(e){
	// console.log(e);
	elements.list.find( (x,i) => { 
		if(x.id === e.getAttribute('id')){
			x.x = e.style.left
			x.y =e.style.top
		}
	});
}

