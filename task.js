let input = document.querySelector("input")
    let button=document.querySelector("button")
    let list = document.querySelector("ul");

    button.addEventListener("click",addtodo)
     let checkBox = document.createElement("input");
     checkBox.type = 'checkbox';
     var deleteButton = document.createElement("button");
    
    function addtodo(){
        if (input.value==''){
            alert('you are adding an empty to do')
          
        }
        else{
            add()
            input.value='';}
            
    
  }
  function deleteTodo(event) {
    let parentLi = event.target.parentNode;
    parentLi.remove();
}
    function add(){

        
        list.innerHTML += `<li> <input type="checkbox"> ${input.value} <button class="delete"> delete</button>  </li>`;
         let del = document.querySelectorAll(".delete");
         for (let i = 0; i < del.length; i++) {
           del[i].addEventListener("click", deleteTodo);
             }
        let checkboxes = document.querySelectorAll("input[type='checkbox']");

           for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].addEventListener("click", function() {
                    let toDoItem = this.parentNode;
                    toDoItem.classList.toggle("checked"); });
       }
     input.value="";
}