var list = document.getElementById("todolist")

function addtodo(){
    var item = document.getElementById("itemTodo");

    // creat li element
    var li = document.createElement('li');
    var liText = document.createTextNode(item.value);
    li.appendChild(liText)
    list.appendChild(li)

    // creat delete button
    var del = document.createElement("button")
    var delText = document.createTextNode("Delete")
    del.setAttribute("class","bn")
    del.setAttribute("onclick","deleteItem(this)")
    del.appendChild(delText);
    li.appendChild(del)
    console.log(li)

    // creat edit button
    var edt = document.createElement("button")
    var edtText = document.createTextNode("Edit")
    edt.setAttribute("class","bn")
    edt.setAttribute("onclick","editItem(this)")
    edt.appendChild(edtText);
    li.appendChild(edt)



    item.value = "";
}

function deleteItem(e){

    e.parentNode.remove();
}

function editItem(e){
    
    var next = prompt("Enter new todo",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = next
}
function allDelete(){
    list.innerHTML = ""

}