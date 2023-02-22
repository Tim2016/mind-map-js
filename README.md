## MindMap on JS
---
[Show example](https://tim2016.github.io/mind-map-js/)
---
### What the pet can do:
- Create items.
- Drag and drop elements.
- Save and load hierarchy and layout.
- Save and edit entries 

#### START

1. 'box' - element (node)
2. Event handlers for 4 actions (mousemove, mousedown, mouseup, dblclick)
3. Recursive check for the parent class hasParentClass().
- Checking for the presence of the 'box' node in the current element or in the parent node.
- if true - allows to change block parameters

#### RENDER

elements - list of elements

setInObj() - adding the elements and its properties
setCurrentPosition() - set the element position
setCurrentContent() - setting the element content
getElements() - loading elements from the localStorage
showElements() - display elements in the DOM
saveElements() - saving the set of elements in the localStorage

Indexing and inheritance:
```id="element-<parentId>-<childCount>"```

parentId is the parent id:
- can be 0 (current element is root and has no parents)
- can be set from the childCount of the parent

childCount - identifier of the current element:
- depends only on the order in which the elements are created

#### CRUD

createNewElement() - creating an element (box):
- by clicking on the button (creates root elements without a parent) 
- creating a new child element (box) by clicking on any of the elements

createElement() - create and output element in the DOM
