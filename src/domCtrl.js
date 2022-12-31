import {rmvProject,projects,addProject,addTodo,rmvTodo} from ".";
export {nameInp,dueInp,todoNameInp,displayTodos,openProject,}
import doneSvg from "./check-bold.svg" 
import trashSvg from "./trash-can.svg"

//dom elements
let projectFormBtn = document.querySelector(".project-form-btn")
let todoFormBtn = document.querySelector(".todo-form-btn")

let nameInp = document.querySelector("#name")
let dueInp = document.querySelector("#due-date")

let todoNameInp = document.querySelector("#todo-name")


let projectsCont = document.querySelector(".projects-cont")
let projectFormCont = document.querySelector(".project-form-cont")
let TodoFormCont = document.querySelector(".todo-form-cont")



let sections = document.querySelectorAll('.section')
let projectsPlus = document.querySelector(".projects-plus")
// let todosPlus = document.querySelector(".todos-plus")

sections = Array.from(sections)
let todoSection = document.querySelector(".todo-list")

//listeners

projectsPlus.addEventListener("click", function(){
    formControl(projectFormCont)
})

projectFormBtn.addEventListener("click",function(){
    addProject(projectFormCont)
})


// todosPlus.addEventListener("click", function(){
//     formControl(TodoFormCont)
// })

todoFormBtn.addEventListener("click",function(){
    addTodo(openProject,TodoFormCont)
})




// projectFormCont.style.display = "block"




let openProject = 0

let formShown = false
export function displayProjects(){
    projectsCont.textContent = ''
    for(let i in projects){

        let done = new Image()
        let trash = new Image()
        done.src = doneSvg
        trash.src = trashSvg

        let projectDiv = document.createElement("div")
        let iconsDiv = document.createElement("div")

        projectDiv.classList.add("project")
        iconsDiv.classList.add("icons")

        done.classList.add("icon")
        trash.classList.add("icon")
        trash.classList.add("trash")

        iconsDiv.append(done)
        iconsDiv.append(trash)

        if (projects[i].name == ''){
            projects[i].name = "Some Project"
        }

        let projectName = document.createElement("p")
        projectName.classList.add("project-name")
        
        projectName.textContent = `${projects[i].name}`

        projectsCont.append(projectDiv)
        projectDiv.append(projectName)
        projectDiv.append(iconsDiv)
    }


    
    let allTrash = Array.from(document.querySelectorAll(".trash"))
    for(let i = 0; i < allTrash.length; i++){
        allTrash[i].addEventListener("click",function(){
            rmvProject(i)
        })
    }


    let allProject = Array.from(document.querySelectorAll(".project"))
    for(let i = 0; i < allProject.length; i++){
        allProject[i].addEventListener("click",function(){displayTodos(i)})
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

    todosTitle.classList.add("my-todos-title")
    todosPlus.textContent = "+"
    todosPlus.classList.add("plus","todos-plus")



    projectTitle.textContent = projects[i].name
    todoSection.append(todosTitle)
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
        todoItem.textContent = projects[i].todos[t]
        todosUl.append(todoItem)
        
        icons.classList.add("icons")
        done.classList.add("icon")
        trash.classList.add("icon","todo-trash")

        icons.append(done,trash)
        todoItem.prepend(icons)
        
    }

    let allIconTrash = Array.from(document.querySelectorAll(".todo-trash"))
    
    for(let i in allIconTrash){
        allIconTrash[i].addEventListener("click",rmvTodo)
    }



}

