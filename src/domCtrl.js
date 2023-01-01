import {currentProjectsList,rmvProject,projects,addProject,addTodo,sortedProjects} from ".";
export {nameInp,dueInp,todoNameInp,displayTodos,openProject,PrInput}
import doneSvg from "./check-bold.svg" 
import trashSvg from "./trash-can.svg"

//dom elements
let projectFormBtn = document.querySelector(".project-form-btn")
let todoFormBtn = document.querySelector(".todo-form-btn")
let nameInp = document.querySelector("#name")
let dueInp = document.querySelector("#due-date")
let todoNameInp = document.querySelector("#todo-name")
let PrInput = document.querySelector("#priority")
let projectsCont = document.querySelector(".projects-cont")
let projectFormCont = document.querySelector(".project-form-cont")
let TodoFormCont = document.querySelector(".todo-form-cont")
let sections = document.querySelectorAll('.section')
sections = Array.from(sections)
let projectsPlus = document.querySelector(".projects-plus")
let todoSection = document.querySelector(".todo-list")

//listeners
projectsPlus.addEventListener("click", function(){
    formControl(projectFormCont)
})

projectFormBtn.addEventListener("click",function(){
    addProject(projectFormCont)
})

todoFormBtn.addEventListener("click",function(){
    addTodo(openProject,TodoFormCont)
})

let openProject = 0
let formShown = false
export function displayProjects(projectsList){
    if(projectsList != projects){
        projectsList = sortedProjects()
    }
    
    projectsCont.textContent = ''
    for(let i in projectsList){

        let done = new Image()
        let trash = new Image()
        done.src = doneSvg
        trash.src = trashSvg

        let projectDiv = document.createElement("div")
        let iconsDiv = document.createElement("div")

        projectDiv.classList.add("project")
        iconsDiv.classList.add("icons")

        done.classList.add("icon","done")
        trash.classList.add("icon","trash")

        iconsDiv.append(done)
        iconsDiv.append(trash)

        if (projectsList[i].name == ''){
            projectsList[i].name = "Some Project"
        }

        let projectName = document.createElement("p")
        let priorityColor = document.createElement("span")

        priorityColor.classList.add("priority-color")
        projectName.classList.add("project-name")
        priorityColor.textContent = "|"
        projectName.textContent = `${projects[i].name}`
        projectName.prepend(priorityColor)
        projectsCont.append(projectDiv)
        projectDiv.append(projectName)
        projectDiv.append(iconsDiv)

        if(projectsList[i].priority == 1){
            priorityColor.style.color = 'grey' ;
        }else if(projectsList[i].priority == 2){
            priorityColor.style.color = 'white' ;

        }else{
            priorityColor.style.color = 'rgb(241, 76, 76)'  

        }
    }

    let allTrash = Array.from(document.querySelectorAll(".trash"))
    for(let i = 0; i < allTrash.length; i++){
        allTrash[i].addEventListener("click",function(){
            rmvProject(i)
        })
    }

    let allProject = Array.from(document.querySelectorAll(".project"))
    let allDone = Array.from(document.querySelectorAll(".done"))
    for(let i = 0; i < allProject.length; i++){
        allProject[i].addEventListener("click",function(){displayTodos(i)})

        allDone[i].addEventListener("click",function(){
            if(!projectsList[i].done){
                projectsList[i].done = true

            }else{
                projectsList[i].done = false
            }
            displayProjects(currentProjectsList)
        })

        if(projectsList[i].done == true){
            allProject[i].style.textDecoration = "line-through"
        }
    }
}

export function formControl(form){
    if(formShown){
        form.style.display = "none"
        formShown = false
        blurOnForm()
    }else{
        form.style.display = "block"
        formShown = true
        blurOnForm()
    }
}

function blurOnForm(){
    if (formShown){
        for(let i in sections){
            sections[i].style.filter = "blur(2px)"
        }
    }else{
        for(let i in sections){
            sections[i].style.filter = "blur(0px)"
        }
    }
   
}


function displayTodos(i){
    openProject = i
    todoSection.textContent = ''
    let todosTitle = document.createElement("div")
    let projectTitle = document.createElement("h1")
    let todosPlus = document.createElement("span")
    let duedateText = document.createElement("p")

    duedateText.classList.add("due-date")
    todosTitle.classList.add("my-todos-title")
    todosPlus.textContent = "+"
    todosPlus.classList.add("plus","todos-plus")
    duedateText.textContent = `due-date: ${projects[i].dueDate} `
    projectTitle.textContent = projects[i].name
    todoSection.append(todosTitle)
    todosTitle.append(duedateText)
    todosTitle.append(projectTitle)
    todosTitle.append(todosPlus)
    
    todosPlus.addEventListener("click", function(){
            formControl(TodoFormCont)
    })

    let todosUl = document.createElement("ul")
    todosUl.classList.add("todos-ul")
    todoSection.append(todosUl)

    for(let t in projects[i].todos){
        let todoItem = document.createElement("li")
        let icons = document.createElement("div")
        let done = new Image()
        let trash = new Image()
        done.src = doneSvg
        trash.src = trashSvg
        
        todoItem.classList.add("todo-item")
        todoItem.textContent = projects[i].todos[t].name
        todosUl.append(todoItem)
        icons.classList.add("icons")
        done.classList.add("icon","todo-done")
        trash.classList.add("icon","todo-trash")
        icons.append(done,trash)
        todoItem.prepend(icons)

    }
    let allTodos = Array.from(document.querySelectorAll(".todo-item"))
    for(let i in allTodos){
        if(projects[openProject].todos[i].done){
            allTodos[i].style.textDecoration = "line-through"
        }else{
            allTodos[i].style.textDecoration = "auto";
        }
    }
    let allIconTrash = Array.from(document.querySelectorAll(".todo-trash"))
    let allIconDone = Array.from(document.querySelectorAll(".todo-done"))

    for(let i in allIconTrash){
        allIconTrash[i].addEventListener("click",function(){
            projects[openProject].todos.splice(i,1)
            displayTodos(openProject)
        })
    }

    for(let i in allIconDone){
        allIconDone[i].addEventListener("click",function(){
            if(!projects[openProject].todos[i].done){
                projects[openProject].todos[i].done = true
                displayTodos(openProject)
            }else{
                projects[openProject].todos[i].done = false
                displayTodos(openProject)

            }
        })
    }


}

