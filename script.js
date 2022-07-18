const toDoList= function(){

    let toDo= document.createElement("div");
    toDo.classList.add("to-do");

    let mainContainer= document.createElement("div");
    mainContainer.classList.add("main-container");
    
    let header = document.createElement("header");

    let h2 = document.createElement("h2");
    h2.innerHTML="to DoList";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "input");
    input.setAttribute("placeholder", " Type your text...");
    input.classList.add("create-task");

    let tasks = document.createElement("ul");
    
    document.body.prepend(toDo);
    toDo.append(mainContainer);
    mainContainer.append(header, input, tasks);
    header.append(h2);

    function add(event){
        if(event.code!= "Enter"){
            return;
        }
        
        let task = document.createElement("li");
        tasks.append(task);

        let taggleWrapper= document.createElement("div");
        taggleWrapper.classList.add("taggle_wrapper");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "checkbox");
        checkbox.setAttribute("id", "taggle1");

        let btn_toggle =document.createElement("button");
        btn_toggle.classList.add("btn-toggle");

        let label = document.createElement("label");
        label.setAttribute("for", checkbox);

        let text = document.createElement("span");
        text.classList.add("text");

        task.append(taggleWrapper, text);
        taggleWrapper.append(checkbox)//, btn_toggle//);
        //btn_toggle.append(label);

        text.innerHTML=event.target.value;
        input.value ="";

        

        function btnDel (){
            let btnDel= document.createElement("button");
            btnDel.classList.add("del-button");
            btnDel.innerHTML= "Delete All";
            tasks.after(btnDel);
            btnDel.addEventListener("click", function(){
                tasks.innerHTML="";
                btnDel.remove();
            });
        }
        if(tasks.children.length == 1 ) btnDel();

        function edit(){
            text.innerHTML= prompt("Откорректруйте задачу");
        }
        text.addEventListener("dblclick", edit);

        function done(event){
            event.stopPropagation();

        if(event.target.checked){
            text.classList.toggle("done");
        }

        }
        checkbox.addEventListener("click", done)
    }
    input.addEventListener("keydown", add);

}
toDoList()