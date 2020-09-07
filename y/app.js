var list = document.getElementById("todolist")

firebase.database().ref("todos").on('child_added',function(data){
    // create li element
    var li = document.createElement('li');
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText)
    list.appendChild(li)

    // create delete button
    var del = document.createElement("button")
    var delText = document.createTextNode("Delete")
    del.setAttribute("class","bn")
    del.setAttribute("id",data.val().key)
    del.setAttribute("onclick","deleteItem(this)")
    del.appendChild(delText);
    li.appendChild(del)
    // console.log(li)

    // create edit button
    var edt = document.createElement("button")
    var edtText = document.createTextNode("Edit")
    edt.setAttribute("id",data.val().key)
    edt.setAttribute("class","bn")
    edt.setAttribute("onclick","editItem(this)")
    edt.appendChild(edtText);
    li.appendChild(edt)

})


function addtodo(){
    var item = document.getElementById("itemTodo");

    var database = firebase.database().ref("todos");
    var key = database.push().key
    // console.log(key);
    var todo = {
        key:key,
        value:item.value
    }
    database.child(key).set(todo)
    item.value = "";
}

function deleteItem(e){

    firebase.database().ref("todos").child(e.id).remove()
    e.parentNode.remove();
}

function editItem(e){
    
    var next = prompt("Enter new todo",e.parentNode.firstChild.nodeValue)
    var edittodo ={
        key:e.id,
        value:next
    }
    console.log(edittodo)
    firebase.database().ref("todos").child(e.id).set(edittodo);


    // e.parentNode.firstChild.nodeValue = next
}

function allDelete(){
    firebase.database().ref("todos").remove()
    list.innerHTML = ""

}