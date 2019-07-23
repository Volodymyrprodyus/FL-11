let rootNode = document.getElementById('root');
let plusbtn = document.getElementById('plus-button');
let ul = document.querySelector('ul');
let li = document.getElementsByTagName('li');
let input = document.querySelector('input[type = "text"]');
let spans = document.getElementsByTagName('span');
let todos = document.getElementById('todos-item');
let maxListItem = document.getElementById('full-list-item');
let header = document.getElementById('header');
let list = [];
let newList = [];
let input1 = document.getElementById('action-input-text');
input1.addEventListener('change', addList);
input1.addEventListener('input', activateBtn);
let dragging = null;
let maxArrLenght = 10;

function activateBtn () {
    plusbtn.disabled = input1.value ? false :'disabled';
} 
activateBtn();

function disActivateBtn(){
    plusbtn.disabled = true;
} 
disActivateBtn();

function addList (event) {
    if (list.length <= maxArrLenght) {
    list.push({name: event.target.value, id:uniqueId(), status:false, check:false});
    this.value = '';
    maxListItem.setAttribute('class', 'no-display');
    renderList();
    } 
    if (list.length === maxArrLenght) {
        maxListItem.removeAttribute('class', 'no-display');
    } 
}

function renderList() {
    ul.innerHTML = '';
    newList = list.map(render);
    function render(el) {
        let element = document.createElement('li');
        element.setAttribute('id', el.id);
        element.setAttribute('class', 'li-item');
        element.setAttribute('draggable', 'true');
        let input2 = document.createElement('input');
        let label2 = document.createElement('label');
        let span = document.createElement('span');
        let daleteBtn = document.createElement('button');
        daleteBtn.setAttribute('class', 'deletebtn');
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'editBtn');
        let saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'saveBtn');
        input2.setAttribute('type', 'checkbox');
        input2.setAttribute('class', 'input2');
        input2.setAttribute('name', 'input2');
        label2.setAttribute('for','input2');
        label2.setAttribute('class','labelinput2');
        label2.innerHTML = el.name;
        let inputRename = document.createElement('input');
        let labelRename = document.createElement('label');
        inputRename.setAttribute('type', 'text');
        inputRename.setAttribute('id', 'inputRename');
        inputRename.setAttribute('placeholder', 'New action name');
        labelRename.setAttribute('for','inputRename');
        input2.addEventListener('click', readOnlyCheckBox);
        daleteBtn.addEventListener('click', deleteFunc);
        daleteBtn.innerHTML = '<i class="material-icons">delete</i>';
        editBtn.addEventListener('click', editFunc);
        editBtn.innerHTML = '<i class="material-icons">edit</i>';
        saveBtn.innerHTML = '<i class="material-icons">save</i>';
        inputRename.addEventListener('change', renameFunc);
        element.append(span);
        element.append(input2);
        element.append(label2);
        element.append(editBtn);
        element.append(daleteBtn);
        if (el.status === true) {
            input2.setAttribute('class', 'no-display');
            label2.setAttribute('class', 'no-display');
            daleteBtn.setAttribute('class', 'no-display');
            editBtn.setAttribute('class', 'no-display');
            element.append(inputRename);
            element.append(labelRename);
            element.append(saveBtn);
        }
        if (el.check === true) {
            input2.setAttribute('checked', 'checked');
        }
        ul.append(element);
        return element;
    }
}

function renameFunc (event) {
    console.log(this.value, event.target.value);
    let listRenameId = this.parentNode.getAttribute('id');
    console.log(listRenameId);
    let value = this.value;
    list.forEach(function(el) {
        if (el.id === +listRenameId) {
           el.name = value;
           el.status = false;
        }
        return el; 
    }); 
    this.value = '';   
    renderList();
}

function editFunc () {
    let listEditMode = this.parentNode.getAttribute('id');
    list.forEach(function(el) {
        if (el.id === +listEditMode) {
           el.status = true;
        }
        return el; 
    });  
    renderList();
}


function deleteFunc () {
    let itemId = this.parentNode.getAttribute('id');
    list = list.filter(function(el) {
      return el.id !== +itemId;  
    });
    if (list.length <= maxArrLenght) {
        maxListItem.setAttribute('class', 'no-display');
    }
    renderList();
}

function readOnlyCheckBox() {
    let listcheckMode = this.parentNode.getAttribute('id');
    list.forEach(function(el) {
        if (el.id === +listcheckMode) {
            el.check = true;
        }
        return el; 
    });
    renderList();
}

function uniqueId() {
    return Date.now()
}

//-	Drag & drop action
document.addEventListener('dragstart', function(event) {
    let target = getLI( event.target );
    dragging = target;
    event.dataTransfer.setData('text/plain', null);
    event.dataTransfer.setDragImage(self.dragging,0,0);
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
    let target = getLI( event.target );
    let bounding = target.getBoundingClientRect();
    let boundHeight = 2;
    let offset = bounding.y + bounding.height/boundHeight;
    if (event.clientY - offset > 0) {
    target.style['border-bottom'] = 'solid 4px #F7FBFF';
    target.style['border-top'] = '';
    } else {
    target.style['border-top'] = 'solid 4px #F7FBFF';
    target.style['border-bottom'] = '';
    }
});

document.addEventListener('dragleave', function(event) {
    let target = getLI( event.target );
    target.style['border-bottom'] = '';
    target.style['border-top'] = '';
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    let target = getLI( event.target );
    if ( target.style['border-bottom'] !== '' ) {
        target.style['border-bottom'] = '';
        target.parentNode.insertBefore(dragging, event.target.nextSibling);
    } else {
        target.style['border-top'] = '';
        target.parentNode.insertBefore(dragging, event.target);
    }
});

function getLI( target ) {
    while ( target.nodeName.toLowerCase() !== 'li' && target.nodeName.toLowerCase() !== 'body' ) {
        target = target.parentNode;
    }
    if ( target.nodeName.toLowerCase() === 'body' ) {
        return false;
    } else {
        return target;
    }
}

